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
      height={""}
      width={""}
      bg={bg}
    >
      <ContentBox
        view={view}
        size={size}
        theme={theme}
        height={""}
        width={""}
        bg={bg}
      >
        <CarouselBox
          view={view}
          size={size}
          theme={theme}
          height={""}
          width={""}
          bg={bg}
        />
        <SearchBox
          view={view}
          size={size}
          theme={theme}
          height={""}
          width={""}
          bg={bg}
        />
        <DescriptionBox
          view={view}
          size={size}
          theme={theme}
          height={""}
          width={""}
          bg={bg}
        />
      </ContentBox>
    </ContainerBox>
  );
};

export { BaseTemplate };
