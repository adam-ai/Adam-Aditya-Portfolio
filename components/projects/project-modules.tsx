
import type { ProjectModuleInterface } from "@/config/projects";
import ProjectDescription from "@/components/projects/project-description";
import ChipContainer from "@/components/ui/chip-container";

interface ProjectModulesProps {
  modules: ProjectModuleInterface[];
}

export default function ProjectModules({
  modules,
}: ProjectModulesProps) {
  return (
    <div className="mb-7">
      <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
        Product Modules
      </h2>

      <p className="text-muted-foreground mb-5">
        Explore the modules within the Cerebro Suite ecosystem.
      </p>

      <div className="space-y-3">
        {modules.map((module, index) => (
          <details
            key={module.id}
            className="group border border-border rounded-lg"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-sm text-muted-foreground font-medium">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h3 className="font-heading text-lg font-semibold">
                    {module.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {module.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden sm:inline-flex text-xs border border-border rounded-full px-3 py-1 text-muted-foreground">
                  {module.status}
                </span>

                <span className="text-muted-foreground transition-transform duration-200 group-open:rotate-180">
                  ▼
                </span>
              </div>
            </summary>

            <div className="border-t border-border p-4 space-y-5">
              <span className="inline-flex sm:hidden text-xs border border-border rounded-full px-3 py-1 text-muted-foreground">
                {module.status}
              </span>

              <p>{module.shortDescription}</p>

              <div>
                <h4 className="font-semibold mb-2">
                  Key Contributions
                </h4>

                <ProjectDescription
                  paragraphs={module.descriptionDetails.paragraphs}
                  bullets={module.descriptionDetails.bullets}
                />
              </div>

              {module.techStack.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">
                    Tools & Knowledge
                  </h4>
                  <ChipContainer textArr={module.techStack} />
                </div>
              )}

              {module.websiteLink && (
                <a
                  href={module.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Visit Product
                  <span className="ml-2">↗</span>
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
