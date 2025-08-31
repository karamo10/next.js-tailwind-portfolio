import Form from "@/app/ui/blog/create-blog-post"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Create"
}

export default function Page() {

    return (
        <div className=" py-5">
            <Form />
        </div>
    )
}