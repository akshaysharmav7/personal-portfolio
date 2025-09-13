// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "I've worked on a variety of projects, from simple websites to complex web applications. And many of them are open-source. Here are a few of my favorites."

export type ProjectItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
  // projects 
  export const projects: Array<ProjectItemType> = [
      {
      name: 'Inxign',
      description:
        'Built Fully Responsive official Website for Inxign pvt. ltd as a freelance Project',
      link: { href: 'inxign.vercel.app/', label: 'Inxign' },
      logo: '/images/icon/domainscore.png',
      category: ['Company Website'],
      techStack: ['Next.js', 'TailwindCSS'],
      tags: ['Freelance Project', 'fully Responsive', 'SEO']
    },
      {
      name: 'AI Chatbot Assistant',
      description:
        'Context-aware Chatbot Assistant for the company clients with ticket escalation feature and other features. It is built on RAG framework  and is fed with company data to generate answer real-time.',
      link: { href: 'wocollp.workcompanion.co/webapp/chat-bot', label: 'GitHub Cards' },
      category: ['App'],
      techStack: ['React.js', 'Qdrant(Vector Db)', 'Mongodb', 'MySQL', 'GPT-4.1', 'Langchain', 'JWT', 'MUI'],
      tags: ['Visual Cards', 'GitHub Contribution Cards']
    },
    {
      name: 'Eat Smart',
      description:
        'A google hackathon winner Diet monitoring app for patients. Patients with IgE mediated Food triggers can track and Identify food nutrional contents which causes allergy and triggers them in real-time',
      link: { href: 'eat-smart.vercel.app/', label: 'Diet monitoring app' },
      category: ['App'],
      techStack: ['Next js', 'Google Vision', 'Firebase'],
      tags: ['Website', 'android'],
      logo: '/images/icon/breathe-app-icon.png',
    },
    {
      name: 'Microsoft Clone',
      description:
        'Fully Responsive and SEO friendly Microsoft Landing Page Clone',
      link: { href: 'microsoftclone-steel.vercel.app/', label: 'Microsoft Landing Page Clone' },
      category: ['Website'],
      techStack: ['HTML5', 'CSS3'],
      tags: ['SEO']
    },
  
    {
      name: 'Book Store Management System',
      description:
        'Find the best AI tools in AIBest.tools',
      link: { href: 'aibest.tools', label: 'AI Best Tools' },
      logo: 'images/icon/aibesttools.png',
      category: ['Website'],
      techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
      tags: ['AI', 'Tools Directory']
    },
  
    {
      name: 'Ticket Resolution System',
      description:
        'Find the best AI tools in MagicBox.tools',
      link: { href: 'magicbox.tools', label: 'MagicBox Tools' },
      logo: '/images/icon/magicbox.png',
      category: ['Website'],
      techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
      tags: ['AI', 'Tools Directory']
    },
  ]
  
  export const githubProjects: Array<ProjectItemType> = [
    {
      name: 'Devtoolset',
      description: 'Open-source & database-free developer tools navigator / 开源无数据库配置的开发者工具导航站',
      link: { href: 'github.com/iAmCorey/devtoolset', label: 'Devtoolset' },
      gitStars: 203,
      gitForks: 67
    },
    {
      name: 'Corey Chiu Portfolio Template',
      description:
        'portfolio template by corey chiu',
      link: { href: 'github.com/iAmCorey/coreychiu-portfolio-template', label: 'Corey Chiu Portfolio Template' },
      gitStars: 229,
      gitForks: 30
    },
    {
      name: 'Chrome Extension Plasmo Template',
      description:
        'A chrome extension template using plasmo, tailwind css, shadcn/ui',
      link: { href: 'github.com/iAmCorey/chrome-extension-plasmo-template', label: 'Chrome Extension Plasmo Template' },
      gitStars: 54,
      gitForks: 10
    },
    {
      name: 'Awesome Indie Hacker Tools',
      description:
        '独立开发/出海开发相关技术栈及工具收录 / Find the best tools for indie hackers here',
      link: { href: 'github.com/iAmCorey/awesome-indie-hacker-tools', label: 'Awesome Indie Hacker Tools' },
      gitStars: 815,
      gitForks: 69
    },
    {
      name: 'Awesome AI Directory',
      description:
        'AI资源工具导航站收录 / Find all the best AI directories',
      link: { href: 'github.com/iAmCorey/awesome-ai-directory', label: 'Awesome AI Directory' },
      gitStars: 40,
      gitForks: 7
    },
    {
      name: 'Producthunt Daily Bot',
      description:
        'A bot getting product hunt daily top products',
      link: { href: 'github.com/iAmCorey/producthunt-daily-bot', label: 'Producthunt Daily Bot' },
      gitStars: 3,
      gitForks: 3
    },
    {
      name: 'Cantonese Echoes',
      description:
        'Cantonese Echoes / 粵語殘片',
      link: { href: 'github.com/iAmCorey/Cantonese-Echoes', label: 'Cantonese Echoes' },
      gitStars: 1
    },
  ]
  