import { RoutesStack } from "../../AppRouter";
import { SideContainer, SideLink } from "../atoms/SideMenu";

const SideMenu = ({ setView }: any) => (
  <SideContainer>
    {RoutesStack?.map((i) => (
      <SideLink
        style={{ paddingTop: "5vh" }}
        key={i.name}
        onClick={() => setView(i.name)}
        to={i.path}
      >
        {i.name}
      </SideLink>
    ))}
  </SideContainer>
);

export { SideMenu };
