import { ButtonPortfolio } from "@/components/PortfolioButton/PortfolioButton";
import { ISocialMedia } from "@/data/data";

export default function LinkTree ({ data }: { data: ISocialMedia[] }) {
  return (
    <div className="flex flex-col items-center w-full max-w-xl p-4 mx-auto min-w-80">
      <h1 className="m-0 text-3xl font-light text-center text-white md:text-3xl lg:text-4xl font-josefin">Wildiney Fernando Pimentel</h1>
      <h2 className="m-2 mb-8 text-2xl font-light text-center text-secondary">Designer & Developer</h2>

      {data &&
        data.map((button, index) => {
          const Icon = ({ icon }: { icon: React.ComponentType }) => {
            const IconComponent = icon;
            return <IconComponent />
          }
          return (
            <ButtonPortfolio
              key={index}
              icon={<Icon icon={button.icon} />}
              site={button.site}
              link={button.link}
            />
          );
        })}

    </div>
  );
}
