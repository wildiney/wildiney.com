function Section ({ id, extraClass, children }: { id: string, extraClass?: string | null, children: React.ReactNode }) {
  return (
    <section id={id} className={`flex flex-col w-full min-h-screen relative ${extraClass}`}>{children}</section>
  )
}

export default Section