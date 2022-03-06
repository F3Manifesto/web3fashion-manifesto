import loadable from '@loadable/component'

const CoverPage = loadable(() => import('./CoverPage'))
const Page12 = loadable(() => import('./Page12'))
const Page34 = loadable(() => import('./Page34'))
const Page56 = loadable(() => import('./Page56'))
const Page78 = loadable(() => import('./Page78'))
const Page910 = loadable(() => import('./Page910'))

const Backcover = loadable(() => import('./Backcover'))

const PageList = [
  <CoverPage />,
  <Page12 />,
  <Page34 />,
  <Page56 />,
  <Page78 />,
  <Page910 />,
  <Backcover />
]

export default PageList
