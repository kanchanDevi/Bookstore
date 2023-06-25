export function filterData(searchInput, books) {
    const filterData = books.filter((book) =>
      book?.title?.toLowerCase()?.includes(searchInput)
    );
    return filterData;
  }