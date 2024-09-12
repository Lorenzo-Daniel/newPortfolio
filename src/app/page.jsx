import Image from "next/image";
import avatar from "@/app/assets/images/da1.jpg";
import LinksPanel from "@/components/Main/LinksPanel";
import GridIcons from "@/components/Aside/GridIcons";
import ProjetcsSlide from "@/components/Main/ProjectsSlider/ProjetcsSlide";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-dvw  divide-y-2 px-5">
      <div className="flex flex-col mt-10 px-5 max-w-sm xl:max-w-md mb-5">
        <Image
          className="rounded-full"
          src={avatar}
          width={"auto"}
          alt="avatar"
        />
        <div className="flex flex-col justify-center items-center mt-5">
          <h1 className="text-4xl ">Daniel Lorenzo</h1>
          <span>React Developer</span>
        </div>
      </div>
      <LinksPanel />
      <GridIcons props={""} />
      <ProjetcsSlide />
    </div>
  );
}
