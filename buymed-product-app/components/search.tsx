import React from "react";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

interface SearchItemProps {
  placeholder: string;
}

const Search = ({ placeholder }: SearchItemProps) => {
  return (
    <InputGroup>
      <InputGroupInput placeholder={placeholder} />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Search;
