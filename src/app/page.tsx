import HeroSection from "@/components/Home/HeroSection"
import Layout from "@/layout/Layout"
import { LatestSection } from "@/components/Home/LatestSection"
import NewTechnologySection from "@/components/Home/NewTechnologySection"
import { CategorySection } from "@/components/Home/CategorySection"

export default function Home() {


  return (
    <Layout>
      <HeroSection />
      <LatestSection />
      <NewTechnologySection />
      <CategorySection />
      <NewTechnologySection />
    </Layout>
  )
}
