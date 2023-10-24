import {
    MdKeyboardArrowRight,
    MdKeyboardArrowLeft,
    MdKeyboardDoubleArrowRight,
    MdKeyboardDoubleArrowLeft,
} from "react-icons/md"
  import { Table } from "@tanstack/react-table"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/component/components/ui/select"
  
  interface DataTablePaginationProps<TData> {
    table: Table<TData>
  }
  
  export function DataTablePagination<TData>({
    table,
  }: DataTablePaginationProps<TData>) {
    return (
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2 lg:space-x-4">
          <div className="flex items-center">
            <p className="text-sm font-medium m-0 min-w-max px-1">Rows per page</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value))
              }}
            >
              <SelectTrigger className="h-8 p-1">
                <SelectValue placeholder={table.getState().pagination.pageSize} className="mr-1"/>
              </SelectTrigger>
              <SelectContent side="bottom" className="bg-white min-w-[30px]">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`} className="rounded-lg hover:bg-blue-500">
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex min-w-max items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>

          <div className="flex items-center space-x-1">
            <button
              className="hidden h-8 w-8 p-0 lg:flex items-center justify-center"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <MdKeyboardDoubleArrowLeft className="h-8 w-8" fill={!table.getCanPreviousPage() ? '#cfcfcf' : 'black'}/>
            </button>
            <button
              className="h-5 h-5 md:h-8 md:w-8 p-0 flex items-center justify-center"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <MdKeyboardArrowLeft className="h-8 w-8" />
            </button>
            <button
              className="h-5 h-5 md:h-8 md:w-8 p-0 flex items-center justify-center"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <MdKeyboardArrowRight className="h-8 w-8" />
            </button>
            <button
              className="hidden h-8 w-8 p-0 lg:flex items-center justify-center"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <MdKeyboardDoubleArrowRight className="h-8 w-8" fill={!table.getCanNextPage() ? '#cfcfcf' : 'black'}/>
            </button>
          </div>

        </div>

      </div>
    )
  }
  