import React from "react";
import AdminSidebar from "../../components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-lg-1 p-0">
            <AdminSidebar />
          </div>
          <div className="col-md-10 col-lg-11 main-content">
            {/* Your dashboard content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
