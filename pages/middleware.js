import { NextResponse } from "next/server";
export default function middleware(req)
{
    console.log('hello from middleware');
    let verify = localStorage.getItem("user");
    let url = req.url ;
    if(!verify && url.includes('/cashback-summary'))
    {
        return NextResponse.redirect("/");
    }
}