"use client";
import React, {useState} from "react"

import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  VisibilityState,
  getFilteredRowModel,
  ColumnFiltersState,
} from "@tanstack/react-table";

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/component/components/ui/table";

import { DataTablePagination } from "@/component/components/projectTable/pagination";
import { DataTableViewOptions } from "@/component/components/projectTable/columnVisibility";
import { ColumnFilter } from "@/component/components/projectTable/columnFilter";
import { AppliedFilters } from "@/component/components/projectTable/appliedFilters";
import { ProjectDetails } from "./columns";

interface ProjectTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterOptions: ProjectDetails[];
}

export const ProjectTable = <TData, TValue>({
  columns,
  data,
  filterOptions
}: ProjectTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([{ id: 'status', desc: false }]); // inner object for default sorting to 'status'
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [globalFilter, setGlobalFilter] = useState<any>("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnVisibility,
      columnFilters,
      globalFilter,
    },
  });

  const tableTechSkills = [...new Set(filterOptions.flatMap(tableItem => tableItem.reqd_skills).filter(item => item != null))];
  const tableProducts = [...new Set(filterOptions.flatMap(tableItem => tableItem.product).filter(item => item != null))];
  const tableOrganization = [...new Set(filterOptions.flatMap(tableItem => tableItem.organization).filter(item => item != ""))];
  let tableProjectTypes = [...new Set(filterOptions.flatMap(tableItem => tableItem.project_category).filter(type => type != null))];
  tableProjectTypes = [...tableProjectTypes, ...new Set(filterOptions.flatMap(tableItem => tableItem.project_sub_category).filter(subType => subType != null))];

  return (
    <div className="flex flex-col text-black">
      <div className="table-filters w-full p-2 flex flex-col-reverse lg:flex-row">
        
        <div className="applied-filters w-full lg:w-1/3 flex flex-wrap items-center justify-start">
          <AppliedFilters table={table} columnFilters={columnFilters} setColumnFilters={setColumnFilters} />
        </div>

       
        <div className="filter-options lg:w-2/3 flex flex-wrap items-center justify-start lg:justify-end">
          {table.getColumn("complexity") && (
            <ColumnFilter
              column={table.getColumn("complexity")}
              title="complexity"
              options={["Low", "Medium", "High"]}
            />
          )}
          {table.getColumn("techSkills") && (
            <ColumnFilter
              column={table.getColumn("techSkills")}
              title="tech skills"
              options={tableTechSkills}
            />
          )}
          {table.getColumn("points") && (
            <ColumnFilter
              column={table.getColumn("points")}
              title="points"
              options={[10, 20, 30]}
            />
          )}
          {table.getColumn("product") && (
            <ColumnFilter
              column={table.getColumn("product")}
              title="Product"
              options={tableProducts}
            />
          )}
          {table.getColumn("organization") && (
            <ColumnFilter
              column={table.getColumn("organization")}
              title="Organization"
              options={tableOrganization}
            />
          )}
          {/* {table.getColumn("type") && (
            <ColumnFilter
              column={table.getColumn("type")}
              title="Project Type"
              options={tableProjectTypes}
            />
          )} */}
          {table.getColumn("status") && (
            <ColumnFilter
              column={table.getColumn("status")}
              title="status"
              options={["open", "closed"]}
            />
          )}
        </div>

      </div>

      

      <div className="table-options flex flex-col lg:flex-row items-center justify-between p-2 lg:p-3 w-full">
        
        <div className="flex items-center space-x-1 w-full mb-2">
          <input
            className="px-2 h-9 w-full lg:w-[400px] border-2 border-gray-200 rounded-md justify-between"
            placeholder="Filter By Project Name..."
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
          />
          <DataTableViewOptions table={table} />
        </div>

        <div className="pagination flex items-center">
          <DataTablePagination table={table} />
        </div>
        
      </div>
      <div className="w-full items-center justify-start text-black text-right pr-4 border-b border-[#f4f4f] pb-2">
         {data?.length} Total tickets
        </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-center font-semibold px-1 bg-white">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="overflow-y-scroll">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="border-b-2 hover:bg-gray-100"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="capitalize text-center">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

    </div>
  );
};