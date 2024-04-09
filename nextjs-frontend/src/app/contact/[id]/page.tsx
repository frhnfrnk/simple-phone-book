import Details from "@/components/Details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Details",
};

const ContactDetails = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Details />
    </div>
  );
};

export default ContactDetails;
