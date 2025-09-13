
import { Container } from '@/components/layout/Container'

import SocialLinks from '@/components/home/SocialLinks';
import { headline, introduction, projectHeadLine, projectIntro, projects, techIcons } from '@/config/infoConfig';
import { ProjectCard } from '@/components/project/ProjectCard';
import IconCloud from '@/components/ui/icon-cloud';
import GitHubSnake from '@/components/home/GitHubSnake';




export default function Home() {
  return (
    <Container className="mt-9">
      {/* personal info */}
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
        <div className='md:mt-20'>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl opacity-80">
            {headline}
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            {introduction}
          </p>
          <SocialLinks className='md:mt-24'/>
        </div>
        <div className="relative flex size-full items-center justify-center overflow-hidden w-full px-20 md:px-0 md:w-2/3 ml-auto md:mr-8">
          <IconCloud iconSlugs={techIcons} />
        </div>
      </div>
      {/* GitHub animation */}
      <div className="mt-6 border-t border-zinc-100 py-8 dark:border-zinc-700/40">
        <GitHubSnake />
      </div>
      {/* projects */}
      <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl opacity-80">
          {projectHeadLine}
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mb-8">
          {projectIntro}
        </p>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} titleAs='h3'/>
          ))}
        </ul>
      </div>
    </Container>
  );
}
