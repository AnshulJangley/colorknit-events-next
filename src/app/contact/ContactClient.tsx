'use client';

import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Check,
  ExternalLink,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CONTACT_INFO = {
  address:
    'Flat No. 303, 3rd Floor, Fortune House, Baner - Pashan Link Rd, Baner, Pune, Maharashtra 411045',
  phone: '+91 9271114024',
  phoneRaw: 'tel:+919271114024',
  email: 'info@colorknitevents.com',
  hours: 'Mon-Sat: 10AM – 7PM',
  whatsapp: '919271114024',
};

export default function ContactClient() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;

    const messageLines = [
      `*New Inquiry – ColorKnit Events*`,
      ``,
      `*Full Name:* ${form.name}`,
      `*Email Address:* ${form.email}`,
      `*Phone Number:* ${form.phone}`,
      form.city ? `*Preferred City:* ${form.city}` : '',
      form.date ? `*Preferred Date:* ${form.date}` : '',
      form.message ? `*Message:* ${form.message}` : '',
    ].filter(Boolean);

    const waUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
      messageLines.join('\n')
    )}`;

    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=Fortune+House+Baner+Pashan+Link+Rd+Baner+Pune+Maharashtra+411045`;

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf9] w-full max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {/* Main Content Section */}
        <section id="enquiry" className="py-10 md:py-16 px-4">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-12 items-start">
              {/* Left Column: Basic Info Form */}
              <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#f0eae1]">
                {submitted ? (
                  <div className="text-center py-12 md:py-16">
                    <div className="w-20 h-20 rounded-full bg-[#fdf2f4] flex items-center justify-center mx-auto mb-6">
                      <Check size={40} className="text-[#800020]" />
                    </div>
                    <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[#1a1625] mb-3">
                      We&apos;ve Got Your Message!
                    </h2>
                    <p className="text-[#666] text-[15px] leading-relaxed max-w-md mx-auto mb-8">
                      Thank you for reaching out to ColorKnit Events. Our event specialist will connect with you within 24 hours. Can&apos;t wait? WhatsApp us directly!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20ColorKnit%20Events,%20I%20just%20submitted%20my%20details%20on%20your%20website.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3 rounded-full text-[13px] font-bold tracking-wider uppercase shadow-md transition"
                      >
                        WhatsApp Us Directly
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: '', email: '', phone: '', city: '', date: '', message: '' });
                        }}
                        className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-500 text-gray-700 px-6 py-3 rounded-full text-[13px] font-bold tracking-wider uppercase transition cursor-pointer"
                      >
                        Submit Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Basic Info Tab Header */}
                    <div className="mb-8 border-b border-gray-100 pb-3">
                      <div className="inline-block">
                        <span className="text-[13px] sm:text-[14px] font-semibold text-[#800020] block pb-2 tracking-wide">
                          Basic Info
                        </span>
                        <div className="h-[3px] w-full bg-[#800020] rounded-full" />
                      </div>
                    </div>

                    {/* Basic Info Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div>
                        <h2 className="font-cinzel text-2xl sm:text-[28px] font-bold text-[#1a1625] mb-1">
                          Tell us about yourself
                        </h2>
                        <p className="text-gray-500 text-[13.5px]">
                          Fill in your details below and our team will get in touch with you shortly.
                        </p>
                      </div>

                      {/* Full Name */}
                      <div>
                        <label className="text-[13px] font-medium text-gray-700 block mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          placeholder="Priya & Rahul Sharma"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14.5px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/15 transition"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="text-[13px] font-medium text-gray-700 block mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          placeholder="hello@youremail.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14.5px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/15 transition"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="text-[13px] font-medium text-gray-700 block mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14.5px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/15 transition"
                        />
                      </div>

                      {/* Preferred City & Preferred Date */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[13px] font-medium text-gray-700 block mb-1.5">
                            Preferred City
                          </label>
                          <input
                            type="text"
                            value={form.city}
                            onChange={(e) => update('city', e.target.value)}
                            placeholder="e.g. Pune, Mumbai, Goa..."
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14.5px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/15 transition"
                          />
                        </div>

                        <div>
                          <label className="text-[13px] font-medium text-gray-700 block mb-1.5">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            value={form.date}
                            onChange={(e) => update('date', e.target.value)}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14.5px] text-gray-800 focus:outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/15 transition bg-white"
                          />
                        </div>
                      </div>

                      {/* Optional Message */}
                      <div>
                        <label className="text-[13px] font-medium text-gray-700 block mb-1.5">
                          Requirements / Notes (Optional)
                        </label>
                        <textarea
                          value={form.message}
                          onChange={(e) => update('message', e.target.value)}
                          rows={3}
                          placeholder="Tell us what event you are planning or any specific requirements..."
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/15 transition resize-none"
                        />
                      </div>

                      {/* Action Button */}
                      <button
                        type="submit"
                        className="w-full mt-2 bg-[#800020] hover:bg-[#68001a] text-white py-3.5 px-6 rounded-full font-semibold text-[14px] tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Continue →
                      </button>

                      <p className="text-[12px] text-gray-400 text-center">
                        🔒 Your details are safe with us. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>

              {/* Right Column: Contact Information Cards */}
              <div id="details" className="flex flex-col gap-6">
                {/* Contact Information Card */}
                <div className="bg-white rounded-2xl p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#f0eae1]">
                  <h3 className="font-cinzel text-[20px] font-bold text-[#1a1625] mb-6">
                    Contact Information
                  </h3>

                  <div className="flex flex-col gap-5">
                    {/* Address */}
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#fdf2f4] flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-[#800020]" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                          ADDRESS
                        </p>
                        <p className="text-[13.5px] text-gray-700 leading-snug">
                          {CONTACT_INFO.address}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#fdf2f4] flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-[#800020]" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                          PHONE
                        </p>
                        <a
                          href={CONTACT_INFO.phoneRaw}
                          className="text-[14px] font-semibold text-gray-800 hover:text-[#800020] transition-colors"
                        >
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#fdf2f4] flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-[#800020]" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                          EMAIL
                        </p>
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="text-[14px] font-semibold text-gray-800 hover:text-[#800020] transition-colors"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#fdf2f4] flex items-center justify-center shrink-0">
                        <Clock size={18} className="text-[#800020]" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                          WORKING HOURS
                        </p>
                        <p className="text-[14px] font-medium text-gray-800">
                          {CONTACT_INFO.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action Card */}
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20ColorKnit%20Events,%20I%20would%20like%20to%20inquire%20about%20event%20management%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white rounded-2xl p-5 flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[16px]">Chat on WhatsApp</p>
                    <p className="text-[13px] text-white/90">Typically replies in minutes</p>
                  </div>
                </a>

                {/* Google Map Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#f0eae1] h-60 group">
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 left-3 z-10 bg-white/95 hover:bg-white text-gray-800 text-[11px] font-bold px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5 transition-all backdrop-blur-xs"
                  >
                    Open in Maps
                    <ExternalLink size={12} />
                  </a>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.164849683935!2d73.78440597595568!3d18.56662496775988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bec89753c9e3%3A0xc304191d9043c7b!2sFortune%20House!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

