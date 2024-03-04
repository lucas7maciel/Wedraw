'use client'

import { useState } from "react"

export function State() {
    const [message, setMessage] = useState<string>("Creating account...")
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center" id="state">
            <h1>Este é o estado</h1>
            <h2>{message}</h2>
        </div>
    )
}