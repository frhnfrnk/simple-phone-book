"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Contact } from "../Table/Columns";
import { toast } from "../ui/use-toast";
import axios from "axios";
import { useState } from "react";

export function CardAddContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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
    <Card className="w-[350px]">
      <CardHeader>
        <CardDescription className="text-center">
          Fill in the form below to add a new contact.
        </CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleAddContact}>Add</Button>
      </CardFooter>
    </Card>
  );
}
