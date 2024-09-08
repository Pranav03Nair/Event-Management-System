import React from "react";
import EventCard from "../components/EventCard";

const mockEvents = [
  { id: 1, title: "Event 1", date: "2024-09-20", location: "Location 1" },
  { id: 2, title: "Event 2", date: "2024-10-05", location: "Location 2" },
  { id: 3, title: "Event 3", date: "2024-11-15", location: "Location 3" },
];

function Event() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Event;
