import { PDFDocument } from 'pdf-lib'
import { create1040 } from '../irsForms/Main'
import { isLeft } from '../util'
import _ from 'lodash'
import log from '../log'
import { combinePdfs, getPdfs, PDFDownloader } from '../pdfFiller/pdfHandler'
import { Information } from '../data'

export const create1040PDFs =
  (state: Information) =>
  async (downloader: PDFDownloader): Promise<PDFDocument[]> => {
    if (state.taxPayer !== undefined) {
      const f1040Result = create1040(state)
      // Get data and pdf links applicable to the model state
      if (isLeft(f1040Result)) {
        return await Promise.reject(f1040Result.left)
      }

      const [, forms] = f1040Result.right

      const pdfs: PDFDocument[] = await Promise.all(
        forms.map(async (f) => await downloader(`/irs/${f.tag}.pdf`))
      )

      return getPdfs(_.zipWith(forms, pdfs, (a, b) => [a, b]))
    }

    log.error('Attempt to create pdf with no data, will be empty')
    return []
  }

export const create1040PDF =
  (state: Information) =>
  async (downloader: PDFDownloader): Promise<Uint8Array> =>
    (await combinePdfs(await create1040PDFs(state)(downloader))).save()
