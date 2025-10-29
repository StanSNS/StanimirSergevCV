import { resumeData } from '../../data/resume-data';

const HRAbout = () => {
  const { personal, availability } = resumeData;

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-hr-text mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {personal.bio}
        </p>

        {/* Availability */}
        <div className="bg-hr-background p-6 rounded-lg border-l-4 border-hr-success">
          <h3 className="font-semibold text-hr-text mb-3 text-lg">
            Current Availability
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <div>
              <span className="font-medium">Status:</span> {availability.status}
            </div>
            <div>
              <span className="font-medium">Type:</span> {availability.type.join(', ')}
            </div>
            <div>
              <span className="font-medium">Work Mode:</span> {availability.remote}
            </div>
            <div>
              <span className="font-medium">Available From:</span> {availability.startDate}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRAbout;
