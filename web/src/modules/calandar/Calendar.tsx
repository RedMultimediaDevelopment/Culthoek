import React from "react";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  margin 0 auto;
  max-width: 40%;
`;

const CalendarDay = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

const CalendarDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 20px;
  height: 100px;
  width: 100px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }

  .date-title {
    font-size: 12px;
    text-align: center;
    padding: 5px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .event-title {
    font-size: 8px;
    text-align: center;
    padding: 5px;
    color: #777;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

interface CalendarProps {
  events: Array<{ id: string; title: string; date: string }>;
}

export const Calendar = ({ events }: CalendarProps) => {
  // assuming events are sorted by date in ascending order
  const startDate = new Date(events[0].date);
  const endDate = new Date(events[events.length - 1].date);
  const monthLength = endDate.getDate();
  const firstDayOfMonth = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    1
  ).getDay();

  const calendarDays = [];
  for (let i = 1; i <= monthLength; i++) {
    calendarDays.push({ date: i });
  }

  return (
    <CalendarWrapper>
      <CalendarDay>Sun</CalendarDay>
      <CalendarDay>Mon</CalendarDay>
      <CalendarDay>Tue</CalendarDay>
      <CalendarDay>Wed</CalendarDay>
      <CalendarDay>Thu</CalendarDay>
      <CalendarDay>Fri</CalendarDay>
      <CalendarDay>Sat</CalendarDay>
      {Array.from({ length: firstDayOfMonth }, (_, i) => (
        <div key={`empty-${i}`} />
      ))}
      {calendarDays.map((day, i) => {
        const date = new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          i + 2
        );
        const eventsOnDate = events.filter(
          (event) => event.date === date.toISOString().slice(0, 10)
        );
        return (
          <CalendarDate key={`date-${i}`}>
            {day.date}
            {eventsOnDate.length > 0 && (
              <div>
                {eventsOnDate.map((event) => (
                  <div key={event.id}>{event.title}</div>
                ))}
              </div>
            )}
          </CalendarDate>
        );
      })}
    </CalendarWrapper>
  );
};

export default Calendar;
