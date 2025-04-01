import { useEffect, useState } from "react";
import axios from "axios";

const CalEventTypes = () => {
  const [eventTypes, setEventTypes] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventTypes = async () => {
      try {
        const response = await axios.get("https://api.cal.com/v1/event-types", {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CAL_API_KEY}`, // Use your Cal.com API key
          },
        });
        setEventTypes(response.data);
      } catch (err) {
        console.error("Error fetching event types:", err);
        setError("Failed to fetch event types. Please try again later.");
      }
    };

    fetchEventTypes();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Event Types</h1>
      <ul>
        {eventTypes.map((eventType: any) => (
          <li key={eventType.id} className="mb-2">
            <strong>{eventType.title}</strong> - {eventType.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalEventTypes;