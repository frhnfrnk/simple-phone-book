import { CardAddContact } from "@/components/Create/FormAdd";
import { Toaster } from "@/components/ui/toaster";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreatePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 font-inter">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl font-bold">Add Contact</h1>
      </div>
      <Toaster />
      <CardAddContact />
    </main>
  );
};

export default CreatePage;
