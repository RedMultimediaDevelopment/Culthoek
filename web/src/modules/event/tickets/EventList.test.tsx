import React from "react";
import { render, screen } from "@testing-library/react";
import EventList from "./EventList";

describe("EventList component", () => {
  const events = [
    {
      id: 1,
      date: "2023-05-01",
      time: "10:00",
      image: "https://example.com/event1.jpg",
      description: "Example event 1",
      price: 10.0,
    },
    {
      id: 2,
      date: "2023-05-02",
      time: "14:00",
      image: "https://example.com/event2.jpg",
      description: "Example event 2",
      price: 20.0,
    },
  ];

  it("renders the correct number of events", () => {
    render(<EventList events={events} />);
    const eventListItems = screen.getAllByTestId("event-list-item");
    expect(eventListItems).toHaveLength(events.length);
  });

  it("displays the correct event information", () => {
    render(<EventList events={events} />);
    const eventListItems = screen.getAllByTestId("event-list-item");
    eventListItems.forEach((eventListItem, i) => {
      const { date, time, image, description, price } = events[i];
      const eventImage = eventListItem.querySelector("img");
      const eventDate = eventListItem.querySelector("[data-testid=event-date]");
      const eventTime = eventListItem.querySelector("[data-testid=event-time]");
      const eventDescription = eventListItem.querySelector(
        "[data-testid=event-description]"
      );
      const eventPrice = eventListItem.querySelector(
        "[data-testid=event-price]"
      );
      const buyTicketButton = eventListItem.querySelector(
        "[data-testid=buy-ticket-button]"
      );

      expect(eventImage).toHaveAttribute("src", image);
      expect(eventImage).toHaveAttribute("alt", description);
      expect(eventDate).toHaveTextContent(date);
      expect(eventTime).toHaveTextContent(time);
      expect(eventDescription).toHaveTextContent(description);
      expect(eventPrice).toHaveTextContent(`€${price}`);
      expect(buyTicketButton).toHaveTextContent("Ticket Kopen");
    });
  });
});
