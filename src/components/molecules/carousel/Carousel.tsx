import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { VIEW } from "../../../common/constants/uri";

const ArrowsContainer = ({ children }: any) => {
  return (
    <>
      <IconButton
        aria-label="Search database"
        icon={<ArrowLeftIcon />}
        h={"20px"}
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
        h={"20px"}
      />
    </>
  );
};

const PageIndex = ({ pageNum }: any) => {
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

const NavigationGrid = ({ pageNum, displayedData }: any) => {
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
        <ArrowsContainer children={<PageIndex pageNum={"4"} />} />
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
            <DisplayedItem displayedData={"Episode IV. New Hope Risin'"} />
          }
        />
      </div>
    </div>
  );
};

const DetailsDisplayGrid = ({ view }: any) => {
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
          fontSize: "30px",
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
        <DetailContentsByView view={view} data={null} />
      </div>
    </div>
  );
};

const DetailContentsByView = ({ view, data }: any): JSX.Element => {
  switch (view) {
    case VIEW.FILMS:
      return <FilmsDetailsContent data={data} />;
    case VIEW.STARSHIP:
      return <StarshipDetailsContent data={data} />;
    case VIEW.SPECIES:
      return <SpeciesDetailsContent data={data} />;
    case VIEW.PLANETS:
      return <PlanetsDetailsContent data={data} />;
    case VIEW.VEHICLES:
      return <VehiclesDetailsContent data={data} />;
    case VIEW.PEOPLE:
      return <PeopleDetailsContent data={data} />;
    default:
      return <PeopleDetailsContent data={data} />;
  }
};

const FilmsDetailsContent = ({ data }: any) => {
  return <div>FilmsDetailsContent</div>;
};

const PlanetsDetailsContent = ({ data }: any) => {
  return <div>PlanetsDetailsContent</div>;
};
const PeopleDetailsContent = ({ data }: any) => {
  return <div>PeopleDetailsContent</div>;
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
