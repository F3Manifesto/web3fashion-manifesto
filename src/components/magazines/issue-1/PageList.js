import loadable from '@loadable/component'

const CoverPage = loadable(() => import('./CoverPage'))
const Page12 = loadable(() => import('./Page12'))
const Page34 = loadable(() => import('./Page34'))
const Page56 = loadable(() => import('./Page56'))
const Page78 = loadable(() => import('./Page78'))
//const Page910 = loadable(() => import('./Page910'))
//const Page1112 = loadable(() => import('./Page1112'))
//const Page1314 = loadable(() => import('./Page1314'))
//const Page1516 = loadable(() => import('./Page1516'))

const Backcover = loadable(() => import('./Backcover'))

const PageList = [
  <CoverPage />,
  <Page12 />,
  <Page34 />,
  <Page56 />,
  <Page78 />,
 // <Page910 />,
 // <Page1112 />,
 // <Page1314 />,
 // <Page1516 />,
  <Backcover />
]

export default PageList
