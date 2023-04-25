import React from "react";
import styled from "styled-components";

const EventListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const EventListItem = styled.div`
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 20px;
  width: 300px;
`;

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

const EventInfo = styled.div`
  padding: 20px;
`;

const EventDate = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #888;
`;

const EventTime = styled.h3`
  margin: 10px 0;
  font-size: 24px;
  color: #333;
`;

const EventDescription = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #555;
`;

const EventPrice = styled.p`
  margin: 10px 0;
  font-size: 18px;
  color: #333;
`;

const BuyTicketButton = styled.button`
  background-color: #eb684b;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;

interface Event {
  id: number;
  date: string;
  time: string;
  image: string;
  description: string;
  price: number;
}

interface Props {
  events: Event[];
}

export const EventList: React.FC<Props> = ({ events }) => {
  return (
    <EventListContainer>
      {events.map((event) => (
        <EventListItem key={event.id} data-testid="event-list-item">
          <EventImage src={event.image} alt={event.description} />
          <EventInfo>
            <EventDate data-testid="event-date">{event.date}</EventDate>
            <EventTime data-testid="event-time">{event.time}</EventTime>
            <EventDescription data-testid="event-description">{event.description}</EventDescription>
            <EventPrice data-testid="event-price">€{event.price}</EventPrice>
            <BuyTicketButton data-testid="buy-ticket-button">Ticket Kopen</BuyTicketButton>
          </EventInfo>
        </EventListItem>
      ))}
    </EventListContainer>
  );
};

export default EventList;
