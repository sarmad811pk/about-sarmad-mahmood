import React, { useRef } from 'react';
import { Phone, Mail, MapPin, Linkedin, Printer } from './components/Icons';
import { ResumeData, Experience, Project } from './types';

// --- DATA CONFIGURATION ---
// You can edit the content here directly to update the CV.

const resumeData: ResumeData = {
  name: "SARMAD MAHMOOD",
  title: "Director, Product Management | Healthcare Analytics & Digital Transformation | US HealthTech",
  contact: {
    phone: "+92 345 512 0811", // Placeholder as per image privacy
    email: "sarmad811pk@gmail.com", // Placeholder
    linkedin: "https://www.linkedin.com/in/sarmadmahmood/",
    location: "ISB, PK - Remote", // Placeholder
  },
  summary: `Started as a software engineer, grew into architect, and now lead product development with hands-on solutioning — consistently bridging vision with execution. I don’t just plan; I deliver first versions fast.
  
  With 18+ years across product management, healthcare analytics, and full-stack development, I’ve built and scaled platforms for value-based care, risk adjustment, and quality programs. I blend product leadership with rapid prototyping (Balsamiq, Figma, SQL, BI, AI) to turn strategy into MVPs and working solutions that drive adoption.
  
  <strong>Domains:</strong> US healthcare, population health, payer/provider workflows, interoperability.  
  <strong>Skills:</strong> Enterprise Solutioning, Product strategy, MVP/POC execution, data analytics, SQL, BI, AI agents, workflow automation.`,
  languages: ["English (Advanced)", "Urdu (Native)"],
  certifications: [
    { id: "1", title: "The Complete Agentic AI Engineering Course (2025): OpenAI SDK, CrewAI, LangGraph, AutoGen, MCP", provider: "Udemy" },
    { id: "2", title: "AI Agents: The Future of Work for Leaders and Managers", provider: "Udemy" },
    { id: "3", title: "User Experience (UX): The Ultimate Guide to Usability and UX", provider: "Udemy" },
    { id: "4", title: "Become a Product Manager", provider: "Udemy" },
    { id: "5", title: "User Story Masterclass: Your In-Depth Guide to User Stories", provider: "Udemy" },
  ],
  education: [
    { id: "1", degree: "BS, Information Technology", school: "University of Engineering and Technology, Taxila", dates: "01/2002 - 12/2006" },
    { id: "2", degree: "FSC, Computer Science", school: "IMCB G-10/4 Islamabad", dates: "01/1990 - 12/2002" },
  ],
  experience: [
    {
      id: "1",
      title: "Director, Product Management",
      company: "DataQ Health",
      dates: "03/2025 - Present",
      location: "Islamabad, Pakistan - Remote",
      points: [
        "Scaled analytics suite from MVP → enterprise platform supporting 15k+ providers and 2M+ patient records.",
        "Lead customer-driven product innovation through MVPs and rapid prototypes, validating solutions before scaling.",
        "Build AI-assisted workflows (data extraction, patient stratification, chart review automation) to accelerate healthcare analytics adoption.",
        "Align roadmap with market/regulatory shifts (VBC, payer demands) to maintain competitiveness."
      ]
    },
    {
      id: "2",
      title: "Technical Product Manager",
      company: "DataQ Health",
      dates: "02/2018 - 03/2025",
      location: "Islamabad, Pakistan",
      points: [
        "Designed & shipped enterprise products (including 360Deeplearn, Risk adjustment Coding and quality Modules) used by payers/providers in value-based care.",
        "Personally built SQL prototypes, BI dashboards, and workflow mockups that accelerated buy-in from customers & execs.",
        "Drove risk adjustment, stratification, and quality care workflows from ideation → MVP → market launch.",
        "Led data engineering teams hands-on, defining KPIs, pipelines, and reporting logic.",
        "Rapidly implemented POCs for client pilots, reducing sales cycles and increasing adoption."
      ]
    },
    {
      id: "3",
      title: "Application & Data Architect",
      company: "DataQ Health",
      dates: "10/2015 - 01/2018",
      location: "Islamabad, Pakistan",
      points: [
        "Designed scalable data & software solutions for Medicare population analytics.",
        "Built ASP.NET + SQL Server web apps with focus on performance, extensibility, and regulatory compliance.",
        "Created data integration pipelines to support reporting, risk models, and provider workflows."
      ]
    },
    {
      id: "4",
      title: "Application Architect",
      company: "Sybrid Private Limited",
      dates: "04/2014 - 09/2015",
      location: "Islamabad, Pakistan",
      points: [
        "Developed BI & analytics tools for ACOs, enabling risk-based care decisions.",
        "Designed interactive dashboards & UX flows for clinical and business stakeholders.",
        "Delivered proof-of-concept solutions that translated data models into actionable visual insights."
      ]
    },
    {
      id: "5",
      title: "Team Lead (Web Development)",
      company: "Netsolace, Inc.",
      dates: "01/2013 - 03/2014",
      location: "Islamabad",
      points: [
        "Led global e-commerce/web solutions in high-traffic, load-balanced environments.",
        "Architected and deployed multi-language, multi-currency platforms with secure payment integrations.",
        "Mentored devs, performed code reviews, and managed resource allocation.",
        "Projects included store integration, global payment gateways, and multilingual localization."
      ]
    },
    {
      id: "6",
      title: "Senior Web Engineer (Web Development)",
      company: "Netsolace, Inc.",
      dates: "10/2008 - 12/2012",
      location: "Islamabad",
      points: [
        "Core dev for Edible Arrangements' e-commerce platform",
        "Optimized e-commerce platform for scale, security, and performance.",
        "Delivered mobile responsiveness & payment integrations (PayPal, Bank of America).",
        "Partnered with UX & business teams to align technical execution with commercial goals."
      ]
    },
    {
      id: "7",
      title: "Software Engineer",
      company: "TMR Consulting (Pvt.) Limited",
      dates: "12/2006 - 02/2008",
      location: "Islamabad",
      points: [
        "Built financial software modules using .NET Smart Client + SQL Server.",
        "Designed prototypes for CMA-driven requirements, delivering working modules fast.",
        "Developed various web applications (PHP/.NET) for clients including task tracking and internal systems."
      ]
    },
    {
      id: "8",
      title: "Assistant Software Engineer",
      company: "Infomist Services",
      dates: "06/2005 - 12/2005",
      location: "Rawal Pindi, Pakistan",
      points: [
        "Supported senior developers with coding & implementation in VS.NET.",
        "Built data conversion applications across multiple formats."
      ]
    }
  ],
  projects: [
    {
      "id": "p0",
      "title": "360Suite – Healthcare Product Ecosystem",
      "role": "Product Lead",
      "dates": "04/2014 - Present",
      "location": "ISB/US - Remote",
      "description": "Managing a suite of 20+ interconnected healthcare applications supporting analytics, care management, quality, risk adjustment, point of care integrations, ADTs, RPM, population building, and patient insights."
    },     
    {
      "id": "p1",
      "title": "360Deeplearn – Population Health Analytics & Workflow Engine",
      "role": "Product Lead / Architect",
      "dates": "04/2014 - Present",
      "location": "ISB/US - Remote",
      "description": "Analytics and cohort-building engine powering value-based care programs. Unifies claims, clinical, and utilization data to surface risks, identify gaps, and drive actionable workflows for ACOs and provider groups.",
      "bullets": [
        "Started alone and grew a team of 85+ developers, scrum masters, product managers, data scientists, and QA engineers."
      ]
    },  
    {
      "id": "p19",
      "title": "Edible Arrangements – E-Commerce Website",
      "role": "Developer",
      "dates": "10/2008 - 12/2012",
      "location": "ISB, PK – OnSite",
      "description": "Lead developer for the global e-commerce platform serving 1100+ franchises across 13 countries.",
      "bullets": [
        "Full-stack development and UI/UX implementation.",
        "Real-time order processing and payment integrations.",
        "Database schema design and performance optimization.",
        "Refactoring modules for scalability and maintainability.",
        "Worked in a team of 12 developers and QA engineers."
      ]
    },
    {
      "id": "p20",
      "title": "Edible Arrangements – Mobile Webapp",
      "role": "Lead Developer",
      "dates": "11/2013 - 2014",
      "location": "ISB, PK – OnSite",
      "description": "Responsive mobile webapp for multi-device commerce with payment integration and consistent user experience.",
      "bullets": [
        "Integrated major payment processors.",
        "Optimized UI across mobile browsers.",
        "Implemented redirection and responsive layouts.",
        "Led a team of 8 developers and QA engineers."
      ]
    },
    {
      "id": "p21",
      "title": "Edible Arrangements Global – Multilingual Rollout",
      "role": "Lead Developer",
      "dates": "01/2012 - 2013",
      "location": "ISB, PK – OnSite",
      "description": "Enabled global expansion by adding Arabic, Chinese, French, and Spanish localization.",
      "bullets": [
        "Localization of UI, content, and workflows.",
        "Improved usability and accessibility across regions.",
        "Led a team of 6 developers and QA engineers."
      ]
    }
  ]
};

