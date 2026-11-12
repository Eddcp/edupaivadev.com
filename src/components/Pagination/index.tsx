type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const baseClass = 'h-10 min-w-[2.5rem] border-2 px-3 font-bold'

  return (
    <nav aria-label="paginação" className="mt-10 flex justify-center gap-2">
      <button
        type="button"
        className={`${baseClass} border-brand disabled:opacity-30`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        ←
      </button>
      {pages.map((page) => (
        <button
          type="button"
          key={page}
          className={`${baseClass} ${
            page === currentPage ? 'border-brand bg-red' : 'border-brand'
          }`}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          aria-label={`Página ${page}`}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className={`${baseClass} border-brand disabled:opacity-30`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Próxima página"
      >
        →
      </button>
    </nav>
  )
}

export default Pagination
