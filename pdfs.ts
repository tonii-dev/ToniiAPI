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
  },
  {
    id: 'STO_03',
    title: 'Dal primo dopoguerra ai totalitarismi',
    subject: 'Storia',
    hash: '0x1A2B3C',
    status: 'Decrypted',
    url: 'https://raw.githubusercontent.com/tonii-dev/ToniiAPI/main/IL%20NOVECENTO%20BIBBIA.pdf' // example placeholder
  },
  {
    id: 'STO_04',
    title: 'La guerra civile spagnola',
    subject: 'Storia',
    hash: '0x1A2B3C',
    status: 'Decrypted',
    url: 'https://raw.githubusercontent.com/tonii-dev/ToniiAPI/main/guerra%20civile%20spagnola.pdf' // example placeholder
  },
  {
    id: 'STO_05',
    title: 'Seconda guerra mondiale e guerra fredda',
    subject: 'Storia',
    hash: '0x1A2B3C',
    status: 'Decrypted',
    url: 'https://raw.githubusercontent.com/tonii-dev/ToniiAPI/main/storia%20formattata.pdf' // example placeholder
  }
];
