"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { deleteContact, editContact } from "@/utils/contact";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useState } from "react";
import { Input } from "../ui/input";

export type Contact = {
  ID?: string;
  name: string;
  phone: string;
};

export const columns: ColumnDef<Contact>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const contact = row.original as Contact;
      return (
        <Link className="hover:underline" href={`/contact/${contact.ID}`}>
          {contact.name}
        </Link>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const contact = row.original as Contact;
      const [name, setName] = useState(contact.name);
      const [phone, setPhone] = useState(contact.phone);
      const [open, setOpen] = useState(false);
      return (
        <div className="flex justify-start gap-3">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      onChange={(e: any) => {
                        setName(e.target.value);
                      }}
                      id="name"
                      placeholder="John Doe"
                      value={name}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      onChange={(e: any) => {
                        setPhone(e.target.value);
                      }}
                      id="phone"
                      placeholder="081274218412"
                      value={phone}
                    />
                  </div>
                </div>
              </form>
              <DialogFooter>
                <Button variant="ghost">Cancel</Button>
                <Button
                  onClick={() => {
                    editContact({ ...contact, name, phone });
                    setOpen(false);
                    location.reload();
                  }}
                >
                  Save Change
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Delete {contact.name} from your contacts?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => deleteContact(contact)}>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
