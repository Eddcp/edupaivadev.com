type Props = {
  username: string
  className?: string
}

const BuyMeACoffee = ({ username, className = '' }: Props) => {
  const buyMeACoffeeUrl = `https://buymeacoffee.com/${username}`

  return (
    <a
      href={buyMeACoffeeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-md bg-[#FFDD00] px-4 py-2 font-semibold text-[#000000] transition-all hover:bg-[#FFE44D] hover:shadow-lg ${className}`}
      aria-label="Buy me a coffee"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <path
          d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.38 0 2.5-1.12 2.5-2.5S19.88 3 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.28 0 .5.22.5.5s-.22.5-.5.5zM4 19h16v2H4v-2z"
          fill="currentColor"
        />
      </svg>
      <span className="text-sm sm:text-base">Buy me a coffee</span>
    </a>
  )
}

export default BuyMeACoffee

