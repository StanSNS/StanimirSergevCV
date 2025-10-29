import { resumeData } from '../../data/resume-data';
import { Terminal } from 'lucide-react';

const DevExperience = () => {
  const { experience } = resumeData;

  return (
    <section className="py-12 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto font-mono">
        <div className="text-dev-primary text-xl mb-6 flex items-center gap-2">
          <Terminal size={24} />
          <span className="text-gray-500">{"class"}</span>{' '}
          <span className="text-dev-accent">WorkExperience</span>{' '}
          <span className="text-white">{'{'}</span>
        </div>

        <div className="space-y-8 pl-6">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6 hover:border-dev-primary/50 transition-colors"
            >
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-500">{'/*'}</span>
                  <span className="text-dev-warning font-bold">{job.title}</span>
                  <span className="text-gray-500">{'*/'}</span>
                </div>
                <div className="text-sm">
                  <span className="text-dev-secondary">const</span>{' '}
                  <span className="text-dev-code">company</span>{' '}
                  <span className="text-white">=</span>{' '}
                  <span className="text-dev-warning">"{job.company}"</span>
                  <span className="text-white">;</span>
                </div>
                <div className="text-sm">
                  <span className="text-dev-secondary">const</span>{' '}
                  <span className="text-dev-code">period</span>{' '}
                  <span className="text-white">=</span>{' '}
                  <span className="text-dev-warning">"{job.period}"</span>
                  <span className="text-white">;</span>
                  <span className="ml-4 text-dev-accent">// {job.duration}</span>
                </div>
              </div>

              <div className="mb-4 text-sm text-gray-300">
                <div className="text-gray-500">// Description</div>
                <p className="text-dev-text">{job.description}</p>
              </div>

              <div className="mb-4">
                <div className="text-gray-500 text-sm mb-2">// Key Achievements</div>
                <div className="space-y-1 text-sm">
                  {job.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-dev-accent">✓</span>
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-gray-500 text-sm mb-2">// Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dev-primary/20 text-dev-primary rounded border border-dev-primary/30 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-white text-xl mt-6">{'}'}</div>
      </div>
    </section>
  );
};

export default DevExperience;
