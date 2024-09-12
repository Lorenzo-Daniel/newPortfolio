import { FaRegFileLines } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { LiaCertificateSolid } from "react-icons/lia";
import { SiFreelancer } from "react-icons/si";

export const linksData = [
  {
    component: FaGithub,
    name: "My GitHub",
    text: "Here you can see some of the projects I've been working on.",
    className: "text-[#7892d0] rounded-full",
  },
  {
    component: SiFreelancer,
    name: "Freelance",
    text: "Take a look at my latest Freelance project.",
    className: "text-[#7892d0] rounded-full",
  },
  {
    component: GiGiftOfKnowledge,
    name: "certificados",
    text: "Consider the study certificates that complete my Frontend profile.",
    className: "text-[#7892d0] rounded-full",
  },
  {
    component: FaRegFileLines,
    name: "Resume",
    text: "Here you can see my resume.",
    className: "text-[#7892d0] rounded-full",
  },
];
