import { resumeData } from '../../data/resume-data';

const SkillItem = ({ skill, category }) => {
  const getColor = () => {
    if (skill.level >= 85) return 'text-dev-accent border-dev-accent';
    if (skill.level >= 75) return 'text-dev-primary border-dev-primary';
    return 'text-dev-secondary border-dev-secondary';
  };

  const getProficiencyTag = () => {
    if (skill.level >= 90) return 'expert';
    if (skill.level >= 85) return 'advanced';
    if (skill.level >= 75) return 'proficient';
    return 'intermediate';
  };

  return (
    <div className={`flex justify-between items-center py-2 border-l-2 pl-3 ${getColor()}`}>
      <div>
        <span className="font-medium">{skill.name}</span>
        <span className="text-xs text-gray-500 ml-2">
          @{getProficiencyTag()} • {skill.yearsOfExperience}yr
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-xs text-gray-500">{skill.level}%</div>
        <div className="w-20 h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div
            className={`h-full ${getColor().includes('accent') ? 'bg-dev-accent' : getColor().includes('primary') ? 'bg-dev-primary' : 'bg-dev-secondary'}`}
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const DevSkills = () => {
  const { skills, softSkills } = resumeData;

  return (
    <section className="py-12 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto font-mono">
        <div className="text-dev-primary text-xl mb-6">
          <span className="text-gray-500">{"interface"}</span>{' '}
          <span className="text-dev-accent">TechStack</span>{' '}
          <span className="text-white">{'{'}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pl-6">
          {/* Frontend */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
            <div className="text-dev-warning mb-4 flex items-center gap-2">
              <span className="text-2xl">⚛️</span>
              <span className="text-dev-code">frontend</span>
              <span className="text-white">: {'{'}</span>
            </div>
            <div className="space-y-2 pl-4">
              {skills.frontend.map((skill, index) => (
                <SkillItem key={index} skill={skill} category="frontend" />
              ))}
            </div>
            <div className="text-white mt-2">{'}'}</div>
          </div>

          {/* Backend */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
            <div className="text-dev-warning mb-4 flex items-center gap-2">
              <span className="text-2xl">🖥️</span>
              <span className="text-dev-code">backend</span>
              <span className="text-white">: {'{'}</span>
            </div>
            <div className="space-y-2 pl-4">
              {skills.backend.map((skill, index) => (
                <SkillItem key={index} skill={skill} category="backend" />
              ))}
            </div>
            <div className="text-white mt-2">{'}'}</div>
          </div>

          {/* DevOps */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
            <div className="text-dev-warning mb-4 flex items-center gap-2">
              <span className="text-2xl">☁️</span>
              <span className="text-dev-code">devops</span>
              <span className="text-white">: {'{'}</span>
            </div>
            <div className="space-y-2 pl-4">
              {skills.devops.map((skill, index) => (
                <SkillItem key={index} skill={skill} category="devops" />
              ))}
            </div>
            <div className="text-white mt-2">{'}'}</div>
          </div>

          {/* Database */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
            <div className="text-dev-warning mb-4 flex items-center gap-2">
              <span className="text-2xl">🗄️</span>
              <span className="text-dev-code">database</span>
              <span className="text-white">: {'{'}</span>
            </div>
            <div className="space-y-2 pl-4">
              {skills.database.map((skill, index) => (
                <SkillItem key={index} skill={skill} category="database" />
              ))}
            </div>
            <div className="text-white mt-2">{'}'}</div>
          </div>

          {/* Testing */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
            <div className="text-dev-warning mb-4 flex items-center gap-2">
              <span className="text-2xl">🧪</span>
              <span className="text-dev-code">testing</span>
              <span className="text-white">: {'{'}</span>
            </div>
            <div className="space-y-2 pl-4">
              {skills.testing.map((skill, index) => (
                <SkillItem key={index} skill={skill} category="testing" />
              ))}
            </div>
            <div className="text-white mt-2">{'}'}</div>
          </div>

          {/* Tools */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
            <div className="text-dev-warning mb-4 flex items-center gap-2">
              <span className="text-2xl">🛠️</span>
              <span className="text-dev-code">tools</span>
              <span className="text-white">: {'{'}</span>
            </div>
            <div className="space-y-2 pl-4">
              {skills.tools.map((skill, index) => (
                <SkillItem key={index} skill={skill} category="tools" />
              ))}
            </div>
            <div className="text-white mt-2">{'}'}</div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-8 pl-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
            <div className="text-dev-warning mb-4">
              <span className="text-dev-code">softSkills</span>
              <span className="text-white">: [</span>
            </div>
            <div className="flex flex-wrap gap-2 pl-4">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="text-dev-accent text-sm"
                >
                  "{skill}"{index < softSkills.length - 1 && <span className="text-white">,</span>}
                </span>
              ))}
            </div>
            <div className="text-white mt-2">]</div>
          </div>
        </div>

        <div className="text-white text-xl mt-6">{'}'}</div>

        {/* Console output */}
        <div className="mt-6 pl-6">
          <div className="bg-slate-950/50 rounded p-3 text-xs">
            <div className="text-gray-500">
              {"// console.log(Object.keys(techStack).length);"}
            </div>
            <div className="text-dev-accent mt-1">
              {">"} {Object.keys(skills).length} categories | {
                Object.values(skills).reduce((acc, arr) => acc + arr.length, 0)
              }+ technologies mastered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevSkills;
