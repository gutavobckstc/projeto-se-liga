import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float delay-300" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 animate-fade-up opacity-0">
            Olá, meu nome é
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-fade-up opacity-0 delay-100">
            <span className="text-foreground">Gustavo</span>
            <span className="text-gradient block mt-2">Desenvolvedor Web</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 delay-200">
            Estudante apaixonado por tecnologia, criando experiências digitais 
            únicas e funcionais. Confira meus projetos desenvolvidos ao longo do ano.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 delay-300">
            <Button variant="hero" size="xl" onClick={scrollToProjects}>
              Ver Projetos
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#contato">Entrar em Contato</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
