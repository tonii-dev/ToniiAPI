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
    url: 'https://raw.githubusercontent.com/tonii-dev/ToniiAPI/main/LATINO%20-%20MODULO%201.pdf' // example placeholder
  }
];
