"use client";
import { contacts } from "@/helpers/ContactData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContactCard from "../ContactCard";
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * 0.3,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id="contact"
      className=" font-poppins pb-20 max-container padding-container pt-16 flex  flex-col gap-16  "
    >
      <div className="flex flex-col gap-6">
        <h1 className="sm:text-start text-center tracking-[0.030rem] text-2xl lg:text-5xl md:text-4xl font-medium text-primary-200 underline underline-offset-[6px]">
          Let&apos;s Connect
        </h1>

        <p className="text-sm sm:text-base md:text-lg font-light text-primary-300/80 text-center md:text-start">
          I&apos;m always open to new opportunities, collaborations, or even a
          quick chat. Feel free to reach out on any of these platforms, and
          let&apos;s bring great ideas to life together!
        </p>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
        className="  font-poppins flex flex-col md:flex-row gap-12  "
      >
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
      </motion.div>
    </section>
  );
}
