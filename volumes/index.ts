import balancer from "./adapters/balancer";
import mooniswap from "./adapters/mooniswap";
import bancor from "./adapters/bancor";
import carthage from "./adapters/carthage";
import champagneswap from "./adapters/champagneswap";
import curve from "./adapters/curve";
import dodo from "./adapters/dodo";
import katana from "./adapters/katana";
import klayswap from "./adapters/klayswap";
import osmosis from "./adapters/osmosis";
import pancakeswap from "./adapters/pancakeswap";
import quickswap from "./adapters/quickswap";
import raydium from "./adapters/raydium";
import saros from "./adapters/saros";
import serum from "./adapters/serum";
import soulswap from "./adapters/soulswap";
import spiritswap from "./adapters/spiritswap";
import spookyswap from "./adapters/spookyswap";
import sushiswap from "./adapters/sushiswap";
import terraswap from "./adapters/terraswap";
import traderjoe from "./adapters/traderjoe";
import uniswap from "./adapters/uniswap";
import yieldfields from "./adapters/yieldfields";
import gmx from "./adapters/gmx";
import velodrome from "./adapters/velodrome";
import woofi from "./adapters/woofi";
import hashflow from "./adapters/hashflow";
import biswap from "./adapters/biswap";
import zipswap from "./adapters/zipswap";
import wardenswap from "./adapters/wardenswap";
import apeswap from "./adapters/apeswap";
import kyberswap from "./adapters/kyberswap";
import orca from "./adapters/orca";
import pangolin from "./adapters/pangolin";
import refFinance from "./adapters/ref-finance";
import saber from "./adapters/saber";
import solidly from "./adapters/solidly";
import yoshiExchange from "./adapters/yoshi-exchange";
import platypus from "./adapters/platypus";
import wombatExchange from "./adapters/wombat-exchange";
import wingriders from "./adapters/wingriders";
import minswap from "./adapters/minswap";
import mdex from "./adapters/mdex";
import meshswap from "./adapters/meshswap";
import vvsFinance from "./adapters/vvs-finance";
import mmStableswapPolygon from "./adapters/mm-stableswap-polygon";
import dfyn from "./adapters/dfyn";
import radioshack from "./adapters/radioshack";
import flamingoFinance from "./adapters/flamingo-finance";
import ZEROx from "./adapters/0x";
// import bakerySwap from "./adapters/bakeryswap"; //broken
import baryon from "./adapters/baryon";
import cherryswap from "./adapters/cherryswap";
import clipper from "./adapters/clipper";
import cryptoswap from "./adapters/cryptoswap";
import ellipsis from "./adapters/ellipsis";
import klexFinance from "./adapters/klex-finance";
import koyo from "./adapters/koyo";
// import lyra from "./adapters/lyra"; // Options dex
import pyeswap from "./adapters/pyeswap";
import smbswap from "./adapters/smbswap";
import sunswap from "./adapters/sunswap";
import whaleswap from "./adapters/whaleswap";

export default {
  mooniswap,
  balancer,
  bancor,
  carthage,
  champagneswap,
  curve,
  dodo,
  katana,
  klayswap,
  osmosis,
  pancakeswap,
  quickswap,
  raydium,
  saros,
  serum,
  soulswap,
  spiritswap,
  spookyswap,
  sushiswap,
  terraswap,
  traderjoe,
  uniswap,
  yieldfields,
  gmx,
  velodrome,
  woofi,
  hashflow,
  biswap,
  zipswap,
  wardenswap,
  apeswap,
  kyberswap,
  orca,
  pangolin,
  "ref-finance": refFinance,
  saber,
  solidly,
  "yoshi-exchange": yoshiExchange,
  platypus,
  "wombat-exchange": wombatExchange,
  wingriders,
  minswap,
  mdex,
  meshswap,
  "vvs-finance": vvsFinance,
  "mm-stableswap-polygon": mmStableswapPolygon,
  dfyn,
  radioshack,
  "flamingo-finance": flamingoFinance,
  "0x": ZEROx,
  baryon,
  cherryswap,
  clipper,
  cryptoswap,
  ellipsis,
  "klex-finance": klexFinance,
  koyo,
  pyeswap,
  smbswap,
  sunswap,
  whaleswap
  // lyra -> OPTIONS DEX, not enable for now
};
