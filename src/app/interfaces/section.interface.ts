import { Job, Site, Contact } from './interfaces';

/**
 * Dati contenuti in una section del sito
 */
export interface Section {
  /** Titolo della sezione */
  title: string;

  /** Descrizione della sezione */
  description?: string;

  /** Stile della sezione */
  lineStyle: 'right-left' | 'left-right';

  /** Tipo di sezione */
  // TODO: type must be present
  type?: 'simple' | 'list' | 'contacts' | 'map';

  /** Url delle immagini in una sezione con immagini */
  imagesUrls?: string[];

  /** Lista di oggetti per la sezione relativa al cv, al portfolio e ai contatti */
  list?: Job[] | Site[] | Contact[];
}
