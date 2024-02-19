import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    const res = NextResponse.json({ name: req.method, param: req.nextUrl.searchParams.get('name') });

    console.log(req.method);

    return res;
}