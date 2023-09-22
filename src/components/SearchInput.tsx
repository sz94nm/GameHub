import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup width={"50%"}>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={"24px"}
        placeholder="Search games"
        variant={"filled"}
      />
    </InputGroup>
  );
};

export default SearchInput;
