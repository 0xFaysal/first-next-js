// import Image from "next/image";

import Button from "./_components/Button";

export default function Home() {
    return (
        <div className='w-50% h-80% flex flex-col items-center justify-center bg-gray-80'>
            <h1 className='text-4xl font-bold'>Hello, Next.js!</h1>
            <Button>Click Me</Button>
        </div>
    );
}
