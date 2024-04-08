import { Contact, columns } from "@/components/Table/Columns";
import { DataTable } from "@/components/Table/DataTable";
import { Toaster } from "@/components/ui/toaster";
import { getData } from "@/utils/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
};

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-inter">
      <h1 className="text-4xl font-bold mb-5">Contacts</h1>
      <div className="max-w-2xl w-full">
        <DataTable columns={columns} data={data} />
      </div>
      <Toaster />
    </main>
  );
}
