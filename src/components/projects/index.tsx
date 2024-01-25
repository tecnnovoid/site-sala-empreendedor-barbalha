
import { ItinerantEntrepreneur } from "./ItinerantEntrepreneur";
import { Magazines } from "./Magazines";
import { Schools } from "./Schools";
import { SeloOuro } from "./SeloOuro";
import { VirtualAttendant } from "./VirtualAttendant";
import { WomenEntrepreneurs } from "./WomenEntrepreneurs";

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
