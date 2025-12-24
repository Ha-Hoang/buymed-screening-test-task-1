"use server";
import axios from "@/lib/axios";

export const getProducts = async () => {
  const response = await axios.get("/api/product-list");
  return response.data;
};
