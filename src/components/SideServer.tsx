import ServerIcon from "./ServerIcon";

export default function SideServer() {
  return (
    <>
      <div
        id="SideServerContainer"
        className="bg-backgroundDark h-screen w-24 flex flex-col"
      >
        <div
          id="logoContainer"
          className=" h-24 min-h-24 flex items-center justify-center"
        >
          <div className="w-2/3 aspect-square rounded-full bg-darkRed"></div>
        </div>
        <div className="bg-accentDark w-1/2 h-1 mx-auto mb-2"></div>
        <ul
          id="serverList"
          className="flex flex-col gap-4 items-center overflow-auto no-scrollbar"
        >
          <ServerIcon />
        </ul>
        <div
          id="discoverContainer"
          className="h-24 min-h-24 w-24 flex justify-center items-center fixed bottom-0 bg-backgroundDark after:content-[''] after:absolute after:top-[-10%] after:h-4 after:w-full after:bg-gradient-to-t after:from-backgroundDark after:to-transparent cursor-pointer"
        >
          <div className="h-2/3 aspect-square rounded-[50%] bg-accentRed hover:rounded-3xl shrink-0 transition-all"></div>
        </div>
      </div>
    </>
  );
}
