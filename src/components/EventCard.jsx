import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="border rounded-md p-4 shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
      <p className="text-gray-600 mb-2">Date: {event.date}</p>
      <p className="text-gray-600 mb-2">Location: {event.location}</p>
      <Link
        to={`/register/${event.id}`}
        className="text-blue-500 hover:underline"
      >
        Register
      </Link>
    </div>
  );
}

export default EventCard;
