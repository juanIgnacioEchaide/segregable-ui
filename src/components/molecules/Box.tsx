import { VIEW } from "../../common/constants/uri";
import { BaseProps } from "../../common/models/props";
import { BaseBox } from "../atoms/Box";

const ContainerBox = ({ children, view, size, theme }: BaseProps) => {
  return (
    <BaseBox view={VIEW.DEFAULT} size={""} theme={""}>
      {children}
    </BaseBox>
  );
};

const ContentBox = ({ children, view, size, theme }: BaseProps) => {
  return (
    <BaseBox view={VIEW.DEFAULT} size={""} theme={""}>
      {children}
    </BaseBox>
  );
};

const CarouselBox = ({ children, view, size, theme }: BaseProps) => {
  return (
    <BaseBox view={VIEW.DEFAULT} size={""} theme={""}>
      {children}
    </BaseBox>
  );
};

const SearchBox = ({ children, view, size, theme }: BaseProps) => {
  return (
    <BaseBox view={VIEW.DEFAULT} size={""} theme={""}>
      {children}
    </BaseBox>
  );
};

const DescriptionBox = ({ children, view, size, theme }: BaseProps) => {
  return (
    <BaseBox view={VIEW.DEFAULT} size={""} theme={""}>
      {children}
    </BaseBox>
  );
};
export { ContainerBox, ContentBox, CarouselBox, SearchBox, DescriptionBox };
