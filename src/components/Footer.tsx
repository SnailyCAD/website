import { DISCORD_URL } from "./Nav";

const PORTFOLIO_URL = "https://caspertheghost.me";

export function Footer() {
  return (
    <footer className="py-10">
      <p>
        Created by <FooterLink href={PORTFOLIO_URL}>CasperTheGhost</FooterLink> and{" "}
        <FooterLink href={DISCORD_URL}>the amazing community</FooterLink>.
      </p>
    </footer>
  );
}

function FooterLink(props: JSX.IntrinsicElements["a"]) {
  return (
    <a {...props} className="underline cursor-pointer" target="_blank" rel="noreferrer noopener" />
  );
}
