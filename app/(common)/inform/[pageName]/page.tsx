'use client'
import { useParams } from "next/navigation"


export default function Inform(){

    const pageName = useParams()

    return(
        <section>{pageName.pageName}</section>
    )
}