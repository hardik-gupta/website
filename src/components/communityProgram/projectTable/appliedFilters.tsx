import { ColumnFiltersState, Table } from "@tanstack/react-table";
import { MdOutlineCancel } from "react-icons/md";

interface AppliedFiltersProps<TData> {
  table: Table<TData>;
  columnFilters: ColumnFiltersState;
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
}

export function AppliedFilters<TData>({
  table,
  columnFilters,
  setColumnFilters,
}: AppliedFiltersProps<TData>) {
  return (
    <div className="flex items-center flex-wrap">
      {columnFilters.length ? (
        <button
          className="flex items-center gap-1 w-auto mr-1 mb-1 px-2 py-1 text-sm rounded-full bg-red-500 text-white capitalize"
          onClick={() => setColumnFilters([])}
        >
          clear
          <MdOutlineCancel size={17}/>
        </button>
      ) : (
        <></>
      )}
      {columnFilters.map((filter) => {
        const selectedValues = new Set(
          table.getColumn(`${filter.id}`).getFilterValue() as string[]
        );
        return (
          <div key={filter.id} className="flex items-center">
            {(filter.value as string[]).map((value) => {
              const isSelected = selectedValues.has(value);
              return (
                <button
                  key={value}
                  className="flex items-center gap-1 w-auto mr-1 mb-1 px-2 py-1 text-sm rounded-full bg-blue-500 text-white capitalize"
                  onClick={() => {
                    if (isSelected) {
                      selectedValues.delete(value);
                    } else {
                      selectedValues.add(value);
                    }
                    const filterValues = Array.from(selectedValues);
                    table
                      .getColumn(`${filter.id}`)
                      .setFilterValue(
                        filterValues.length ? filterValues : undefined
                      );
                  }}
                >
                  {value}
                  <MdOutlineCancel size={17}/>
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
