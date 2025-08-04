import { mdiForum, mdiGmail, mdiLinkedin, mdiWhatsapp } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="flex flex-col w-full justify-center px-4 md:px-32 mt-32  gap-5 "
    >
      <div className="flex  gap-4 justify-between pt-8 pb-24 mx-[1/4] border-t-2  border-gray-200 w-full">
        <div className="space-y-4 w-[24rem]">
          <h2 className="font-bold text-base md:text-2xl">About This Page</h2>
          <p className="text-justify text-xs md:text-base">
            This page is built using Nextjs framework with typescript as core
            language and tailwindcss. Deployed using vps with docker
          </p>
        </div>
        <div>
          <div className="flex gap-2">
            <h2 className="md:text-2xl font-bold text-blue-500">Contact Me!</h2>
            <Icon path={mdiForum} size={1.5} color={"#2563eb"} />
          </div>
          <div className="flex gap-5">
            <span>
              <Link href="/linkedin">
                <Icon path={mdiLinkedin} size={2} color={"#2563eb"} />
              </Link>
            </span>
            <span>
              <Icon path={mdiGmail} size={2} color={"#2563eb"} />
            </span>
            <span>
              <Icon path={mdiWhatsapp} size={2} color={"#2563eb"} />
            </span>
          </div>
        </div>
      </div>
      <p className="font-semibold text-center text-gray-300 mb-5">
        &copy; {yearNow} - Tejolog
      </p>
    </footer>
  );
};

export default Footer;
