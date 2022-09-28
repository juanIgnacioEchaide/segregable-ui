/* eslint-disable react-hooks/exhaustive-deps */
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
import { VIEW } from "../../common/constants/uri";
import { Selectable } from "../../common/models/entities";
import { UseQueryByView } from "../../hooks/UseQueryByView";

const DrawerSearchItems = ({ setViewScene }: any) => {
  const [items, setItems] = useState<any[]>([]);
  const borderSelected = "2.5px solid grey";

  const populateWithSelectables = () => {
    if (Selectables?.length)
      setItems(() => {
        return Selectables?.map((item: Selectable) => ({
          ...item,
          selected: item.entity === StateEntity.People ? true : false,
        }));
      });
  };

  const selectItemByIndex = (idx: number) => {
    setItems(() => {
      return items?.map((item: Selectable, index: number) => {
        if (index === idx && !item?.selected) {
          return {
            ...item,
            selected: true,
          };
        } else {
          return {
            ...item,
            selected: false,
          };
        }
      });
    });
  };

  useEffect(() => {
    populateWithSelectables();
  }, []);

  return (
    <div>
      {items?.map(
        (i, idx) =>
          i.entity !== StateEntity.Search && (
            <Button
              onClick={() => {
                selectItemByIndex(idx);
                setViewScene(i.view);
              }}
              key={i?.entity}
              size={"xs"}
              width="40px"
              marginLeft={"5px"}
              border={i.selected ? borderSelected : "none"}
            >
              <p style={{ fontSize: "10px" }}>{i.entity}</p>
            </Button>
          )
      )}
    </div>
  );
};

const SearchInput = ({ withItems }: any) => {
  const { searchQuery } = UseQueryByView();
  const [viewScene, setViewScene] = useState<VIEW>(VIEW.DEFAULT);
  const [stringParam, setStringParam] = useState<string>("");

  useEffect(() => {
    if (stringParam) {
      searchQuery(viewScene, stringParam);
    }
  }, [viewScene, stringParam /* , searchQuery */]);

  return (
    <Box justifyContent ={"center"} alignItems={"center"} marginTop={"30px"}>
      <div
        style={{
          paddingBottom: "10px",
          paddingTop: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {withItems && (
          <>
            <FormLabel htmlFor="earch_param">Free Search by item</FormLabel>
            <DrawerSearchItems setViewScene={setViewScene} marginTop={"35px"} />
          </>
        )}
      </div>
      <InputGroup marginTop={"15px"}>
        <Input
          type="text"
          id="search_param"
          placeholder="choose the kind of item"
          onChange={(e) => setStringParam(e.target.value)}
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
        <DrawerLinkItem handleOpen={handleOpen} item={i} key={i.entity} />
      ))}
    </div>
  );
};

const DrawerLinkItem = ({ item, handleOpen }: any) => {
  return (
    <p
      onClick={() => handleOpen(item)}
      style={{
        lineHeight: "50px",
        justifyContent: "center",
        paddingLeft: "15%",
        cursor: "pointer",
        fontWeight: item.entity === StateEntity.Search ? 1000 : 450,
      }}
    >
      {item.entity}
    </p>
  );
};

const SearchMenu = ({ setOpen, withItems, withGoBack }: any) => {
  return (
    <div>
      <SearchInput withItems={withItems} />
      <div
        style={{ padding: "20px", cursor: "pointer" }}
        onClick={() => setOpen(false)}
      >
        {withGoBack && <ArrowLeftIcon />}
      </div>
    </div>
  );
};
export { SearchInput, DrawerLinks, SearchMenu, DrawerLinkItem };
