import Link from "next/link"

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className='flex max-w-fit bg-teal-400 border-none rounded-md py-2 px-4 transition hover:bg-teal-500 duration-300'>{text}</button>
    </Link>
  )
}

export default Button