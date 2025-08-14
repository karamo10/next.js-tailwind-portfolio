import { signOut } from "@/auth";
import { PowerIcon } from "@heroicons/react/20/solid";


export default function SignOut() {

    return (
        <form action={async () => {
            'use server';
            await signOut({redirectTo: '/'})
        }}
        >
            <button className="flex items-center gap-1 bg-black text-white text-sm font-bold px-2 py-1.5 rounded-lg shadow-md hover:shadow-xl">
                <PowerIcon className="w-5 h-5" />
                Sign Out
            </button>
        </form>
    )
}