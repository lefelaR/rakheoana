import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_API_ENDPOINT;

export const http = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export function hasApi(): boolean {
  return Boolean(baseURL);
}