// --- COMPONENTS ---

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-lg sm:text-xl font-bold uppercase border-b-2 border-black mb-4 sm:mb-6 pb-2 tracking-wider mt-6 sm:mt-8 first:mt-0 print:text-lg print:mb-4 print:mt-6">
    {title}
  </h2>
);

const ExperienceItem: React.FC<{ exp: Experience }> = ({ exp }) => (
  <div className="mb-8 break-inside-avoid">
    <div className="mb-2">
      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight print:text-base">{exp.title}</h3>
      <div className="text-sm sm:text-base font-semibold text-cv-blue mt-1 print:text-sm">{exp.company}</div>
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-500 mb-3 font-medium gap-1 sm:gap-4 print:flex-row print:text-xs">
      <span className="flex items-center">
        <svg className="w-3 h-3 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
        {exp.dates}
      </span>
      <span className="flex items-center">
        <MapPin className="w-3 h-3 mr-1.5 flex-shrink-0" />
        {exp.location}
      </span>
    </div>
    <ul className="list-disc list-outside ml-5 text-sm leading-relaxed text-gray-700 marker:text-gray-400 space-y-1 print:text-[13px] print:ml-4">
      {exp.points.map((point, idx) => (
        <li key={idx} className="pl-1">{point}</li>
      ))}
    </ul>
  </div>
);

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => (
  <div className="mb-6 break-inside-avoid">
    <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight mb-2 print:text-sm">{project.title}</h3>
    <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-500 mb-3 font-medium gap-1 sm:gap-3 print:flex-row print:text-xs">
      <span className="flex items-center">
        <svg className="w-3 h-3 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
        {project.dates}
      </span>
      <span className="flex items-center">
        <MapPin className="w-3 h-3 mr-1.5 flex-shrink-0" />
        {project.location}
      </span>
      <span className="flex items-center">
        <svg className="w-3 h-3 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1H7a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V6a2 2 0 00-2-2h-2V3a1 1 0 10-2 0v1H9V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h4a1 1 0 100-2h-4z" clipRule="evenodd" />
        </svg>
        {project.role}
      </span>
    </div>
    <p className="text-sm leading-relaxed text-gray-700 mb-3 print:text-[13px]">{project.description}</p>
    {project.bullets && (
       <ul className="list-disc list-outside ml-5 text-sm leading-relaxed text-gray-700 marker:text-gray-400 space-y-1 print:text-[13px] print:ml-4">
       {project.bullets.map((point, idx) => (
         <li key={idx} className="pl-1">{point}</li>
       ))}
     </ul>
    )}
  </div>
)

