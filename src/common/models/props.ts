import React from "react"

type BaseProps<T> = {
    title?:string
    data: T[]
}

export type { BaseProps }