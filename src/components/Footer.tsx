import { mdiForum, mdiGmail, mdiLinkedin, mdiWhatsapp } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col w-full items-center gap-5 my-32"
    >
      <div className="flex gap-2">
        <h2 className="text-2xl font-bold text-blue-500">Contact Me!</h2>
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
    </footer>
  );
};

export default Footer;
