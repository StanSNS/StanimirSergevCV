import { GraduationCap, Calendar, ExternalLink, Award } from 'lucide-react';
import { resumeData } from '../../data/resume-data';

const HREducation = () => {
  const { education, certificates } = resumeData;

  return (
    <section className="py-12 px-6 bg-hr-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-hr-text mb-8">Education & Certificates</h2>

        {/* Education */}
        <div className="space-y-6 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-hr-accent/10 p-3 rounded-full">
                  <GraduationCap className="text-hr-accent" size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-hr-text">
                        {edu.degree}
                      </h3>
                      <p className="text-hr-accent font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-3 text-sm">
                    {edu.location} • {edu.type}
                  </p>

                  {edu.description && (
                    <p className="text-gray-700 mb-3">
                      {edu.description}
                    </p>
                  )}

                  {edu.courses && (
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="bg-hr-primary/10 text-hr-primary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-2xl font-bold text-hr-text mb-6 flex items-center gap-2">
            <Award className="text-hr-success" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all ${
                  cert.certificateUrl
                    ? 'border-l-4 border-hr-success'
                    : 'border-l-4 border-gray-400 opacity-75'
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-hr-text flex-1">
                      {cert.name}
                    </h4>
                    {cert.score && (
                      <span className="bg-hr-success/20 text-hr-success px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                        {cert.score}
                      </span>
                    )}
                    {cert.date === "Coming Soon" && (
                      <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                        Coming Soon
                      </span>
                    )}
                    {cert.date && cert.date.startsWith("Starting") && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  <p className="text-hr-accent font-semibold text-sm mb-1">
                    {cert.issuer}
                  </p>

                  <p className="text-gray-600 text-xs mb-3">
                    {cert.date}
                  </p>

                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-hr-primary hover:text-hr-accent transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HREducation;
