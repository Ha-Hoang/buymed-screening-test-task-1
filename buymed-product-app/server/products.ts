"use server";
import axios from "@/lib/axios";
import { unstable_cache } from "next/cache";

interface GetProductsParams {
  search: string;
  filter: string;
}

export const getProducts = async ({ search, filter }: GetProductsParams) => {
  const response = await axios.get(
    `/api/product-list/?search=${search}&filter=${filter}`
  );
  return response.data;
};
