import { motion } from 'framer-motion';
import { ExperienceTimeline, ExperienceItem } from '../components/ExperienceTimeline';
import { EducationTimeline, EducationEntry } from '../components/EducationTimeline';

export function AboutMe() {
  const experiences: ExperienceItem[] = [
    {
      company: 'Linedata',
      role: 'C# .NET Developer',
      period: 'Nov 2025 – Present',
      description: 'Developing enterprise financial software solutions using C# and .NET framework.',
      logo: '/linedata.png' // <--- Updated path
    },
    {
      company: 'King Solar Agency',
      role: 'Founder & Full-Stack Web Developer',
      period: 'Aug 2024 – Jun 2025',
      description: 'Launched and scaled a web design agency for the U.S. solar market. Delivered high-converting lead-gen websites with 100% client satisfaction and 60% faster loading speed.',
      logo: '/king-solar-agency.png' // <--- Updated path
    },
    {
      company: 'BestWay IT',
      role: 'Final Year Project Intern',
      period: 'Feb 2025 – Jun 2025',
      description: 'Engineered a full-stack patient management platform integrating AI and IBM FileNet, reducing manual workloads by 30%.',
      logo: '/bestway-it.png' // <--- Updated path
    },
    {
      company: 'SWD Agency',
      role: 'Web Developer',
      period: 'Sep 2023 – May 2024',
      description: 'Developed and maintained 6+ platforms, customized backend modules, and improved client satisfaction by 25%.',
      logo: '/swd-agency.png' // <--- Updated path
    },
  ];

  const education: EducationEntry[] = [
    {
      title: 'Engineering Degree in Computer Science',
      institution: "ESPRIT – École d'ingénieurs en Tunisie",
      dateRange: '2025–2029',
      status: { text: 'In Progress', type: 'progress' }
    },
    {
      title: "Bachelor's in Computer Science",
      institution: 'Faculty of Sciences of Tunis',
      dateRange: '2022–2025',
      status: { text: 'Graduated with Honors (Excellent)', type: 'success' }
    },
    {
      title: 'High School Diploma in Computer Science',
      institution: 'Lycée Cité Essalem Boumhal',
      dateRange: '2022',
      status: { text: 'Graduated with Honors (Très Bien)', type: 'success' }
    },
  ];

  return (
    <div className="w-full max-w-[1150px] px-4 sm:px-6 md:px-8 flex flex-col gap-20 relative pt-20">
      {/* About Me Section */}
      <motion.div
        className="flex flex-col gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Supertitle */}
        <div className="flex items-center gap-3">
          <div
            className="w-2 h-2 rounded-full bg-[#f2f2f2]"
            style={{
              boxShadow: '0 0 20px 2px rgba(242, 242, 242, 0.4), 0 0 40px 4px rgba(242, 242, 242, 0.2)',
            }}
          />
          <span
            className="text-sm font-medium uppercase tracking-[0.2em] text-[#f2f2f2]/60"
            style={{ fontFamily: '"Neue Montreal", sans-serif' }}
          >
            About Me
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.9] tracking-[-0.02em]"
          style={{
            textShadow: 'rgba(0, 87, 255, 0.15) 0px 5px 10px, rgba(255, 90, 0, 0.1) 0px -5px 10px, rgba(255, 255, 255, 0.3) 0px -5px 25px',
            fontFamily: '"Neue Montreal", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          I build beautiful products that turn ideas into{' '}
          <span
            className="italic bg-gradient-to-b from-[#f2f2f2] from-50% to-transparent to-90% bg-clip-text text-transparent"
            style={{
              textShadow: 'rgba(0, 87, 255, 0.1) 0px 5px 15px, rgba(255, 90, 0, 0.08) 0px -5px 15px, rgba(255, 255, 255, 0.2) 0px 0px 30px',
              fontFamily: 'Gloock, Georgia, serif',
            }}
          >
            experiences worth remembering.
          </span>
        </h1>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Profile Image */}
          <motion.div
            className="lg:col-span-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
                style={{
                  background: 'radial-gradient(circle at center, rgba(242, 242, 242, 0.4), transparent 70%)',
                }}
              />
              <img
                src="/profile.png" // Ensure this is also correctly pointing to your public folder
                alt="Louay Cheker Sassi"
                className="relative w-64 h-64 rounded-2xl object-cover border border-[#f2f2f2]/10"
                style={{
                  boxShadow: '0 20px 60px 0 rgba(0, 0, 0, 0.4)',
                }}
              />
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              className="text-lg leading-relaxed text-[#f2f2f2]/70 space-y-4"
              style={{ fontFamily: '"Neue Montreal", sans-serif' }}
            >
              <p>
                Hi, I'm Louay Cheker Sassi, a Full-Stack Developer with a passion for building
                intelligent systems that solve real-world problems. Currently working as a
                C# .NET Developer at Linedata, I specialize in creating enterprise-grade
                financial software solutions.
              </p>
              <p>
                My journey in tech has been driven by curiosity and a desire to push
                boundaries. From founding King Solar Agency where I built high-converting
                websites for the U.S. solar market, to developing digital management
                platforms at BestWay IT Tunisia, I've consistently delivered solutions that
                combine technical excellence with user-centered design.
              </p>
              <p>
                I thrive at the intersection of design and development, where I can create
                products that are both powerful and intuitive. Whether it's improving
                performance or designing scalable systems, I approach every project with the
                same goal: to build meaningful digital experiences that empower people.
              </p>
              <p>
                Outside of coding, I dedicate my time to volunteering, studying the financial
                markets, and training to strengthen myself both mentally and physically. I
                believe in discipline, consistency, and continuous growth in and out of tech.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Separator */}
      <motion.div
        className="w-full h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(242, 242, 242, 0.2) 50%, transparent)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <ExperienceTimeline title="Experience" experiences={experiences} />
      </motion.div>

      {/* Separator */}
      <motion.div
        className="w-full h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(242, 242, 242, 0.2) 50%, transparent)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />

      {/* Education Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <EducationTimeline title="Education" entries={education} />
      </motion.div>
    </div>
  );
}