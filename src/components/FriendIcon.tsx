interface FriendIconProps {
  status?: "online" | "offline" | "away" | "busy";
}

export default function FriendIcon({ status = "offline" }: FriendIconProps) {
  const statusColor = {
    online: "after:bg-green-500",
    offline: "after:bg-gray-500",
    away: "after:bg-yellow-500",
    busy: "after:bg-red-500",
  };

  return (
    <>
      <div
        className={`h-5/6 aspect-square rounded-[50%] relative bg-darkRed after:content-[''] after:h-5 after:aspect-square after:rounded-full after:absolute after:-bottom-1 after:-right-1 after:border-4 after:border-accentDark after:group-hover:border-accentRed ${statusColor[status]}`}
      ></div>
    </>
  );
}
