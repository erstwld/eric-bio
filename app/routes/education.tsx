import { Construction } from "../components/construction/Construction";

export function meta() {
  return [
    { title: "Education - Eric Sterwald" },
    { name: "education", content: "My educational background." }
  ];
}

export default function Education() {
  return <Construction />;
}