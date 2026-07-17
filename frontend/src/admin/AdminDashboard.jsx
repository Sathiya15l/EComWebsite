import React from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../styles/AdminDashboard.css';
import adminImage from '../images/admin.png';

const AdminDashboard = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [stats, setStats] = useState(null);

    useEffect(() => {

        if (!user) {
            navigate("/login");
            return;
        }

        const fetchStats = async () => {
            try {
                const res = await fetch("/api/analytics", {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });

                const data = await res.json();

                if (res.ok) {
                    setStats(data);
                } else {
                    if (res.status === 401) {
                        navigate("/login");
                    }

                    setStats({
                        totalOrders: 0,
                        totalProducts: 0,
                        totalUsers: 0,
                        totalRevenue: 0,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchStats();
    }, [user, navigate]);

    return (
        <div className="admin-dashboard">

            <div className="dashboard-header">
                <img
                    className="dashboard-logo"
                    src={adminImage}
                    alt="Admin"
                />
                <h2 className="dashboard-title">Admin Dashboard</h2>
            </div>

            <p className="welcome-text">
                Welcome back, {user?.name}
            </p>

            {stats ? (
                <div className="stats-container">

                    <div className="stat-card">
                        <h4>Total Orders</h4>
                        <div className="stat-value">
                            {stats.totalOrders}
                        </div>
                    </div>

                    <div className="stat-card">
                        <h4>Total Products</h4>
                        <div className="stat-value">
                            {stats.totalProducts}
                        </div>
                    </div>

                    <div className="stat-card">
                        <h4>Total Users</h4>
                        <div className="stat-value">
                            {stats.totalUsers}
                        </div>
                    </div>

                    <div className="stat-card">
                        <h4>Total Revenue</h4>
                        <div className="stat-value">
                            ₹{stats.totalRevenue.toFixed(2)}
                        </div>
                    </div>

                </div>
            ) : (
                <div className="loading-metrics">
                    Loading Metrics...
                </div>
            )}

            <div className="admin-controls">

                <h3 className="controls-title">
                    Administrative Controls
                </h3>

                <div className="controls-buttons">

                    <button
                        className="btn admin-btn"
                        onClick={() => navigate("/admin/add-product")}
                    >
                        + Add Product
                    </button>

                    <button
                        className="btn admin-btn"
                        onClick={() => navigate("/admin/products")}
                    >
                        📦 Manage Products
                    </button>

                    <button
                        className="btn admin-btn"
                        onClick={() => navigate("/admin/orders")}
                    >
                        🚚 Manage Orders
                    </button>

                    <button
                        className="btn admin-btn"
                        onClick={() => navigate("/admin/users")}
                    >
                        👥 Users Directory
                    </button>

                </div>

            </div>

        </div>
    );
};

export default AdminDashboard;