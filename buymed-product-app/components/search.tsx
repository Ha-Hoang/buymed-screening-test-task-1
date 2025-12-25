import React, { useEffect, useState, useRef } from "react";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useQueryState } from "nuqs";

interface SearchItemProps {
  placeholder: string;
}

const Search = ({ placeholder }: SearchItemProps) => {
  const [search, setSearch] = useQueryState("search", {
    defaultValue: "",
  });

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <InputGroup>
      <InputGroupInput
        placeholder={placeholder}
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Search;
