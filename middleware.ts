
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes =["/common/profile"]


export default function middleWare(req:NextRequest){
    const userIsLogin = req.cookies.get('phone');  
    if(!userIsLogin && protectedRoutes.includes(req.nextUrl.pathname)){
        const redirectUrl = new URL('/common/login',req.nextUrl.origin)
        return NextResponse.redirect(redirectUrl.toString())
    }
}