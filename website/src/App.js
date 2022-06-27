
import { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Web3 from 'web3';


const connectTheme = createTheme({
  palette: {
    primary: {
      main: "#ffbd59",
    },
  },
});

const mintTheme = createTheme({
  palette: {
    primary: {
      main: "#df2382"
    }
  }
})

const loadmapTheme = createTheme({
  palette: {
    primary: {
      main: "#ff9a3d"
    }
  }
})


const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 20,
    label: '20',
  }
];



const PrettoSlider = styled(Slider)({
  color: '#f681b7',
  height: 4,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#f681b7',
    border: '2px solid #e71173',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#f681b7',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});


function RoadMap(props) {
  return (
    <div className='roadmap-row'>
      <div className='roadmap_index'>
        <div className='roadmap_item active'>
          <span className='fs-26 noto-bold c-black'>
            {props.index}
          </span>
        </div>
      </div>
      <div className='fs-30 m-l-10'>
        {props.content}
      </div>
    </div>
  );
}

const web3 = new Web3();


function App() {

  const [count, setCount] = useState(20);
  const [account, setAccount] = useState();



  const handleChange = (event, newValue) => {
    setCount(newValue);
  };

  const connectWallet = async () => {
    // var web3 = new Web3(web3)
    await window.ethereum.enable();
    // const provider = Web3.providers.HttpProvider(config.testNetUrl);
    const web3 = new Web3(Web3.givenProvider);
    web3.eth.getAccounts((err, accounts) => {
      setAccount(accounts[0]);
      console.log("account", accounts[0]);
    })
  }

  const onMint = () => {
    NotificationManager.info('Please connect wallet', "", 2000);
  }

  const List = [
    { index: 1, content: "Launch Discord Server, and Twitter Account." },
    { index: 2, content: "Airdrop for v1 holders." },
    { index: 3, content: "Private sale minting starts on own site, when it's sold ou the public goes live on own site and on Ebisu's Bay launchpad." },
    { index: 4, content: "Listing in Ebisu's Bay and Agora marketplace." },
    { index: 5, content: "First contest coming for minters." },
    { index: 6, content: " At 100% minted goes live rarity traits tools." },
    { index: 7, content: " Big prize for the holders" },
    { index: 8, content: " NFT stacking" },
    { index: 9, content: "Buy Metaverse land for Cro Rhino Clanz Holder" },
    { index: 10, content: "Try to be listed on CDC marketplace" },
    { index: 11, content: "Launch Baby Rhino Clanz (some rhino holders could recive for free)" },

  ]


  return (
    <>
      <div className='header padder-50'>
        <div>
          <a className='link-twitter'>
            <i className="fab fa-twitter"></i>
          </a>
          <a className='link-discord'>
            <i className="fab fa-discord"></i>
          </a>
        </div>
        <ThemeProvider theme={connectTheme}>
          <Button variant="contained" color="primary" className="btn_connect" onClick={connectWallet}>Connect Wallet</Button>
        </ThemeProvider>
      </div>
      <div id='section_mint'>
        <div >
          <div className='mint-title' >
            Cro Rhino Clanz
          </div>
          <div className='mint-subtitle'>
            3333 Rhinos v2 on the Cronos Chain
          </div>
        </div>
        <div className='mint_pannel m-t-20'>
          <div className='c-w fs-60 h-60 flex align-center justify-center noto-bold font-bold'>
            n  /  3333
          </div>
          <div className='c-w h-50 fs-20 flex align-center noto-bold font-bold'>
            minted
          </div>
          <div className='c-w h-70 fs-32 flex align-center noto-bold font-bold'>
            Price: {count * 50} CRO
          </div>
          <div className='flex flex-col align-center justify-center h-100' >
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={3}
              min={0}
              max={20}
              value={count}
              onChange={handleChange}
            />
            <div className='flex w-full justify-between'>
              <span className='c-w fs-20 noto-bold font-extraBold'>0</span>
              <span className='c-w fs-15 flex1'></span>
              <span className='c-w fs-20 noto-bold font-extraBold'>20</span>
            </div>
          </div>
          <div className='flex justify-center'>
            <ThemeProvider theme={mintTheme}>
              <Button className='btn_mint font-bold' color='primary' variant='contained'>MINT</Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
      <div id='section_clanz'>
        <div className='title fs-40 c-w noto-bold font-extraBold'>
          Cro Rhino Clanz
        </div>
        <div className='clanz_content content-max'>
          <div className='left flex flex-col flex1'>
            <p className='fs-20 c-w'>

              Welcome to the Rhino Clanz. Rhino Clanz is a collection of 3333
              unique NFT. CRC digital collectibles living on the Cronos
              Blockchain. Each Rhino Clanz is a unique non fungibles token (NFT),
              mix of various assets, colors, and backgrounds to make them unique.
              Rhino Clanz acts as an essential part of interacting within our
              community through Social Media and future airdrops and other perks.
              Future develop and perks will be released over time.
            </p>
            <p className='fs-20 c-w m-t-20'>
              Holding Cro Rhino Clanz allows you to participate in the CRC event and
              could win NFT, Merch and many others things after the public sale ends!
              Holders can vote for experiences, activations and campaigns that benefit
              the Rhino Clanz.<br />
              The Cro Rhino Clanz (CRC) public sales opens on __ , FEBRUARY XXth
              around ____pm XXX.<br />
              Join the Rhino Clanz community on Twitter and Discord!
            </p>
            <div className='clanz_buttons'>
              <ThemeProvider theme={loadmapTheme}>
                <Button variant="contained" color="primary" className='btn_roadmap'>
                  <a href='#section_roadmap' style={{ width: "100%", height: "100%", color: "white", textDecoration:"none" }}>
                    See Roadmaps
                  </a>
                </Button>
              </ThemeProvider>
              <div style={{ width: "80px" }}></div>
              <ThemeProvider theme={loadmapTheme}>
                <Button variant="contained" color="primary" className='btn_collection' >View Collection</Button>
              </ThemeProvider>
            </div>
          </div>
          <div className='right'>
            <div className="right_image">
            </div>
          </div>
        </div>
        <div style={{ background: "white", height: "2px", marginTop: "180px" }}></div>
        <div className='flex m-t-80 content-max' >
          <div className='rhino-container'>
            <div className='left'></div>
            <div className='right'>
              <div className='rhino-item'>
                <div className='c-df238e noto-bold flex justify-center font-bold' style={{ flex: 2 }}>
                  3333
                </div>
                <div className='c-df238e noto-bold flex justify-center font-bold' style={{ flex: 4 }}>
                  RHINO
                </div>
              </div>
              <div className='rhino-item'>
                <div className='c-w noto-bold flex justify-center' style={{ flex: 2 }}>
                  15
                </div>
                <div className='c-w noto-bold flex justify-center' style={{ flex: 4 }}>
                  BACKGROUND
                </div>
              </div>
              <div className='rhino-item'>
                <div className='c-w noto-bold flex justify-center' style={{ flex: 2 }}>
                  22
                </div>
                <div className='c-w noto-bold flex justify-center' style={{ flex: 4 }}>
                  CLOTHES
                </div>
              </div>
              <div className='rhino-item'>
                <div className='c-w noto-bold flex justify-center' style={{ flex: 2 }}>
                  15
                </div>
                <div className='c-w noto-bold flex justify-center' style={{ flex: 4 }}>
                  EYES
                </div>
              </div>
              <div className='rhino-item'>
                <div className='c-w noto-bold flex justify-center' style={{ flex: 2 }}>
                  18
                </div>
                <div className='c-w noto-bold flex justify-center' style={{ flex: 4 }}>
                  MOUTH
                </div>
              </div>
              <div className='rhino-item'>
                <div className='c-w noto-bold flex justify-center' style={{ flex: 2 }}>
                  18
                </div>
                <div className='c-w noto-bold flex justify-center' style={{ flex: 4 }}>
                  HEADGEAR
                </div>
              </div>
              <div className='rhino-item'>
                <div className='c-w noto-bold flex justify-center' style={{ flex: 2 }}>
                  17
                </div>
                <div className='c-w noto-bold flex justify-center' style={{ flex: 4 }}>
                  BODY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='section_roadmap'>
        <div className='title flex align-center justify-center c-black noto-bold font-extraBold'>
          Roadmap
        </div>
        <div className='content padder-80 m-t-50 content-max'>
          <div>
            <div className='roadmap-row'>
              <div className='roadmap_index'>
                <div className='roadmap_item'>
                  <span className='fs-26 noto-bold c-black'>
                    1
                  </span>
                </div>
              </div>
              <div className='fs-30 m-l-10'>
                Launch Discord Server, and Twitter Account.
              </div>
            </div>

            <div className='roadmap-row'>
              <div className='roadmap_index'>
                <div className='roadmap_item'>
                  <span className='fs-26 noto-bold c-black'>
                    2
                  </span>
                </div>
              </div>
              <div className='fs-30 m-l-10'>
                Airdrop for v1 holders.
              </div>
            </div>

            <div className='roadmap-row'>
              <div className='roadmap_index'>
                <div className='roadmap_item'>
                  <span className='fs-26 noto-bold c-black'>
                    3
                  </span>
                </div>
              </div>
              <div className='fs-30 m-l-10'>
                Private sale minting starts on own site, when it's sold out the public goes live on own site and on Ebisu's Bay/Agora launchpad.
              </div>
            </div>

            <div className='roadmap-row'>
              <div className='roadmap_index'>
                <div className='roadmap_item'>
                  <span className='fs-26 noto-bold c-black'>
                    4
                  </span>
                </div>
              </div>
              <div className='fs-30 m-l-10'>
                Listing in Ebisu's Bay and Agora marketplace.
              </div>
            </div>
            <div className='roadmap-row'>
              <div className='roadmap_index'>
                <div className='roadmap_item'>
                  <span className='fs-26 noto-bold c-black'>
                    5
                  </span>
                </div>
              </div>
              <div className='fs-30 m-l-10'>
                First contest coming for minters.
              </div>
            </div>
            <div className='roadmap-row'>
              <div className='roadmap_index'>
                <div className='roadmap_item'>
                  <span className='fs-26 noto-bold c-black'>
                    6
                  </span>
                </div>
              </div>
              <div className='fs-30 m-l-10'>
                At 100% minted goes live rarity traits tools.

              </div>
            </div>
            <div className='roadmap-row'>
              <div className='roadmap_index'>
                <div className='roadmap_item'>
                  <span className='fs-26 noto-bold c-black'>
                    7
                  </span>
                </div>
              </div>
              <div className='fs-30 m-l-10'>
                Big prize for the holders.

              </div>
            </div>
            <div className='roadmap-row'>
              <div className='roadmap_index'>
                <div className='roadmap_item'>
                  <span className='fs-26 noto-bold c-black'>
                    8
                  </span>
                </div>
              </div>
              <div className='fs-30 m-l-10'>
                NFT Stacking.

              </div>
            </div>
            <div className='roadmap-row'>
              <div className='roadmap_index'>
                <div className='roadmap_item'>
                  <span className='fs-26 noto-bold c-black'>
                    9
                  </span>
                </div>
              </div>
              <div className='fs-30 m-l-10'>
                Buy Metaverse land for Cro Rhino Clanz holder.

              </div>
            </div>
            <div className='roadmap-row'>
              <div className='roadmap_index'>
                <div className='roadmap_item'>
                  <span className='fs-26 noto-bold c-black'>
                    10
                  </span>
                </div>
              </div>
              <div className='fs-30 m-l-10'>
                Launch Baby Rhino Clanz.
              </div>
            </div>

          </div>
          <div className='nft padder-40 m-t-70 m-b-70'>
            <ul className='c-w fs-35 l-h-1-5'>
              <li>
                Big <b>prize</b> for NFT minter (private and public)
              </li>
              <li>
                Prizes could be NFT, Cryptocurrencies, Merch, and many others.
              </li>
              <li>
                Exclusive space like <b>lands in metaverses</b> and <b>discord channel</b> for verified <b>Rhino Clanz owner</b> where the community will <b>shape the future</b> of the club by <b>voting</b> on current and future events and decision.
              </li>
              <li>
                Exploring potential collabs that can bring advantages to the holders.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* section team */}
      <div id='sectoin_team'>
        <div style={{ background: "white", height: "2px" }}></div>
        <div className='fs-40 noto-bold c-w text-center m-t-50 font-extraBold content-max'>
          Team
        </div>
        <div className='content-max'>
          <div className='team-member'>
            <div className='text-center'>
              <div className='photo_item'></div>
              <div className='c-w fs-20'>Name</div>
            </div>
            <div className='text-center'>
              <div className='photo_item'></div>
              <div className='c-w fs-20'>Name</div>
            </div>
          </div>
          <div className='team-member m-t-70'>
            <div className='text-center'>
              <div className='photo_item'></div>
              <div className='c-w fs-20'>Name</div>
            </div>
            <div className='text-center'>
              <div className='photo_item'></div>
              <div className='c-w fs-20'>Name</div>
            </div>
          </div>
        </div>
      </div>

      {/* section footer */}
      <div id="section_footer">
        <div style={{ background: "white", height: "2px" }}></div>
        <div className='contract flex flex-col justify-around align-center'>
          <div className='c-w fs-50 noto-bold font-extraBold'>
            Contract Address
          </div>
          <div className='c-w fs-30'>
            0x000000000000000000000000000000000000
          </div>
        </div>
        <div style={{ background: "white", height: "2px" }}></div>
        <div className='h-220 link flex flex-col align-center justify-center'>
          <div>
            <img className='m-r-40' src='/img/twitter.png'></img>
            <img src='/img/discord.png'></img>
          </div>
          <div className='c-w fs-24 flex align-center text-center m-t-20'>
            The Rhino Clanz<br />© 2021
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
