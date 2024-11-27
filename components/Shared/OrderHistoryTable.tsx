import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from 'next/link';
import { MoveRight, ShoppingCart, X } from 'lucide-react';

import { cn } from '@/lib/utils';
type Status = "COMPLETED" | "IN PROGRESS" | "CANCELED";
interface props {
  orderHistory: {
    order: string;
    status: string;
    date: string;
    total: number;
  }[];
  
}
const OrderHistoryTable = ({
  orderHistory,
  
}: props) => {
  return (
    <div className="w-full flex flex-col  border border-gray-100 rounded-md  mb-4">
      <div className="flex items-center justify-between px-4 w-full h-12 border-b border-gray-100">
        <h4 className="text-gray-900 text-sm font-semibold">Order Deatails</h4>
        <Link
          href="/account/order-history"
          className="flex-center gap-2 text-secondary font-semibold text-sm"
        >
          Veiw All <MoveRight />
        </Link>
      </div>
      <Table className=" ">
        <TableHeader className="bg-gray-[#475156] uppercase h-7">
          <TableRow className="bg-[#F2F4F5] h-7">
            <TableHead className=" h-[72px]">Order Id</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date </TableHead>
            <TableHead>price </TableHead>
            <TableHead className="w-[250px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderHistory.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium text-gray-900 text-sm">
                  {item.order}
                </TableCell>
                <TableCell
                  className={cn(
                    " text-sm font-semibold",
                    item.status === "IN PROGRESS" && "text-secondary",
                    item.status === "COMPLETED" && "text-Success-500",
                    item.status === "CANCELED" && "text-danger-500"
                  )}
                >
                  {item.status}
                </TableCell>
                <TableCell className={cn("text-sm text-gray-600 ")}>
                  {item.date}
                </TableCell>
                <TableCell className="text-gray-700 text-base">
                  ${item.total}
                </TableCell>
                <TableCell className="flex items-center  md:gap-2 w-32 md:w-[250px] text-sm md:text-base text-primary-500 font-semibold">
                  Veiw Details <MoveRight />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderHistoryTable