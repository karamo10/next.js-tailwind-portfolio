import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Account",
}

export default async function AccountPage() {
   
    return (
        <section className="h-54 max-h-min">
            <div className="w-[70%] m-auto h-[500px] flex items-center justify-center flex-col">
                <h1 className="text-black text-xl font-extrabold pt-16">Account page coming soon...</h1> 
            </div>
        </section>
    )
}