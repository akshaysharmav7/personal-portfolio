export * from './projects'

export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Akshay'
export const headline = 'Software engineer, Full-Stack web developer, and aspiring DevOps engineer.'
export const introduction = 'I’m Akshay Kumar, a software engineer based in Bengaluru, India. I like coding, and building interesting things'
export const email = 'akshaysharmav7@gmail.com'
export const githubUsername = 'akshaysharmav'

// about page
export const aboutMeHeadline = "I’m a Software Engineer and Full-Stack Developer currently based in Bengaluru, with 1 year of professional experience and 2 years of freelance projects."
export const aboutParagraphs = [
" I developed a passion for coding back in high school, where I wrote my first program in JavaScript.",
"Outside of work, I enjoy a variety of hobbies including traveling, photography, watching movies, and listening to music.",
"Currently, I’m working as a Junior Software Developer at Impulse International Pvt. Ltd. in Gurugram, India. Alongside my role, I actively build side projects and take on freelance work to expand my skills and experience."
]


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about AI, programming and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/akshaysharmav',
    external: true
  },
  {
    name: 'LinkedIn',
    icon: 'bank', // using 'bank' as a placeholder for LinkedIn
    href: 'https://linkedin.com/in/akshaysharmav',
    external: true
  },
  {
    name: 'WhatsApp',
    icon: 'wechat', // using 'wechat' as a placeholder for WhatsApp
    href: 'https://wa.me/918340321324',
    external: true
  }
];

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];



