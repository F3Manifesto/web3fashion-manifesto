import React from 'react'
import styles from './page34.module.scss'

const Page34 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/images/mobile/page40-bg.png" className={styles.backImage} />
      <h1 className={styles.headTitle1}>FRESH</h1>
      <h1 className={styles.headTitle2}>UPCOMING</h1>
      <h1 className={styles.headTitle3}>INTRODUCING</h1>
      <h1 className={styles.headTitle4}>SOCIAL & COMMUNITY TOKENS with coinvise</h1>

      <img src="./magazine/1/images/mobile/image 416.png" className={styles.image1} />
      <img src="./magazine/1/images/mobile/image 357.png" className={styles.image2} />
      <img src="./magazine/1/images/mobile/image 355.png" className={styles.image3} />
      <img src="./magazine/1/images/mobile/image 354.png" className={styles.image4} />
      <img src="./magazine/1/images/mobile/arrow-down.png" className={styles.arrow} />
      <h2>Hanging with Jenil & Coinvise Crew</h2>

      <p className={styles.section1}>
        I started out my career in the web3 space in college where I ultimately wanted to pursue a PhD in crypto economics. In my sophomore year, I got a job as a research assistant under Dr. YoungHee Park and Dr. Thomas Austin where we worked on PBFT consensus algorithm, token locking on ethereum, mining pool security and IoT data security on Ethereum. I got the chance to present my papers at conferences in Hawaii and at CES 2020 Las Vegas.
        <br /><br />
        My background has mainly been about doing academic research, which I find quite useful today given that there's a lot of similarities doing research and starting a company. They both involve working on a unique problem no one has worked on before and finding the right solution to it.
        <br /><br />
        Apart from doing research I enjoyed hacking and participating in hackathons where I could find other builders in this space. In 2018, I first discovered ETHGlobal, where I met some of the smartest people building on Ethereum. Listening to Balaji and Vitalik made me realize there's true potential in how crypto can impact millions of people.
      </p>
      <p className={styles.section2}>
        After graduating, I worked for a company called [0Chain](https://0chain.net) and briefly at [Lukso](https://lukso.network) where I had the chance to work with Fabian Vogelstellar, creator of the ERC20 token standard. Working with Lukso, I realized consumer is the only way we can scale crypto to the next billion people. 
        <br /><br />
        I wanted to build platform that blurred the boundaries between work and social. Social tokens was a new concept, at the time, Roll and Rally were the only companies working on this space but I wanted to take a different approach. I wanted to build a community with Coinvise, not an audience. In November 2020, I started building out Coinvise, wrote the smart contracts and shipped out our first version in two weeks. We made it really simple to mint a token and airdrop them to people on social media. The experience I aim to build is that it shouldn't feel like a decision to use Coinvise, it should feel like a social network where you can explore other communities, like Reddit.
      </p>
      <img src="./magazine/1/images/mobile/image 358.png" className={styles.image5} />
      <p className={styles.section3}>
        Today, Coinvise is operating multi chain on L1 and L2 (Polygon), where you can explore creators, communities, earn rewards for contributing value towards them and even integrate Coinvise in your own discord.
        <br /><br />
        The ownership economy is a fascinating space, today every kid wants to be a YouTuber or build value on the internet. The barrier to entry for creating on the internet are quite low, yet we see platforms take up huge cuts from creators, own their content and censor their behavior online. At Coinvise, we believe that the current models for building and distributing online services — which rely heavily on lock-in, walled gardens and centralized servers — are fundamentally flawed. If we want to enable an open, equitable and sharing social economy, we need to build entirely new systems to support it.
      </p>
      <img src="./magazine/1/images/mobile/image 414.png" className={styles.image6} />
      <p className={styles.section4}>
        Our goal at Coinvise is to help creators monetize their work, build a thriving community with aligned incentives & own their content without any resistance.
      </p>
      <img src="./magazine/1/images/mobile/arrow-down.png" className={styles.arrow2} />

      <a href='https://twitter.com/espa4play' target='_blank'>
        <img src="./magazine/1/images/mobile/23681.png" className={styles.twitterIcon} />
      </a>
      <a href='https://discord.gg/SwX2jdxVrP' target='_blank'>
        <img src="./magazine/1/images/mobile/disc.png" className={styles.discordIcon} />
      </a>
      <div className={styles.text1}>CHECK OUT COINVISE’S SOCIALS! </div>
      <p className={styles.section5}>
        <span>Bringing transparency and true ownership to creators</span><br/>
        A platform where creators and communities can:
        <ul>
          <li>Create their own social token: on a fixed supply, bonding curve or vesting schedule, where the creators gets to own full custody of tokens minted. Additionally, there's no fee on minting tokens on Coinvise.</li>
          <li>Airdrop social tokens: send and receive social tokens on social media, private channels or in bulk to multiple people.</li>
          <li>Create an NFT: We envision NFTs as a gateway to utilize social tokens. NFTs aren't limited to digital art, it can be a way to fundraise, bootstrap liquidity for your social token, create incentive mechanisms and so much more.</li>
          <li>Discover & grow their community: Explore, communicate and contribute towards other creators. Earn rewards for joining communities, and more.</li>
        </ul>
      </p>
      <p className={styles.section6}>
        <span>Who is it for?</span><br/>
        Built for internet creators and the future of digital collectives ✨
        <ul>
          <li>For Creators: Provide exclusive access to events, early access to NFTs/drops, content, discounts, fundraise directly from fans, merchandise, status and a sense of loyalty and retroactive airdrops as rewards.</li>
          <li>For Communities: Governance, voting rights (transparent decision making), incentive mechanisms for community members to hold and contribute value going forward.</li>
          <li>For Platforms: Programmable assets, governance, and value generated buy individuals on the platform.</li>
        </ul>
        <br/><br/>
        Social tokens and NFTs is how Coinvise starts, going forward, we aim to build the first decentralized social network, where creators can make wealth without any friction and truly own their content. Coinvise will be an open platform, enabling other platforms and communities to integrate parts of what we built.
      </p>
    </div>
  )
}

export default Page34