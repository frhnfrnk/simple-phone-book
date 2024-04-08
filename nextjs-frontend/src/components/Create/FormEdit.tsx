"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Contact } from "../Table/Columns";
import { toast } from "../ui/use-toast";
import axios from "axios";
import { useState } from "react";
import { editContact } from "@/utils/contact";

export function CardEditContact({ contact }: { contact: Contact }) {
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);

  const handleAddContact = () => {
    axios
      .post("http://localhost:8080/contacts", {
        name,
        phone,
      })
      .then(() => {
        toast({
          title: "Success",
          description: "Contact added successfully.",
        });
        setName("");
        setPhone("");
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          variant: "destructive",
          description: "Failed to add contact.",
        });
      });
  };

  return (
    <>
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              onChange={(e) => {
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
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              id="phone"
              placeholder="081274218412"
              value={phone}
            />
          </div>
        </div>
      </form>
      <Button onClick={() => editContact({ ...contact, name, phone })}>
        Save Change
      </Button>
    </>
  );
}
