import { ButtonPortfolio } from "@/components/PortfolioButton/PortfolioButton";
import { ISocialMedia } from "@/data/data";

export default function LinkTree ({ data }: { data: ISocialMedia[] }) {
  return (
    <div className="flex flex-col w-full p-4 mx-auto md:w-6/12 xl:w-4/12">
      <h1 className="m-0 text-3xl font-thin text-center text-white md:text-3xl lg:text-4xl font-josefin">Wildiney Fernando Pimentel</h1>
      <h2 className="m-2 mb-4 text-2xl text-center font-extralight text-secondary">Designer & Developer</h2>

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
