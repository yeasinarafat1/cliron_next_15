'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { Fragment } from 'react'
import { GoHomeFill } from "react-icons/go";

const BreadCrumb = () => {
  const pathname = usePathname()
  const pathArray = pathname.split('/').splice(1)
  
  return (
    <div
      className={cn("w-full h-14 bg-gray-50  items-center justify-center",
        pathname === '/' ? 'hidden' : 'flex'
      )}
    >
      <Breadcrumb className="w-full px-2 md:w-[70%] text-xl">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="flex-center gap-1 text-base capitalize font-normal ">
              <GoHomeFill /> Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {pathArray.map((item,index) => { 
            return (
              <Fragment key={index}>
                {pathArray.length !== index + 1 ? (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink href={`/${item}`} className="text-base capitalize font-normal">
                        {item}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-lg capitalize font-normal">{item}</BreadcrumbPage>
                  </BreadcrumbItem>
                )}
              </Fragment>
            );
           })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumb