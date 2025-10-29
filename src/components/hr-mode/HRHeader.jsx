import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { resumeData } from '../../data/resume-data';

const HRHeader = () => {
  const { personal } = resumeData;

  return (
    <header className="bg-gradient-to-r from-hr-primary to-hr-accent text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Photo */}
          <div className="w-40 h-40 rounded-3xl overflow-hidden border-4 border-white/30 shadow-xl">
            <img
              src="/assets/profile-photo.jpg"
              alt={personal.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-2 animate-fade-in">
              {personal.name}
            </h1>
            <p className="text-2xl mb-6 text-blue-100 animate-slide-up">
              {personal.title}
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all"
              >
                <Mail size={16} />
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all"
              >
                <Phone size={16} />
                {personal.phone}
              </a>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <MapPin size={16} />
                {personal.location}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HRHeader;
