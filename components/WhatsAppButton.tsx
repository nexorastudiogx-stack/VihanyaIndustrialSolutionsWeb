import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Hello, I would like to enquire about safety equipment.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-medium text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
