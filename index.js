import dynamic from "next/dynamic";
const AgendaNormativa2025 = dynamic(() => import("../components/AgendaNormativa2025"), { ssr: false });
export default function Home() {
  return <AgendaNormativa2025 />;
}
