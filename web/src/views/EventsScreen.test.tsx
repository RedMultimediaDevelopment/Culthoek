import React from "react";
import { render, screen } from "@testing-library/react";
import EventsScreen from "./EventsScreen";
import Theme from "../components/themes/defaultTheme";
import { BrowserRouter } from "react-router-dom";

describe("EventsScreen component", () => {
  const events = [
    {
      id: 1,
      date: "April 30, 2023",
      time: "2:00 PM",
      image:
        "https://storage.pubble.nl/96897487/content/2022/8/37b1a66a-31bd-48cd-af87-f0664761603e_thumb1440.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 29.99,
    },
    {
      id: 2,
      date: "May 15, 2023",
      time: "7:00 PM",
      image:
        "https://www.cultuurhoek.nl/wp-content/uploads/2021/04/PSX_20170208_210527_sqr_Ton.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 49.99,
    },
  ];

  it("renders the header and event list", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Theme>
          <EventsScreen />
        </Theme>
      </BrowserRouter>
    );
    const header = getByText("OVER ONS");
    const pageTitle = getByText("Evenementen");

    expect(header).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
});
