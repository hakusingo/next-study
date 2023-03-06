import Link from 'next/link'

const Header = () => {
  return (
    <header className=''>
      <div className="container h-[60px] px-4 sm:px-0 mx-auto bg-teal-400 flex justify-between items-center text-white font-bold">
        <div className="">
          <Link
            href="/"
            className=''
          >
            <h1 className='text-3xl'>
              Next
            </h1>
          </Link>
        </div>
        <div className="">
          <Link
            href="/about"
            className='ml-auto'
          >
            About
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
