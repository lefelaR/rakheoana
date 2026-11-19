import type { PortfolioProject } from "../constants/portfolioCatalog";
import { http } from "./httpService";

export type { PortfolioProject };
export { portfolioPeriods } from "../constants/portfolioCatalog";

export const getPortfolio = async (): Promise<PortfolioProject[]> => {
  const { data } = await http.get("/api/portfolio");
  if (!Array.isArray(data?.data)) {
    throw new Error("Portfolio response was not a list");
  }
  return data.data;
};

export type PortfolioProjectPayload = Omit<PortfolioProject, "id">;

export const updatePortfolio = async (
  id: string,
  payload: PortfolioProjectPayload
): Promise<PortfolioProject> => {
  const { data } = await http.put(`/api/portfolio/${id}`, payload);
  return data.data;
};

export const createPortfolio = async (
  payload: PortfolioProjectPayload
): Promise<PortfolioProject> => {
  const { data } = await http.post("/api/portfolio", payload);
  return data.data;
};

export const isDraftPortfolioId = (id: string) => id.startsWith("new-");

export const createBlankPortfolioProject = (): PortfolioProject => ({
  id: `new-${Date.now()}`,
  title: "",
  credit: "",
  url: "",
  image: "",
  period: "past",
});
