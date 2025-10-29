import { ExternalLink, Github } from 'lucide-react';
import { resumeData } from '../../data/resume-data';

const DevProjects = () => {
  const { projects } = resumeData;

  return (
    <section className="py-12 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto font-mono">
        <div className="text-dev-primary text-xl mb-6">
          <span className="text-gray-500">{"const"}</span>{' '}
          <span className="text-dev-code">projects</span>{' '}
          <span className="text-white">= [</span>
        </div>

        <div className="space-y-6 pl-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6 hover:border-dev-accent/50 transition-all"
            >
              <div className="mb-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="text-dev-warning font-bold text-lg">
                    {project.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {project.period}
                  </div>
                </div>

                <div className="text-sm text-gray-500 mb-3">
                  // {project.description}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-dev-code text-sm mb-2">
                  <span className="text-dev-secondary">const</span> highlights = {'{'}
                </div>
                <div className="pl-4 space-y-1 text-sm">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-dev-primary">→</span>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="text-white text-sm">{'}'}</div>
              </div>

              <div className="mb-4">
                <div className="text-gray-500 text-sm mb-2">
                  // Technologies used
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <code
                      key={i}
                      className="px-3 py-1 bg-dev-primary/10 text-dev-primary rounded border border-dev-primary/30 text-xs"
                    >
                      {tech}
                    </code>
                  ))}
                </div>
              </div>

              {project.repositories && (
                <div className="mb-4 pb-4 border-b border-slate-700">
                  <div className="text-gray-500 text-sm mb-2">
                    // Multi-repository architecture
                  </div>
                  <div className="text-dev-code text-sm mb-2">
                    <span className="text-dev-secondary">const</span> repositories = [
                  </div>
                  <div className="pl-4 space-y-2">
                    {project.repositories.map((repo, i) => (
                      <a
                        key={i}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-slate-800/50 p-3 rounded border border-dev-primary/20 hover:border-dev-primary/50 transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <Github size={14} className="text-dev-primary" />
                          <span className="text-xs text-dev-text group-hover:text-dev-primary">
                            {repo.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {repo.commits} commits
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="text-white text-sm mt-2">];</div>
                </div>
              )}

              {project.status && (
                <div className="mb-4">
                  <div className="text-gray-500 text-xs mb-2">// Project Status</div>
                  <div className="flex flex-wrap gap-2">
                    <code className={`inline-block px-3 py-1 rounded border text-xs ${
                      project.isPrivate
                        ? 'bg-dev-accent/20 text-dev-accent border-dev-accent/30'
                        : 'bg-dev-primary/20 text-dev-primary border-dev-primary/30'
                    }`}>
                      {project.status}
                    </code>
                    {project.teamSize && (
                      <code className="inline-block bg-dev-secondary/20 text-dev-secondary px-3 py-1 rounded border border-dev-secondary/30 text-xs">
                        team_size: {project.teamSize}
                      </code>
                    )}
                    {project.expectedLaunch && (
                      <code className="inline-block bg-dev-warning/20 text-dev-warning px-3 py-1 rounded border border-dev-warning/30 text-xs">
                        launch: "{project.expectedLaunch}"
                      </code>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-700">
                {project.githubUrl && !project.repositories && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-dev-primary/20 text-dev-primary px-4 py-2 rounded border border-dev-primary/30 hover:bg-dev-primary/30 transition-colors text-sm"
                  >
                    <Github size={16} />
                    <span>View Source</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-dev-accent/20 text-dev-accent px-4 py-2 rounded border border-dev-accent/30 hover:bg-dev-accent/30 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-white text-xl mt-6">];</div>

        <div className="mt-6 pl-6">
          <div className="bg-slate-950/50 rounded p-3 text-xs">
            <div className="text-gray-500">
              {"// console.log(`Total projects: ${projects.length}`);"}
            </div>
            <div className="text-dev-accent mt-1">
              {">"} Total projects: {projects.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevProjects;
