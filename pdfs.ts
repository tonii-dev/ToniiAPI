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
    id: 'ITA_01',
    title: 'Modulo 1 - Preromanticismo, Neoclassicismo e Romanticismo',
    subject: 'Italiano',
    hash: '0x1A2B3C',
    status: 'Decrypted',
    url: 'https://raw.githubusercontent.com/tonii-dev/ToniiAPI/main/itamodulo1.pdf' // example placeholder
  },
  {
    id: 'LAT_01',
    title: 'Modulo 1 - Età giulio-claudia',
    subject: 'Latino',
    hash: '0x1A2B3C',
    status: 'Decrypted',
    url: 'https://raw.githubusercontent.com/tonii-dev/ToniiAPI/main/LATINO%20-%20MODULO%201.pdf' // example placeholder
  },
  {
    id: 'LAT_02',
    title: 'Modulo 2 - L\'età dei Flavi',
    subject: 'Latino',
    hash: '0x1A2B3C',
    status: 'Decrypted',
    url: 'https://raw.githubusercontent.com/tonii-dev/ToniiAPI/main/latinomodulo2.pdf' // example placeholder
  },
  {
    id: 'LAT_03',
    title: 'Modulo 3 - L\'età di Nerva e Traiano',
    subject: 'Latino',
    hash: '0x1A2B3C',
    status: 'Decrypted',
    url: 'https://raw.githubusercontent.com/tonii-dev/ToniiAPI/main/latinomodulo3.pdf' // example placeholder
  },
  {
    id: 'LAT_04, LAT_05',
    title: 'Moduli 4 e 5',
    subject: 'Latino',
    hash: '0x1A2B3C',
    status: 'Decrypted',
    url: 'https://raw.githubusercontent.com/tonii-dev/ToniiAPI/main/latinomoduli45.pdf' // example placeholder
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
  },
  {
    id: 'STO_06',
    title: 'L\'Italia del Dopoguerra e la Prima Repubblica',
    subject: 'Storia',
    hash: '0x1A2B3C',
    status: 'Decrypted',
    url: 'https://raw.githubusercontent.com/tonii-dev/ToniiAPI/main/L%27Italia%20del%20Dopoguerra%20e%20la%20Prima%20Repubblica.pdf' // example placeholder
  },
  {
    id: 'STO_06',
    title: '[NOTEBOOKLM] Italia repubblicana ',
    subject: 'Storia',
    hash: '0x1A2B3C',
    status: 'Fatto come INTEGRAZIONE all\' altro PDF',
    url: 'https://notebooklm.google.com/notebook/c7cc5079-5346-4e70-868f-b49fcfe7031b' // example placeholder
  }
];
