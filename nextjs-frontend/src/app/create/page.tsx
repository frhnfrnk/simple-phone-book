import { CardAddContact } from "@/components/Create/FormAdd";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const CreatePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 font-inter">
      <h1 className="text-4xl font-bold mb-5">Add Contact</h1>
      <Toaster />
      <CardAddContact />
    </main>
  );
};

export default CreatePage;
