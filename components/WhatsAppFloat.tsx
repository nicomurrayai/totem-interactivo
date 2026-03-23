"use client";

import Image from "next/image";

interface WhatsAppButtonProps {
  phoneNumber?: string;
}

export default function WhatsAppButton({
  phoneNumber = "5491153471554",
}: WhatsAppButtonProps) {
  const message = "Contactanos";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactanos por WhatsApp"
        className="
          relative flex items-center justify-center
          bg-white border border-gray-200
          shadow-lg hover:shadow-2xl hover:border-green-500
          transition-all duration-300 ease-out
          transform hover:-translate-y-1 hover:scale-105
          rounded-full
          p-3 md:px-5 md:py-3 gap-3
        "
      >
        <span className="text-xs md:text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors">
          {message}
        </span>

        {/* Ícono */}
        <div className="relative w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12">
          <Image
            src="/whatsapp.svg"
            alt="Logo de WhatsApp"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 32px, 24px"
          />
        </div>

        {/* Indicador animado */}
        <span className="absolute top-2 right-2 md:top-3 md:right-4 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
        </span>
      </a>
    </div>
  );
}
