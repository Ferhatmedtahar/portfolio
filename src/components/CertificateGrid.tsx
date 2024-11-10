import { CertificateItem } from "./CertificateItem";
import { certificatesData } from "../helpers/certificatesData";

export default function certificate() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1  gap-4 px-2 sm:px-0 lg:order-first">
      {certificatesData.map((certificate) => (
        <CertificateItem
          key={certificate.id}
          linkToPdf={certificate.linkToPdf}
          image={certificate.image}
        />
      ))}
    </div>
  );
}
