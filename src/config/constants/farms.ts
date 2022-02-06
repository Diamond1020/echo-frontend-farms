import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ECT',
    lpAddresses: {
      97: '',
      56: '0xc3A4Ce2354B9104eF3Aa8912250671Add834B144', // ECT-BUSD LP
    },
    tokenSymbol: 'ECT',
    tokenAddresses: {
      97: '',
      56: '0x6bfd4ca8ec078d613ed6a5248eb2c7a0d5c38b7b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'ECT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7AB68AC9071759Dba7774723d927F33330eAc273',
    },
    tokenSymbol: 'ECT',
    tokenAddresses: {
      97: '',
      56: '0x6bfd4ca8ec078d613ed6a5248eb2c7a0d5c38b7b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'ECT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc3A4Ce2354B9104eF3Aa8912250671Add834B144',
    },
    tokenSymbol: 'ECT',
    tokenAddresses: {
      97: '',
      56: '0x6bfd4ca8ec078d613ed6a5248eb2c7a0d5c38b7b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x50e0f74Be7ECcc3Ea778A72ddC9dF0dbC06819CE',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 4,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xB6E8E9E3C9adeb808CD779238211E7FEaA177d99', // ECT-BUSD LP (BUSD-BUSD will ignore)
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // }
]

export default farms
