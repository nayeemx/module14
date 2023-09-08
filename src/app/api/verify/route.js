import { NextResponse } from "next/server";
import { TokenCookie } from "@/app/utility/TokenCookie";
import { cookies } from "next/headers";

export async function POST(req, res) {
  const JsonBody = await req.json();
  const cookieStore = cookies();
  const email = cookieStore.get("email");
  console.log(email);
  let VerifyCode = JsonBody["password"];

  console.log(VerifyCode);
  //Data Checking
  if (VerifyCode === "1234") {
    let Cookie = await TokenCookie(email);
    return NextResponse.json(
      { status: true, message: "Request completed" },
      { status: 200, headers: Cookie }
    );
  } else {
    return NextResponse.json({ status: false, message: "Request Fail" });
  }
}

export async function GET(req, res) {
  cookies().delete("token");
  return NextResponse.json({ status: true, message: "Request Completed" });
}