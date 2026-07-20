import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Plus, Phone, MessageCircle, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

export default function CorporateEvents() {
  return (
    <>
      <Header />
      
      <main className="w-full flex-grow">
        {/* Hero Section */}
        <section 
          className="relative flex flex-col items-center justify-center py-32 px-4 bg-cover bg-center bg-no-repeat min-h-[550px]"
          style={{ backgroundImage: "url('/images/pexels-enginakyurt-14827102.jpg')" }}
        >
          {/* No overlay to preserve the exact red color of the photo */}
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center mt-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-[40px] font-bold tracking-wide uppercase mb-6 drop-shadow-md">
              WHAT ARE CORPORATE EVENTS & PLANNERS
            </h1>
            
            <div className="w-12 h-[3px] bg-[#d94a28] mb-12 shadow-sm"></div>
            
            <div className="bg-[#361e27] border border-white/5 px-12 py-[18px] rounded-[5px] mb-12 shadow-md">
              <p className="text-white text-[15px] font-medium tracking-wide">
                A comprehensive guide to business events and meeting planning
              </p>
            </div>
            
            <Link 
              href="#" 
              className="inline-block bg-[#00a8a8] hover:bg-[#008f8f] text-white px-8 py-4 text-[13px] font-bold tracking-wider transition-colors uppercase shadow-md rounded-[2px]"
            >
              TALK TO YOUR EVENT PLANNER
            </Link>
          </div>
        </section>

        {/* Gray Info Strip */}
        <section className="w-full bg-[#e3e2e0] py-[22px] px-4 shadow-inner">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-[#4b5258] text-[18px] md:text-[20px] font-bold tracking-wide">
              Understanding Corporate Events & Their Role in Business Growth
            </h2>
          </div>
        </section>

        {/* Delivering Impactful Section */}
        <section className="w-full bg-[#f8f9f8] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Headers */}
            <div className="text-center mb-14">
              <h2 className="text-[#2b2b2b] text-[22px] md:text-[26px] font-bold tracking-[0.15em] uppercase mb-2">
                DELIVERING IMPACTFUL
              </h2>
              <h3 className="text-[#847565] text-[18px] md:text-[20px] font-semibold tracking-wide mb-6">
                Corporate Event Experiences
              </h3>
              <div className="w-[60px] h-[3px] bg-[#a88f78] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
              {/* Text Column */}
              <div className="text-[#555] text-[14.5px] leading-[1.8] flex flex-col gap-6 pt-2">
                <h4 className="text-[#008484] text-[19px] font-bold mb-1 tracking-tight">
                  What Are Corporate Events & Why Do They Matter?
                </h4>
                
                <p>
                  <strong className="text-[#333]">Corporate events</strong> are professionally planned business gatherings designed to achieve specific organizational goals such as employee engagement, brand promotion, knowledge sharing, and relationship building.
                </p>
                
                <p>
                  These events include a wide range of formats such as <Link href="#" className="text-[#008484] hover:underline font-semibold">Leadership Conferences</Link>, product launches, annual celebrations, and team engagement activities—each contributing to business growth and organizational culture.
                </p>
                
                <p>
                  Understanding different types of corporate events and effective <strong className="text-[#333]">corporate event planning</strong> strategies helps businesses create more impactful and engaging experiences.
                </p>
                
                <p>
                  Corporate events play a crucial role in strengthening brand presence, improving employee engagement, and driving long-term business growth.
                </p>
                
                <p>
                  From small internal gatherings to <strong className="text-[#333]">large-scale corporate event ideas</strong> and executions, businesses use events as a powerful tool for engagement and brand building.
                </p>
              </div>

              {/* Image Column */}
              <div className="relative p-2 border-[8px] border-[#e2d5c8] bg-[#f8f9f8] rounded-sm shadow-md mx-auto w-full max-w-[400px]">
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4]">
                  <Image 
                    src="/images/photo1.jpg" 
                    alt="Corporate Event Experiences"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Separator */}
            <hr className="my-16 border-t border-gray-300" />

            {/* Professional Event Planners Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
              {/* Image Column */}
              <div className="relative p-2 border-[8px] border-[#e2d5c8] bg-[#f8f9f8] rounded-sm shadow-md mx-auto w-full max-w-[400px]">
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4]">
                  <Image 
                    src="/images/photo2.jpg" 
                    alt="Professional Event Planners"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="text-[#555] text-[14.5px] leading-[1.8] flex flex-col gap-6 pt-2">
                <h4 className="text-[#008484] text-[19px] font-bold mb-1 tracking-tight">
                  Who Are Professional Event Planners?
                </h4>
                
                <p>
                  <strong className="text-[#333]">Corporate event planners</strong> are professionals and companies who specialize in conceptualizing, organizing, and executing business events with precision and creativity. They manage everything from initial ideation and strategic planning to logistics, vendor coordination, production, and on-ground execution.
                </p>
                
                <p>
                  Their role goes beyond basic event coordination—they align every element of the event with the organization's objectives, ensuring a seamless and engaging experience for attendees. From small internal meetings to large-scale corporate events, planners bring structure, innovation, and efficiency to every stage of execution.
                </p>
                
                <p>
                  With a deep understanding of event dynamics, audience engagement, and operational challenges, corporate event planners help transform ideas into impactful and well-executed <strong className="text-[#333]">business events</strong> that deliver measurable results.
                </p>
                
                <p>
                  They also ensure that every event reflects the brand identity while creating meaningful experiences for employees, clients, and stakeholders.
                </p>
              </div>
            </div>
            
            {/* Separator */}
            <hr className="my-16 border-t border-gray-300" />

            {/* Planners Handle / Hire Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start pb-10">
              {/* Text Column */}
              <div className="text-[#555] text-[14.5px] leading-[1.8] flex flex-col gap-6 pt-2">
                <div>
                  <h4 className="text-[#008484] text-[19px] font-bold mb-3 tracking-tight">
                    What Do Corporate Event Planners Handle?
                  </h4>
                  <p>
                    A professional <strong className="text-[#333]">corporate event planner</strong> typically manages venue selection, event design, budgeting, vendor management, event production, entertainment, guest experience, and real-time coordination during the event. Their structured approach ensures that every detail is planned and executed flawlessly.
                  </p>
                </div>
                
                <div className="mt-2">
                  <h4 className="text-[#008484] text-[19px] font-bold mb-3 tracking-tight">
                    Why Hire a Corporate Event Planner?
                  </h4>
                  <p>
                    Working with <Link href="#" className="text-[#008484] hover:underline font-semibold">professional event planners</Link> ensures better planning, efficient execution, and high-quality event experiences aligned with business goals. Their expertise helps avoid common challenges, optimize budgets, and deliver events that are both impactful and professionally managed.
                  </p>
                </div>
              </div>

              {/* Image Column */}
              <div className="relative p-2 border-[8px] border-[#e2d5c8] bg-[#f8f9f8] rounded-sm shadow-md mx-auto w-full max-w-[400px]">
                <div className="relative w-full aspect-square">
                  <Image 
                    src="/images/photo3.jpg" 
                    alt="Event Planner Coordinating"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose Section */}
        <section className="w-full bg-[#efedea] py-16 px-4 shadow-inner">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headers */}
            <div className="mb-10">
              <h2 className="text-[#333] text-[20px] md:text-[24px] font-bold tracking-[0.1em] uppercase mb-2">
                HOW TO CHOOSE THE RIGHT
              </h2>
              <h3 className="text-[#847565] text-[18px] md:text-[20px] font-medium tracking-wide mb-5">
                Corporate Event Management Company in Delhi NCR
              </h3>
              <div className="w-[50px] h-[2px] bg-[#a88f78] mx-auto"></div>
            </div>

            {/* Text Content */}
            <div className="text-[#555] text-[14.5px] leading-[1.8] flex flex-col gap-6 mb-12 px-4 md:px-12">
              <p>
                <Link href="#" className="text-[#64504a] underline hover:text-[#008484] transition-colors font-semibold">Choosing the right corporate event management company</Link> is a crucial decision that directly impacts the success of your <strong className="text-[#333]">business event</strong>. The right partner not only manages execution but also brings strategic thinking, creativity, and operational excellence to the table.
              </p>
              
              <p>
                Key factors to consider include industry experience, understanding of corporate objectives, creativity in event design, a strong vendor network, and the ability to execute events seamlessly across different scales and formats.
              </p>
              
              <p>
                With over <strong className="text-[#333]">18 years of experience</strong> and successfully executing <strong className="text-[#333]">3,600+ corporate events</strong>, we bring proven expertise in planning and delivering impactful business events across Delhi NCR and India.
              </p>
            </div>

            {/* Button */}
            <Link 
              href="#"
              className="inline-block bg-[#00a8a8] hover:bg-[#008f8f] text-white font-bold text-[13px] px-8 py-4 rounded-[2px] uppercase tracking-wider transition-colors shadow-md"
            >
              EXPLORE CORPORATE EVENT SERVICES
            </Link>
          </div>
        </section>

        {/* End-to-End Services Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Headers */}
            <div className="text-center mb-14">
              <h2 className="text-[#2b2b2b] text-[22px] md:text-[26px] font-bold tracking-[0.15em] uppercase mb-2">
                END-TO-END
              </h2>
              <h3 className="text-[#847565] text-[18px] md:text-[20px] font-medium tracking-wide mb-6">
                Corporate Events Planning & Management Services
              </h3>
              <div className="w-[60px] h-[3px] bg-[#a88f78] mx-auto"></div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 px-4">
              {/* Item 1 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <Image src="/images/photo1.jpg" alt="Leadership Conference" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-[#00a8a8] text-[13px] font-semibold flex items-center gap-1 group-hover:text-[#008f8f] transition-colors tracking-wide">
                  Leadership Conference <ArrowRight size={14} />
                </h4>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <Image src="/images/photo2.jpg" alt="Product Launch Events" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-[#00a8a8] text-[13px] font-semibold flex items-center gap-1 group-hover:text-[#008f8f] transition-colors tracking-wide">
                  Product Launch Events <ArrowRight size={14} />
                </h4>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <Image src="/images/photo3.jpg" alt="Dealer Meet Events" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-[#00a8a8] text-[13px] font-semibold flex items-center gap-1 group-hover:text-[#008f8f] transition-colors tracking-wide">
                  Dealer Meet Events <ArrowRight size={14} />
                </h4>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <Image src="/images/photo4.jpg" alt="Employee Engagement Events" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-[#00a8a8] text-[13px] font-semibold flex items-center gap-1 group-hover:text-[#008f8f] transition-colors tracking-wide">
                  Employee Engagement Events <ArrowRight size={14} />
                </h4>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <Image src="/images/photo5.jpg" alt="Inauguration Ceremony" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-[#00a8a8] text-[13px] font-semibold flex items-center gap-1 group-hover:text-[#008f8f] transition-colors tracking-wide">
                  Inauguration Ceremony <ArrowRight size={14} />
                </h4>
              </div>

              {/* Item 6 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <Image src="/images/photo6.jpg" alt="Event Branding" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-[#00a8a8] text-[13px] font-semibold flex items-center gap-1 group-hover:text-[#008f8f] transition-colors tracking-wide">
                  Event Branding <ArrowRight size={14} />
                </h4>
              </div>

              {/* Item 7 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <Image src="/images/photo7.jpg" alt="Gala Dinner Events" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-[#00a8a8] text-[13px] font-semibold flex items-center gap-1 group-hover:text-[#008f8f] transition-colors tracking-wide">
                  Gala Dinner Events <ArrowRight size={14} />
                </h4>
              </div>

              {/* Item 8 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <Image src="/images/photo8.jpg" alt="Annual Day Celebration" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-[#00a8a8] text-[13px] font-semibold flex items-center gap-1 group-hover:text-[#008f8f] transition-colors tracking-wide">
                  Annual Day Celebration <ArrowRight size={14} />
                </h4>
              </div>
            </div>


            {/* Company Overview Sub-section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mt-20 pt-10 border-t border-[#e5e5e5]">
              {/* Text Column */}
              <div className="text-[#555] text-[14.5px] leading-[1.8] flex flex-col gap-6">
                <p>
                  We are a leading <Link href="#" className="text-[#008484] hover:underline font-semibold">event management company</Link> delivering high-impact corporate and business events across Delhi NCR and India. With 18+ years of experience, we specialize in planning and executing conferences, product launches, dealer meets, and employee engagement events.
                </p>
                
                <p>
                  Our approach focuses on understanding your brand, audience, and objectives to design tailored event experiences. As experienced <Link href="#" className="text-[#008484] hover:underline font-semibold">corporate event planners</Link>, we manage everything from venue selection and creative concepts to production and on-ground execution.
                </p>
                
                <p>
                  We blend creative vision with technical precision and seamless execution, designing immersive, goal-driven event experiences tailored to fit your brand identity and budget lines perfectly.
                </p>
              </div>

              {/* Image Column */}
              <div className="relative p-2 border-[8px] border-[#e2d5c8] bg-[#f8f9f8] rounded-sm shadow-md mx-auto w-full max-w-[450px]">
                <div className="relative w-full aspect-[4/3]">
                  <Image 
                    src="/images/photo4.jpg" 
                    alt="Event Management Experience"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full bg-[#17131b] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-white text-[22px] md:text-[26px] font-bold mb-6 tracking-wide">
              Hire A Professional Event Planner For Your Upcoming Event
            </h2>
            
            <p className="text-[#d8d8d8] text-[13.5px] md:text-[14.5px] leading-relaxed mb-10 max-w-3xl">
              Hiring professional event managers offers several advantages. By handling complexities behind the scenes, experienced corporate event planners enable organizations to focus entirely on networking, stakeholder engagement, and achieving their desired outcomes.
            </p>
            
            <Link 
              href="#"
              className="inline-block bg-[#00a8a8] hover:bg-[#008f8f] text-white font-bold text-[13px] px-8 py-4 rounded-[2px] uppercase tracking-wider transition-colors shadow-md"
            >
              CONTACT FOR FREE QUOTE
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full bg-[#f8f9f8] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Headers */}
            <div className="text-center mb-14">
              <h2 className="text-[#2b2b2b] text-[22px] md:text-[26px] font-bold tracking-[0.15em] uppercase mb-2">
                WHY CHOOSE SHOWMAKERZ
              </h2>
              <h3 className="text-[#847565] text-[18px] md:text-[20px] font-medium tracking-wide mb-6">
                For Your Events?
              </h3>
              <div className="w-[60px] h-[3px] bg-[#a88f78] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Features List */}
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <Check className="text-[#4caf50] mt-1 shrink-0" size={18} strokeWidth={3} />
                  <p className="text-[#555] text-[14.5px] leading-relaxed">
                    <strong className="text-[#333]">End-to-End Event Solutions</strong> including planning, production, branding, and execution.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-[#4caf50] mt-1 shrink-0" size={18} strokeWidth={3} />
                  <p className="text-[#555] text-[14.5px] leading-relaxed">
                    <strong className="text-[#333]">Creative & Customized Concepts</strong> aligned with your business objectives.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-[#4caf50] mt-1 shrink-0" size={18} strokeWidth={3} />
                  <p className="text-[#555] text-[14.5px] leading-relaxed">
                    <strong className="text-[#333]">Experienced Production Team</strong> for seamless on-ground coordination.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-[#4caf50] mt-1 shrink-0" size={18} strokeWidth={3} />
                  <p className="text-[#555] text-[14.5px] leading-relaxed">
                    <strong className="text-[#333]">Strong Vendor Network</strong> for venues, artists, décor, AV, and hospitality.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-[#4caf50] mt-1 shrink-0" size={18} strokeWidth={3} />
                  <p className="text-[#555] text-[14.5px] leading-relaxed">
                    <strong className="text-[#333]">Pan India Execution Capability</strong> with reliable event delivery across major cities.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-[#4caf50] mt-1 shrink-0" size={18} strokeWidth={3} />
                  <p className="text-[#555] text-[14.5px] leading-relaxed">
                    <strong className="text-[#333]">Focus on ROI & Engagement</strong> to create impactful business experiences.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-[#4caf50] mt-1 shrink-0" size={18} strokeWidth={3} />
                  <p className="text-[#555] text-[14.5px] leading-relaxed">
                    <strong className="text-[#333]">Trusted by Leading Brands</strong> for conferences, launches, annual days, and employee engagement events.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden shadow-xl mx-auto max-w-[500px]">
                <Image 
                  src="/images/photo5.jpg" 
                  alt="Golden Jubilee Event Stage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-[#e9e6f0] py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Headers */}
            <div className="text-center mb-12">
              <h2 className="text-[#222] text-[20px] md:text-[24px] font-bold tracking-[0.05em] uppercase mb-4">
                FREQUENTLY ASKED QUESTIONS – CORPORATE EVENTS
              </h2>
              <div className="w-[40px] h-[2px] bg-[#a88f78] mx-auto mb-6"></div>
              <p className="text-[#555] text-[15px] md:text-[16px]">
                Everything You Need To Know About Our <Link href="#" className="text-[#00a8a8] font-semibold hover:underline">Event Management Services</Link>
              </p>
            </div>

            {/* Accordion List */}
            <FaqAccordion 
              faqs={[
                {
                  question: "What are corporate events?",
                  answer: "Corporate events are professionally organized gatherings designed by companies for their employees, clients, or stakeholders. These events range from formal business conferences and product launches to informal team-building retreats and annual day celebrations. A successful corporate event serves as a strategic tool to improve brand visibility, foster employee engagement, and build lasting business relationships. As a leading corporate event management company in Delhi NCR, Showmakerz ensures these events align perfectly with your organizational goals."
                },
                {
                  question: "What are the types of corporate events?",
                  answer: "There is a wide variety of corporate events tailored to specific business objectives. The most common types include conferences, seminars, dealer meets, product launches, award ceremonies, and annual day celebrations. Additionally, many companies host gala dinners, exhibition stalls, and executive retreats. Our corporate event planners specialize in executing all these formats seamlessly, providing end-to-end event production, bespoke thematic decor, and technical AV support to create memorable experiences across India."
                },
                {
                  question: "Why are corporate events important for businesses?",
                  answer: "Corporate events are vital for driving business growth and maintaining a positive company culture. They offer a unique platform to launch new products, network with industry leaders, and reward top-performing employees. Hosting well-executed corporate events helps enhance brand image, boost employee morale, and generate measurable ROI through improved client relations and lead generation. By partnering with trusted event organizers in Gurgaon and Noida, businesses can ensure their events leave a lasting, impactful impression."
                },
                {
                  question: "What does a corporate event planner do?",
                  answer: "A corporate event planner manages every aspect of an event from conceptualization to on-ground execution. This includes venue selection, budgeting, creative stage design, audiovisual setup, artist management, and hospitality logistics. By hiring experienced event planners like EMG Showmakerz, organizations are relieved of the stressful logistical complexities. We handle vendor coordination and technical production to ensure a flawless, stress-free event, allowing your internal teams to focus solely on networking and core business objectives."
                },
                {
                  question: "How much does a corporate event cost?",
                  answer: "The cost of a corporate event varies significantly based on factors such as the scale of the event, venue choice, guest count, thematic decor, and technical requirements. A high-profile product launch or a multi-day conference will have a different budget structure than a half-day employee engagement activity. At Showmakerz, we provide tailored, cost-effective event management solutions designed to maximize your budget lines without compromising on quality. Contact us today for a free, customized quote tailored to your specific event needs in Delhi NCR."
                }
              ]} 
            />
          </div>
        </section>

        {/* Contact Banner Section */}
        <section className="w-full bg-gradient-to-r from-[#281b31] to-[#120a17] py-10 px-4 border-t border-[#3a2845]">
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8">
            <h2 className="text-white text-[18px] md:text-[22px] font-semibold text-center tracking-wide">
              Plan Your Next Corporate Event With Delhi NCR's Trusted Experts
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="flex items-center gap-2 border border-white text-white px-6 py-2.5 rounded-[2px] text-[11px] font-bold tracking-wider hover:bg-white hover:text-[#17131b] transition-colors">
                <Phone size={14} strokeWidth={2.5} /> CALL US NOW
              </Link>
              
              <Link href="#" className="flex items-center gap-2 border border-white text-white px-6 py-2.5 rounded-[2px] text-[11px] font-bold tracking-wider hover:bg-white hover:text-[#17131b] transition-colors">
                <MessageCircle size={14} strokeWidth={2.5} /> CHAT ON WHATSAPP
              </Link>
              
              <Link href="#" className="flex items-center gap-2 border border-white text-white px-6 py-2.5 rounded-[2px] text-[11px] font-bold tracking-wider hover:bg-white hover:text-[#17131b] transition-colors">
                <Mail size={14} strokeWidth={2.5} /> ENQUIRY FORM
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
