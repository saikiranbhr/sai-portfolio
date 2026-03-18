export function Footer() {
  return (
    <footer className="py-8 border-t-3 border-primary dark:border-pop-blue bg-primary dark:bg-surface-dark text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-heading font-bold uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Sai Kiran B — Built with Next.js & Tailwind
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:saikiranbhr@gmail.com"
            className="text-sm font-heading font-bold uppercase tracking-wider hover:text-pop-yellow dark:hover:text-pop-blue transition-colors"
          >
            Email
          </a>
          <span className="text-white/30">/</span>
          <a
            href="https://linkedin.com/in/saikiranbhr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-heading font-bold uppercase tracking-wider hover:text-pop-yellow dark:hover:text-pop-blue transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-white/30">/</span>
          <a
            href="/resume.pdf"
            className="text-sm font-heading font-bold uppercase tracking-wider hover:text-pop-yellow dark:hover:text-pop-blue transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
