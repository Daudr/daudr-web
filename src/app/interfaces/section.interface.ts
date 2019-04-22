import { Job } from './interfaces';

/**
 * Dati contenuti in una section del sito
 */
export interface Section {
  /** Titolo della sezione */
  title: string;

  /** Descrizione della sezione */
  description: string;

  /** Stile della sezione */
  lineStyle: 'right-left' | 'left-right';

  /** Tipo di sezione */
  // TODO: type must be present
  type?: string;

  /** Url delle immagini in una sezione con immagini */
  imagesUrls?: string[];

  /** Lavori per la sezione relativa ai lavori */
  jobs?: Job[];
}
