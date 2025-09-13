
import { Container } from '@/components/layout/Container';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { email } from '@/config/infoConfig';
import { cn } from '@/lib/utils';

export default function Contact() {
  return (
    <Container className="mt-16">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-4">Feel free to reach out to me via email or through the form below.</p>
      <ul className="mb-8">
        <li>Email: <a href="mailto:akshaysharmav7@gmail.com" className="text-primary underline">akshaysharmav7@gmail.com</a></li>
      </ul>

      <div className={cn('flex items-center gap-4 mt-8')}> 
        <Link
          href="https://github.com/akshaysharmav7"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="inline-flex items-center justify-center rounded-md hover:bg-accent"
        >
          <FaGithub size={36} />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="https://linkedin.com/in/akshaysharmav"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="inline-flex items-center justify-center rounded-md hover:bg-accent"
        >
          <FaLinkedin size={40} />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          href="https://wa.me/918340321324"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="inline-flex items-center justify-center rounded-md hover:bg-accent"
        >
          <FaWhatsapp size={36} />
          <span className="sr-only">WhatsApp</span>
        </Link>
        <Link
          href={`mailto:${email}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
          className="inline-flex items-center justify-center rounded-md hover:bg-accent"
        >
          <FaEnvelope size={36} />
          <span className="sr-only">Email</span>
        </Link>
      </div>
    </Container>
  );
}