const App: React.FC = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 print:bg-white print:py-0">
      
      {/* Print FAB */}
      <button 
        onClick={handlePrint}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all z-50 print:hidden flex items-center justify-center gap-2 font-semibold"
        aria-label="Print CV"
      >
        <Printer size={20} />
        <span className="hidden md:inline">Print / Save as PDF</span>
      </button>

      {/* Full width container for screen, A4 constraints for print */}
      <main 
        ref={printRef}
        className="w-full bg-white print:shadow-none box-border p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 print:p-[12mm] print:max-w-[210mm] print:mx-auto print:min-h-[297mm]"
      >
        
        {/* Header */}
        <header className="flex flex-col lg:flex-row justify-between items-start border-b-4 border-black pb-6 mb-8 gap-6">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-tight mb-3">
              {resumeData.name}
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-cv-blue font-bold mb-6 leading-snug print:text-lg">
              {resumeData.title}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm font-medium text-gray-600 print:flex print:flex-wrap print:gap-4">
              <div className="flex items-center gap-2 hover:text-cv-blue transition-colors">
                <Phone size={16} className="text-cv-blue flex-shrink-0" />
                <span className="break-all">{resumeData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-cv-blue transition-colors">
                <Mail size={16} className="text-cv-blue flex-shrink-0" />
                <a href={`mailto:${resumeData.contact.email}`} className="break-all">{resumeData.contact.email}</a>
              </div>
              <div className="flex items-center gap-2 hover:text-cv-blue transition-colors">
                <Linkedin size={16} className="text-cv-blue flex-shrink-0" />
                <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="break-all">
                  {resumeData.contact.linkedin.replace("https://www.", "")}
                </a>
              </div>
              <div className="flex items-center gap-2 hover:text-cv-blue transition-colors">
                <MapPin size={16} className="text-cv-blue flex-shrink-0" />
                <span>{resumeData.contact.location}</span>
              </div>
            </div>
          </div>

          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm shrink-0 bg-gray-200 print:w-24 print:h-24">
             {/* Use a placeholder, user can replace src with real image */}
             <img 
               src="img.png" 
               alt="Profile" 
               className="w-full h-full object-cover" 
             />
          </div>
        </header>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8 lg:gap-12 xl:gap-16 print:grid-cols-[2fr_1fr] print:gap-8">
          
          {/* Left Column (Main) */}
          <div className="flex flex-col">
            {/* Summary */}
            <section className="mb-8 bg-gray-50 p-4 sm:p-6 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:mx-0 xl:bg-transparent xl:p-0 rounded-lg print:bg-transparent print:p-0 print:mx-0">
              <SectionHeader title="Summary" />
              <p className="text-sm leading-relaxed text-gray-700 text-justify whitespace-pre-line print:text-[13px]">
                <div dangerouslySetInnerHTML={{ __html: resumeData.summary }} />
              </p>
            </section>

            {/* Experience Section */}
            <section className="mb-8">
              <SectionHeader title="Experience" />
              {resumeData.experience.map((exp) => (
                <ExperienceItem key={exp.id} exp={exp} />
              ))}
            </section>

             {/* Education Section */}
             <section className="mb-8 avoid-break">
              <SectionHeader title="Education" />
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 print:text-base">{edu.degree}</h3>
                  <div className="text-sm sm:text-base font-semibold text-cv-blue mt-1 print:text-sm">{edu.school}</div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 mt-2 print:text-xs">
                    <svg className="w-3 h-3 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {edu.dates}
                  </div>
                </div>
              ))}
            </section>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="flex flex-col">
            


           

            {/* Video Placeholder */}
            {/* <section className="mb-8 avoid-break">
              <SectionHeader title="Introduction Video" />
              <div className="w-full aspect-video bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center text-gray-500">
                <span className="text-sm sm:text-base">Your 2-5 min video can be embedded here</span>
              </div>
            </section> */}

            {/* Projects */}
            <section className="mb-8">
              <SectionHeader title="Projects & Products" />
              {resumeData.projects.map((proj) => (
                <ProjectItem key={proj.id} project={proj} />
              ))}
            </section>

             {/* Certifications */}
             <section className="mb-8 avoid-break">
              <SectionHeader title="Certifications" />
              <div className="space-y-4">
                {resumeData.certifications.map((cert) => (
                  <div key={cert.id}>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight mb-1 print:text-sm">{cert.title}</h3>
                    <div className="text-xs sm:text-sm text-gray-500 print:text-xs">{cert.provider}</div>
                  </div>
                ))}
              </div>
            </section>

            

             {/* Languages */}
            <section className="mb-8 avoid-break">
              <SectionHeader title="Languages" />
              <div className="grid grid-cols-2 gap-4">
              {resumeData.languages.map((lang, idx) => (
                <div className="grid-cell" key={idx}>
                  <div className="font-bold text-sm sm:text-base text-gray-900 print:text-sm">{lang.split(' ')[0]}</div>
                  <div className="text-xs sm:text-sm text-gray-500 print:text-xs">{lang.split(' ').slice(1).join(' ')}</div>
                  {/* Visual dot indicator for 'Advanced' */}
                  <div className="flex gap-1.5 mt-2">
                    {[1,2,3,4,5].map(i => (
                    <div key={i} className={`h-2.5 w-2.5 rounded-full ${i <= 4 ? 'bg-blue-500' : 'bg-gray-200'}`} />
                    ))}
                  </div>
                </div>
              ))}
              </div>
            </section>
          </div>
        </div>

        
        
        {/* Footer / Copyright / Metadata for Print */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-xs sm:text-sm text-gray-400 print:hidden">
          Generated with React & Tailwind CSS
        </div>
      </main>
    </div>
  );
};

export default App;