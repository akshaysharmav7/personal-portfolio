"use client"

import { email, socialLinks } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { cn } from '@/lib/utils';

export default function SocialLinks({ className }: { className?: string }) {
    return (
        <div className={cn("mt-6 flex items-center gap-4", className)}>
            <Link
                href="https://github.com/akshaysharmav7"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center rounded-md hover:bg-accent"
            >
                <FaGithub size={25}  />
                <span className="sr-only">GitHub</span>
            </Link>
            <Link
                href="https://linkedin.com/in/akshaysharmav"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center rounded-md hover:bg-accent"
            >
                <FaLinkedin size={30}  />
                <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
                href="https://wa.me/918340321324"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center rounded-md hover:bg-accent"
            >
                <FaWhatsapp size={25}  />
                <span className="sr-only">WhatsApp</span>
            </Link>
            <Link
                href={`mailto:${email}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="inline-flex items-center justify-center rounded-md hover:bg-accent"
            >
                <FaEnvelope size={25}  />
                <span className="sr-only">Email</span>
            </Link>
        </div>
    )
}