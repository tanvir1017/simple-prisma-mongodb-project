import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string;
  greeting: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).json({
    greeting: "hello jhone",
  });
}
