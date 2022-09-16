import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { isMobile } from "../../../common";
import { SIZE } from "../../../common/constants";
import { VIEW } from "../../../common/constants/uri";
import { SearchMenu } from "../../atoms/DrawerMenu";

const ArrowsContainer = ({ children }: any) => {
  return (
    <>
      <IconButton
        aria-label="Search database"
        icon={<ArrowLeftIcon />}
        background={"none"}
        h={"30px"}
      />
      <motion.div
        className="box"
        animate={{ x: 0, y: 0 }}
        transition={{ type: "spring" }}
      >
        {children}
      </motion.div>
      <IconButton
        aria-label="Search database"
        icon={<ArrowRightIcon />}
        background={"none"}
        h={"30px"}
      />
    </>
  );
};

const PageIndex = ({ pageNum, viewport }: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px",
        fontSize: isMobile(viewport) ? "10px" : "20px",
        width: "100%",
        height: "100%",
      }}
    >
      <p
        style={{
          paddingRight: "5px",
        }}
      >
        Page:
      </p>
      {pageNum}
    </div>
  );
};

const DisplayedItem = ({ displayedData }: any) => {
  return <div>{displayedData}</div>;
};

const NavigationGrid = ({ pageNum, displayedData, viewport }: any) => {
  if (viewport === SIZE.MOBILE) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          fontSize: "20px",
          width: "100%",
          height: "100%",
        }}
      >
        MOBILE
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px",
        fontSize: "30px",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
          fontSize: "30px",
          width: "30%",
          height: "100%",
        }}
      >
        <ArrowsContainer
          children={<PageIndex pageNum={pageNum} viewport={viewport} />}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
          fontSize: "30px",
          width: "70%",
          height: "100%",
        }}
      >
        <ArrowsContainer
          children={
            <DisplayedItem displayedData={displayedData} viewport={viewport} />
          }
        />
        <SearchMenu withItems={false} withGoBack={false}/>
      </div>
    </div>
  );
};

const DetailsDisplayGrid = ({ view, viewport }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "30px",
        fontSize: "30px",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "30px",
          fontSize: viewport === SIZE.MOBILE ? "20px" : "30px",
          width: "30%",
          height: "100%",
        }}
      >
        DETAILS
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "center",
          padding: "30px",
          fontSize: "30px",
          width: "70%",
          height: "100%",
        }}
      >
        <DetailContentsByView view={view} viewport={viewport} data={null} />
      </div>
    </div>
  );
};

const DetailContentsByView = ({ view, data, viewport }: any): JSX.Element => {
  switch (view) {
    case VIEW.FILMS:
      return <FilmsDetailsContent data={data} viewport={viewport} />;
    case VIEW.STARSHIP:
      return <StarshipDetailsContent data={data} viewport={viewport} />;
    case VIEW.SPECIES:
      return <SpeciesDetailsContent data={data} viewport={viewport} />;
    case VIEW.PLANETS:
      return <PlanetsDetailsContent data={data} viewport={viewport} />;
    case VIEW.VEHICLES:
      return <VehiclesDetailsContent data={data} viewport={viewport} />;
    case VIEW.PEOPLE:
      return <PeopleDetailsContent data={data} viewport={viewport} />;
    default:
      return <PeopleDetailsContent data={data} viewport={viewport} />;
  }
};

const FilmsDetailsContent = ({ data }: any) => {
  return <div>FilmsDetailsContent</div>;
};
const PlanetsDetailsContent = ({ data }: any) => {
  return <div>PlanetsDetailsContent</div>;
};

const PeopleDetailsContent = ({ data, viewport }: any) => {
  return (
    <div
      style={{
        fontSize: viewport === SIZE.MOBILE ? "10px" : "15px",
      }}
    >
      PeopleDetailsContent
    </div>
  );
};

const VehiclesDetailsContent = ({ data }: any) => {
  return <div>PeopleDetailsContent</div>;
};
const SpeciesDetailsContent = ({ data }: any) => {
  return <div>PeopleDetailsContent</div>;
};
const StarshipDetailsContent = ({ data }: any) => {
  return <div>StarshipDetailsContent</div>;
};

export {
  NavigationGrid,
  DetailsDisplayGrid,
  FilmsDetailsContent,
  PlanetsDetailsContent,
  PeopleDetailsContent,
  VehiclesDetailsContent,
  SpeciesDetailsContent,
  StarshipDetailsContent,
};
