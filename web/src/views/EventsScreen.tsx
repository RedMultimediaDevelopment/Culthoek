import React from "react";
import styled from "styled-components";
import Theme from "../components/themes/defaultTheme";

import { Header } from "../components/Header";
import { EventList } from "../modules/events/views/EventList";

const Wrapper = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.black};
`;
const PageTitle = styled.h1`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

//temp
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
  {
    id: 3,
    date: "May 15, 2023",
    time: "7:00 PM",
    image:
      "https://www.cultuurhoek.nl/wp-content/uploads/2021/04/PSX_20170208_210527_sqr_Ton.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 49.99,
  },
  {
    id: 4,
    date: "May 15, 2023",
    time: "7:00 PM",
    image:
      "https://www.cultuurhoek.nl/wp-content/uploads/2021/04/PSX_20170208_210527_sqr_Ton.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 49.99,
  },
  {
    id: 5,
    date: "May 15, 2023",
    time: "7:00 PM",
    image:
      "https://www.cultuurhoek.nl/wp-content/uploads/2021/04/PSX_20170208_210527_sqr_Ton.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 49.99,
  },
  {
    id: 6,
    date: "May 15, 2023",
    time: "7:00 PM",
    image:
      "https://www.cultuurhoek.nl/wp-content/uploads/2021/04/PSX_20170208_210527_sqr_Ton.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 49.99,
  },
];

export const EventsScreen = () => {
  return (
    <Theme>
      <Wrapper>
        <Header />
        <PageTitle>Evenementen</PageTitle>
        <EventList events={events} />
      </Wrapper>
    </Theme>
  );
};

export default EventsScreen;
