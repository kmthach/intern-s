export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export const apiEndpoints = {
  candidate: `${API_BASE_URL}/candidate`,
  university: `${API_BASE_URL}/university`,
};
