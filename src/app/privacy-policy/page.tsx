import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, Database, Server, UserCheck, Bell, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerBanner from "@/components/PartnerBanner";

export const metadata: Metadata = {
  title: "Privacy Policy | ColorKnit Events Pune",
  description:
    "Read the Privacy Policy of ColorKnit Events (Colorknit Pvt. Ltd.). Learn how we collect, use, and protect your personal information when inquiring about or using our corporate event management services.",
  alternates: {
    canonical: "https://www.colorknit.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | ColorKnit Events Pune",
    description:
      "Learn how ColorKnit Events protects and handles your personal information across our corporate event management, exhibitions, and production services.",
    url: "https://www.colorknit.in/privacy-policy",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | ColorKnit Events Pune",
    description:
      "Learn how ColorKnit Events protects and handles your personal information across our corporate event management, exhibitions, and production services.",
    images: ["/images/og-image.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 2026";

  const sections = [
    {
      id: "information-collection",
      icon: Database,
      title: "1. Information Collection and Use",
      content: (
        <>
          <p className="mb-4">
            For a better experience while using our website and services, we may require you to provide us with certain personally identifiable information when you submit an event inquiry, request a quotation, schedule a consultation, or communicate with our event specialists.
          </p>
          <p className="mb-3 font-semibold text-[#1a1625]">
            Information we may collect includes, but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Personal &amp; Contact Details:</strong> Full name, corporate email address, contact phone number, and designation.</li>
            <li><strong>Company Information:</strong> Organization/company name, office location, industry sector, and website URL.</li>
            <li><strong>Event Specifications:</strong> Preferred event dates, event destination/city (e.g., Pune, Mumbai, Goa, Bengaluru, etc.), estimated guest count, event category (annual day, conference, employee offsite, exhibition stall, etc.), and allocated budget range.</li>
            <li><strong>Communication Records:</strong> Specific briefing requirements, event notes, and records of email or WhatsApp correspondence with our planning teams.</li>
          </ul>
          <p>
            The information that we collect is strictly used to communicate with you, prepare customized proposals, deliver event production services, and identify or contact you regarding your projects.
          </p>
        </>
      ),
    },
    {
      id: "log-data",
      icon: Server,
      title: "2. Log Data and Analytics",
      content: (
        <>
          <p className="mb-4">
            We want to inform you that whenever you visit our website (<strong>https://www.colorknit.in</strong>), we collect information that your browser transmits to us, known as Log Data.
          </p>
          <p className="mb-4">
            This Log Data may include details such as your device&apos;s Internet Protocol (&ldquo;IP&rdquo;) address, browser type and version, operating system, internet service provider, pages of our Service that you visit, the time and date of your visit, time spent on individual pages, search queries that referred you to our site, and other relevant diagnostic statistics.
          </p>
          <p>
            We also employ industry-standard analytics tools, including Google Analytics 4 (GA4) and Google Ads Conversion Tracking (Google Tag ID: AW-18556087773), to measure aggregated audience trends, optimize website speed, and deliver a more seamless browsing experience for our visitors.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      icon: Eye,
      title: "3. Cookies and Tracking Technologies",
      content: (
        <>
          <p className="mb-4">
            Cookies are small data files containing an anonymous unique identifier sent to your browser from a website and stored on your device&apos;s hard drive or internal storage.
          </p>
          <p className="mb-4">
            Our website uses &ldquo;cookies&rdquo; to enhance functionality, analyze traffic flow, remember user preferences, and improve our services. We do not use cookies to collect personal financial data or sensitive credentials without your explicit consent.
          </p>
          <p>
            You have the option to either accept or refuse these cookies via your browser settings, and to be notified when a cookie is being sent to your computer. Please note that if you choose to refuse certain cookies, some interactive features or sections of our website may not function at optimal capacity.
          </p>
        </>
      ),
    },
    {
      id: "service-providers",
      icon: UserCheck,
      title: "4. Service Providers & Third Parties",
      content: (
        <>
          <p className="mb-4">
            To execute complex corporate events, stage fabrications, audio-visual setups, and digital experiences across India, we may collaborate with select third-party partners and service providers for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>To facilitate on-ground event management and production;</li>
            <li>To coordinate premier hotel venues, convention halls, and banquet facilities on your behalf;</li>
            <li>To manage specialized technical requirements such as AV production, live streaming, staging, sound, and lighting;</li>
            <li>To coordinate logistics, corporate gifting courier delivery, and hospitality services; or</li>
            <li>To assist us in analyzing how our website and marketing channels are used.</li>
          </ul>
          <p>
            We want to inform our clients and visitors that these third parties may have limited access to necessary contact or logistical details solely to perform the specific tasks assigned to them on our behalf. However, they are legally and contractually obligated not to disclose, sell, or use the information for any other unauthorized purpose.
          </p>
        </>
      ),
    },
    {
      id: "security",
      icon: Lock,
      title: "5. Security of Personal Information",
      content: (
        <>
          <p className="mb-4">
            We deeply value your trust in providing us with your personal and corporate information. At ColorKnit Events, we employ commercially acceptable technical, administrative, and physical safeguards to protect your data against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p>
            All web traffic between your browser and our servers is encrypted using Secure Sockets Layer / Transport Layer Security (SSL/TLS). However, please remember that no method of transmission over the Internet, or method of electronic storage, is 100% impenetrable. While we strive to use the highest industry standards to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </>
      ),
    },
    {
      id: "links-to-other-sites",
      icon: FileText,
      title: "6. Links to Other Websites",
      content: (
        <>
          <p className="mb-4">
            Our website may contain links to external third-party websites, social media platforms (such as Facebook, YouTube, LinkedIn, Instagram), map providers (Google Maps), or industry partner sites. If you click on a third-party link, you will be redirected to that external site.
          </p>
          <p>
            Please note that these external websites are operated independently and are not governed by ColorKnit Events. Therefore, we strongly advise you to review the individual Privacy Policy and Terms of Use of any third-party websites you visit. We have no control over, and assume no responsibility for, the content, privacy policies, practices, or data collection of any third-party sites or services.
          </p>
        </>
      ),
    },
    {
      id: "childrens-privacy",
      icon: ShieldCheck,
      title: "7. Children's Privacy",
      content: (
        <>
          <p className="mb-4">
            Our corporate event management services are tailored exclusively for businesses, enterprise clients, corporate professionals, and individuals aged 18 and older. We do not knowingly solicit or collect personally identifiable information from children under the age of 13.
          </p>
          <p>
            In the event we discover that a child under 13 has inadvertently provided us with personal information, we promptly delete such data from our servers. If you are a parent or legal guardian and become aware that your child has provided us with personal data, please contact us immediately so we can take swift corrective measures.
          </p>
        </>
      ),
    },
    {
      id: "changes-to-policy",
      icon: Bell,
      title: "8. Changes to This Privacy Policy",
      content: (
        <>
          <p className="mb-4">
            We may update our Privacy Policy periodically to reflect enhancements in our operational practices, technological advancements, or relevant legal and regulatory updates.
          </p>
          <p className="mb-4">
            We advise you to review this page periodically for any modifications. Any updates will be notified by posting the revised Privacy Policy on this URL with an updated effective date.
          </p>
          <p>
            All changes are effective immediately upon being published on this page. Your continued use of our website or services following any updates signifies your acknowledgment and acceptance of the revised terms.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans w-full max-w-full overflow-x-hidden bg-[#fdfbf9]">
      <Header />

      <main className="w-full max-w-full overflow-x-hidden flex-grow">
        {/* Hero Section */}
        <section className="relative w-full bg-[#170a1c] text-white py-16 md:py-24 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-[12px] text-gray-400 uppercase tracking-wider mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#ff6b6b]">Privacy Policy</span>
            </nav>

            <span className="inline-block bg-[#dc2626]/20 border border-[#dc2626]/40 text-[#ff6b6b] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Legal &amp; Data Protection
            </span>

            <h1 className="font-cinzel text-3xl md:text-5xl font-bold tracking-wide mb-4">
              Privacy Policy
            </h1>

            <p className="text-gray-300 text-[15px] md:text-[17px] max-w-2xl mx-auto leading-relaxed">
              How ColorKnit Events collects, protects, and handles your personal information with complete transparency and enterprise-grade security.
            </p>

            <p className="text-gray-400 text-[13px] mt-6">
              Effective Date / Last Updated: <span className="text-white font-semibold">{lastUpdated}</span>
            </p>
          </div>
        </section>

        {/* Introduction Overview Banner */}
        <section className="w-full py-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#fcf8f5] border-l-4 border-[#800020] p-6 sm:p-8 rounded-r-xl shadow-xs">
              <h2 className="font-cinzel text-[20px] md:text-[22px] font-bold text-[#1a1625] mb-3">
                About ColorKnit Events &amp; This Policy
              </h2>
              <p className="text-[#555] text-[14.5px] leading-relaxed mb-4">
                We, <strong>Colorknit Pvt. Ltd.</strong> (widely known as <strong>ColorKnit Events</strong>), operate the official website at <Link href="/" className="text-[#800020] font-semibold hover:underline">https://www.colorknit.in</Link>. ColorKnit Events provides corporate event management, annual day celebrations, conference &amp; seminar management, employee engagement activities, team-building offsites, corporate family days, town halls &amp; R&amp;R events, exhibition stall design &amp; fabrication, MICE, and corporate gifting services across Pune, Mumbai, Bengaluru, Hyderabad, Delhi NCR, and pan India.
              </p>
              <p className="text-[#555] text-[14.5px] leading-relaxed">
                This document serves to inform website visitors and clients regarding our policies concerning the collection, use, and disclosure of Personal Information for anyone who decides to use our website or engage our event planning and production services. If you choose to use our Service, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Policy Sections */}
        <section className="w-full py-14 md:py-20 px-4">
          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-white rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#f0eae1] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)]"
                >
                  <div className="flex items-center gap-4 mb-5 border-b border-gray-100 pb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#fdf2f4] flex items-center justify-center shrink-0">
                      <IconComponent size={22} className="text-[#800020]" />
                    </div>
                    <h2 className="font-cinzel text-[18px] sm:text-[22px] font-bold text-[#1a1625]">
                      {section.title}
                    </h2>
                  </div>

                  <div className="text-[#555] text-[14.5px] leading-[1.85]">
                    {section.content}
                  </div>
                </div>
              );
            })}

            {/* Contact Us Card */}
            <div className="bg-gradient-to-br from-[#170a1c] to-[#26102a] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <span className="text-[#ff6b6b] text-[11px] font-bold uppercase tracking-widest block mb-2">
                    Questions or Concerns?
                  </span>
                  <h3 className="font-cinzel text-2xl md:text-3xl font-bold mb-4">
                    Contact Us About Privacy
                  </h3>
                  <p className="text-gray-300 text-[14.5px] leading-relaxed mb-6">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or how your personal information is processed, our team is always ready to assist you.
                  </p>

                  <div className="flex flex-col gap-3 text-[13.5px] text-gray-300">
                    <div className="flex items-start gap-3">
                      <MapPin size={17} className="text-[#ff6b6b] shrink-0 mt-0.5" />
                      <span>Flat No. 303, 3rd Floor, Fortune House, Baner - Pashan Link Rd, Baner, Pune, Maharashtra 411045</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={17} className="text-[#ff6b6b] shrink-0" />
                      <a href="tel:+919271114024" className="hover:text-white font-semibold transition-colors">+91 92711 14024</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={17} className="text-[#ff6b6b] shrink-0" />
                      <a href="mailto:info@colorknitevents.com" className="hover:text-white font-semibold transition-colors">info@colorknitevents.com</a>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 rounded-full font-semibold text-[13px] tracking-wider uppercase shadow-lg transition-all"
                  >
                    Send Us a Message
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://wa.me/919271114024?text=Hi%20ColorKnit%20Events,%20I%20have%20an%20inquiry%20regarding%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-3.5 rounded-full font-semibold text-[13px] tracking-wider uppercase shadow-lg transition-all"
                  >
                    WhatsApp Us Directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Banner Strip */}
        <PartnerBanner title="Ready To Plan An Immersive Corporate Event With Complete Peace Of Mind?" />
      </main>

      <Footer />
    </div>
  );
}
