

const Headline = ({page, title}) => {
  console.log(page,title)
  return (
    <div className="bg-white py-8 text-center">
      <h1>{title}</h1>
      <p>Get Started by editing</p>
      <p className="capitalize">This page is {page}</p>
    </div>
  )
}

export default Headline
