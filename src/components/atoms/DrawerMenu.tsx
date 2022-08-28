import { SearchIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  IconButton,
  Box,
  FormLabel,
} from "@chakra-ui/react";
import { Selectables, StateEntity } from "../../common/constants/context";

const SearchInput = () => {
  return (
    <Box justifyContent={"center"} alignItems={"center"}>
      <FormLabel htmlFor="earch_param">Search</FormLabel>
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

const DrawerLinks = ({ searchModuleOpen, setsearchModuleOpen }: any) => {
  return (
    <>
      {Selectables?.map((i: any) => (
        <p
          onClick={() => {
            i.entity !== StateEntity.Search
              ? window.location.assign(i.uri)
              : setsearchModuleOpen(!searchModuleOpen);
          }}
          style={{
            lineHeight: "50px",
            justifyContent: "center",
            paddingLeft: "15%",
          }}
        >
          {i.entity}
        </p>
      ))}
    </>
  );
};
export { SearchInput, DrawerLinks };
