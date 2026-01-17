import React, { useEffect, useState } from "react";
import { FaSearch, FaUser, FaUsers, FaCheckCircle, FaTimesCircle, FaEdit, FaToggleOn, FaToggleOff, FaEye, FaClock, FaTrash } from "react-icons/fa";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({ firstName: "", lastName: "", email: "" });

  useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/user/data", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await res.json();
      console.log(data); // should show {success: true, users: [...]}
      setUsers(data.users || []); // important: set array
      setFilteredUsers(data.users || []);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);

  // Helper function to format last seen time
  const formatLastSeen = (dateString) => {
    if (!dateString) return "Never";
    
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMinutes = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMinutes < 1) return "Just now";
    if (diffMinutes < 60) return `${diffMinutes} min ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return date.toLocaleDateString();
  };

  // Update user account status
  const updateUserStatus = async (userId, isActive) => {
    try {
      const res = await fetch(`/api/user/status/${userId}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isActive }),
      });
      
      const data = await res.json();
      if (data.success) {
        // Update local state
        setUsers(prevUsers => 
          prevUsers.map(user => 
            user._id === userId ? { ...user, isActive: data.user.isActive } : user
          )
        );
        alert(`User account ${isActive ? "activated" : "deactivated"} successfully`);
      } else {
        alert(data.message || "Failed to update user status");
      }
    } catch (error) {
      console.error("Error updating user status:", error);
      alert("Failed to update user status");
    }
  };

  // Handle edit button click
  const handleEditClick = (user) => {
    setEditingUser(user._id);
    setEditForm({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
  };

  // Handle edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    // In a real app, you would implement the update user endpoint
    // For now, we'll just show an alert
    alert("Edit functionality would save changes to: " + JSON.stringify(editForm));
    setEditingUser(null);
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingUser(null);
    setEditForm({ firstName: "", lastName: "", email: "" });
  };

  // Delete user
  const deleteUser = async (userId, userName) => {
    if (!window.confirm(`Are you sure you want to delete user ${userName}? This action cannot be undone.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/user/delete/${userId}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const data = await res.json();
      if (data.success) {
        // Update local state by removing the deleted user
        setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
        alert("User deleted successfully");
      } else {
        alert(data.message || "Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    }
  };

  // Filter users based on search term
  useEffect(() => {
    if (!searchTerm) {
      setFilteredUsers(users);
      return;
    }
    
    const filtered = users.filter(user => 
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredUsers(filtered);
  }, [searchTerm, users]);


  if (loading) return <div className="p-6 text-xl">Loading users...</div>;

  if (!filteredUsers.length) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <FaUsers className="mx-auto text-gray-400 text-5xl mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            {searchTerm ? "No users found" : "No users registered yet"}
          </h3>
          <p className="text-gray-500">
            {searchTerm 
              ? `No users match your search for "${searchTerm}"`
              : "There are currently no users in the system"
            }
          </p>
        </div>
      </div>
    );
  }

  // Calculate statistics
  const totalUsers = users.length;
  const adminUsers = users.filter(user => user.role === "admin").length;
  const verifiedUsers = users.filter(user => user.isAccountVerified).length;
  
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">User Management</h1>
        <p className="text-gray-600">Manage and monitor all registered users</p>
      </div>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FaUsers className="text-blue-600 text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-800">{totalUsers}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <FaUser className="text-green-600 text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Admin Users</p>
              <p className="text-2xl font-bold text-gray-800">{adminUsers}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <FaCheckCircle className="text-purple-600 text-xl" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Verified Users</p>
              <p className="text-2xl font-bold text-gray-800">{verifiedUsers}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="px-4 py-3">First Name</th>
              <th className="px-4 py-3">Last Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Verified</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last Seen</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                {editingUser === user._id ? (
                  // Edit form row
                  <td colSpan="8" className="px-4 py-3">
                    <form onSubmit={handleEditSubmit} className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={editForm.firstName}
                        onChange={(e) => setEditForm({...editForm, firstName: e.target.value})}
                        className="border rounded px-2 py-1 w-24"
                        placeholder="First Name"
                      />
                      <input
                        type="text"
                        value={editForm.lastName}
                        onChange={(e) => setEditForm({...editForm, lastName: e.target.value})}
                        className="border rounded px-2 py-1 w-24"
                        placeholder="Last Name"
                      />
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                        className="border rounded px-2 py-1 w-48"
                        placeholder="Email"
                      />
                      <button 
                        type="submit"
                        className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button 
                        type="button"
                        onClick={cancelEdit}
                        className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </form>
                  </td>
                ) : (
                  // Normal display row
                  <>
                    <td className="px-4 py-3">{user.firstName}</td>
                    <td className="px-4 py-3">{user.lastName}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.role === "admin"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {user.isAccountVerified ? (
                        <span className="text-green-600 font-semibold">
                          Verified
                        </span>
                      ) : (
                        <span className="text-red-500 font-semibold">
                          Not Verified
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => updateUserStatus(user._id, !user.isActive)}
                        className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                          user.isActive 
                            ? "bg-green-100 text-green-800 hover:bg-green-200" 
                            : "bg-red-100 text-red-800 hover:bg-red-200"
                        }`}
                      >
                        {user.isActive ? (
                          <>
                            <FaToggleOn className="text-green-600" />
                            <span>Active</span>
                          </>
                        ) : (
                          <>
                            <FaToggleOff className="text-red-600" />
                            <span>Inactive</span>
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {formatLastSeen(user.lastSeen)}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditClick(user)}
                          className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition"
                          title="Edit user"
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="p-2 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition"
                          title="View details"
                        >
                          <FaEye />
                        </button>
                        <button
                          onClick={() => deleteUser(user._id, `${user.firstName} ${user.lastName}`)}
                          className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
                          title="Delete user"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
