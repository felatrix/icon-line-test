'use client';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Author } from '@/constants/data';
import { Checkbox } from '@/components/ui/checkbox';
import { findAuthorsByBookIds } from '@/lib/authorToBookMatcher';

export const columns: ColumnDef<Author>[] = [
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
      return `${props.row.original.username}`;
    },
  },
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell(props) {
      return `${props.row.original.firstname}`;
    },
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    cell(props) {
      return `${props.row.original.lastname}`;
    },
  },
  {
    accessorKey: 'booksIds',
    header: 'Books',
    cell(props) {
      return `${props.row.original.books_ids}`;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
