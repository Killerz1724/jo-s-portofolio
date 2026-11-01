import {
  mdiForum,
  mdiGithub,
  mdiGmail,
  mdiLinkedin,
  mdiWhatsapp,
} from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import CopyClipboard from "./CopyClipboard";
import Tooltip from "./Tooltip";

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="flex flex-col w-full justify-center px-4 md:px-10 lg:px-20 mt-32 gap-5"
    >
      <div className="flex flex-col lg:flex-row gap-8 justify-between pt-8 pb-20 border-t border-slate-200 dark:border-slate-800 w-full">
        <div className="space-y-3 max-w-md">
          <h2 className="font-extrabold text-xl md:text-2xl text-slate-900 dark:text-white tracking-tight">
            About This Page
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            This portfolio is built using Next.js 15 App Router with TypeScript,
            React 19, and Tailwind CSS. Deployed using Docker on VPS.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl md:text-2xl font-extrabold text-blue-600 dark:text-blue-400">
              Contact Me!
            </h2>
            <Icon
              path={mdiForum}
              size={0.9}
              className="text-blue-600 dark:text-blue-400"
            />
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/linkedin"
              target="_blank"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Icon path={mdiLinkedin} size={1.2} />
            </Link>
            <Tooltip text="rifqihananto50@gmail.com" position="top">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <CopyClipboard
                  displayText={null}
                  textCopy="rifqihananto50@gmail.com"
                  leftIcon={mdiGmail}
                />
              </div>
            </Tooltip>
            <Link
              href="https://wa.me/6281313568703"
              target="_blank"
              aria-label="WhatsApp Contact"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Icon path={mdiWhatsapp} size={1.2} />
            </Link>
            <Link
              href="https://github.com/Killerz1724"
              target="_blank"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Icon path={mdiGithub} size={1.2} />
            </Link>
          </div>
        </div>
      </div>
      <p className="font-medium text-center text-xs text-slate-400 dark:text-slate-600 mb-8">
        &copy; {yearNow} — Tejofolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
