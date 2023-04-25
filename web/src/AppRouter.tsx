import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import EventsScreen from "./views/EventsScreen";
import CalendarScreen from "./views/CalendarScreen";

export const AppRouter = () => {
  return (
    <React.Fragment>
      <Routes>
          <Route path="/events" element={<EventsScreen />} />
          <Route path="/calendar" element={<CalendarScreen />} />
          <Route path="*" element={<Landing />} />

      </Routes>
    </React.Fragment>
  );
};
