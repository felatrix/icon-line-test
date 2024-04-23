import { Icons } from "@/components/icons";
// @ts-ignore
import { NavItem, SidebarNavItem } from "@/types";

export type Book = {
  id: number;
  title: string;
  authors_ids: string;
  item_type: 'book' | 'journal';
  published_date: string;
};


export type Author = {
  id: number;
  username: string;
  firstname:string;
  lastname:string;
  books_ids:string;
  user_id:number;
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Books / Journal",
    href: "/dashboard/book",
    icon: "kanban",
    label: "book",
  },
  {
    title: "Author",
    href: "/dashboard/author",
    icon: "employee",
    label: "author",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Login",
    href: "/",
    icon: "login",
    label: "login",
  },
];
