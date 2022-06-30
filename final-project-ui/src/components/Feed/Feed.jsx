import React from "react";

export const Feed = () => {
  return (
    <div>
      <div className="flex flex-row pt-20">
        <div className="grow h-14"></div>
        <div className="flex-none grid grid-cols-5 w-[800px] h-[1000px] gap-2">
          <div className="col-start-1  col-span-1 rounded-lg flex flex-col space-y-2 fixed w-40 pr-2">
            <div className="w-full h-36 rounded-lg bg-slate-600 border-2 border-gray-500 text-center">
              Log in
            </div>
            <div className="w-full h-80 rounded-lg bg-slate-600 border-2 border-gray-500 text-center">
              Suggestions
            </div>
          </div>
          <div className="col-start-2 col-span-3 rounded-lg grid grid-cols-1 gap-2 ">
            <div className="h-96 w-full bg-slate-500 rounded-lg border-2 border-gray-300"></div>
            <div className="h-96 w-full bg-slate-500 rounded-lg border-2 border-gray-300"></div>
            <div className="h-96 w-full bg-slate-500 rounded-lg border-2 border-gray-300"></div>
            <div className="h-96 w-full bg-slate-500 rounded-lg border-2 border-gray-300"></div>
            <div className="h-96 w-full bg-slate-500 rounded-lg border-2 border-gray-300"></div>
            <div className="h-96 w-full bg-slate-500 rounded-lg border-2 border-gray-300"></div>
            <div className="h-96 w-full bg-slate-500 rounded-lg border-2 border-gray-300"></div>
            <div className="h-96 w-full bg-slate-500 rounded-lg border-2 border-gray-300"></div>
          </div>

          <div className="col-start-5 col-span-1 rounded-lg flex flex-col space-y-2 fixed justify-self-end w-40 pl-2">
            <div className="w-full h-36 rounded-lg bg-slate-600 border-2 border-gray-500 text-center">
              Mint
            </div>
            <div className="w-full h-36 rounded-lg bg-slate-600 border-2 border-gray-500 text-center">
              Get Verified
            </div>
          </div>
        </div>
        <div className="grow h-14"></div>
      </div>
    </div>
  );
};
