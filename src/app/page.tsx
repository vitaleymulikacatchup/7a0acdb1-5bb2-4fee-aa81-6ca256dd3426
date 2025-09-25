"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: "futuristicAndOutOfBox",
      colorTemplate: 2,
      textAnimation: "slide"
    }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Peak"
          logoSrc="/images/logo.svg"
          logoAlt="Peak Logo"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Peak"
          subtitle="Your gateway to the future of token management"
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About Peak"
          descriptions={[
            "Peak is at the forefront of token management and innovative solutions.",
            "Join us in revolutionizing the crypto landscape."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          steps={[
            { position: "Step 1", image: "/images/placeholder1.avif", title: "Connect Wallet", description: "Connect your crypto wallet to the app.", isCenter: false },
            { position: "Step 2", image: "/images/placeholder2.avif", title: "Select Token", description: "Choose the token you want to buy.", isCenter: true },
            { position: "Step 3", image: "/images/placeholder3.avif", title: "Confirm Purchase", description: "Finalize your purchase and enjoy!", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics Overview"
          description="Understanding the distribution and supply metrics of Peak."
          tokenData={[
            { value: "10M", description: "Total Supply" },
            { value: "5M", description: "Market Cap" },
            { value: "2M", description: "Liquidity" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="Peak Logo"
          logoText="Peak"
          copyrightText="© 2023 Peak. All rights reserved."
          columns={[
            {
              items: [
                { label: "Privacy Policy", onClick: () => console.log('Privacy Policy Clicked') },
                { label: "Terms of Service", onClick: () => console.log('Terms of Service Clicked') }
              ]
            },
            {
              items: [
                { label: "Contact Us", onClick: () => console.log('Contact Us Clicked') },
                { label: "Support", onClick: () => console.log('Support Clicked') }
              ]
            }
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}