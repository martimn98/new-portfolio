"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`transition-colors ${
          isActive
            ? "text-primary-500 hover:text-primary-700"
            : "text-gray-700 dark:text-gray-100 hover:text-primary-400"
        } `}
      >
        {children}
      </Link>
    </li>
  );
}
