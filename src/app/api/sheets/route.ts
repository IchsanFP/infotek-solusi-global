import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(process.env.NEXT_PUBLIC_SHEET_URL as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // cek content-type dulu
    const contentType = response.headers.get("content-type") || "";

    let result: unknown;
    if (contentType.includes("application/json")) {
      result = await response.json();
    } else {
      const text = await response.text();
      try {
        result = JSON.parse(text); // coba parse manual
      } catch {
        result = { status: "OK", raw: text };
      }
    }

    return NextResponse.json(result, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (err) {
    console.error("Error submitting form:", err);
    return NextResponse.json(
      { status: "ERROR", message: "Failed to submit" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}