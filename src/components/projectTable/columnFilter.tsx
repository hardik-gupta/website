import { Column } from "@tanstack/react-table";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/component/components/ui/popover";

import { AiFillCheckSquare } from "react-icons/ai";
import { BsChevronDown, BsSquare } from "react-icons/bs";
import React from "react";

interface ColumnFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: string[] | number[];
}

export function ColumnFilter<TData, TValue>({
  column,
  title,
  options,
}: ColumnFilterProps<TData, TValue>) {
  const selectedValues = new Set<string | number>(column?.getFilterValue() as (string | number)[]);

  const filterTable = (selectedValues: Set<string | number>, selectedOption: string | number) => {
    const isSelected = selectedValues.has(selectedOption);

    if (isSelected) {
      selectedValues.delete(selectedOption);
    } else {
      selectedValues.add(selectedOption);
    }
    const filterValues = Array.from(selectedValues);
    column?.setFilterValue(filterValues.length ? filterValues : undefined);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="capitalize w-auto px-3 my-1 mr-2.5 rounded-full bg-gray-200 text-gray-800 font-demi text-[18px] flex items-center justify-center">
          {title}
          <BsChevronDown className="ml-1" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-white p-2 max-h-[200px] overflow-y-scroll">
        {options.map((option: string | number) => {
          return (
            <button
              key={option}
              className={`flex items-center hover:cursor-pointer mb-1 rounded-md capitalize w-full space-x-2 p-1 ${
                selectedValues.has(option)
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800"
              }`}
              onClick={() => filterTable(selectedValues, option)}
            >
              <div>
                {selectedValues.has(option) ? (
                  <AiFillCheckSquare size="1.1em" />
                ) : (
                  <BsSquare size="1em" />
                )}
              </div>
              <span>{option}</span>
            </button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
