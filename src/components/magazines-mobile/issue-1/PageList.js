import loadable from '@loadable/component'
const CoverPage = loadable(() => import ('./CoverPage'))
const Page1 = loadable(() => import ('./Page1'))
const Page2 = loadable(() => import ('./Page2'))
const Page3 = loadable(() => import ('./Page3'))
const Page4 = loadable(() => import ('./Page4'))
const Page5 = loadable(() => import ('./Page5'))
const Page6 = loadable(() => import ('./Page6'))
const Page7 = loadable(() => import ('./Page7'))
const Page8 = loadable(() => import ('./Page8'))

const Backcover = loadable(() => import ('./Backcover'))

const PageList = [
  <CoverPage />,
  <Page1 />,
  <Page2 />,
  <Page3 />,
  <Page4 />,
  <Page5 />,
  <Page6 />,
  <Page7 />,
  <Page8 />,
  <Backcover />
]

export default PageList