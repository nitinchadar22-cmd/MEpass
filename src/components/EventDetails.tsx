import { TicketData } from "@/lib/ticket-data";
import { Calendar, Ticket, MapPin, ExternalLink } from "lucide-react";

interface EventDetailsProps {
  ticket: TicketData;
}

export default function EventDetails({ ticket }: EventDetailsProps) {
  return (
    <div className="bg-[#f2f2f2] rounded-2xl flex flex-col overflow-hidden text-[#1a1a1a]">
      {/* Date & Time */}
      <div className="flex items-start gap-4 p-4 border-b border-gray-200">
        <Calendar className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-700" />
        <div className="flex flex-col">
          <span className="font-medium text-[15px]">{ticket.date}</span>
          <span className="text-xs text-gray-500 mt-0.5">{ticket.time}</span>
        </div>
      </div>

      {/* Ticket Type & Quantity */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <Ticket className="w-5 h-5 flex-shrink-0 text-gray-700" />
          <span className="font-medium text-[15px]">{ticket.ticketType}</span>
        </div>
        <div className="bg-[#fde28e] text-black font-semibold px-2 py-0.5 rounded flex items-baseline gap-[2px]">
          <span className="text-[14px]">{ticket.quantity}</span>
          <span className="text-[10px]">Qty</span>
        </div>
      </div>

      {/* Venue */}
      <div className="flex items-start justify-between p-4">
        <div className="flex items-start gap-4 pr-4">
          <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-700" />
          <div className="flex flex-col">
            <span className="font-medium text-[15px]">{ticket.venueName}</span>
            <span className="text-xs text-gray-500 leading-snug mt-0.5 line-clamp-2">{ticket.location}</span>
          </div>
        </div>
        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ticket.venueName + " " + ticket.location)}`} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-gray-500 hover:text-gray-900 p-1 transition-colors">
          <ExternalLink className="w-[18px] h-[18px]" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}
