'use client';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Book } from '@/constants/data';
import { Checkbox } from '@/components/ui/checkbox';
import { findAuthorsByBookIds } from '@/lib/authorToBookMatcher';
export const columns: ColumnDef<Book>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'NAME',
    cell(props) {
      return `${props.row.original.title}`;
    },
  },
  {
    accessorKey: 'item_type',
    header: 'TYPE',
    cell: ({ row }) => `${row.original.item_type.toUpperCase()}`,
  },
  {
    accessorKey: 'authors',
    header: 'AUTHORS',
    cell: ({ row }) =>
      findAuthorsByBookIds(row.original.authors_ids).map((value, index) => (
        <p key={index}>{value.username} &nbsp;</p>
      )),
  },

  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
