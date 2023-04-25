// import { Client } from "@notionhq/client";

// const notion = new Client({
//   //TODO: key
//   auth: process.env.NOTION_KEY,
// });
// //TODO: db
// const databaseId = "todo";

// const notionSoldTickets = async ({ event, order }) => {
//   let paymentIdContent = event.data?.object.id || "null";
//   let nameContent = event.data?.object.shipping.name || "null";
//   let emailContent = event.data?.object.receipt_email || "null";
//   let eventContent = !!order ? JSON.stringify(order) : event.description;
//   let addressContent = event.data
//     ? JSON.stringify(event.data.object.shipping.address)
//     : "null";
//   let dateContent = event.data
//     ? new Date(event.data.object.created * 1000).toDateString()
//     : "null";

//   try {
//     const response = await notion.pages.create({
//       parent: { database_id: databaseId },
//       properties: {
//         PaymentId: {
//           title: [
//             {
//               text: {
//                 content: paymentIdContent,
//               },
//             },
//           ],
//         },
//         Name: {
//           rich_text: [
//             {
//               text: {
//                 content: nameContent,
//               },
//             },
//           ],
//         },
//         Email: {
//           rich_text: [
//             {
//               text: {
//                 content: emailContent,
//               },
//             },
//           ],
//         },
//         Order: {
//           rich_text: [
//             {
//               text: {
//                 content: eventContent,
//               },
//             },
//           ],
//         },
//         Address: {
//           rich_text: [
//             {
//               text: {
//                 content: addressContent,
//               },
//             },
//           ],
//         },
//         Date: {
//           rich_text: [
//             {
//               text: {
//                 content: dateContent,
//               },
//             },
//           ],
//         },
//       },
//     });
//   } catch (err) {
//     throw new Error("Error creating Notion page");
//   }
// };

// export default { notionSoldTickets };
