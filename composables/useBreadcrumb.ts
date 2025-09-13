import { useState } from "#app";
// import type { BreadCrumbItem } from "@/types/common";

export const useBreadcrumb = () =>
  useState<any[]>("breadcrumb", () => []);
