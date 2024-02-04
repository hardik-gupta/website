"use client"

import { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface ProjectDetails {
  uuid: string;
  name: string;
  url: string;
  complexity: "Low" | "Medium" | "High";
  reqd_skills: string[] | null;
  ticket_points: number;
  product: string;
  project_category: string[] | null;
  project_sub_category: string[] | null;
  status: "open" | "closed";
  created_at: string;
  api_endpoint_url: string;
  community_label: boolean;
  index: number;
  issue_id: number;
  mentors: string[] | null;
  organization?: string;
}

export const columns: ColumnDef<ProjectDetails>[] = [
  {
    header: "S.NO.",
    cell: ({ row, table }) =>
      (table.getSortedRowModel()?.flatRows?.findIndex((flatRow) => flatRow.id === row.id) || 0) + 1,
  },
  {

    accessorKey: 'name',
    header: () => <div className="flex items-center justify-center uppercase w-[220px]">project name</div>,
    cell: ({ row }) => {
      const project = row.original.name;
      const githubUrl = row.original.url;
      return (
        <div className="text-start w-[220px]">
          <a className="no-underline text-blue-600" href={githubUrl} target="_blank">{project}</a>
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
      const complexity: string = row.original.complexity;
      const complexityLevel = {
        Low: "bg-green-200 text-green-700",
        Medium: "bg-yellow-200 text-yellow-700",
        High: "bg-red-200 text-red-700",
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
    sortingFn: (
      rowA,
      rowB,
      columnId,
    ) => {
      const sortOrder = ['Low', 'Medium', 'High']
      return sortOrder.indexOf(rowA.original[columnId]) - sortOrder.indexOf(rowB.original[columnId])
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },

  {
    accessorKey: "reqd_skills",
    id: 'techSkills',
    header: () => <div className="flex items-center justify-center uppercase max-w-[250px]">tech skills</div>,
    cell: ({ row }) => {
      const techSkills: string[] | null = row.original.reqd_skills;
      return (
        <div className="flex flex-wrap items-center justify-center max-w-[250px] h-full">
          {techSkills && techSkills.map((tech) => (
            <div
              key={tech}
              className="rounded-full bg-pink-200 min-w-max px-2 py-1 m-1"
            >
              {tech}
            </div>
          ))}
        </div>
      )
    },

    filterFn: 'arrIncludesSome',

  },

  {
    accessorKey: 'ticket_points',
    id: "points",
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
      const points = row.original.ticket_points;
      return (
        <div className="flex items-center justify-center">
          <div className="text-lg">{points}</div>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },

  },

  // {
  //   accessorKey: 'product',
  //   header: () => <div className="flex items-center justify-center uppercase min-w-min">product</div>,
  //   cell:({row})=>{
  //     const product = row.original.product;
  //     return(
  //       <div className="flex items-center justify-center min-w-min">
  //         <div className="text-sm max-w-min">{product ? product: <div className="bg-gray-200 rounded-full px-2 py-1">N/A</div>}</div>
  //       </div>
  //     )
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   }
  // },

  {
    accessorKey: 'organization',
    header: () => <div className="flex items-center justify-center uppercase min-w-min">Organization</div>,
    cell:({row})=>{
      const organization = row.original.organization;
      return(
        <div className="flex items-center justify-center min-w-min">
          <div className="text-sm max-w-min">{organization ? organization: <div className="bg-gray-200 rounded-full px-2 py-1">N/A</div>}</div>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },

  {
    accessorFn: row => [...(row.project_category || []), ...(row.project_sub_category || [])],
    id: 'type',
    header: () => <div className="flex items-center justify-center uppercase w-[200px]">project type</div>,
    cell: ({ row }) => {
      let projectCategory: string[] = row.original.project_category;
      const subCategory: string[] | null = row.original.project_sub_category;

      if (subCategory) {
        projectCategory = [...(projectCategory || []), ...(subCategory || [])]
      }

      return (
        <div className="flex flex-wrap items-center justify-center w-[200px]">
          {projectCategory && projectCategory.map((type) => (
            <div key={type} className="flex items-center justify-center rounded-full bg-blue-100 px-2 py-1 m-1 min-w-min">
              {type}
            </div>
          ))}
        </div>
      )
    },
    filterFn: 'arrIncludesSome'
  },

  {
    accessorKey: "status",
    id:'status',
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
    sortingFn: (
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
]
