import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div class="grid grid-cols-3 navbar bg-base-100 fixed">
        <div class="flex-1 justify-end pr-2">
          <a class="btn btn-ghost normal-case text-xl">UDapp</a>
        </div>
        <div class="flex-none">
          <div class="form-control w-full flex-none">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered"
            />
          </div>
        </div>
        {/* Feed/Profile box */}
        <div class="grid grid-cols-2 pl-2">
          <a class="btn btn-ghost normal-case text-xl border-gray-600 w-20">
            Feed
          </a>

          <div class="dropdown dropdown-end justify-self-end ">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://i.imgur.com/myrOkff.jpg" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="">
        <div class="w-full border-t border-gray-500"></div>
      </div>
    </div>
  );
};
