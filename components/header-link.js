'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLink({linkName, children}) {
    const path = usePathname();
  return (
    <li>
      <Link
        href={linkName}
        className={path.startsWith(linkName) ? "active" : undefined}
      >
        {children}
      </Link>
    </li>
  );
}
