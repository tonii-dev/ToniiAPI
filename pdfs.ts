export interface PdfDocument {
  id: string;
  title: string;
  subject: string;
  hash: string;
  status: string;
  url: string;
}

// Group your 'maturità' PDFs here
export const pdfData: PdfDocument[] = [
  {
    id: 'LAT_01',
    title: 'Modulo 1 - Età giulio-claudia',
    subject: 'Latino',
    hash: '0x1A2B3C',
    status: 'Decrypted',
    url: 'https://raw.githubusercontent.com/w3c/wcag/main/understanding/21/pdf.pdf' // example placeholder
  },
  {
    id: 'MAT_01',
    title: 'Analisi Matematica - Limiti e Derivate',
    subject: 'Matematica',
    hash: '0x1A2B3C',
    status: 'Decrypted',
    url: 'https://raw.githubusercontent.com/w3c/wcag/main/understanding/21/pdf.pdf' // example placeholder
  },
  {
    id: 'FIS_01',
    title: 'Elettromagnetismo e Maxwell',
    subject: 'Fisica',
    hash: '0x4D5E6F',
    status: 'Decrypted',
    url: ''
  },
  {
    id: 'ITA_01',
    title: 'Pirandello - Il fu Mattia Pascal',
    subject: 'Italiano',
    hash: '0x7G8H9I',
    status: 'Decrypted',
    url: ''
  },
  {
    id: 'STO_01',
    title: 'La Seconda Guerra Mondiale',
    subject: 'Storia',
    hash: '0x9J0K1L',
    status: 'Decrypted',
    url: ''
  },
  {
    id: 'FIL_01',
    title: 'Nietzsche - Oltreuomo e Volontà',
    subject: 'Filosofia',
    hash: '0x2M3N4O',
    status: 'Decrypted',
    url: ''
  },
  {
    id: 'ING_01',
    title: 'George Orwell - 1984',
    subject: 'Inglese',
    hash: '0xAA81F2',
    status: 'Decrypted',
    url: ''
  }
];
