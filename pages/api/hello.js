import { FavCoins } from "../../utils/favCoins";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default async function handler(req, res) {
//   const data = await fetch("https://api.coingecko.com/api/v3/search/trending");
//   const trendingCoins = await data.json();
//   res.status(200).json(trendingCoins);
// }

export default async function (req, res) {
  const coins = await Promise.all(
    FavCoins.map(async (item) => {
      const data = await (
        await fetch(`https://api.coingecko.com/api/v3/coins/${item}`)
      ).json();
      return data
    })
  );
  res.status(200).json(coins);
}
