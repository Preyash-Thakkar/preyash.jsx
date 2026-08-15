// proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { userAgent } from 'next/server';

export function proxy(request: NextRequest) {
    const { device, browser, os } = userAgent(request);
    const ip = request.headers.get('x-forwarded-for') || 'Unknown IP';
    const country = request.headers.get('x-vercel-ip-country') || 'Unknown Country';
    const city = request.headers.get('x-vercel-ip-city') || 'Unknown City';
    const referer = request.headers.get('referer') || 'Direct Visit';
    const path = request.nextUrl.pathname;

    const visitLog = {
        timestamp: new Date().toISOString(),
        path,
        ip,
        location: `${city}, ${country}`,
        browser: browser.name || 'Unknown Browser',
        os: os.name || 'Unknown OS',
        device: device.type || 'desktop',
        referer,
    };

    console.log('[Visitor Logged]', visitLog);
    return NextResponse.next();
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};