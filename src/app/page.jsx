import InformationPanel from "@/components/Home/InformationPanel/InformationPanel";
import GridIcons from "@/components/Home/tecnologiesPanel/GridIcons";
import ProjetcsGrid from "@/components/Home/ProjectsPanel/ProjetcsGrid";
import Hero from "@/components/Home/Hero/Hero";




export default function Home() {
  return (
    <div className="flex flex-col items-center w-dvw divide-y-2 px-5">
      <Hero />
      <InformationPanel />
      <GridIcons />
      <ProjetcsGrid/>
    </div>
  );
}
