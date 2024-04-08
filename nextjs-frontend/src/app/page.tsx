import { Contact, columns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";

import Image from "next/image";

async function getData(): Promise<Contact[]> {
  return [
    {
      id: "728ed52f",
      name: "John Doe",
      phone: "555-555-5555",
    },
    {
      id: "e8b4e0e0",
      name: "Jane Smith",
      phone: "555-555-5555",
    },
    {
      id: "b8f3e0e0",
      name: "John Smith",
      phone: "555-555-5555",
    },
    {
      id: "a8f3e0e0",
      name: "Jane Doe",
      phone: "555-555-5555",
    },
  ];
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-inter">
      <h1 className="text-4xl font-bold mb-5">Contacts</h1>
      <div className="max-w-2xl w-full">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
