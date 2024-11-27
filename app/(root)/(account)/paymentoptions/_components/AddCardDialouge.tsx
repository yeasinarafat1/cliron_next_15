import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MoveRight } from "lucide-react";

import React, { useState } from "react";
import AddCardForm from "./AddCardForm";

const AddCardDialouge = ({ session }: { session?: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-secondary px-4 py-3 flex-center gap-2 text-white rounded-md">
        Add Cards <MoveRight />
      </DialogTrigger>
      <DialogContent className="size-[424px] border border-gray-100">
        <DialogHeader className="border-b border-gray-100 h-10">
          <DialogTitle>Add New Card</DialogTitle>
        </DialogHeader>
        <div className="flex-1 flex flex-col gap-2 px-2">
          <AddCardForm session={session} setOpen={setOpen} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCardDialouge;
