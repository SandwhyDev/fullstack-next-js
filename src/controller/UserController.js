import express from "express";
import UserModel from "../model/UserModel";
import bcryptjs from "bcryptjs";
const salt = bcryptjs.genSaltSync(10);

const UserController = express.Router();

// CREATE USER
UserController.post("/user/create", async (req, res) => {
  try {
    const data = await req.body;
    const result = await UserModel.create({
      data: {
        email: data.email,
        password: bcryptjs.hashSync(data.password, salt),
      },
    });

    res.status(201).json({
      success: true,
      msg: "berhasil",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// READ USER
UserController.post("/user/read", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = await req.query;
    const skip = (page - 1) * limit;
    const { filter } = await req.body;
    const readUser = await UserModel.findMany({
      where: filter,
      skip: parseInt(skip),
      take: parseInt(limit),
      select: {
        id: true,
        email: true,
      },
    });

    const cn = await UserModel.count();
    res.status(200).json({
      currentPage: parseInt(page),
      total_page: Math.ceil(cn / limit),
      total_data: cn,
      query: readUser,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default UserController;
