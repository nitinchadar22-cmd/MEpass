"use client";

import { useState } from "react";
import { TicketData } from "@/lib/ticket-data";
import EventPoster from "./EventPoster";
import EventDetails from "./EventDetails";
import QRSection from "./QRSection";
import LoginModal from "./LoginModal";

interface TicketCardProps {
  ticket: TicketData;
}

export default function TicketCard({ ticket }: TicketCardProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <div className="w-full max-w-[400px] bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center p-4 relative z-10">
        <h2 className="text-gray-800 font-medium text-lg mt-2 mb-4">Hey there!</h2>
        
        <div className="w-full flex flex-col gap-4 relative">
          <EventPoster src={ticket.poster} alt={ticket.eventName} />
          
          <div className="px-2 pb-2">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">{ticket.eventName}</h1>
            <EventDetails ticket={ticket} />
          </div>
        </div>

        <div className="w-full mt-2">
          <QRSection 
            qrCodeUrl={ticket.qrCode} 
            onShare={() => setIsLoginOpen(true)} 
          />
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </>
  );
}
