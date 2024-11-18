import { Code, LucideSquareArrowOutUpRight } from "lucide-react";
import { projects, ProjectType } from "../../db";
export default function Home() {
  return (
    <>
      <div className="p-4 xl:px-0 ">
        <Hero />
        <Projects />
        <Skills />
      </div>
    </>
  );
}

const Projects = () => {
  const data = projects || [];
  return (
    <div className="dark:text-gray-300">
      <h2 className="text-4xl font-semibold mb-4">Projects,</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((project) => (
          <SingleProject key={project.id} data={project} />
        ))}

      </div>
    </div>
  );
};

const SingleProject = ({ data }: { data: ProjectType }) => {
  return (
    <div className="shadow dark:text-gray-300 border p-4 rounded dark:border-gray-700">
      <img src={data.imageLink} alt={data.name} className="border dark:border-gray-700 w-full h-52 md:h-80 object-fill rounded"
      />
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold line-clamp-1">{data.name}</h3>
          <div className="flex items-center gap-2">
            {data.gitLink && <a
              href={data.gitLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center
               h-8 w-8 bg-gray-100 dark:bg-gray-700 px-2 rounded-full">
                <Code className="w-6 h-6" /></div>
            </a>}
            {data.liveLink && <a
              href={data.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center
               h-8 w-8 bg-gray-100 dark:bg-gray-700 px-2 rounded-full">
                <LucideSquareArrowOutUpRight className="w-6 h-6" /></div>
            </a>}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">{
          data.tags.map((tag) => (
            <p key={tag} className="bg-gray-100 dark:bg-gray-700
           px-3 rounded-full py-1 capitalize text-sm border dark:border-gray-600">{tag}</p>
          ))}

        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="dark:text-gray-300 xl:py-12 pb-4">
      <h2 className="text-4xl font-semibold mb-4">Hi There,</h2>
      <p className=" text-lg md:text-2xl">
        I am Asif, a self-taught web developer with a passion for creating beautiful
        and functional websites. I have a strong background in web
        development and I am always looking to learn new technologies. I
        am currently looking for a full time position as a web developer.
        Feel free to view my works below or contact me.
      </p>
    </div>
  );
};


const Skills = () => {
  const data = projects || [];
  const tags = [...new Set(data.map((project) => project.tags).flat())];
  return (
    <div className="xl:py-12 py-4 dark:text-gray-300">
      <div className="mt-4 flex justify-center flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag} className="bg-gray-100 dark:bg-gray-700
           px-3 rounded-full py-1 capitalize text-sm border dark:border-gray-600">{tag}</p>
        ))}

      </div>
    </div>
  );
};