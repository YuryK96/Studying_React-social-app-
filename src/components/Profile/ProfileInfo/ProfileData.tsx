import ProfileInfoCss from "./ProfileInfo.module.css";
import { ContactsType, UserProfileType } from "../../../types/types";
import { Box, Typography } from "@mui/material";
import ProfileStatuswithHooks from "./ProfileStatuswithHooks";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkIcon from "@mui/icons-material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContactsIcon from "@mui/icons-material/Contacts";
import WebIcon from "@mui/icons-material/Web";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useWindowSize } from "../../hook/useWindowSize";

type ProfileDataType = {
  profile: UserProfileType;
  goToEditMode: () => void;
  isOwner: boolean;
  status: string;
  updateStatus: (status: string) => void;
};
export const ProfileData: React.FC<ProfileDataType> = ({
  profile,
  isOwner,
  goToEditMode,
  status,
  updateStatus,
}) => {
  const windowWidth = useWindowSize();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: windowWidth.width < 460 ? "center" : "start",
        gap: 5,
        marginLeft: "3%",
        paddingTop: 1,
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          textAlign: "center",

          minWidth: 150,
          maxWidth: 150,
        }}
      >
        <Typography fontWeight={500}>{profile.fullName}</Typography>
        <Box
          component={"img"}
          borderRadius={3}
          width={"100%"}
          src={
            profile.photos.large ||
            "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          }
        />
        <Box>
          <ProfileStatuswithHooks status={status} updateStatus={updateStatus} />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          marginTop={1}
          marginBottom={1}
          flexWrap={"wrap"}
        >
          {profile.contacts.facebook && (
            <a target={"_blank"} href={profile.contacts.facebook}>
              {" "}
              <FacebookIcon />
            </a>
          )}
          {profile.contacts.github && (
            <a target={"_blank"} href={profile.contacts.github}>
              {" "}
              <GitHubIcon />
            </a>
          )}{" "}
          {profile.contacts.instagram && (
            <a target={"_blank"} href={profile.contacts.instagram}>
              {" "}
              <InstagramIcon />
            </a>
          )}{" "}
          {profile.contacts.mainLink && (
            <a target={"_blank"} href={profile.contacts.mainLink}>
              {" "}
              <LinkIcon />
            </a>
          )}{" "}
          {profile.contacts.twitter && (
            <a target={"_blank"} href={profile.contacts.twitter}>
              {" "}
              <TwitterIcon />
            </a>
          )}{" "}
          {profile.contacts.vk && (
            <a target={"_blank"} href={profile.contacts.vk}>
              {" "}
              <ContactsIcon />
            </a>
          )}{" "}
          {profile.contacts.website && (
            <a target={"_blank"} href={profile.contacts.website}>
              {" "}
              <WebIcon />
            </a>
          )}{" "}
          {profile.contacts.youtube && (
            <a target={"_blank"} href={profile.contacts.youtube}>
              {" "}
              <YouTubeIcon />
            </a>
          )}
        </Box>
      </Box>
      <Box maxWidth={200}>
        <Typography textAlign={"center"} fontWeight={500}>
          About Me:
        </Typography>
        <Typography color={"rgba(49, 47, 48, 0.8)"}>
          {profile.aboutMe}
        </Typography>
      </Box>
      <Box maxWidth={200}>
        {" "}
        <Box display={"flex"} justifyContent={"center"}>
          <SearchIcon color={profile.lookingForAJob ? "success" : "error"} />

          <Typography textAlign={"center"} fontWeight={500}>
            &nbsp;Work:
          </Typography>
        </Box>
        <Typography color={"rgba(49, 47, 48, 0.8)"}>
          {profile.lookingForAJobDescription}
        </Typography>
      </Box>

      {isOwner && (
        <Box>
          <IconButton onClick={goToEditMode}>
            <EditIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
