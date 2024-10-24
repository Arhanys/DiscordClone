import ServerIcon from "./ServerIcon";

export default function SideServer() {
  return (
    <>
      <div
        id="SideServerContainer"
        className="bg-backgroundDark h-screen w-24 min-w-24 flex flex-col"
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
          <div className="h-2/3 aspect-square flex items-center justify-center rounded-[50%] bg-accentRed hover:bg-darkRed hover:rounded-3xl shrink-0 transition-all group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40px"
              height="40px"
              className="group-hover:rotate-180 transition-all  duration-700"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM16.5 7.5L10 10L7.5 16.5L14 14L16.5 7.5ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
