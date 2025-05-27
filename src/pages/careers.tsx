import React, { useState } from 'react';
import { Briefcase, CheckCircle2, Send, GraduationCap, Calendar, MapPin } from 'lucide-react';

const openPositions = [
  {
    title: "AI Solutions Architect",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Design and implement AI solutions for enterprise clients, working with cutting-edge technologies and frameworks.",
    requirements: [
      "5+ years of experience in software architecture",
      "Strong background in AI/ML technologies",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Excellent communication and client-facing skills"
    ]
  },
  {
    title: "Machine Learning Engineer",
    department: "Data Science",
    location: "Remote",
    type: "Full-time",
    description: "Develop and deploy machine learning models to solve complex business problems for our clients.",
    requirements: [
      "3+ years of experience in ML engineering",
      "Proficiency in Python and ML frameworks (TensorFlow, PyTorch)",
      "Experience with data processing and feature engineering",
      "Strong mathematical and statistical background"
    ]
  },
  {
    title: "AI Content Strategist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Create and execute content strategies leveraging AI tools to maximize client engagement and conversion.",
    requirements: [
      "3+ years in content strategy or marketing",
      "Experience with AI content generation tools",
      "Strong writing and editing skills",
      "SEO knowledge and analytics experience"
    ]
  }
];

const internshipPrograms = [
  {
    title: "AI Research Intern",
    season: "Summer 2025",
    duration: "12 weeks",
    location: "Remote / Hybrid",
    description: "Join our research team to explore cutting-edge AI technologies and contribute to innovative solutions.",
    requirements: [
      "Currently pursuing a BS/MS in Computer Science or related field",
      "Strong programming skills in Python",
      "Coursework in machine learning, data structures, and algorithms",
      "Interest in AI research and development"
    ],
    responsibilities: [
      "Assist in developing and testing new AI models",
      "Contribute to research papers and technical documentation",
      "Collaborate with senior researchers on innovative projects",
      "Present findings and progress in team meetings"
    ]
  },
  {
    title: "ML Engineering Intern",
    season: "Summer/Fall 2025",
    duration: "10-16 weeks",
    location: "Remote",
    description: "Work alongside our ML engineering team to build and deploy machine learning models for real-world applications.",
    requirements: [
      "Junior or Senior pursuing a degree in Computer Science",
      "Experience with ML frameworks (TensorFlow, PyTorch)",
      "Strong programming skills in Python",
      "Understanding of data structures and algorithms"
    ],
    responsibilities: [
      "Develop and optimize machine learning models",
      "Assist in data preprocessing and feature engineering",
      "Help integrate ML models into production systems",
      "Document code and contribute to technical specifications"
    ]
  },
  {
    title: "AI Product Development Intern",
    season: "Year-round opportunities",
    duration: "Flexible (10-24 weeks)",
    location: "Remote",
    description: "Gain hands-on experience in developing AI-powered products from concept to deployment.",
    requirements: [
      "Pursuing a degree in Computer Science or related field",
      "Familiarity with software development lifecycle",
      "Basic understanding of AI/ML concepts",
      "Strong problem-solving skills"
    ],
    responsibilities: [
      "Assist in designing and implementing AI features",
      "Participate in product planning and development",
      "Help with testing and quality assurance",
      "Collaborate with cross-functional teams"
    ]
  }
];

export function Careers() {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: ''
      });
      setSelectedPosition(null);
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{
               backgroundImage: `url('https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/22246d44-b563-48fa-f323-c18b79a04a00/public')`,
               backgroundPosition: 'center',
               backgroundSize: 'cover'
             }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              Help us shape the future of AI and transform businesses worldwide
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-16">
            <div className="p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Open Positions</h2>
              <p className="text-gray-600">Explore opportunities to join our innovative team</p>
            </div>
            
            <div className="divide-y divide-gray-200">
              {openPositions.map((position, index) => (
                <div key={index} className="p-6 md:p-8 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <a 
                      href="https://job-interview-ac1653.zapier.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                    >
                      Apply Now <Briefcase className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                  <p className="text-gray-700 mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* University Internship Section */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-16">
            <div className="p-6 md:p-8 border-b border-gray-200 bg-blue-50">
              <div className="flex items-center">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">University Internship Program</h2>
                  <p className="text-gray-600">Opportunities for Computer Science students to gain real-world AI experience</p>
                </div>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {internshipPrograms.map((program, index) => (
                <div key={index} className="p-6 md:p-8 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1 text-blue-500" />
                          <span>{program.season}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1 text-blue-500" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                          <span>{program.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{program.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                      <a 
                        href="https://job-interview-ac1653.zapier.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                      >
                        Apply Now <GraduationCap className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {program.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Responsibilities:</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {program.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 md:p-8 bg-blue-50">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Intern at Kynos AI?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-800 mb-2">Meaningful Projects</h4>
                    <p className="text-gray-600">Work on real-world projects that impact our clients and contribute to our product development.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-800 mb-2">Mentorship</h4>
                    <p className="text-gray-600">Receive guidance from experienced professionals who are leaders in the AI industry.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-800 mb-2">Skill Development</h4>
                    <p className="text-gray-600">Enhance your technical skills and gain experience with cutting-edge AI technologies.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-800 mb-2">Future Opportunities</h4>
                    <p className="text-gray-600">Top-performing interns are considered for full-time positions after graduation.</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="https://job-interview-ac1653.zapier.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    Apply for Internship <GraduationCap className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {selectedPosition !== null && (
            <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-16">
              <div className="p-6 md:p-8 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Apply for {openPositions[selectedPosition].title}
                </h2>
                <p className="text-gray-600">Please fill out the form below to apply</p>
              </div>
              
              <div className="p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <CheckCircle2 className="w-16 h-16 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for your interest in joining Kynos AI. We'll review your application and get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                        Resume/CV (PDF) *
                      </label>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        Accepted formats: PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </div>
                    
                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                        Cover Letter
                      </label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setSelectedPosition(null)}
                        className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 mr-4 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <a
                        href="https://job-interview-ac1653.zapier.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                      >
                        Start Interview <Send className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}

          <div className="bg-black/30 rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Why Work With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Cutting-Edge Technology</h3>
                <p className="text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  Work with the latest AI technologies and help shape the future of business innovation.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Remote-First Culture</h3>
                <p className="text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  Enjoy the flexibility of working remotely with a global team of talented professionals.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Competitive Benefits</h3>
                <p className="text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  Comprehensive health insurance, retirement plans, and generous PTO policy.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Professional Growth</h3>
                <p className="text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  Continuous learning opportunities, conference stipends, and career advancement paths.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Diverse & Inclusive</h3>
                <p className="text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  We celebrate diversity and are committed to creating an inclusive environment for all employees.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Work-Life Balance</h3>
                <p className="text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  We value your personal time and encourage a healthy balance between work and life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}