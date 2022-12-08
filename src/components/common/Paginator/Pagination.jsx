import s from "./Pagination.module.scss";

const Paginator = ({
  onPageChanged,
  currentPage,
  totalItemsCount,
  pageSize,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.pagination}>
      {pages.map((p, i) => {
        return (
          <span
            key={i}
            id={i}
            onClick={() => {
              onPageChanged(p);
            }}
            className={` ${s.pagination__page}  ${
              currentPage === p ? s.selectedPage : null
            }`}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
