import { resumeData } from '../../data/resume-data';

const SkillBar = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-hr-text">{skill.name}</span>
        <span className="text-sm text-gray-600">
          {skill.yearsOfExperience}+ years
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-hr-primary to-hr-accent h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

const HRSkills = () => {
  const { skills, softSkills } = resumeData;

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-hr-text mb-8">Skills</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-bold text-hr-text mb-4 flex items-center gap-2">
              <span className="text-2xl">⚙️</span>
              Frontend Development
            </h3>
            {skills.frontend.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-hr-text mb-4 flex items-center gap-2">
              <span className="text-2xl">🖥️</span>
              Backend Development
            </h3>
            {skills.backend.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-hr-text mb-4 flex items-center gap-2">
              <span className="text-2xl">☁️</span>
              DevOps & Cloud
            </h3>
            {skills.devops.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-hr-text mb-4 flex items-center gap-2">
              <span className="text-2xl">🗄️</span>
              Database
            </h3>
            {skills.database.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-hr-text mb-4 flex items-center gap-2">
              <span className="text-2xl">🧪</span>
              Testing
            </h3>
            {skills.testing.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-hr-text mb-4 flex items-center gap-2">
              <span className="text-2xl">🛠️</span>
              Tools & Collaboration
            </h3>
            {skills.tools.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-hr-background p-8 rounded-lg">
          <h3 className="text-xl font-bold text-hr-text mb-4 flex items-center gap-2">
            <span className="text-2xl">🤝</span>
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRSkills;
