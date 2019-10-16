import Link from 'next/link'


const Nav = () => {
  return (
    <>
    < br/>
      <div>
        <Link href="sell">
          <a>Sell</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>
  )
}

export default Nav
