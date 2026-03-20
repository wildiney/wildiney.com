import clsx from "clsx";

type SectionProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const baseClasses = "relative py-16 px-4 md:py-24 lg:py-16 sm:px-6 lg:px-16 mx-auto"
const variants = {
  primary: "bg-background-dark/80 backdrop-blur-md",
  secondary: "bg-gray-800/80 backdrop-blur-md",
}

function Section ({ children, variant = "primary", className }: SectionProps) {
  return (
    <section className={clsx(baseClasses, variants[variant], className)}>{children}</section>
  )
}

export default Section