import { FaGithub, FaLinkedinIn, FaEnvelope, FaPaperclip, FaInstagram} from "react-icons/fa";
import Link from "next/link";

export default function SocialIcons() {
  const iconClasses =
    "sm:text-2xl hover:text-sky-400 transition-colors duration-200 text-white";

  return (
    <div className="flex space-x-6 mt-6">
      {/* GitHub */}
      <Link
        href="https://github.com/Kavish-Shah"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={iconClasses} />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/kavish-shah"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className={iconClasses} />
      </Link>
      {/* LinkedIn */}
      <Link
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPaperclip className={iconClasses} />
      </Link>

    {/* Instagram */}
      <Link
        href="https://www.instagram.com/kavishs207"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={iconClasses} />
      </Link>

      {/* Email */}
      <Link
        href="mailto:kavishshah@example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope className={iconClasses} />
      </Link>
    </div>
  );
}
