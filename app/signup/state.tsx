'use client'

import { useState } from "react"

export function State() {
    const [message, setMessage] = useState<string>("Sending request...")
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center pt-12" id="state">
            <h1 className="font-semibold text-5xl">Wait a second! We're creating your account</h1>
            <img className="mt-6 mb-8" src={"https://i.pinimg.com/originals/44/7e/3f/447e3f941b28b743e009d6b36e4148c1.gif"} alt="Loading" />
            <h2 className="font-semibold text-2xl">{message}</h2>
        </div>
    )
}