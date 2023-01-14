import PostCss from "./Post.module.css";
import { Avatar, Box, Typography } from "@mui/material";
import { useWindowSize } from "../../../hook/useWindowSize";

const Post: React.FC<PostType> = ({ countLikes, value }) => {
  const windowWidth = useWindowSize();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: windowWidth.width > 450 ? "space-between" : "center",
        alignItems: "center",
        flexWrap: "wrap",
        margin: 2,
        marginLeft: 3,
        maxWidth: 500,
      }}
    >
      <Box width={110}>
        <Box m={"auto"} width={80} height={80} display={"flex"}>
          <Avatar
            sx={{ width: "100%", height: "100%" }}
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
            alt=""
          />{" "}
        </Box>
        <Box
          m={1}
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Typography> likes: </Typography>{" "}
          <Typography color={"green"}>{countLikes}</Typography>
        </Box>{" "}
      </Box>

      <Typography textAlign={"center"} className={PostCss.post}>
        {value}
      </Typography>
    </Box>
  );
};

export default Post;

type PostType = {
  countLikes: number;
  value: string;
};
