
import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
  try {
    // Optional: check if admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const users = await userModel.find().select("-password"); // hide passwords
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update user account status (active/inactive)
export const updateUserStatus = async (req, res) => {
  try {
    // Check if admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const { userId } = req.params;
    const { isActive } = req.body;

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { isActive },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    // Check if admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const { userId } = req.params;

    // Prevent deleting the admin user themselves
    if (req.user._id.toString() === userId) {
      return res.status(400).json({ success: false, message: "Cannot delete your own account" });
    }

    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update user last seen time
export const updateLastSeen = async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Only allow users to update their own last seen or admins to update any user
    if (req.user.role !== "admin" && req.user._id.toString() !== userId) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { lastSeen: new Date() },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
