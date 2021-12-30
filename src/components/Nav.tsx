import Link from "next/link";
import * as React from "react";

const DOCS_URL = "https://cad-docs.netlify.app";
const GITHUB_URL = "https://github.com/snailycad/snaily-cadv4";

export function Nav() {
  return (
    <nav className="sticky top-0 bg-slate-800 max-w-5xl w-full flex items-center justify-between h-20 mb-10">
      <h1 className="text-2xl text-white font-bold">SnailyCAD</h1>

      <ul className="flex gap-3">
        <li>
          <Link href={DOCS_URL}>
            <a className="hover:text-white transition-colors font-medium">Documentation</a>
          </Link>
        </li>
        <li>
          <Link href={GITHUB_URL}>
            <a className="hover:text-white transition-colors font-medium">GitHub</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
