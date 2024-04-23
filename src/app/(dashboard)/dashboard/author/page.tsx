import BreadCrumb from "@/components/breadcrumb";
import { AuthorClient } from "@/components/tables/author-tables/client";
import { authors } from "@/constants/author";

const breadcrumbItems = [{ title: "Authors", link: "/dashboard/author" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <AuthorClient data={authors} />
      </div>
    </>
  );
}
