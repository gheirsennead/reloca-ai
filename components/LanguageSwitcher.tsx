"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1]; // Extracts 'en' or 'fr'

  const switchLocale = (locale: string) => {
    // Replace the current locale in the pathname with the new locale
    const newPath = `/${locale}${pathname.substring(currentLocale.length + 1)}`;
    router.push(newPath);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => switchLocale('en')}
        className={currentLocale === 'en' ? 'active' : ''}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('fr')}
        className={currentLocale === 'fr' ? 'active' : ''}
      >
        FR
      </button>
    </div>
  );
}
