import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-lg-1 p-0">
            <AdminSidebar />
          </div>
          <div className="col-md-10 col-lg-11 main-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
