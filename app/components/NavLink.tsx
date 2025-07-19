"use client";
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
      <a
        href={href}
        className={`transition-colors ${
          isActive
            ? "text-primary-500 hover:text-primary-700"
            : "text-gray-700 hover:text-primary-400"
        } `}
      >
        {children}
      </a>
    </li>
  );
}
