import { useContext } from "react";
import { VIEW } from "../../common/constants/uri";
import { BaseProps } from "../../common/models/props";

const BaseTemplate = ({ children, view, size, theme }: any) => {

  const BaseBox = ({ children }: BaseProps) => {
    return (<div>{children}</div>)
  };

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
  return (
    <ContainerBox view={view} size={size} theme={theme}>
      <ContentBox view={view} size={size} theme={theme}>
        <CarouselBox view={view} size={size} theme={theme} />
        <SearchBox view={view} size={size} theme={theme} />
        <DescriptionBox view={view} size={size} theme={theme} />
      </ContentBox>
    </ContainerBox>
  );
};

export { BaseTemplate };
