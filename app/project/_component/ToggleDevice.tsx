import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
  isPhone: boolean;
  setIsPhone: Dispatch<SetStateAction<boolean>>;
}

const ToggleDevice = ({ isPhone, setIsPhone }: Props) => {
  return (
    <div className="">
      <div className="flex items-center justify-between w-14 h-7 md:w-20 md:h-10 rounded-3xl bg-green-600 relative shadow-md mb-5 cursor-pointer hover:scale-105">
        <div
          className={`w-7 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-0 left-0 transition-all duration-300 ${
            isPhone ? "translate-x-7 md:translate-x-10" : "translate-x-0"
          }`}
          onClick={() => {
            setIsPhone(!isPhone);
          }}
        />
        <p className="pl-[5px] md:pl-2">
          <svg
            className="w-5 md:w-7 aspect-square fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              stroke="none"
              d="M335.7 32H177.1C158.8 32 144 46.6 144 64.9v381c0 18.4 14.8 34.1 33.1 34.1h158.5c18.3 0 32.3-15.7 32.3-34.1v-381C368 46.6 354 32 335.7 32M241 55h30c2.2 0 4 1.8 4 4s-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4s1.8-4 4-4m15.5 410c-9.6 0-17.4-7.8-17.4-17.4s7.8-17.4 17.4-17.4 17.4 7.8 17.4 17.4-7.8 17.4-17.4 17.4m93.5-49H162c-1.1 0-2-.9-2-2V85c0-1.1.9-2 2-2h188c1.1 0 2 .9 2 2v329c0 1.1-.9 2-2 2"
            />
          </svg>
        </p>
        <p className="pr-[5px] md:pr-2">
          <svg
            className="w-5 md:w-7 aspect-square fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M4 16h16V5H4zm9 2v2h4v2H7v-2h4v-2H2.992A1 1 0 0 1 2 16.992V4.008C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.985c0 .557-.455 1.008-.992 1.008z"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default ToggleDevice;
