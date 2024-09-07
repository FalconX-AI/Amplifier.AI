'use client'
//import useSideBar from '@/context/use-sidebar'
import React from 'react'
import { Loader } from '../loader'
import { Switch } from '../ui/switch'

type Props = {}

const BreadCrumb = (props: Props) => {

  return (
    <div className="flex flex-col ">
      <div className="flex gap-5 items-center">
        <h2 className="text-3xl font-bold capitalize">Title</h2>
       
      </div>
      <p className="text-gray-500 text-sm">
        Hello, How are you doing ?
      </p>
    </div>
  )
}

export default BreadCrumb