export interface Task {
  id: number;
  title: string;
  priority: "High" | "Low";
  status: "Pending" | "Completed";
}
