import { useState } from "react";

interface PrivateMessageModalProps {
  status: string;
}

export default function PrivateMessageModal(status: PrivateMessageModalProps) {
  const [MaxAddedFriends, setMaxAddedFriends] = useState(9);
  return (
    <>
      {status.status === "shown" ? (
        <div className="bg-thirdDark h-96 w-96 absolute py-2 rounded-lg ">
          <div className=" h-[30%] w-full flex flex-col px-4 ">
            <h1 className="text-lightGray font-bold text-xl">
              Sélectionne des amis
            </h1>
            <p className="text-lightGray text-sm mb-2">
              Tu peux encore sélectionner {MaxAddedFriends} ami(s)
            </p>
            <input
              type="text"
              placeholder="Entre le nom d'utilisateur d'un ami"
              className="bg-backgroundDark rounded-md w-full h-8 mt-2 ps-2 text-lightGray self-center"
            />
          </div>
          <div className="bg-accentDark h-[0.1rem] w-full"></div>
          <div
            id="modalFriendList"
            className="h-[45%] border-b-[0.1rem] border-accentDark"
          ></div>
          <div className=" h-1/4 px-4 flex items-center justify-center">
            <button className="bg-accentRed hover:bg-darkRed w-full h-10 rounded-sm text-lightGray hover:text-offWhite">
              Créer un MP
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
