import { BaseProps } from "../../common/models/props";
import { BaseBox } from "../atoms/Box";

const ContainerBox = ({ children, view, size, theme, bg }: BaseProps) => {
  return (
    <BaseBox
      view={view}
      size={size}
      theme={theme}
      height={""}
      width={""}
      bg={bg}
    >
      {children}
    </BaseBox>
  );
};

const ContentBox = ({ children, view, size, theme, bg }: BaseProps) => {
  return (
    <BaseBox
      view={view}
      size={size}
      theme={theme}
      height={""}
      width={""}
      bg={bg}
    >
      {children}
    </BaseBox>
  );
};

const CarouselBox = ({ children, view, size, theme, bg }: BaseProps) => {
  return (
    <BaseBox
      view={view}
      size={size}
      theme={theme}
      height={""}
      width={""}
      bg={bg}
    >
      {children}
    </BaseBox>
  );
};

const SearchBox = ({ children, view, size, theme, bg }: BaseProps) => {
  return (
    <BaseBox
      view={view}
      size={size}
      theme={theme}
      height={""}
      width={""}
      bg={bg}
    >
      {children}
    </BaseBox>
  );
};

const DescriptionBox = ({ children, view, size, theme, bg }: BaseProps) => {
  return (
    <BaseBox
      view={view}
      size={size}
      theme={theme}
      height={""}
      width={""}
      bg={bg}
    >
      {children}
    </BaseBox>
  );
};
export { ContainerBox, ContentBox, CarouselBox, SearchBox, DescriptionBox };
