import certificate1 from "../../public/certificates/deep-javascript-v3-dark.webp";
import certificate2 from "../../public/certificates/javascript-hard-parts-v2-dark.webp";
import certificate4 from "../../public/certificates/UC-19ff328e-bce1-4a59-8674-ef69257b1bbc.webp";
import certificate3 from "../../public/certificates/UC-92f04f6e-cb77-4765-a526-6432e3671b07.webp";

type CertificateData = {
  id: number;
  linkToPdf: string;
  image: any;
};
export const certificatesData: CertificateData[] = [
  {
    id: 1,
    linkToPdf: "/certificatesPDF/deep-javascript-v3-dark.pdf",
    image: certificate1,
  },
  {
    id: 2,
    linkToPdf: "/certificatesPDF/javascript-hard-parts-v2-dark.pdf",
    image: certificate2,
  },
  {
    id: 3,
    linkToPdf: "/certificatesPDF/UC-92f04f6e-cb77-4765-a526-6432e3671b07.pdf",
    image: certificate3,
  },
  {
    id: 4,
    linkToPdf: "/certificatesPDF/UC-19ff328e-bce1-4a59-8674-ef69257b1bbc.pdf",
    image: certificate4,
  },
];
