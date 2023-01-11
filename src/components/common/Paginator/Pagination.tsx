import { Box, Pagination, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { useWindowSize } from "../../hook/useWindowSize";

console.log(window.innerWidth);
const Paginator: React.FC<PropsType> = ({ onPageChanged, totalItemsCount }) => {
  const windowWidth = useWindowSize();
  return (
    <Container>
      <Pagination
        size={windowWidth.width < 520 ? "small" : "medium"}
        onChange={(event, page) => onPageChanged(page)}
        count={totalItemsCount}
        color="primary"
      />
    </Container>
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
