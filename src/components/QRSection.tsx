import Image from "next/image";
import { Share2 } from "lucide-react";
import MePassLogo from "./MePassLogo";

interface QRSectionProps {
  qrCodeUrl: string;
  onShare: () => void;
}

export default function QRSection({ qrCodeUrl, onShare }: QRSectionProps) {
  return (
    <div className="w-full">
      <div className="bg-[#f5f5f5] rounded-3xl p-6 flex flex-col items-center border border-gray-100">
        {/* Mepass Logo */}
        <div className="mb-4 flex items-center justify-center">
          <MePassLogo className="h-8 w-auto" />
        </div>

        {/* QR Code */}
        <div className="w-full aspect-square relative bg-white rounded-xl p-2 mb-6">
          <Image 
            src={qrCodeUrl} 
            alt="Ticket QR Code"
            fill
            className="object-contain mix-blend-multiply" 
          />
        </div>

        {/* Split & Share Button */}
        <button 
          onClick={onShare}
          className="w-full bg-[#2a2a2a] hover:bg-black text-white font-medium py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          <span>Split & Share</span>
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {/* App Store Badges */}
      <div className="flex items-center justify-center gap-3 mt-4 w-full">
        <a href="https://play.google.com/store/apps/details?id=com.mepass.app" target="_blank" rel="noopener noreferrer" className="flex-1 bg-black rounded-[10px] h-[48px] flex items-center justify-center px-1">
          {/* Mock Google Play Badge */}
          <div className="flex items-center gap-2 text-white">
             <svg viewBox="0 0 24 24" fill="#00E676" className="w-6 h-6"><path d="M5 4v16l15-8z"/></svg>
             <div className="flex flex-col items-start leading-none justify-center">
                <span className="text-[10px] uppercase font-medium tracking-wide mb-[2px]">Get it on</span>
                <span className="text-[15px] font-semibold tracking-tight">Google Play</span>
             </div>
          </div>
        </a>
        <a href="https://apps.apple.com/in/app/mepass-app/id6695753759" target="_blank" rel="noopener noreferrer" className="flex-1 bg-black rounded-[10px] h-[48px] flex items-center justify-center px-1">
          {/* Mock App Store Badge */}
          <div className="flex items-center gap-2 text-white">
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 -mt-1"><path d="M12 2C12 2 12 6 15 7C15 7 14 11 11 11C11 11 9 11 8 9C8 9 8 5 11 4C11 4 11 2 12 2M15 15C15 17 14 19 12 20C10 21 8 20 7 19C6 18 5 15 5 13C5 11 7 9 9 9C10 9 11 10 12 11C13 10 14 9 15 9C17 9 19 11 19 13C19 15 18 18 17 19C16 20 14 21 12 20C10 19 9 17 9 15" /></svg>
             <div className="flex flex-col items-start leading-none justify-center">
                <span className="text-[10px] font-medium tracking-wide mb-[2px]">Download on the</span>
                <span className="text-[15px] font-semibold tracking-tight">App Store</span>
             </div>
          </div>
        </a>
      </div>
    </div>
  );
}
