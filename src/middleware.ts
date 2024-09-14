"use client"
import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const authHeader = request.headers.get('Authorization')

    if(authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1]
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/splashscreen', request.url))
}

export const config = {
    matcher: ['/wallet/:path*', '/game/:path*'],
}