import { Box, Pagination, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { useWindowSize } from "../../hook/useWindowSize";

const Paginator: React.FC<PropsType> = ({ onPageChanged, totalItemsCount }) => {
  const windowWidth = useWindowSize();
  return (
    <Container sx={{ paddingTop: 1 }}>
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
