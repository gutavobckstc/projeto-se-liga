import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  imageUrl,
  index,
}: ProjectCardProps) => {
  return (
    <article
      className="group bg-gradient-card rounded-xl border border-border/50 overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-up opacity-0"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Project Image */}
      <div className="aspect-video bg-secondary/50 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-heading font-bold text-muted-foreground/30">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {liveUrl && (
            <Button variant="social" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Ver Projeto
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                Código
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
