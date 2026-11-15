"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import {
  Briefcase,
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
  MapPin,
  Clock,
  Sparkles,
  HeartHandshake,
  FileText,
  Phone,
  Mail,
  ChevronDown
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

const jobOpenings: JobPosition[] = [
  {
    id: "job-1",
    title: "Senior Plant Mechanical Engineer (Crushing & Screening)",
    department: "Plant Engineering & Maintenance",
    location: "Plant Complex, Telangana",
    type: "Full-Time (On-Site)",
    experience: "5 - 8 Years",
    description: "Lead preventive maintenance and optimization of 350+ TPH 3-stage crushing systems including primary jaw, cone crushers, and Vertical Shaft Impactors (VSI).",
    responsibilities: [
      "Manage mechanical uptime and operational scheduling of crushing lines.",
      "Oversee screen deck replacements, conveyor belt splicing, and bearing lubrication routines.",
      "Conduct vibration analysis and wear part management on VSI rotors.",
      "Lead a team of 15+ mechanical technicians and welders with zero downtime target."
    ],
    qualifications: [
      "B.Tech / Diploma in Mechanical Engineering.",
      "Proven track record in aggregate crushing or heavy mineral processing plants.",
      "Expert knowledge of hydraulic systems, cone crushers, and radial conveyors."
    ]
  },
  {
    id: "job-2",
    title: "Granite Quarry Mining In-Charge (Deep Pit Extraction)",
    department: "Mining Operations",
    location: "Quarry Site, Telangana",
    type: "Full-Time (On-Site)",
    experience: "6 - 10 Years",
    description: "Supervise deep-pit mechanized virgin granite extraction, bench blasting coordination, and heavy hydraulic excavator fleet deployment.",
    responsibilities: [
      "Plan bench layouts and extraction volumes exceeding 150,000 MT monthly.",
      "Ensure full compliance with Director General of Mines Safety (DGMS) regulations.",
      "Direct Tata Hitachi and Hyundai excavator operators for efficient rock feeding.",
      "Implement dust suppression and haul road wetting routines continuously."
    ],
    qualifications: [
      "Degree / Diploma in Mining Engineering with DGMS Second Class Foreman / Manager Certificate.",
      "Deep understanding of hard crystalline granite rock formations and bench stability.",
      "Exemplary safety leadership record with zero reportable incidents."
    ]
  },
  {
    id: "job-3",
    title: "Quality Assurance & Laboratory In-Charge (IS 383:2016)",
    department: "Quality Control & R&D",
    location: "On-Site Central QA Lab",
    type: "Full-Time",
    experience: "4 - 7 Years",
    description: "Operate our NABL-aligned laboratory to conduct continuous sieve analysis, flakiness indexing, and specific gravity verification on every production batch.",
    responsibilities: [
      "Perform hourly particle size distribution checks using mechanical sieve shakers.",
      "Issue computerized Quality Test Certificates (QTC) for RMC and infrastructure dispatches.",
      "Test Aggregate Crushing Value (ACV), Aggregate Impact Value (AIV), and moisture content.",
      "Calibrate testing equipment per NABL guidelines and maintain batch retention samples."
    ],
    qualifications: [
      "M.Sc / B.Sc in Chemistry / Geology or B.Tech in Civil Engineering.",
      "Hands-on expertise with Bureau of Indian Standards IS 383:2016 and MoRTH testing protocols.",
      "Strong computer literacy and statistical quality documentation skills."
    ]
  },
  {
    id: "job-4",
    title: "Heavy Tipper Fleet Logistics & Dispatch Supervisor",
    department: "Supply Chain & Logistics",
    location: "Weighbridge Station",
    type: "Full-Time (Rotational Shifts)",
    experience: "3 - 6 Years",
    description: "Command automated 100-ton computerized weighbridges and dispatch over 300+ commercial truckloads daily with GPS tracking.",
    responsibilities: [
      "Coordinate vehicle turnaround times under 5 minutes per truck.",
      "Generate tamper-proof weigh slips with gross, tare, and net tonnage verification.",
      "Liaise with infrastructure project managers for midnight concrete pouring schedules.",
      "Monitor driver safety compliance and vehicle fitness documents."
    ],
    qualifications: [
      "Any Graduate / Diploma in Logistics & Supply Chain Management.",
      "Prior experience in bulk aggregates, cement, or RMC dispatch yards.",
      "Fluency in Telugu, Hindi, and basic English."
    ]
  },
  {
    id: "job-5",
    title: "Institutional Sales & Key Accounts Manager (Infrastructure)",
    department: "Commercial & Business Development",
    location: "Hyderabad / Regional",
    type: "Full-Time",
    experience: "5 - 9 Years",
    description: "Develop strategic relationships with tier-1 construction giants (L&T, Shapoorji Pallonji, NHAI contractors, Aurobindo Realty, My Home Group).",
    responsibilities: [
      "Secure long-term aggregate supply contracts for flyovers, metro lines, and tech parks.",
      "Provide technical consultations comparing manufactured sand versus river sand.",
      "Manage client order lifecycles and ensure timely payment receivables.",
      "Represent Super Sand at regional construction and civil engineering forums."
    ],
    qualifications: [
      "B.Tech (Civil) + MBA (Marketing) preferred.",
      "Established network among EPC contractors and RMC manufacturers in South India.",
      "Exceptional negotiation and technical presentation capabilities."
    ]
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>("job-1");
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [appliedJobTitle, setAppliedJobTitle] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    qualification: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenApply = (jobTitle: string) => {
    setAppliedJobTitle(jobTitle);
    setApplicationModalOpen(true);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setApplicationModalOpen(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        qualification: "",
        message: ""
      });
      setFormSubmitted(false);
      alert("Thank you for applying to Sai Super Sand Minerals Pvt. Ltd. Our HR team will review your credentials and contact you shortly!");
    }, 1800);
  };

  return (
    <MainLayout>
      <div className="relative z-10">
        
        {/* Section 1: Hero Banner */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#087A35]/15 via-white/80 to-transparent border-b border-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#087A35] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#087A35]/20">
              <Sparkles className="w-4 h-4 text-[#F4C928]" />
              <span>CAREERS AT SAI SUPER SAND</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#17231D] tracking-tight mb-4">
              Build Your Future with a <br className="hidden sm:inline" />
              <span className="text-[#087A35]">Leader in Construction Minerals</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium mb-8">
              Join a 200+ strong workforce transforming India&apos;s infrastructure with precision-crushed aggregates, sustainable manufactured sand, and world-class mining technologies.
            </p>

            {/* Quick Stat Pill Band */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="glass-card p-4 rounded-2xl border border-[#087A35]/20">
                <div className="text-2xl sm:text-3xl font-black text-[#087A35]">200+</div>
                <div className="text-xs font-bold text-gray-600">Empowered Professionals</div>
              </div>
              <div className="glass-card p-4 rounded-2xl border border-[#087A35]/20">
                <div className="text-2xl sm:text-3xl font-black text-[#087A35]">18+</div>
                <div className="text-xs font-bold text-gray-600">Years of Growth</div>
              </div>
              <div className="glass-card p-4 rounded-2xl border border-[#087A35]/20">
                <div className="text-2xl sm:text-3xl font-black text-[#087A35]">Zero</div>
                <div className="text-xs font-bold text-gray-600">Lost Time Injury Record</div>
              </div>
              <div className="glass-card p-4 rounded-2xl border border-[#087A35]/20">
                <div className="text-2xl sm:text-3xl font-black text-[#087A35]">100%</div>
                <div className="text-xs font-bold text-gray-600">PF, ESI & Medical Cover</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Team Collective Feature Card (image copy 50.png) */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-[36px] p-6 sm:p-10 border-2 border-[#087A35]/30 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#087A35]/30 bg-gray-900 group">
                    <img
                      src="/images/team/team-collective-conveyor.png"
                      alt="Super Sand Crushing Plant Conveyor Discharge"
                      className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="bg-[#087A35] text-[10px] font-black uppercase px-2.5 py-1 rounded-full inline-block mb-1">
                        High-Tech Operations
                      </span>
                      <h4 className="text-base font-bold">Automated Conveyor Circuits</h4>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#087A35] border-b-2 border-[#087A35] pb-0.5">
                    OUR TEAM • WE ARE STRONG COLLECTIVE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#17231D]">
                    A Culture of Respect, Innovation & Collective Pride
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    At Sai Super Sand Minerals, our people are our cornerstone. Whether you are an experienced mining engineer, a heavy machinery pilot, a precision lab technician, or a commercial strategist, you work in an environment where your contributions are recognized and celebrated.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2.5 text-xs font-bold text-[#17231D]">
                      <CheckCircle2 className="w-4 h-4 text-[#087A35]" />
                      <span>Structured On-Job Training</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-[#17231D]">
                      <CheckCircle2 className="w-4 h-4 text-[#087A35]" />
                      <span>Modern Industrial Safety Gear</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-[#17231D]">
                      <CheckCircle2 className="w-4 h-4 text-[#087A35]" />
                      <span>Competitive Merit Increments</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-[#17231D]">
                      <CheckCircle2 className="w-4 h-4 text-[#087A35]" />
                      <span>Equal Opportunity Workplace</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why Work at Super Sand (6 Core Benefits) */}
        <section className="py-12 sm:py-16 bg-white/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#087A35]">
                WHY JOIN US
              </span>
              <h2 className="text-3xl font-black text-[#17231D] mt-1">
                Empowering Your Professional Journey
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl border border-gray-100 hover:border-[#087A35] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#17231D] mb-1">Uncompromising Safety</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Daily safety toolbox briefings, protective personal equipment, and DGMS-certified quarry operations.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-gray-100 hover:border-[#087A35] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#17231D] mb-1">Cutting-Edge Machinery</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Operate world-class machinery: Tata Hitachi 1200 excavators, advanced VSI crushers, and PLC-controlled systems.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-gray-100 hover:border-[#087A35] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#17231D] mb-1">Health & Family Security</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Comprehensive medical coverage, subsidized on-site dining, employee transport, and retirement security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Current Job Openings with Interactive Details */}
        <section id="openings" className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#087A35]">
                  CAREER OPPORTUNITIES
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#17231D] mt-1">
                  Current Open Positions ({jobOpenings.length})
                </h2>
              </div>
              <button
                onClick={() => handleOpenApply("General Application")}
                className="inline-flex items-center gap-2 bg-[#087A35] hover:bg-[#06632B] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all"
              >
                <span>Submit Open Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {jobOpenings.map((job) => {
                const isExpanded = selectedJob === job.id;
                return (
                  <div
                    key={job.id}
                    className={`glass-card rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                      isExpanded ? 'border-[#087A35] shadow-xl' : 'border-gray-200/80 hover:border-[#087A35]/50'
                    }`}
                  >
                    <div
                      onClick={() => setSelectedJob(isExpanded ? null : job.id)}
                      className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="bg-[#E8F5E9] text-[#087A35] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                            {job.department}
                          </span>
                          <span className="text-[11px] font-bold text-gray-500 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                          </span>
                          <span className="text-[11px] font-bold text-gray-500 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {job.experience}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#17231D]">
                          {job.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenApply(job.title);
                          }}
                          className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-5 py-2 rounded-full transition-colors flex-shrink-0"
                        >
                          Apply Now
                        </button>
                        <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform ${isExpanded ? 'rotate-180 text-[#087A35]' : 'text-gray-500'}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Collapsible Details */}
                    {isExpanded && (
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-gray-100 bg-white/50 space-y-4">
                        <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                          {job.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                          <div>
                            <h4 className="text-xs font-extrabold text-[#087A35] uppercase tracking-wider mb-2">
                              Key Responsibilities:
                            </h4>
                            <ul className="space-y-1.5 text-xs text-gray-700">
                              {job.responsibilities.map((r, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#087A35] flex-shrink-0 mt-0.5" />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xs font-extrabold text-[#087A35] uppercase tracking-wider mb-2">
                              Candidate Qualifications:
                            </h4>
                            <ul className="space-y-1.5 text-xs text-gray-700">
                              {job.qualifications.map((q, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#087A35] flex-shrink-0 mt-0.5" />
                                  <span>{q}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-3 flex items-center justify-between">
                          <span className="text-xs text-gray-500 font-medium">Job Ref: #SSM-{job.id}</span>
                          <button
                            onClick={() => handleOpenApply(job.title)}
                            className="inline-flex items-center gap-1.5 bg-[#087A35] text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md hover:bg-[#06632B] transition-colors"
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>Apply for this Role</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: The Hiring Process */}
        <section className="py-12 sm:py-16 bg-white/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#087A35]">
                TRANSPARENT RECRUITMENT
              </span>
              <h2 className="text-3xl font-black text-[#17231D] mt-1">
                Our 4-Step Hiring Process
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-5 rounded-2xl border border-gray-100 relative">
                <span className="text-3xl font-black text-[#087A35]/25 absolute top-3 right-4">01</span>
                <h4 className="text-sm font-bold text-[#17231D] mb-1">Apply Online</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Submit your resume through our portal or email directly to hr@supersand.in.
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-gray-100 relative">
                <span className="text-3xl font-black text-[#087A35]/25 absolute top-3 right-4">02</span>
                <h4 className="text-sm font-bold text-[#17231D] mb-1">Technical Review</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our engineering and plant heads evaluate your operational experience.
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-gray-100 relative">
                <span className="text-3xl font-black text-[#087A35]/25 absolute top-3 right-4">03</span>
                <h4 className="text-sm font-bold text-[#17231D] mb-1">Plant Visit & Interview</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Meet the management team, inspect our facilities, and discuss role synergies.
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-gray-100 relative">
                <span className="text-3xl font-black text-[#087A35]/25 absolute top-3 right-4">04</span>
                <h4 className="text-sm font-bold text-[#17231D] mb-1">Offer & Induction</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Receive a competitive compensation package and complete safety induction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Direct HR Contact Bar */}
        <section className="py-12 bg-gradient-to-r from-[#004B2D] via-[#087A35] to-[#004B2D] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black mb-1">
                Have Questions Regarding Careers or Internships?
              </h3>
              <p className="text-xs sm:text-sm text-white/80">
                Contact our Corporate Human Resources Department directly.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:careers@supersand.in"
                className="inline-flex items-center gap-2 bg-white text-[#087A35] hover:bg-[#F4C928] hover:text-[#17231D] px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-colors shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>careers@supersand.in</span>
              </a>
              <a
                href="tel:+919848012345"
                className="inline-flex items-center gap-2 border border-white/60 text-white hover:bg-white/10 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>HR Helpline: +91 98480 12345</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 7: Interactive Quick Application Modal */}
        {applicationModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setApplicationModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold"
              >
                ✕
              </button>

              <div className="mb-5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#087A35] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full">
                  JOB APPLICATION
                </span>
                <h3 className="text-xl font-bold text-[#17231D] mt-1">
                  Apply for: {appliedJobTitle}
                </h3>
                <p className="text-xs text-gray-500">
                  Fill in your details below and our talent team will contact you.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#17231D]">Application Received!</h4>
                  <p className="text-xs text-gray-600">
                    We appreciate your interest in joining Sai Super Sand Minerals Pvt. Ltd.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Total Experience</label>
                      <input
                        type="text"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        placeholder="e.g. 5 Years"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Highest Qualification</label>
                      <input
                        type="text"
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        placeholder="e.g. B.Tech / Diploma"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Cover Note / Key Strengths</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Brief summary of your crushing, mining, or civil engineering experience..."
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#087A35] hover:bg-[#06632B] text-white py-3 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Job Application</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </MainLayout>
  );
}
