import type { Metadata } from "next";
import "./styles/global.scss";
import React from "react";

export const metadata: Metadata = {
    title: "Shawn Hardern",
    description: "Shawn Hardern Website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={``}>{children}</body>
        </html>
    );
}
