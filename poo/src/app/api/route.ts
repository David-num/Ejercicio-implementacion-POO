import { NextRequest, NextResponse } from "next/server";
import PostRegister from "@/utils/post-register";
import PostgresPostsRepository from "@/utils/postgres-post-repository";
import PostGetAll from "@/utils/post-get";




const repository = new PostgresPostsRepository();

export async function POST(request: NextRequest) {
  try {

    const data = await request.json();

    const register = new PostRegister(repository);
    await register.run(data.title, data.description, data.author);
    
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

export async function GET() {
  try { 
    const information = new PostGetAll(repository);
    const list = await information.get();

    return NextResponse.json(
      {list}
    );

  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Error get" },
      { status: 400 }
    );
  }
}
