"use client";
import { ReactNode } from "react";
import { useProjects, Project } from "@/hooks/useProjects";

type Props = {
  children: (projects: Project[]) => ReactNode;
};

export default function ProjectData({ children }: Props) {
  const projects = useProjects(); // 即時に配列が返る
  return <>{children(projects)}</>;
}
