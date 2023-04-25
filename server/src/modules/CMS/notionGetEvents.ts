import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { EventTicket } from "../../../event-client";

const notion = new Client({
  auth: "secret_CuLakjJqDp4KzC0a4031VfR5zFW85prQXvGQ5oRYctM",
});

const databaseId = "7c28d387879445709eeb07060733f949";

const mapToString = (
  pageObjectType: PageObjectResponse["properties"]["any"]
) => {
  if (pageObjectType.type === "rich_text") {
    return pageObjectType.rich_text[0].plain_text;
  } else if (pageObjectType.type === "title") {
    return pageObjectType.title[0]?.plain_text ?? "";
  } else if (pageObjectType.type === "number") {
    return `${pageObjectType.number}`;
  }
  throw new Error("Unknown type: " + pageObjectType.type);
};

const notionGetEvents = async (): Promise<EventTicket[]> => {
  try {
    // Get the Notion stock
    const notionTickets = await notion.databases.query({
      database_id: databaseId,
      page_size: 500,
    });

    const event: any[] = (notionTickets.results as PageObjectResponse[])
      .filter((result): result is PageObjectResponse => "properties" in result)
      .map(
        ({
          properties: { ID, Name, Price, Description, Time, Date, Image },
        }) => ({
          id: mapToString(ID),
          name: JSON.stringify(mapToString(Name)).replace(/"/g, ""),
          price: parseFloat(mapToString(Price)),
          time: mapToString(Time),
          date: mapToString(Date),
          image: mapToString(Image),
          description: mapToString(Description),
        })
      );
    console.log(event+"kaas");
    return event;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export { notionGetEvents };
