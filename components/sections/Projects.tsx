"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { projectsData } from "@/lib/data";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Clock, CheckCircle, ZoomIn } from "lucide-react";

const ProjectHeader = ({ project, onHover }: { project: (typeof projectsData)[0]; onHover: (show: boolean, rect?: DOMRect) => void }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    onHover(true, rect);
  };

  return (
    <div
      className="relative w-full h-full min-h-[8rem] bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => onHover(false)}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      />
      {/* Hover indicator */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
        <ZoomIn className="w-8 h-8 text-white" />
      </div>
      {/* Status badge */}
      <div className="absolute top-2 right-2 z-10">
        <Badge
          variant="secondary"
          className={`text-xs ${project.status === "ongoing" ? "bg-accent/80 text-accent-foreground" : "bg-primary/80 text-primary-foreground"}`}>
          {project.status === "ongoing" ? (
            <>
              <Clock className="w-3 h-3 mr-1" /> Ongoing
            </>
          ) : (
            <>
              <CheckCircle className="w-3 h-3 mr-1" /> Completed
            </>
          )}
        </Badge>
      </div>
    </div>
  );
};

const ProjectDescription = ({ project }: { project: (typeof projectsData)[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-3">
      <div>
        <p className={`text-sm text-muted-foreground ${isExpanded ? "" : "line-clamp-2"}`}>{project.description}</p>
        <button onClick={() => setIsExpanded(!isExpanded)} className="text-xs text-primary hover:text-primary/80 mt-1 font-medium transition-colors">
          {isExpanded ? "Show less" : "Read more"}
        </button>
      </div>
      <div className="flex flex-wrap gap-1">
        {project.techStack.slice(0, 4).map((tech) => (
          <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary">
            {tech}
          </Badge>
        ))}
        {project.techStack.length > 4 && (
          <div className="relative group/tooltip">
            <Badge
              variant="outline"
              className="text-xs border-muted-foreground/30 text-muted-foreground cursor-pointer hover:border-primary/50 hover:text-primary transition-colors">
              +{project.techStack.length - 4}
            </Badge>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 min-w-max">
              <div className="flex flex-wrap gap-1 max-w-[200px]">
                {project.techStack.slice(4).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-border" />
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 pt-2">
        {project.liveUrl && (
          <Button asChild size="sm" variant="outline" className="h-8 text-xs">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3 h-3 mr-1" /> Live
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild size="sm" variant="outline" className="h-8 text-xs">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-3 h-3 mr-1" /> Code
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

// Fixed preview component that appears outside card container
const ImagePreview = ({
  project,
  isVisible,
  position,
}: {
  project: (typeof projectsData)[0] | null;
  isVisible: boolean;
  position: { x: number; y: number };
}) => {
  if (!project || !isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed z-[100] pointer-events-none"
      style={{
        left: position.x > window.innerWidth / 2 ? position.x - 420 : position.x + 20,
        top: Math.min(position.y, window.innerHeight - 280),
      }}>
      <div className="w-[400px] bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
        <div className="relative w-full aspect-video">
          <Image src={project.image} alt={project.title} fill sizes="400px" loading="lazy" className="object-cover" />
        </div>
        <div className="p-4">
          <p className="text-lg font-semibold text-foreground">{project.title}</p>
          <p className="text-sm text-muted-foreground">{project.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<(typeof projectsData)[0] | null>(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const handleProjectHover = (project: (typeof projectsData)[0]) => (show: boolean, rect?: DOMRect) => {
    if (show && rect) {
      setHoveredProject(project);
      setPreviewPosition({ x: rect.right, y: rect.top });
      setIsPreviewVisible(true);
    } else {
      setIsPreviewVisible(false);
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">A selection of projects I&apos;ve built to solve real problems</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}>
          <BentoGrid className="md:auto-rows-[22rem]">
            {projectsData.map((project, index) => (
              <BentoGridItem
                key={project.title}
                title={project.title}
                description={<ProjectDescription project={project} />}
                header={<ProjectHeader project={project} onHover={handleProjectHover(project)} />}
                className={`${index === 0 ? "md:col-span-2" : ""} bg-card border-border hover:border-primary/50`}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>

      {/* Fixed position image preview */}
      <ImagePreview project={hoveredProject} isVisible={isPreviewVisible} position={previewPosition} />
    </section>
  );
}
