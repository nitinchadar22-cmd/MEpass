export interface TicketData {
  id: string;
  eventName: string;
  date: string;
  time: string;
  ticketType: string;
  quantity: number;
  venueName: string;
  location: string;
  poster: string;
  qrCode: string;
  status: string;
}

export const TICKETS: Record<string, TicketData> = {
  "IzI2awn1f": {
    id: "IzI2awn1f",
    eventName: "The Idol Showdown",
    date: "Sun, 4 October",
    time: "7:00 PM",
    ticketType: "General Standing Pass",
    quantity: 4,
    venueName: "The Idol Showdown",
    location: "Gyan Ganga Institute of Technology & Sciences, Jabalpur",
    poster: "/images/poster.webp",
    qrCode: "/qr/qr_code.png",
    status: "valid"
  }
};

export function getTicketData(id: string): TicketData | null {
  return TICKETS[id] || null;
}
