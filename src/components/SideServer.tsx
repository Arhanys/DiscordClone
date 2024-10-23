export default function SideServer() {
  return (
    <>
      <div
        id="SideServerContainer"
        className="bg-red-300 h-screen w-24 flex flex-col"
      >
        <div className="bg-blue-300 h-32 flex items-center justify-center">
          <div className="h-2/3 aspect-square rounded-full bg-blue-800"></div>
        </div>
        <div className="bg-black w-1/2 h-1 mx-auto mb-2"></div>
        <ul className="flex flex-col gap-4 items-center overflow-auto no-scrollbar">
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
          <li className="w-2/3 aspect-square bg-red-500 rounded-[50%] hover:rounded-3xl flex-shrink-0 transition-all"></li>
        </ul>
        <div className="bg-blue-300 h-32 flex justify-center items-center sticky bottom-0">
          <div className="h-2/3 aspect-square rounded-full bg-blue-500 hover:rounded-2xl shrink-0 "></div>
        </div>
      </div>
    </>
  );
}
