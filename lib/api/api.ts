import axios from "axios";
import type { Note } from "../../types/note";

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}
export const nextServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
  withCredentials: true,
});

export interface CheckSession {
  success: boolean;
}
