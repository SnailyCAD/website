import Link from "next/link";
import * as React from "react";
import { Discord, Github } from "react-bootstrap-icons";

const DOCS_URL = "https://cad-docs.netlify.app";
const GITHUB_URL = "https://github.com/snailycad/snaily-cadv4";
export const DISCORD_URL = "https://discord.gg/eGnrPqEH7U";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full h-20 max-w-5xl mb-10 bg-slate-800">
      <h1 className="text-2xl font-bold text-white">SnailyCAD</h1>

      <ul className="hidden gap-x-5 sm:flex">
        <li>
          <a href="#features" className="font-medium transition-colors hover:text-white">
            Top Features
          </a>
        </li>
        <li>
          <a href="#reviews" className="font-medium transition-colors hover:text-white">
            Reviews
          </a>
        </li>
        <li>
          <Link href={DOCS_URL}>
            <a className="font-medium transition-colors hover:text-white">Documentation</a>
          </Link>
        </li>
      </ul>

      <ul className="items-center gap-x-3 flex">
        <li>
          <Link href={GITHUB_URL}>
            <a className="font-medium transition-colors hover:text-white">
              <Github aria-label="GitHub Repository" width={20} height={20} />
            </a>
          </Link>
        </li>
        <li>
          <Link href={DISCORD_URL}>
            <a className="font-medium transition-colors hover:text-white">
              <Discord aria-label="Discord Server" width={20} height={20} />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
