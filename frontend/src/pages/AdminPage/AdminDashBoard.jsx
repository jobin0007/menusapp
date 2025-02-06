import React from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { MdCreateNewFolder, MdDashboard } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { getOneAdminAPI } from "../../services/adminService";

function AdminDashBoard() {
  const { id: adminId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["user", adminId],
    queryFn: () => getOneAdminAPI(adminId),
  });

  const adminFound = data?.adminFound || {};

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="w-64 bg-white shadow-lg min-h-screen p-4 hidden md:block">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Admin Panel
        </h2>
        <nav className="space-y-4">
          <Link
            to={`/admin/${adminId}/add-menu`}
            className="flex items-center gap-2 p-2 rounded-md hover:bg-indigo-100"
          >
            <MdCreateNewFolder /> Add Menu
          </Link>
          <Link
            to={`/admin/${adminId}/get-menu`}
            className="flex items-center gap-2 p-2 rounded-md hover:bg-indigo-100"
          >
            <MdCreateNewFolder /> Get Menu
          </Link>
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center bg-white p-4 shadow-md">
          <div className="flex items-center gap-4">
            <AiOutlineHome className="text-lg" />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-red-600 hover:text-red-800">
              <AiOutlineLogout className="text-lg" /> Logout
            </button>
            <div className="flex items-center gap-2">
              <AiOutlineUser className="text-lg" />
              <span>{adminFound?.name || "Loading..."}</span>
            </div>
          </div>
        </div>

        <main className="flex-grow p-6">
          <h1 className="flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-bold py-6 text-center bg-white shadow-md rounded-lg">
            <MdDashboard className="mr-2" /> Admin Dashboard
          </h1>

          <div className="bg-white shadow-md rounded-lg p-4">
            <Outlet /> 
          </div>
        </main>

        
      </div>
    </div>
  );
}

export default AdminDashBoard;
