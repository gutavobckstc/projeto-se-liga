import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição do primeiro projeto desenvolvido. Adicione detalhes sobre o que foi criado e as tecnologias utilizadas.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Projeto 2",
    description: "Descrição do segundo projeto. Explique as funcionalidades principais e o objetivo do projeto.",
    tags: ["React", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Projeto 3",
    description: "Descrição do terceiro projeto. Destaque os desafios superados e as soluções implementadas.",
    tags: ["TypeScript", "API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Projeto 4",
    description: "Descrição do quarto projeto desenvolvido durante o ano letivo.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Meus Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira os projetos que desenvolvi ao longo do ano, aplicando 
            conhecimentos em HTML, CSS e JavaScript.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
