import { Briefcase, Calendar } from 'lucide-react';
import { resumeData } from '../../data/resume-data';

const HRExperience = () => {
  const { experience } = resumeData;

  return (
    <section className="py-12 px-6 bg-hr-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-hr-text mb-8">Work Experience</h2>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-hr-primary/10 p-3 rounded-full">
                  <Briefcase className="text-hr-primary" size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-hr-text">
                        {job.title}
                      </h3>
                      <p className="text-hr-accent font-semibold">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar size={16} />
                      <span>{job.period}</span>
                      <span className="bg-hr-success/20 text-hr-success px-3 py-1 rounded-full text-xs font-medium">
                        {job.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-1 text-sm">
                    {job.location}
                  </p>

                  <p className="text-gray-700 mb-4">
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-hr-text mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-hr-primary/10 text-hr-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HRExperience;
