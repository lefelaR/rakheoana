import { portfolioCatalog } from "../constants/portfolioCatalog";
import type { PortfolioProject } from "../constants/portfolioCatalog";
import { http } from "./httpService";

export type { PortfolioProject };
export { portfolioPeriods } from "../constants/portfolioCatalog";

export const getPortfolioCatalog = (): PortfolioProject[] => portfolioCatalog;

export const getPortfolio = async (): Promise<PortfolioProject[]> => {
  const { data } = await http.get("/api/portfolio");
  if (Array.isArray(data?.data) && data.data.length > 0) {
    return data.data;
  }
  return portfolioCatalog;
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
