import { ItinerantEntrepreneur } from "./projects/ItinerantEntrepreneur";
import { Magazines } from "./projects/Magazines";
import { Schools } from "./projects/Schools";
import { SeloOuro } from "./projects/SeloOuro";
import { VirtualAttendant } from "./projects/VirtualAttendant";
import { WomenEntrepreneurs } from "./projects/WomenEntrepreneurs";

export function Projects() {
  return (
    <div id="projects" className="pt-36 lg:pl-20 lg:flex lg:flex-col lg:items-center lg:pt-56">
      <h2 className="text-[#02B1C8] font-bold text-4xl lg:text-5xl text-center lg:text-left ">
        Projetos
      </h2>
      <WomenEntrepreneurs />
      <VirtualAttendant />
      <Schools />
      <ItinerantEntrepreneur />
      <Magazines />
      <SeloOuro />

    </div>
  );
}
