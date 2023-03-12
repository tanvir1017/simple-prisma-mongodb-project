# This is a simple NEXT.js project

> This is a simple NEXT.js project with typescript also the Prisma for ORM support

## So, here in this section we will discuss how our project were setup 🤷?

1.  First we created a NEXT.js app by putting the command `npx create-next-app@latest --ts` on the terminal

        Here we put a template at the end of the command. By this template we are telling the node package that install latest NEXT.js app with typescript support

2.  For CSS framework we install the most usages utility based framework called `tailwind -css`
3.  After then we initialize the prisma `ORM`
    - So how to initialize the prisma in next app 🤷‍♂️? Let's see:
    1. Run the command `npm install prisma --save-d` **_Or_** `yarn add prisma --save-d` . We are install prisma as the **_dev-dependency_**.
    2. Second, we initialize prisma by putting this command on the terminal `npx prisma init `
       - after initializing the prisma we will get a folder called prisma with schema.prisma file.
       - 💀 For more information go ahead to the Medium blogs and [NEXT+Prisma+Mongodb]('https://medium.com/itnext/using-prisma-orm-with-mongodb-in-next-js-e42b1f7543e6', "Mongodb with Next.js using Prisma ORM")
