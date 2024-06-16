import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
// //   创建一条记录
//   const user = await prisma.user.create({
//     data: {
//       name: 'Kerry',
//       email: 'kerry@prisma.io',
//     },
//   })
//   console.log(user)

// //   查询全部
// const users = await prisma.user.findMany()
// console.log(users)

// // 创建关联关系记录
//   const user = await prisma.user.create({
//     data: {
//       name: 'Bob',
//       email: 'bob@prisma.io',
//       posts: {
//         create: [
//           {
//             title: 'Hello World',
//             published: true
//           },
//           {
//             title: 'My second post',
//             content: 'This is still a draft'
//           }
//         ],
//       },
//     },
//   })
//   console.log(user)

const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })


  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })