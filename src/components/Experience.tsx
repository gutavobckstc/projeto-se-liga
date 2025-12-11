import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Desenvolvedor Full Stack",
    company: "Empresa Exemplo",
    period: "2023 - Presente",
    description: "Desenvolvimento de aplicações web utilizando React, Node.js e bancos de dados relacionais. Implementação de APIs RESTful e integração com serviços externos."
  },
  {
    title: "Desenvolvedor Front-end",
    company: "Startup Tech",
    period: "2022 - 2023",
    description: "Criação de interfaces responsivas e acessíveis utilizando HTML, CSS e JavaScript. Colaboração em projetos ágeis com metodologia Scrum."
  },
  {
    title: "Estagiário de Desenvolvimento",
    company: "Agência Digital",
    period: "2021 - 2022",
    description: "Suporte no desenvolvimento de sites e landing pages. Aprendizado de boas práticas de programação e versionamento com Git."
  }
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Trajetória
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-4 text-foreground">
            Experiência Profissional
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Minha jornada no mundo do desenvolvimento
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
