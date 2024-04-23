import BreadCrumb from "@/components/breadcrumb";
import { BookClient } from "@/components/tables/book-tables/client";
import { books } from "@/constants/book";

const breadcrumbItems = [{ title: "Books / Journal", link: "/dashboard/book" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <BookClient data={books} />
      </div>
    </>
  );
}
