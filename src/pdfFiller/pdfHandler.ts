import { PDFDocument } from 'pdf-lib'
import Fill from './Fill'
import { fillPDF } from './fillPdf'

export interface PDFDownloader {
  (url: string): Promise<PDFDocument>
}

export const makeDownloader =
  (baseUrl: string): PDFDownloader =>
  async (url: string): Promise<PDFDocument> => {
    const download = await fetch(`${baseUrl}${url}`)
    const buffer = await download.arrayBuffer()
    return await PDFDocument.load(buffer)
  }

export const combinePdfs = (pdfFiles: PDFDocument[]): Promise<PDFDocument> => {
  const [head, ...rest] = pdfFiles

  // Make sure we combine the documents from left to right and preserve order
  return rest.reduce(async (l, r) => {
    const doc = await l
    return await doc.copyPages(r, r.getPageIndices()).then((pgs) => {
      pgs.forEach((p) => doc.addPage(p))
      return doc
    })
  }, Promise.resolve(head))
}

export const getPdfs = async (
  formData: Array<[Fill, PDFDocument]>
): Promise<PDFDocument[]> => {
  // Insert the values from each field into the PDF
  const pdfFiles: Array<Promise<PDFDocument>> = formData.map(
    async ([data, f]) => {
      fillPDF(f, data.renderedFields())
      const pageBytes = await f.save()
      return await PDFDocument.load(pageBytes)
    }
  )

  return await Promise.all(pdfFiles)
}
