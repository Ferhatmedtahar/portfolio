import { contacts } from "@/helpers/ContactData";
import ContactCard from "../ContactCard";

export default function Contact() {
  return (
    <section className=" max-container padding-container pt-16 flex    flex-col gap-16  ">
      <h1 className="  tracking-[0.030rem]  text-2xl min-[430px]:text-2xl md:text-4xl font-medium  text-primary-200 underline  underline-offset-[6px] ">
        Contants
      </h1>

      <div className="  font-poppins flex flex-col md:flex-row gap-10  ">
        {contacts.map(function contactsCard(contact) {
          return (
            <ContactCard
              key={contact.social}
              social={contact.social}
              link={contact.link}
              icon={contact.icon}
            />
          );
        })}
      </div>
    </section>
  );
}
