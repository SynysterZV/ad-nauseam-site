import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Redirect({ href }) {
    const router = useRouter()

    useEffect(() => {
        return router.push(href)
    }, [])

    return null
}