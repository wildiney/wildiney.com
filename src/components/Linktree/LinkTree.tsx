import { ButtonPortfolio } from "@/components/PortfolioButton/PortfolioButton";
import { ISocialMedia } from "@/data/data";

export default function LinkTree ({ data }: { data: ISocialMedia[] }) {
  return (
    <>
      <a href="#main" className="sr-only">Skip to main content</a>
      <div className="flex flex-col items-center w-full max-w-xl p-4 mx-auto min-w-80">
        <h1 className="m-0 text-3xl font-light text-center text-white md:text-3xl lg:text-4xl font-josefin">Wildiney Fernando Pimentel</h1>
        <h2 className="m-2 mb-8 text-2xl font-light text-center text-secondary">Product Designer</h2>
        <main className="w-full" id="main">
          <ul className="w-full p-0 m-0">
            {data &&
              data.map((button, index) => {
                const Icon = ({ icon }: { icon: React.ComponentType }) => {
                  const IconComponent = icon;
                  return <IconComponent />
                }
                return (
                  <li className="list-none" key={index}>
                    <ButtonPortfolio
                      icon={<Icon icon={button.icon} />}
                      site={button.site}
                      link={button.link}
                      ariaLabel={button.ariaLabel}
                    />
                  </li>
                );
              })}
          </ul>
        </main>
      </div>
    </>
  );
}
