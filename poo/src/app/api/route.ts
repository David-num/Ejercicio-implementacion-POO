import { NextRequest, NextResponse } from "next/server";
import PostRegister from "@/utils/post-register";




export async function POST(request: NextRequest) {
  try {

    const data = await request.json();
    const { title, description, author } = data;

    const register = new PostRegister(title, description, author);
    await register.run(register.newPost);
    
    return NextResponse.json(
      { message: "Data is valid" }
    );

  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Error validating data" },
      { status: 400 }
    );
  }
}
