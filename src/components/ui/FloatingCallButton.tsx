import { Phone } from "lucide-react";
import { Button } from "./button";

const FloatingCallButton = () => {
    return (
        <div className="fixed bottom-6 right-6 z-[9999] animate-bounce">
            <Button
                size="lg"
                className="rounded-full w-16 h-16 bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xl shadow-indigo-900/40 p-0"
                asChild
            >
                <a href="tel:8777921410" aria-label="Call Salem Sewer Repair Pros">
                    <Phone className="w-8 h-8" />
                </a>
            </Button>
        </div>
    );
};

export default FloatingCallButton;
