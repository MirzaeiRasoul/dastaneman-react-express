function PaginateLinks({ pagesNumber, setPage }) {
  const renderPaginateLinks = () => {
    let pagination = []
    for (let i = 0; i < pagesNumber; i++)
      pagination.push(
        <button key={i} className="paginate-link" onClick={() => setPage(i + 1)}>
          {i + 1}
        </button>
      )
    return pagination
  }
  return <div className="paginate-links">{renderPaginateLinks()}</div>
}

export default PaginateLinks
