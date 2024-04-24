'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  router.push("/dashboard/book")
  return "";
}
