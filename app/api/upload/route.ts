import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/libs/cloudinary";
import { UploadApiResponse } from "cloudinary";

export async function POST(req: NextRequest) {
    try { 
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    folder: "test_cloud_upload",
                    upload_preset: "test_cloud"
                 },
                (error, result) => {
                    if (error) reject(error);
                    else if (result) resolve(result);
                    else reject(new Error("Upload result is undefined"));
                }
            );
            stream.end(buffer);
        });

        return NextResponse.json({ secure_url: uploadResult.secure_url });
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
