import React from "react";
import styled from "styled-components";
import Theme from "../components/themes/defaultTheme";

import { Header } from "../components/Header";
import Calendar from "../modules/calandar/Calendar";

const Wrapper = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.black};
`;
const PageTitle = styled.h1`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const events = [
  { id: "1", title: "Movie", date: "2023-03-03" },
  { id: "2", title: "Concert", date: "2023-03-22" },
  { id: "3", title: "Art", date: "2023-03-31" },
];
export const CalendarScreen = () => {
  return (
    <Theme>
      <Wrapper>
        <Header />
        <PageTitle>Agenda</PageTitle>
        <Calendar events={events} />
      </Wrapper>
    </Theme>
  );
};

export default CalendarScreen;
