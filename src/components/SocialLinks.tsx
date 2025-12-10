import { Github, Linkedin, Instagram, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/seu-usuario",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/seu-usuario",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/seu-usuario",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/seu-usuario",
    color: "hover:text-[#1DA1F2]",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:seu-email@exemplo.com",
    color: "hover:text-primary",
  },
];

const SocialLinks = () => {
  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Vamos Conectar</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Entre em contato pelas redes sociais ou envie um e-mail. 
            Estou sempre aberto a novas oportunidades e conversas!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((social, index) => (
              <Button
                key={social.name}
                variant="social"
                size="lg"
                className={`group animate-fade-up opacity-0 ${social.color}`}
                style={{ animationDelay: `${index * 100}ms` }}
                asChild
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>{social.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
