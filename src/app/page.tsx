import GradientBackground from "./components/gradient-bg";
import ProjectsList from "./components/projects-list";
import Toolbox from "./components/toolbox";
import styles from "./home.module.css";

const PROJ_DATA = [
  {
    title: "PokerAI",
    desc: "Made a poker playing AI agent using monte carlo algo. Also alpha beta pruning minimax agent. You can play a 1v1 game against it",
    keyWords: ["AI", "Monte Carlo"],
  },
  {
    title: "Opticare",
    keyWords: ["React Native", "Javascript"],
    desc: "Mobile application for a retail eye-wear store. App allows customers to customize spectacles with lenses, has robust cart functionality, admin panel for managing orders, products and viewing sales analytics. The android and iOS apps were built with React Native, Expo and Supabase",
  },
  {
    title: "Pilots Universe",
    desc: "Worked closely with the client to develop an iOS & Android App as a Hub for aspiring pilots. It has features like News, Handbooks, Chat Groups and more. We built it using React Native, ReactJS and Firebase.",
    keyWords: ["React Native", "Firebase"],
  },
  {
    title: "Cogito",
    keyWords: ["React", "Postgresql"],
    desc: "Cogito is an open platform where readers can come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike can dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-0 bg-gray-300">
      <GradientBackground
        children={
          <div className={styles.wrapper}>
            <h1 className={styles.section_heading}>MY TOOLBOX</h1>
            <Toolbox />
            <div className={styles.section_divider} />
            <h1 className={styles.section_heading}>PROJECTS</h1>
            {PROJ_DATA.map((proj, index) => (
              <ProjectsList
                key={index}
                rank={index}
                title={proj.title}
                keyWords={proj.keyWords}
                desc={proj.desc}
              />
            ))}
            <div className={styles.section_divider} />
          </div>
        }
      />
    </main>
  );
}
