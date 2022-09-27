import { BaseBoxProps } from "../../common/models/props";
import { BaseBox } from "../atoms/Box";

const ContainerBox = ({ children, view, size, theme, bg }: BaseBoxProps) => {
  return (
    <BaseBox
      view={view}
      size={size}
      theme={theme}
    >
      {children}
    </BaseBox>
  );
};

const ContentBox = ({ children, view, size, theme, bg }: BaseBoxProps) => {
  return (
    <BaseBox
      view={view}
      size={size}
      theme={theme}
    >
      {children}
    </BaseBox>
  );
};

const CarouselBox = ({ children, view, size, theme, bg }: BaseBoxProps) => {
  return (
    <BaseBox
      view={view}
      size={size}
      theme={theme}
    >
      {children}
    </BaseBox>
  );
};

const SearchBox = ({ children, view, size, theme, bg }: BaseBoxProps) => {
  return (
    <BaseBox
      view={view}
      size={size}
      theme={theme}
    >
      {children}
    </BaseBox>
  );
};

const DescriptionBox = ({ children, view, size, theme, bg }: BaseBoxProps) => {
  return (
    <BaseBox view={view} size={size} theme={""}>
      {children}
    </BaseBox>
  );
};
export { ContainerBox, ContentBox, CarouselBox, SearchBox, DescriptionBox };
