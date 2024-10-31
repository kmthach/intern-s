export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export const apiEndpoints = {
  login: `${API_BASE_URL}/auth/signin`,
  candidate: `${API_BASE_URL}/candidate`,
  university: `${API_BASE_URL}/university`,
  internPeriod: `${API_BASE_URL}/intern-period`,
  position: `${API_BASE_URL}/position`,
  sendInterviewEmail: `${API_BASE_URL}/mail/multi-recipients`,
};
