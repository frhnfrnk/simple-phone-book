"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import { getContactById } from "@/utils/contact";

const Details = async () => {
  const id = useParams().id;

  const data = await getContactById(id.toString());

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-center">Details Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={data.name} readOnly />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" value={data.phone} readOnly />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Details;
