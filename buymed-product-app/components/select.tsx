import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterOptions } from "@/components/shared/constant";
import { useQueryState } from "nuqs";

interface PlaceholderProps {
  placeholder: string;
  options?: typeof FilterOptions;
}

const Filter = ({ placeholder, options }: PlaceholderProps) => {
  const [filter, setFilter] = useQueryState("filter", {
    defaultValue: "",
  });

  return (
    <Select value={filter} onValueChange={(value) => setFilter(value)}>
      <SelectTrigger className="w-45">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{placeholder}</SelectLabel>
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Filter;
