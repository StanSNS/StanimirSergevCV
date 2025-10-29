import { resumeData } from '../../data/resume-data';

const DevAbout = () => {
  const { personal, availability } = resumeData;

  return (
    <section className="py-12 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono">
          <div className="text-dev-accent text-xl mb-6">
            <span className="text-gray-500">{"/**"}</span>
            <br />
            <span className="text-gray-500">{" * @description "}</span>
            <span className="text-dev-text">About Me</span>
            <br />
            <span className="text-gray-500">{" */"}</span>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
            <div className="mb-4">
              <span className="text-dev-secondary">const</span>{' '}
              <span className="text-dev-code">aboutMe</span>{' '}
              <span className="text-white">=</span>{' '}
              <span className="text-white">{'{'}</span>
            </div>

            <div className="pl-6 space-y-2 text-sm">
              <div>
                <span className="text-dev-code">bio</span>
                <span className="text-white">: </span>
                <span className="text-dev-warning">"{personal.bio}"</span>
                <span className="text-white">,</span>
              </div>

              <div className="pt-4">
                <span className="text-dev-code">availability</span>
                <span className="text-white">: {'{'}</span>
              </div>
              <div className="pl-6 space-y-1">
                <div>
                  <span className="text-dev-code">status</span>
                  <span className="text-white">: </span>
                  <span className="text-dev-warning">"{availability.status}"</span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-dev-code">types</span>
                  <span className="text-white">: [</span>
                  {availability.type.map((type, i) => (
                    <span key={i}>
                      <span className="text-dev-warning">"{type}"</span>
                      {i < availability.type.length - 1 && <span className="text-white">, </span>}
                    </span>
                  ))}
                  <span className="text-white">],</span>
                </div>
                <div>
                  <span className="text-dev-code">remote</span>
                  <span className="text-white">: </span>
                  <span className="text-dev-warning">"{availability.remote}"</span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-dev-code">timezone</span>
                  <span className="text-white">: </span>
                  <span className="text-dev-warning">"{availability.timezone}"</span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-dev-code">startDate</span>
                  <span className="text-white">: </span>
                  <span className="text-dev-warning">"{availability.startDate}"</span>
                </div>
              </div>
              <div>
                <span className="text-white">{'}'}</span>
              </div>
            </div>

            <div className="mt-2">
              <span className="text-white">{'}'}</span>
              <span className="text-white">;</span>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <div className="text-gray-500 text-xs">
                // console.log(aboutMe);
              </div>
              <div className="mt-2 p-3 bg-slate-950/50 rounded text-xs text-dev-accent">
                <span className="text-gray-500">{'>'}</span> Ready to build awesome things! 🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevAbout;
