import { NextResponse } from "next/server";

// This is same as callling /api/echo
export async function GET(request : Request){
    const { searchParams } = new URL(request.url)
    console.log(searchParams)
    return NextResponse.json({ msg : "Echo Route"})
}

export async function POST(request : Request){
    const res = await request.json()
    console.log(res)
    return NextResponse.json({ msg : res})
}