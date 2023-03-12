// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Users_Req_Method_Type } from "@/util/types";
import type { NextApiRequest, NextApiResponse } from "next";

import {
  registerUser as CreateUser,
  getAllUsers,
  getUser,
} from "../../lib/mongodb/users";
type UsersDataTypes = {
  email: string;
  name: string;
  birthYear: number;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case Users_Req_Method_Type.GET:
        {
          // COMMENT => Give the db collection if the id provided on the url as a query
          // COMMENT => here is how query look like: api/users?id=1
          if (req.query.id) {
            const singleUser = await getUser(req.query.id);
            return res.status(200).send({
              success: true,
              message: `Find single user by an ${req.query.id} id`,
              data: singleUser,
            });
          }
        }
        const allUsers = await getAllUsers();
        return res.status(200).json(allUsers);
      case Users_Req_Method_Type.POST: {
        const { email, name, birthYear }: UsersDataTypes = req.body;
        const registerUser = await CreateUser({ email, name, birthYear });
        if (registerUser) {
          return res.status(201).json({
            success: true,
            message: `user create successful`,
            data: registerUser,
          });
        }
        return res.status(500).json({
          success: false,
          message: `Problem with user creation or internal server error`,
          data: undefined,
        });
      }
      default:
        break;
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message });
  }
};
export default handler;
