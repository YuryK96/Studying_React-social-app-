import ProfileInfoCss from "./ProfileInfo.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhotoType, UserProfileType } from "../../../types/types";

type ProfileDataFormType = {
  profile: UserProfileType;
  isOwner: boolean;
  userId: number | null;
  OutFromEditMode: () => void;
  savePhoto: (photo: string | Blob) => void;
  updateProfile: (
    data: UserProfileType,
    userId: number | null,
    setError: any
  ) => void;
};

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

const ProfileDataForm: React.FC<ProfileDataFormType> = ({
  profile,
  isOwner,
  savePhoto,
  OutFromEditMode,
  updateProfile,
  userId,
}) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
    clearErrors,
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
    <div className={ProfileInfoCss.item}>
      <div className={ProfileInfoCss.avatar}>
        <div className={ProfileInfoCss.name}>
          <b> {profile.fullName} </b>
        </div>
        <img
          src={
            profile.photos.large ||
            "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          }
          alt=""
        />

        {isOwner && (
          <input type={"file"} onChange={(e) => mainPhotoSelected(e)} />
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <div>
              <b> Name</b>
            </div>
            <input
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
          </div>
          <div>
            {(errors?.name && (
              <p style={{ color: "red" }}>
                {errors?.name?.message || "Error!"}
              </p>
            )) || <p style={{ color: "red" }}>{errors?.server?.message}</p>}
          </div>{" "}
          <div>
            {" "}
            <b> About Me</b>
          </div>
          <input
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
        </div>
        <div>
          {(errors?.aboutMe && (
            <p style={{ color: "red" }}>
              {errors?.aboutMe?.message || "Error!"}
            </p>
          )) || <p style={{ color: "red" }}>{errors?.server?.message}</p>}
        </div>

        <div>
          {" "}
          <b> Work </b>
        </div>

        <div>
          <label htmlFor="lookingForAJob">Are you looking for a job?</label>{" "}
          <input {...register("lookingForAJob")} type={"checkbox"} />
        </div>

        <div>
          <div>
            <label
              style={{ display: "block" }}
              htmlFor="lookingForAJobDescription"
            >
              dream job describtion
            </label>
            <input
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
          </div>
          <div>
            {errors?.lookingForAJobDescription && (
              <p style={{ color: "red" }}>
                {errors?.lookingForAJobDescription?.message || "Error!"}
              </p>
            )}
          </div>
        </div>

        <div>
          <div>
            {" "}
            <b> Contacts</b>
          </div>
          <div>
            <label className={ProfileInfoCss.label} htmlFor="facebook ">
              facebook:
            </label>
            <input
              type="url"
              onFocus={() => {
                clearErrors();
              }}
              {...register("facebook", {
                value: profile.contacts.facebook,
              })}
            />

            <div>
              {(errors?.facebook && (
                <p style={{ color: "red" }}>
                  {errors?.facebook?.message || "Error!"}
                </p>
              )) || <p style={{ color: "red" }}>{errors?.server?.message}</p>}
            </div>
          </div>

          <div>
            <label className={ProfileInfoCss.label} htmlFor="website ">
              website:
            </label>
            <input
              type="url"
              onFocus={() => {
                clearErrors();
              }}
              {...register("website", {
                value: profile.contacts.website,
              })}
            />

            <div>
              {(errors?.website && (
                <p style={{ color: "red" }}>
                  {errors?.website?.message || "Error!"}
                </p>
              )) || <p style={{ color: "red" }}>{errors?.server?.message}</p>}
            </div>
          </div>

          <div>
            <label className={ProfileInfoCss.label} htmlFor="vk ">
              vk:
            </label>
            <input
              type="url"
              onFocus={() => {
                clearErrors();
              }}
              {...register("vk", {
                value: profile.contacts.vk,
              })}
            />

            <div>
              {(errors?.vk && (
                <p style={{ color: "red" }}>
                  {errors?.vk?.message || "Error!"}
                </p>
              )) || <p style={{ color: "red" }}>{errors?.server?.message}</p>}
            </div>
          </div>

          <div>
            <label className={ProfileInfoCss.label} htmlFor="twitter ">
              twitter:
            </label>
            <input
              type="url"
              onFocus={() => {
                clearErrors();
              }}
              {...register("twitter", {
                value: profile.contacts.twitter,
              })}
            />

            <div>
              {(errors?.twitter && (
                <p style={{ color: "red" }}>
                  {errors?.twitter?.message || "Error!"}
                </p>
              )) || <p style={{ color: "red" }}>{errors?.server?.message}</p>}
            </div>
          </div>

          <div>
            <label className={ProfileInfoCss.label} htmlFor="instagram ">
              instagram:
            </label>
            <input
              type="url"
              onFocus={() => {
                clearErrors();
              }}
              {...register("instagram", {
                value: profile.contacts.instagram,
              })}
            />

            <div>
              {(errors?.instagram && (
                <p style={{ color: "red" }}>
                  {errors?.instagram?.message || "Error!"}
                </p>
              )) || <p style={{ color: "red" }}>{errors?.server?.message}</p>}
            </div>
          </div>

          <div>
            <label className={ProfileInfoCss.label} htmlFor="youtube ">
              youtube:
            </label>
            <input
              type="url"
              onFocus={() => {
                clearErrors();
              }}
              {...register("youtube", {
                value: profile.contacts.youtube,
              })}
            />

            <div>
              {(errors?.youtube && (
                <p style={{ color: "red" }}>
                  {errors?.youtube?.message || "Error!"}
                </p>
              )) || <p style={{ color: "red" }}>{errors?.server?.message}</p>}
            </div>
          </div>
          <div>
            <label className={ProfileInfoCss.label} htmlFor="github ">
              github:
            </label>
            <input
              type="url"
              onFocus={() => {
                clearErrors();
              }}
              {...register("github", {
                value: profile.contacts.github,
              })}
            />

            <div>
              {(errors?.github && (
                <p style={{ color: "red" }}>
                  {errors?.github?.message || "Error!"}
                </p>
              )) || <p style={{ color: "red" }}>{errors?.server?.message}</p>}
            </div>
          </div>

          <div>
            <label className={ProfileInfoCss.label} htmlFor="mainLink ">
              mainLink:
            </label>
            <input
              type="url"
              onFocus={() => {
                clearErrors();
              }}
              {...register("mainLink", {
                value: profile.contacts.mainLink,
              })}
            />

            <div>
              {(errors?.mainLink && (
                <p style={{ color: "red" }}>
                  {errors?.mainLink?.message || "Error!"}
                </p>
              )) || <p style={{ color: "red" }}>{errors?.server?.message}</p>}
            </div>
          </div>
        </div>

        <div>
          <input disabled={!isValid} type="submit" />
        </div>
      </form>
      <div>
        <button onClick={OutFromEditMode}>Back</button>
      </div>
    </div>
  );
};

export default ProfileDataForm;
