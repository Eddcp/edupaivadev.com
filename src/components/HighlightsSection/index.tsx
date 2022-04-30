const HighlightsSection = () => (
  <section className="grid grid-cols-3 gap-1">
    <article className="col-span-3 lg:col-span-2">
      <h2 className="text-2xl font-bold uppercase">Destaque</h2>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="h-12 bg-green-700">1</div>
        <div className="h-12 bg-green-500">2</div>
        <div className="h-12 bg-green-300">3</div>
        <div className="h-12 bg-green-700">4</div>
      </div>
    </article>
    <div className="hidden lg:block">
      <aside>
        <div className="text-2xl font-bold uppercase">Categorias</div>
        <div className="text-2xl font-bold uppercase">Tags</div>
      </aside>
    </div>
  </section>
)

export default HighlightsSection
