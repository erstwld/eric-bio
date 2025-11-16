import type { Route } from "./+types/aboutme";
import { Construction } from "../components/construction/Construction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Me - Eric Sterwald" },
    { name: "about me", content: "A website about Eric Sterwald!" },
  ];
}

export default function AboutMe() {
  return <Construction />;
}
