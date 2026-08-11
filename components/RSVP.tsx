import React from 'react';
import Section from './Section';
import { ThemeProps } from '../types';
import { MessageCircle, Heart } from 'lucide-react';

const RSVP: React.FC<ThemeProps> = ({ isDark }) => {
  const phoneNumber = "919515518756";

  const handleWhatsApp = () => {
    const message = `*Wedding Invitation — Sardar Vali & Sumiya Begam*\n\nAssalamu Alaikum! I would like to confirm my attendance for your blessed Nikah on 23rd August 2026. Please consider this my RSVP. 🌸`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section className="w-full max-w-2xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-br from-gold/30 via-transparent to-pink/30 shadow-2xl">
        <div className="bg-royal/60 backdrop-blur-xl p-10 md:p-16 rounded-3xl relative overflow-hidden text-center">

          {/* Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          {/* Header */}
          <div className="relative z-10 mb-10">
            <Heart className="w-8 h-8 text-gold fill-gold mx-auto mb-4 animate-pulse" />
            <h3 className="font-serif text-4xl md:text-5xl mb-4 text-white drop-shadow-md font-bold uppercase tracking-wider">
              Join Our Celebration
            </h3>
            <p className="font-serif text-xs uppercase tracking-[0.3em] text-gold-dim font-bold">
              We Heartfully Welcome You
            </p>
          </div>

          {/* Message */}
          <div className="relative z-10 mb-10 space-y-4">
            <p className="text-gray-300 font-serif text-lg leading-relaxed">
              Your presence would make our special day truly unforgettable. Please reach out via WhatsApp to confirm your attendance and send your warm wishes.
            </p>
            <div className="w-16 h-[1px] bg-gold/40 mx-auto"></div>
          </div>

          {/* WhatsApp Button */}
          <div className="relative z-10">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-dim to-gold text-midnight font-bold py-5 px-10 rounded-full uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-500 transform hover:-translate-y-1 font-serif text-sm"
            >
              <MessageCircle size={18} />
              <span>Send Wishes via WhatsApp</span>
            </button>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default RSVP;
