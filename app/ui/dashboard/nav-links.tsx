import {
  HomeModernIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeModernIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: ClipboardDocumentListIcon,
  },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="text-wh flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-neutral-900 p-3 text-sm font-medium text-white hover:bg-neutral-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
