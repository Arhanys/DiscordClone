import SideServer from "@/components/SideServer";
import SideFriend from "@/components/SideFriend";

export default function Home() {
  return (
    <main className="flex">
      <SideServer />
      <SideFriend />
    </main>
  );
}
