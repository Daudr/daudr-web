export interface Job {
  nome: string;
  periodo: {
    da: string;
    a: string;
  };
  descrizione: string;
  datore: string;
}

export interface Site {
  nome: string;
  link: string;
  periodo: {
    da: string;
    a: string;
  };
  descrizione: string;
  datore: string;
  immagini?: string[];
}
