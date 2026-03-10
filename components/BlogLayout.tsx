import Link from 'next/link';

interface BlogLayoutProps {
  title: string;
  publishDate: string;
  readTime: string;
  children: React.ReactNode;
}

export function BlogLayout({ title, publishDate, readTime, children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#1a365d] font-bold text-xl">
            🌐 Reloca.ai
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/blog" className="text-gray-600 hover:text-[#1a365d] transition-colors">Blog</Link>
            <Link href="/plan-36" className="bg-[#38b2ac] hover:bg-[#2c9a94] text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Take the Quiz
            </Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-[#1a365d]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-[#1a365d]">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1a365d]">{title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 pt-6 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] leading-tight">{title}</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <time>{publishDate}</time>
          <span>·</span>
          <span>{readTime}</span>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <div className="prose prose-lg max-w-none prose-headings:text-[#1a365d] prose-a:text-[#38b2ac] prose-a:no-underline hover:prose-a:underline">
          {children}
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Reloca.ai — AI-Powered Relocation Intelligence</p>
        </div>
      </footer>
    </div>
  );
}
