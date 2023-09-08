import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
    const reqBody = await req.json();
    let ToEmail = reqBody;
    const transporter = nodemailer.createTransport({
        // configure your smtp settings here
        host: "mail.teamrabbil.com",
        port: "25",
        secure: false,
        auth: {
            user: "info@teamrabbil.com",
            pass: "~sR4[bhaC[Qs",
        },
        tls: {
            rejectUnauthorized: false
        },
    });
    let myEmail = {
        from: "from nextjs <info@teamrabbil.com>",
        to: ToEmail,
        subject: "email",
        text: "email body and otp is 1234",
    };
    try {
        let result = await transporter.sendMail(myEmail);
        return NextResponse.json(
            { msg: result },
            {
                status: 200,
                headers: {
                    "Set-Cookie": `email=${ToEmail}; Max-Age=7200; Path=/; SameSite=Strict`,
                },
            }
        );
    } catch (e) {
        return NextResponse.json({ msg: "Fail" });
    }
}