import { connectToDB } from "@/lib/db";
import { generateToken } from "@/lib/jwt";
import UserModel from "@/models/user.model";
import { ApiResponse } from "@/types/api.types";
import { RegisterBody } from "@/types/user.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();

    const body: RegisterBody = await req.json();

    const { name, email, password, mobile } = body;

    if (!name || !email || !password) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        },
      );
    }

    const isExisted = await UserModel.findOne({ email });

    if (isExisted) {
      return NextResponse.json<ApiResponse>({
        success: false,
        message: "User already Existed",
      });
    }

    const newUser = await UserModel.create({ name, email, password, mobile });

    const tokne = generateToken({ userId: newUser._id.toString() });

    const response = NextResponse.json<ApiResponse>(
      {
        success: true,
        message: "User registered successfully",
        data: {
          user: {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
          },
        },
      },
      { status: 201 },
    );

    response.cookies.set("token", tokne, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    });

    return response;
  } catch (error) {
    console.log(`Error in Register ${error} `);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        error: {
          error,
        },
      },
      {
        status: 500,
      },
    );
  }
}
