import { NextResponse } from "next/server"


// This is same as callling /api/hello
export async function GET(){
    return NextResponse.json({ msg : "Hello Next.js"})
}