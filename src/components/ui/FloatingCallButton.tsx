import { Phone } from "lucide-react";

const FloatingCallButton = () => {
    return (
        <a
            href="tel:8777921410"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in group border-2 border-white/20"
            aria-label="Call Emergency Number"
        >
            <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20 duration-1000" />
            <Phone className="w-6 h-6 fill-current animate-pulse" />
            <span className="font-bold text-lg hidden md:block pr-2">Call (877) 792-1410</span>
        </a>
    );
};

export default FloatingCallButton;



