import { ArrowLeftIcon, SearchIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  IconButton,
  Box,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DrawerLinksProps, isMobile } from "../../common";
import { Selectables, StateEntity } from "../../common/constants/context";

const DrawerSearchItems = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    if (items?.length)
      return setItems(() => {
        return Selectables?.map((i) => ({ ...i, selected: false }));
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {Selectables?.map(
        (i) =>
          i.entity !== StateEntity.Search && (
            <Button size={"xs"} width="50px">
              <p style={{ fontSize: "10px" }}>{i.entity}</p>
            </Button>
          )
      )}
    </div>
  );
};

const SearchInput = () => {
  return (
    <Box justifyContent={"center"} alignItems={"center"}>
      <div
        style={{
          paddingBottom: "10px",
          paddingTop: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormLabel htmlFor="earch_param">Search</FormLabel>
        <DrawerSearchItems />
      </div>
      <InputGroup>
        <Input
          type="text"
          id="search_param"
          placeholder="choose the kind of item"
        />
        <IconButton aria-label="Search database" icon={<SearchIcon />} />
      </InputGroup>
    </Box>
  );
};

const DrawerLinks = ({
  searchModuleOpen,
  setsearchModuleOpen,
  size,
}: DrawerLinksProps) => {
  const handleOpen = (i: any) => {
    return i.entity !== StateEntity.Search
      ? window.location.assign(i.uri)
      : setsearchModuleOpen(!searchModuleOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile(size) ? "column" : "row",
      }}
    >
      {Selectables?.map((i: any) => (
        <p
          onClick={() => handleOpen(i)}
          style={{
            lineHeight: "50px",
            justifyContent: "center",
            paddingLeft: "15%",
          }}
        >
          {i.entity}
        </p>
      ))}
    </div>
  );
};

const SearchMenu = ({ setOpen }: any) => {
  return (
    <>
      <SearchInput />
      <div style={{ padding: "20px" }} onClick={() => setOpen(false)}>
        <ArrowLeftIcon />
      </div>
    </>
  );
};
export { SearchInput, DrawerLinks, SearchMenu };
