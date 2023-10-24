"use client";

import { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface ProjectDetails {
  id: number;
  project: {
    name: string;
    githubLink: string;
  };
  complexity: "low" | "medium" | "high";
  techSkills: string[];
  points: string;
  product: string;
  type: string[];
  status: "open" | "closed";
}

export const columns: ColumnDef<ProjectDetails>[] = [
  {
    header: "S.NO.",
    cell:(props) => {
      return props?.table?.getSortedRowModel().flatRows?.indexOf(props?.row) + 1;
    }
  },

  {
    accessorKey: 'project',
    header: () => <span className="flex items-center justify-center uppercase">project name</span>,
    cell: ({ row }) => {
      const project = row.original.project
      return (
        <div className="text-start">
          <a className="min-w-[320px] no-underline text-blue-600" href={`${project.githubLink}`}>{project.name}</a>
        </div>
      );
    },
  },

  {
    accessorKey: "complexity",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-center hover:bg-gray-100 p-2 rounded-md uppercase"
          >
            complexity
            <LuArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      );
    },
    cell: ({ row }) => {
      const complexity = row.original.complexity;
      const complexityLevel = {
            low: "bg-green-200 text-green-700",
            medium: "bg-yellow-200 text-yellow-700",
            high: "bg-red-200 text-red-700",
        }
      return (
        <div className="flex items-center justify-center">
          <div
            className={`min-w-max rounded-full px-4 py-1 text-center text-md font-semibold ${complexityLevel[complexity]}`}
          >
            {complexity}
          </div>
        </div>
      );
    },
    sortingFn:(
        rowA,
        rowB,
        columnId,
    ) => {
        const sortOrder = ['low', 'medium', 'high']
        return sortOrder.indexOf(rowA.original[columnId]) - sortOrder.indexOf(rowB.original[columnId])
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },

  {
    accessorKey: "techSkills",
    header: () => <span className="flex items-center justify-center uppercase">tech skills</span>,
    cell: ({ row }) => {
      const techSkill = row.original.techSkills;
      return (
        <div className="flex flex-wrap items-center justify-center min-w-[320px] h-full">
          {techSkill.map((tech) => (
            <div
              key={tech}
              className="rounded-full bg-gray-200 min-w-max px-2 py-1 m-1"
            >
              {tech}
            </div>
          ))}
        </div>
      );
    },
    filterFn: 'arrIncludesSome',
    enableGlobalFilter: true,
  },
  {
    accessorKey: "points",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center hover:bg-gray-100 p-2 rounded-md">
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-center uppercase"
          >
            points
            <LuArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      );
    },
    cell: ({ row }) => {
      const points: string = row.getValue("points");
      return (
        <div className="flex items-center justify-center">
          <div className="text-lg">{points}</div>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "product",
    header: () => <span className="flex items-center justify-center uppercase">product</span>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "type",
    header: () => <span className="flex items-center justify-center uppercase min-w-max">project type</span>,
    cell: ({ row }) => {
      const productType = row.original.type;
      return (
        <div className="flex flex-wrap items-center justify-center">
          {productType.map((type) => (
            <div key={type} className="rounded-full bg-gray-200 px-2 py-1 m-1 min-w-max">
              {type}
            </div>
          ))}
        </div>
      );
    },
    filterFn: 'arrIncludesSome',
    enableGlobalFilter: true,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center hover:bg-gray-100 p-2 rounded-md">
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-center uppercase"
          >
            status
            <LuArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      );
    },
    cell: ({ row }) => {
      const status = row.original.status;
      const statusLevel = {
        open: "bg-green-200 text-green-700",
        closed: "bg-purple-200 text-purple-700",
      };
      return (
        <div className="flex items-center justify-center">
          <div
            className={`min-w-max rounded-full px-3 py-1 text-center text-md font-semibold ${statusLevel[status]}`}
          >
            {status}
          </div>
        </div>
      );
    },
    sortingFn:(
      rowA,
      rowB,
      columnId,
  ) => {
      const sortOrder = ['open', 'closed']
      return sortOrder.indexOf(rowA.original[columnId]) - sortOrder.indexOf(rowB.original[columnId])
  },
  filterFn: (row, id, value) => {
    return value.includes(row.getValue(id))
  },
  },
];
