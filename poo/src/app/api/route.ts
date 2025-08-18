import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

const connectionString = "postgresql://postgres.edxdrjgaiwftvtpcyeii:laOSUDvlWF4l937H@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
const sql = postgres(connectionString  );

export async function POST(request: NextRequest) {
  try {

    const data = await request.json();
    const { title, description, author } = data;

    validTitle(title);
    validDescription(description);
    validAuthor(author);
    newpost({ title, description, author })
    
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

async function newpost(data: { title: string; description: string; author: string }): Promise<void> {
    
    try{
        const connectionString = "postgresql://postgres.edxdrjgaiwftvtpcyeii:laOSUDvlWF4l937H@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
        const sql = postgres(connectionString  );

        await sql`INSERT INTO public.post (title, description, author)VALUES (${data.title}, ${data.description}, ${data.author})`; 
    }catch (error) {
      throw new Error("Failed to save post");
    }
}

function validTitle(title: string): void {

  if (typeof title !== "string") {
    throw new Error("Invalid title format");
  }

  if (!(title.length > 0 && title.length <= 50)) {
    throw new Error("Invalid title length");
  }
}

function validDescription(description: string): void {

  if (typeof description !== "string") {
    throw new Error("Invalid description format");
  }

  if (!(description.length > 0 && description.length <= 300)) {
    throw new Error("Invalid description length");
  }
}

function validAuthor(author: string): void {

  if (typeof author !== "string") {
    throw new Error("Invalid author format");
  }

  if (!(author.length > 0 && author.length <= 30)) {
    throw new Error("Invalid author length");
  }
}