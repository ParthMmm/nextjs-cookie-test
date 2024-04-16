// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // res.setHeader("Set-Cookie", serialize("name", "John Doe"));
  // res.appendHeader("Set-Cookie", serialize("age", "30"));
  // // res.status(200).json({ name: "John Doe" });

  // const stateCookie = serialize("state", "1234", {
  //   httpOnly: true,
  //   maxAge: 60 * 60,
  //   path: "/",
  //   sameSite: "lax",
  //   secure: true,
  // });

  // const codeCookie = serialize("code", "5824", {
  //   httpOnly: true,
  //   maxAge: 60 * 60,
  //   path: "/",
  //   sameSite: "lax",
  //   secure: true,
  // });

  let response = NextResponse.next();

  response.cookies.set("state", "12134", {
    httpOnly: true,
    maxAge: 60 * 60,
    path: "/",
    sameSite: "lax",
    secure: true,
  });

  response.cookies.set("code", "5824", {
    httpOnly: true,
    maxAge: 60 * 60,
    path: "/",
    sameSite: "lax",
    secure: true,
  });

  response.cookies.set("bean", "rice");

  return response;

  // res.setHeader("Set-Cookie", [stateCookie, codeCookie]);

  // res.setHeader("Location", "/");
  res.status(200).end();
}
