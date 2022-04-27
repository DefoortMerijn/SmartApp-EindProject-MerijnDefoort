interface Article {
  id: string
  name: string
  price: number
  salePercentage: number
  description: string
  image: string
  category: string
  specs: { [key: string]: string }
}
