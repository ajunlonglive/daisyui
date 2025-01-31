import { env } from "$env/dynamic/private"

const LSParams = {
  headers: {
    "Accept": "application/vnd.api+json",
    "Content-type": "application/vnd.api+json",
    "Authorization": `Bearer ${env.LEMONSQUEEZY_API_KEY}`,
  },
}

export async function load({ params }) {
  let storeInfo = {
    products: { data: [] },
    discounts: { data: [] },
  }
  const productsResponse = await fetch("https://api.lemonsqueezy.com/v1/products", LSParams)
  const discountsResponse = await fetch("https://api.lemonsqueezy.com/v1/discounts", LSParams)
  if (productsResponse.ok) {
    storeInfo.products = await productsResponse.json()
  }
  if (discountsResponse.ok) {
    storeInfo.discounts = await discountsResponse.json()
  }
  return {
    products: storeInfo.products,
    discounts: storeInfo.discounts,
  }
}
