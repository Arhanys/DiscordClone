"use client";

import { useState } from "react";
import FriendChat from "./FriendChat";

export default function SideFriend() {
  const [privateMessage, setPrivateMessage] = useState([{ name: "AlphA" }]);
  return (
    <>
      <div className="bg-accentDark h-screen w-72 flex flex-col">
        <button className="bg-backgroundDark rounded-sm h-6 w-[90%] line-clamp-1 text-lightGray my-3 mx-auto">
          Rechercher/lancer une conversation
        </button>
        <div className="bg-backgroundDark w-full h-[0.1rem] mx-auto mb-2"></div>

        <div
          id="friendsContainer"
          className=" overflow-auto h-full no-scrollbar"
        >
          <div
            id="FriendsButton"
            className="w-[90%] h-10 hover:bg-accentRed rounded-md mx-auto flex items-center group cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              className="ms-2 me-4 fill-accentRed group-hover:fill-accentDark"
            >
              <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
            </svg>
            <p className="text-lightGray text-center text-lg group-hover:text-offWhite">
              Amis
            </p>
          </div>
          <div
            id="SuperBoostButton"
            className="w-[90%] h-10 hover:bg-accentRed rounded-md mx-auto flex items-center group cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              className="ms-2 me-4 fill-accentRed group-hover:fill-accentDark"
            >
              <path d="M12 2C16.9706 2 21 6.02944 21 11V18.5C21 20.433 19.433 22 17.5 22C16.3001 22 15.2413 21.3962 14.6107 20.476C14.0976 21.3857 13.1205 22 12 22C10.8795 22 9.9024 21.3857 9.38728 20.4754C8.75869 21.3962 7.69985 22 6.5 22C4.63144 22 3.10487 20.5357 3.00518 18.692L3 18.5V11C3 6.02944 7.02944 2 12 2ZM12 12C10.8954 12 10 13.1193 10 14.5C10 15.8807 10.8954 17 12 17C13.1046 17 14 15.8807 14 14.5C14 13.1193 13.1046 12 12 12ZM9.5 8C8.67157 8 8 8.67157 8 9.5C8 10.3284 8.67157 11 9.5 11C10.3284 11 11 10.3284 11 9.5C11 8.67157 10.3284 8 9.5 8ZM14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8Z"></path>
            </svg>
            <p className="text-lightGray text-center text-lg group-hover:text-offWhite">
              SuperBoost
            </p>
          </div>
          <div
            id="ShopButton"
            className="w-[90%] h-10 hover:bg-accentRed rounded-md mx-auto flex items-center group cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              className="ms-2 me-4 fill-accentRed group-hover:fill-accentDark"
            >
              <path d="M22 20V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422V20H22ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z"></path>
            </svg>
            <p className="text-lightGray text-center text-lg group-hover:text-offWhite">
              Boutique
            </p>
          </div>
          <button className="flex justify-between w-[90%] mx-auto mb-2 px-2 text-lightGray hover:text-offWhite">
            <p>Message privés</p>
            <p>+</p>
          </button>
          {privateMessage.map((privateMessage, index) => (
            <FriendChat key={index} name={privateMessage.name} />
          ))}
        </div>
      </div>
    </>
  );
}
