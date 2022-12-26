import { useState } from "react";
import s from "./Pagination.module.scss";

const Paginator: React.FC<PropsType> = ({
  onPageChanged,
  currentPage,
  totalItemsCount,
  pageSize,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages: Array<number> = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, serPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.paginationItem}>
      <div className={s.paginationItem__pagination}>
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p, i) => {
            return (
              <span
                key={i}
                onClick={() => {
                  onPageChanged(p);
                }}
                className={` ${s.paginationItem__page}  ${
                  currentPage === p ? s.selectedPage : null
                }`}
              >
                {p}
              </span>
            );
          })}
      </div>
      <div className={s.paginationItem__buttons}>
        {portionCount > portionNumber && (
          <button
            onClick={() => {
              serPortionNumber(portionNumber + 1);
            }}
          >
            Next
          </button>
        )}
        {portionNumber > 1 && (
          <button
            onClick={() => {
              serPortionNumber(portionNumber - 1);
            }}
          >
            Previous
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;

type PropsType = {
  currentPage?: number;
  totalItemsCount: number;
  pageSize: number;
  portionSize?: number;
  onPageChanged: (pageNumber: number) => void;
};
