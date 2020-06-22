import bobImg from './assets/images/bob.jpg';
import chukyImg from './assets/images/chucky.jpg';
import crazyMonkeyImg from './assets/images/crazy-monkey.jpeg';
import cuboroImg from './assets/images/cuboro.jpg';
import ghostDollImg from './assets/images/ghost-doll.jpg';
import japaneseDollImg from './assets/images/japanese-doll.jpg';
import nonstressBallImg from './assets/images/non-stress-ball.jpg';
import pokemonImg from './assets/images/pokemon.jpg';
import sadakoDollImg from './assets/images/sadako-doll.jpeg';
import skeltonLegoImg from './assets/images/skelton-lego.jpg';
import thomasImg from './assets/images/thomas.jpg';
import twinsImg from './assets/images/twins-toy.jpg';

const defaultDataset = {
  item: [
    {
      id: 1,
      name: "スポンジボブソファ",
      img: bobImg,
      description: "この椅子を設置したならば気が狂い眠れないでしょう…",
      price: 9800,
      addCart: false,
      cartCount: 0,
    },
    {
      id: 2,
      name: "チャッキー",
      img: chukyImg,
      description: "Hi Dee Hoo!呪いの挨拶が聞こえたらオワリ",
      price: 5000,
      addCart: false,
      cartCount: 0,
    },
    {
      id: 3,
      name: "シンバルモンキー",
      img: crazyMonkeyImg,
      description: "脱獄者発見！脱獄者発見！",
      price: 1500,
      addCart: false,
      cartCount: 0,
    },
    {
      id: 4,
      name: "ゴースト",
      img: ghostDollImg,
      description: "これに関しては怖くも可愛くもない！",
      price: 2000,
      addCart: false,
      cartCount: 0,
    },
    {
      id: 5,
      name: "ノンストレスボール",
      img: nonstressBallImg,
      description: "握って爆発させてストレス発散！日本人怖い",
      price: 980,
      addCart: false,
      cartCount: 0,
    },
    {
      id: 6,
      name: "ピカチュウ？",
      img: pokemonImg,
      description: "超大国が産み出した恐ろしすぎるクリーチャー！お面です。",
      price: 1480,
      addCart: false,
      cartCount: 0,
    },
    {
      id: 7,
      name: "貞子(洋物)",
      img: sadakoDollImg,
      description: "あの貞子がいつの間にか海外進出！？",
      price: 1480,
      addCart: false,
      cartCount: 0,
    },
    {
      id: 8,
      name: "ゴースト",
      img: skeltonLegoImg,
      description:
        "強力な酸を浴びて半身だけ透明になったレゴ。珍しさからお値段は少しお高め。",
      price: 1000,
      addCart: false,
      cartCount: 0,
    },
    {
      id: 9,
      name: "thomas",
      img: thomasImg,
      description: "子どもと大人で評価が分かれるおもちゃNo１！顔が怖い。",
      price: 480,
      addCart: false,
      cartCount: 0,
    },
    {
      id: 10,
      name: "双子目玉",
      img: twinsImg,
      description: "目玉をコロコロ転がすだけのおもちゃ。",
      price: 100,
      addCart: false,
      cartCount: 0,
    },
    {
      id: 11,
      name: "Cuboro-知育玩具-",
      img: cuboroImg,
      description: "この木材が７万！？７万！？",
      price: 70000,
      addCart: false,
      cartCount: 0,
    },
    {
      id: 12,
      name: "日本人形",
      img: japaneseDollImg,
      description: "伝統的な日本人形。",
      price: 12000,
      addCart: false,
      cartCount: 0,
    },
  ],
};

export default defaultDataset;
