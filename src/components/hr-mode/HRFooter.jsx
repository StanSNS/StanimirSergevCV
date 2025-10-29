import { resumeData } from '../../data/resume-data';
import { Globe } from 'lucide-react';

const HRFooter = () => {
  const { languages, interests, currentlyLearning } = resumeData;

  return (
    <footer className="py-12 px-6 bg-hr-background border-t-2 border-hr-primary/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Languages */}
          <div>
            <h3 className="text-xl font-bold text-hr-text mb-4 flex items-center gap-2">
              <Globe size={20} />
              Languages
            </h3>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{lang.name}</span>
                    <span className="text-sm text-gray-600">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-hr-success h-2 rounded-full"
                      style={{ width: `${lang.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-xl font-bold text-hr-text mb-4">
              Interests
            </h3>
            <div className="space-y-2">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="text-xl">{interest.icon}</span>
                  <span>{interest.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div>
            <h3 className="text-xl font-bold text-hr-text mb-4">
              Currently Learning
            </h3>
            <div className="space-y-2">
              {currentlyLearning.map((item, index) => (
                <div
                  key={index}
                  className="bg-white px-3 py-2 rounded-lg text-gray-700 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-300">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with React, Vite, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HRFooter;
