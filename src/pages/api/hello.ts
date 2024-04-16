// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Set-Cookie", serialize("name", "John Doe"));
  res.appendHeader("Set-Cookie", serialize("age", "30"));
  // res.status(200).json({ name: "John Doe" });

  res.setHeader("Location", "/");
  res.status(302).end();
}
