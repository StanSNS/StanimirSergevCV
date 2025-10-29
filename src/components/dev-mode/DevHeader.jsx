import { Mail, MapPin, Terminal } from 'lucide-react';
import { resumeData } from '../../data/resume-data';
import { useState, useEffect } from 'react';

const DevHeader = () => {
  const { personal } = resumeData;
  const [typedText, setTypedText] = useState('');
  const fullText = personal.name;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-gradient-to-br from-dev-background via-slate-900 to-dev-background text-dev-text py-16 px-6 border-b-2 border-dev-primary/30">
      <div className="max-w-6xl mx-auto">
        {/* Terminal Header */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-t-lg border border-slate-700 p-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-gray-400 font-mono">terminal — bash — 80x24</span>
        </div>

        {/* Terminal Content */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-b-lg border-x border-b border-slate-700 p-8 font-mono">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Profile Photo */}
            <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-dev-primary/50 shadow-lg shadow-dev-primary/20 flex-shrink-0">
              <img
                src="/assets/profile-photo.jpg"
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Terminal Text */}
            <div className="space-y-2 text-sm flex-1">
              <div className="flex items-center gap-2">
                <Terminal className="text-dev-accent" size={16} />
                <span className="text-dev-accent">visitor@stanimir-cv</span>
                <span className="text-gray-400">:</span>
                <span className="text-dev-primary">~</span>
                <span className="text-gray-400">$</span>
                <span className="text-dev-text">cat developer.profile</span>
              </div>

              <div className="mt-4 space-y-1 text-gray-300">
                <div className="text-dev-primary text-2xl font-bold mb-2">
                  {typedText}
                  <span className="animate-pulse">_</span>
                </div>

                <div>
                  <span className="text-dev-secondary">const</span>{' '}
                  <span className="text-dev-code">role</span>{' '}
                  <span className="text-white">=</span>{' '}
                  <span className="text-dev-warning">"{personal.title}"</span>
                  <span className="text-white">;</span>
                </div>
              </div>

              <div className="mt-4 space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-dev-primary" />
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-dev-primary hover:text-dev-accent transition-colors underline"
                  >
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-dev-primary" />
                  <span className="text-gray-400">{personal.location}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="text-gray-500">// Links</div>
                <div className="flex gap-4 mt-2">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dev-primary hover:text-dev-accent transition-colors"
                  >
                    {"{ LinkedIn }"}
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dev-primary hover:text-dev-accent transition-colors"
                  >
                    {"{ GitHub }"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DevHeader;
