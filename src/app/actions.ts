"use server";

import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";

export async function searchVectorDb(keyword: string) {
  // API init
  const pc = new Pinecone({ apiKey: process.env.PINECONEKEY || "" });
  const openai = new OpenAI({ apiKey: process.env.OPENAIKEY });

  const indexName = "kiosk-clothes";
  const index = pc.index(indexName);

  const searchVector = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: keyword,
    encoding_format: "float",
  });

  const queryResult = await index.namespace("clothes").query({
    topK: 5,
    vector: searchVector.data[0].embedding,
    includeValues: false,
  });

  return queryResult.matches;
}
