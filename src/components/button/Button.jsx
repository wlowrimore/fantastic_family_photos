import Link from "next/link"

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className='flex max-w-fit bg-teal-400 text-neutral-950 font-semibold border-none rounded-md py-2 px-4 transition hover:bg-neutral-800 hover:text-teal-200 duration-300'>{text}</button>
    </Link>
  )
}

export default Button