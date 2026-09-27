# CV reader

The Angular CV dialog embeds this HTML reader, rather than a PDF URL handled
by the platform's native PDF plug-in. PDF.js renders the page at `page-width`,
keeps the text/annotation layers, and supports explicit zoom with scrolling.
The PDF files and download action remain unchanged.

`pdfjs-dist` is pinned in package.json. Angular copies its legacy browser
modules, worker, fonts, CMaps, ICC profiles, WASM and license to `assets/pdfjs`.
The compact renderer and worker are fetched when the language picker opens;
the reader runs inside the iframe after the language is selected. The zoom
controls live in the outer Angular toolbar and communicate through checked
same-origin messages. No external viewer/CDN is used.
The two preview WebP files are rendered from the existing one-page PDFs at
1200 px width. They provide an immediate, non-interactive image until PDF.js
finishes drawing. The PDF then replaces the preview with selectable text and
links; the original PDFs remain the download source.
The legacy build provides the upstream compatibility polyfills; older browsers
that still cannot render the document receive a direct PDF link and retry.

The Fluent locale files are from Mozilla PDF.js v6.3.289:
https://github.com/mozilla/pdf.js/tree/v6.3.289/l10n
They retain their upstream MPL-2.0 notices. Update these files together with
the dependency; the PDF.js library's Apache-2.0 license is copied with assets.

The `file` parameter only accepts the two CV assets relative to this reader,
so the same code works at the root or under a deployment base path. `locale`
controls the reader UI independently of the selected CV language.
