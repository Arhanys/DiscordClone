import SideServer from "@/components/SideServer";
import SideFriend from "@/components/SideFriend";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main className="flex">
      <SideServer />
      <SideFriend />
      <TopBar />
    </main>
  );
}
