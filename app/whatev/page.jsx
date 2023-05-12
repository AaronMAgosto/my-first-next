import Hero from "../../componets/shared/Hero"

export const metedata = {
  title: " um.. whatev",
  description: "this is custom metadta for this route"
}

export default function Page () {
  return(
    <main className="p-8">
      <Hero/>
    <h1 className="">Whatev</h1>
    <p>routes in Next.js are too easy</p>
    </main>
  )
}