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
const Page9 = loadable(() => import ('./Page9'))
const Page10 = loadable(() => import ('./Page10'))
const Page11 = loadable(() => import ('./Page11'))
const Page12 = loadable(() => import ('./Page12'))
const Page13 = loadable(() => import ('./Page13'))
const Page14 = loadable(() => import ('./Page14'))
const Page15 = loadable(() => import ('./Page15'))
const Page16 = loadable(() => import ('./Page16'))

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
  <Page9 />,
  <Page10 />,
  <Page11 />,
  <Page12 />,
  <Page13 />,
  <Page14 />,
  <Page15 />,
  <Page16 />,
  <Backcover />
]

export default PageList