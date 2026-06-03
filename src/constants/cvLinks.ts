/**
 * Chemins relatifs des CV hébergés dans src/assets/CV/.
 * Angular les copie automatiquement dans dist/ via angular.json → assets.
 *
 * En production (GitHub Pages), le base-href est appliqué par CvModalService.resolvePdfUrl().
 */
export type CvLang = 'fr' | 'en';

export interface CvAsset {
  /** Chemin relatif depuis la racine de l'app (sans slash initial). */
  path: string;
  /** Nom du fichier proposé au téléchargement. */
  downloadName: string;
}

export const CV_ASSETS: Record<CvLang, CvAsset> = {
  fr: {
    path: 'assets/CV/CV_Francais.pdf',
    downloadName: 'CV_Francais.pdf',
  },
  en: {
    path: 'assets/CV/CV_English.pdf',
    downloadName: 'CV_English.pdf',
  },
};
