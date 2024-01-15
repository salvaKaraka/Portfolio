import Browser from "@/components/blog/Browser"
import SectionContainer from "@/components/sections/SectionContainer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        {/*<SectionContainer className="sticky top-5 z-20">
          <Browser />
        </SectionContainer>*/}

          {children}
      </>
  )
}
