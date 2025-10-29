import { resumeData } from '../../data/resume-data';

const DevFooter = () => {
  const { languages, interests, currentlyLearning, personal } = resumeData;

  return (
    <footer className="py-12 px-6 bg-slate-900 border-t-2 border-dev-primary/30">
      <div className="max-w-6xl mx-auto font-mono">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
            <div className="text-dev-warning mb-4 text-sm">
              <span className="text-dev-code">languages</span>
              <span className="text-white">: {'{'}</span>
            </div>
            <div className="space-y-3 pl-4">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-dev-text">"{lang.name}"</span>
                    <span className="text-gray-500">{lang.level}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1.5">
                    <div
                      className="bg-dev-accent h-1.5 rounded-full"
                      style={{ width: `${lang.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-white mt-2">{'}'}</div>
          </div>

          {/* Interests */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
            <div className="text-dev-warning mb-4 text-sm">
              <span className="text-dev-code">interests</span>
              <span className="text-white">: [</span>
            </div>
            <div className="space-y-2 pl-4 text-sm">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-dev-text"
                >
                  <span>{interest.icon}</span>
                  <span>"{interest.name}"</span>
                  {index < interests.length - 1 && <span className="text-white">,</span>}
                </div>
              ))}
            </div>
            <div className="text-white mt-2">]</div>
          </div>

          {/* Currently Learning */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
            <div className="text-dev-warning mb-4 text-sm">
              <span className="text-dev-code">currentlyLearning</span>
              <span className="text-white">: [</span>
            </div>
            <div className="space-y-2 pl-4 text-sm">
              {currentlyLearning.map((item, index) => (
                <div
                  key={index}
                  className="text-dev-primary"
                >
                  "{item}"{index < currentlyLearning.length - 1 && <span className="text-white">,</span>}
                </div>
              ))}
            </div>
            <div className="text-white mt-2">]</div>
          </div>
        </div>

        {/* Copyright & Info */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="bg-slate-950/50 rounded p-4 text-xs space-y-2">
            <div className="text-gray-500">
              {"// Built with passion and late-night coffee ☕"}
            </div>
            <div className="text-dev-text">
              <span className="text-dev-secondary">const</span>{' '}
              <span className="text-dev-code">copyright</span>{' '}
              <span className="text-white">=</span>{' '}
              <span className="text-dev-warning">
                "© {new Date().getFullYear()} {personal.name}. All rights reserved."
              </span>
              <span className="text-white">;</span>
            </div>
            <div className="text-dev-text">
              <span className="text-dev-secondary">const</span>{' '}
              <span className="text-dev-code">techStack</span>{' '}
              <span className="text-white">=</span>{' '}
              <span className="text-white">{'['}</span>
              <span className="text-dev-warning">"React"</span>
              <span className="text-white">, </span>
              <span className="text-dev-warning">"Vite"</span>
              <span className="text-white">, </span>
              <span className="text-dev-warning">"Tailwind CSS"</span>
              <span className="text-white">{']'}</span>
              <span className="text-white">;</span>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800">
              <div className="text-dev-accent">
                {">"} System.out.println("Thanks for visiting! Let's build something amazing together. 🚀");
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DevFooter;
