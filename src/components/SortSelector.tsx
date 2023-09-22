import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedSort: string | null;
  onSelectSort: (sortBy: string) => void;
}

const SortSelector = ({ selectedSort, onSelectSort }: Props) => {
  const sortList = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Rating" },
  ];
  const currentSort = sortList.find((order) => order.value === selectedSort);
  return (
    <Menu>
      <MenuButton margin={2} rightIcon={<BsChevronDown />} as={Button}>
        Order by : {currentSort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortList.map((sortListItem) => (
          <MenuItem
            value={sortListItem.value}
            onClick={() => onSelectSort(sortListItem.value)}
            key={sortListItem.value}
          >
            {sortListItem.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
