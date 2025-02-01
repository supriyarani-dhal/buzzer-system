import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "../../../lib/db";
import responseModel from "@/models/response.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();
  await connectToDB();
  const { userId, name } = req.body;
  const response = await responseModel.create({
    userId,
    name,
    timestamp: new Date(),
  });
  res.status(201).json(response);
}
