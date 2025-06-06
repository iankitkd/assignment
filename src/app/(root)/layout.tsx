import Header from "@/components/layout/Header"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen text-foreground bg-[#fdfdfd] py-2 px-6">
      <Header />
      <main className="py-3">{children}</main>
    </div>
  )
}
