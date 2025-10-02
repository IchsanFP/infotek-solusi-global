import { IconType } from "react-icons"

export type ProductFeature = {
  title: string
  desc: string
  icon: IconType
  color: string
}

export type Product = {
  name: string
  thumbnail: string // atau StaticImageData kalau pakai Next.js Image
  title: string
  description: string
  feature: ProductFeature[]
}