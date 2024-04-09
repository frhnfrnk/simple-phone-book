import { Contact } from "@/components/Table/Columns";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";

export async function getData(): Promise<Contact[]> {
  let data = [];
  try {
    const { data: contacts } = await axios.get(
      "http://localhost:8080/contacts"
    );
    data = contacts;
  } catch (err) {
    data = [];
  }
  return data;
}

export async function deleteContact(contact: Contact) {
  try {
    await axios
      .delete(`http://localhost:8080/contacts/${contact.ID}`)
      .then(() => {
        toast({
          title: "Success",
          description: "Contact deleted successfully.",
        });
        setTimeout(() => {
          location.reload();
        }, 1000);
      });
  } catch (err) {
    console.log(err);
    toast({
      title: "Error",
      variant: "destructive",
      description: "Failed to delete contact.",
    });
  }
}

export async function editContact(contact: Contact) {
  try {
    await axios
      .put(`http://localhost:8080/contacts/${contact.ID}`, {
        name: contact.name,
        phone: contact.phone,
      })
      .then(() => {
        toast({
          title: "Success",
          description: "Contact updated successfully.",
        });
      });
  } catch (err) {
    console.log(err);
    toast({
      title: "Error",
      variant: "destructive",
      description: "Failed to update contact.",
    });
  }
}

export async function getContactById(id: string): Promise<Contact> {
  let data = {} as Contact;
  try {
    const { data: contacts } = await axios.get(
      "http://localhost:8080/contacts/" + id
    );
    data = contacts;
  } catch (err) {
    data = {} as Contact;
  }
  return data;
}
