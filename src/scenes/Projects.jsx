import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectsVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 
  hover:opacity-90
  transition duration-500 bg-grey z-30 flex 
  flex-col justify-center
  text-center p-16 text-depp-blue`;

  const projectTitle = title.split(" ").join("_").toLowerCase();

  return (
    <motion.div variants={projectsVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair"></p>
      </div>
    </motion.div>
  )
}


const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-1/3" />
        </div>
        <p className="mt-10 mb-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          dolores laboriosam temporibus nulla qui sunt eos, eligendi recusandae,
          voluptatum explicabo facere ut deleniti dicta nobis!
        </p>
      </motion.div>
      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div className="flex justify-center text-center 
            items-center p-10 bg-red max-w-[400px] text-2xl 
            font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" />

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
