import React from "react";
import {
  ContainerBox,
  ContentBox,
  CarouselBox,
  SearchBox,
  DescriptionBox,
} from "../molecules/Box";

const BaseTemplate = ({ children, view, size, theme, bg }: any) => {
  return (
    <ContainerBox
      view={view}
      size={size}
      theme={theme}
    >
      <ContentBox
        view={view}
        size={size}
        theme={theme}
      >
{/*         <CarouselBox
          view={view}
          size={size}
          theme={theme}
        />
        <SearchBox
          view={view}
          size={size}
          theme={theme}
        />
        <DescriptionBox
          view={view}
          size={size}
          theme={theme}
        /> */}
      </ContentBox>
    </ContainerBox>
  );
};

export { BaseTemplate };
