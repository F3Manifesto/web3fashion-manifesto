import loadable from '@loadable/component'

const CoverPage = loadable(() => import('./CoverPage'))
const Page12 = loadable(() => import('./Page12'))

const Backcover = loadable(() => import('./Backcover'))

const PageList = [
  <CoverPage />,
  <Page12 />,
  <Backcover />
]

export default PageList
