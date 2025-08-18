import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {

    const data = await request.json();
    const { title, description, author } = data;

    if (typeof title !== "string") {
      throw new Error("Invalid title format");
    }

    if (!(title.length > 0 && title.length <= 30)) {
      throw new Error("Invalid title length");
    }

    if (typeof description !== "string") {
      throw new Error("Invalid description format");
    }

    if (!(description.length > 0 && description.length <= 300)) {
      throw new Error("Invalid description length");
    }

    if (typeof author !== "string") {
      throw new Error("Invalid author format");
    }
    
    if (!(author.length > 0 && author.length <= 50)) {
      throw new Error("Invalid author length");
    }

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