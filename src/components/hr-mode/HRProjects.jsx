import { ExternalLink, Github } from 'lucide-react';
import { resumeData } from '../../data/resume-data';

const HRProjects = () => {
  const { projects } = resumeData;

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-hr-text mb-8">Featured Projects</h2>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-hr-background p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-hr-accent"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <h3 className="text-xl font-bold text-hr-text">
                  {project.name}
                </h3>
                <span className="text-sm text-gray-600">
                  {project.period}
                </span>
              </div>

              <p className="text-gray-700 mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-hr-text mb-2">Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white px-3 py-1 rounded-full text-hr-primary text-sm font-medium border border-hr-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.repositories && (
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <h4 className="font-semibold text-hr-text mb-3">Repositories:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.repositories.map((repo, i) => (
                      <a
                        key={i}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-white p-3 rounded border border-hr-primary/20 hover:border-hr-primary hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <Github size={16} className="text-hr-primary" />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-hr-primary">
                            {repo.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {repo.commits} commits
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {project.status && (
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    project.isPrivate
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                  {project.teamSize && (
                    <span className="ml-2 inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Team: {project.teamSize} developers
                    </span>
                  )}
                  {project.expectedLaunch && (
                    <span className="ml-2 inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      Launch: {project.expectedLaunch}
                    </span>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {project.githubUrl && !project.repositories && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-hr-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-hr-accent text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HRProjects;
