import { getTicketData } from "@/lib/ticket-data";
import { notFound } from "next/navigation";
import TicketCard from "@/components/TicketCard";

interface PageProps {
  params: Promise<{ ticketId: string }>;
}

export default async function TicketPage({ params }: PageProps) {
  const { ticketId } = await params;
  const ticket = getTicketData(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center blur-[100px] scale-110 opacity-60"
        style={{ backgroundImage: `url(${ticket.poster})` }}
      />
      <div className="absolute inset-0 z-0 bg-white/40" />
      <TicketCard ticket={ticket} />
    </main>
  );
}
