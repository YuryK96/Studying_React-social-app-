import { SubmitHandler, useForm } from "react-hook-form";
import { UserProfileType } from "../../../types/types";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { useWindowSize } from "../../hook/useWindowSize";

const ProfileDataForm: React.FC<ProfileDataFormType> = ({
  profile,
  isOwner,
  savePhoto,
  OutFromEditMode,
  updateProfile,
  userId,
}) => {
  const windowWidth = useWindowSize();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
    clearErrors,
    control,
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const mainPhotoSelected = (e: { target: HTMLInputElement }) => {
    if (e.target?.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    let CompletedForm = {
      aboutMe: data.aboutMe,
      fullName: data.name,
      lookingForAJob: data.lookingForAJob,
      lookingForAJobDescription: data.lookingForAJobDescription,
      userId: userId,
      photos: {
        large: null,
        small: null,
      },
      contacts: {
        facebook: data.facebook,
        github: data.github,
        instagram: data.instagram,
        mainLink: data.mainLink,
        twitter: data.twitter,
        vk: data.vk,
        website: data.website,
        youtube: data.youtube,
      },
    };
    updateProfile(CompletedForm, userId, setError);
    reset();
    OutFromEditMode();
  };

  return (
    <Box display={"flex"}>
      <FormControl>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            display={"flex"}
            marginLeft={1}
            justifyContent={windowWidth.width > 560 ? "start" : "center"}
            flexWrap={"wrap"}
          >
            <Box
              sx={{
                textAlign: "center",
                margin: 1,

                minWidth: 200,
                maxWidth: 200,
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
              />{" "}
              {isOwner && (
                <IconButton component="label">
                  <AddAPhotoIcon />
                  <input
                    hidden
                    type={"file"}
                    onChange={(e) => mainPhotoSelected(e)}
                  />
                </IconButton>
              )}
              <Box margin={1}>
                <TextField
                  label="Name"
                  size={"small"}
                  onFocus={() => {
                    clearErrors();
                  }}
                  {...register("name", {
                    value: profile.fullName,
                    required: "need to fill form",

                    minLength: {
                      value: 1,

                      message: "need more symbols",
                    },
                  })}
                />
              </Box>
              {(errors?.name && (
                <Typography sx={{ color: "red", margin: 1 }}>
                  {errors?.name?.message || "Error!"}
                </Typography>
              )) || (
                <Typography sx={{ color: "red", margin: 1 }}>
                  {errors?.server?.message}
                </Typography>
              )}
              <Box margin={1}>
                <TextField
                  label="About Me"
                  multiline
                  minRows={3}
                  size={"small"}
                  onFocus={() => {
                    clearErrors();
                  }}
                  {...register("aboutMe", {
                    required: "need to fill form",
                    value: profile.aboutMe,
                    minLength: {
                      value: 1,

                      message: "need more symbols",
                    },
                  })}
                />

                {(errors?.aboutMe && (
                  <Typography sx={{ color: "red", margin: 1 }}>
                    {errors?.aboutMe?.message || "Error!"}
                  </Typography>
                )) || (
                  <Typography sx={{ color: "red", margin: 1 }}>
                    {errors?.server?.message}
                  </Typography>
                )}
              </Box>
            </Box>

            <Box>
              <Typography fontWeight={500} padding={1}>
                {" "}
                Contacts:
              </Typography>
              {Object.entries(profile.contacts).map((item, index) => {
                const socName: any = item[0];
                return (
                  <Box key={index} margin={1}>
                    <TextField
                      size={"small"}
                      label={item[0]}
                      type="url"
                      onFocus={() => {
                        clearErrors();
                      }}
                      {...register(item[0] as SocialType, {
                        value: item[1],
                      })}
                    />

                    {errors?.[socName as keyof SocialTypeKey] && (
                      <Typography sx={{ color: "red", margin: 1 }}>
                        {errors?.[socName as keyof SocialTypeKey]?.message ||
                          "Error!"}
                      </Typography>
                    )}
                  </Box>
                );
              })}
            </Box>
            <Box>
              <Box m={1}>
                <Typography fontWeight={500}> Work:</Typography>
                <FormControlLabel
                  label="Are you looking for a job?"
                  control={
                    <Checkbox
                      {...register("lookingForAJob")}
                      defaultChecked={profile.lookingForAJob}
                    />
                  }
                />
                <Box m={1}>
                  <TextField
                    label="Dream job describtion"
                    multiline
                    minRows={2}
                    onFocus={() => {
                      clearErrors();
                    }}
                    type="text"
                    {...register("lookingForAJobDescription", {
                      required: "need to fill form",
                      value: profile.lookingForAJobDescription,
                      minLength: {
                        value: 1,

                        message: "need more symbols",
                      },
                    })}
                  />

                  {errors?.lookingForAJobDescription && (
                    <Typography sx={{ color: "red", margin: 1 }}>
                      {errors?.lookingForAJobDescription?.message || "Error!"}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box marginBottom={1} display={"flex"} justifyContent={"center"}>
            <Button disabled={!isValid} variant="outlined" type="submit">
              Edit
            </Button>
          </Box>
        </form>
      </FormControl>
      <Box>
        <IconButton onClick={OutFromEditMode}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default ProfileDataForm;

type ProfileDataFormType = {
  profile: UserProfileType;
  isOwner: boolean;
  userId: number | null;
  OutFromEditMode: () => void;
  savePhoto: (photo: File) => void;
  updateProfile: (
    data: UserProfileType,
    userId: number | null,
    setError: any
  ) => void;
};

interface SocialTypeKey {
  facebook: "facebook";
  github: "github";
  instagram: "instagram";
  mainLink: "mainLink";
  twitter: "twitter";
  vk: "vk";
  website: "website";
  youtube: "youtube";
}

type SocialType =
  | "facebook"
  | "github"
  | "instagram"
  | "mainLink"
  | "twitter"
  | "vk"
  | "website"
  | "youtube";
type FormValues = {
  aboutMe: string | null;
  facebook: string | null;
  github: string | null;
  instagram: string | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  mainLink: string | null;
  name: string | null;
  twitter: string | null;
  vk: string | null;
  website: string | null;
  youtube: string | null;
  server?: string;
};
