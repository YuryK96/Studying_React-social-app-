import { NavLink } from "react-router-dom";
import s from "./Users.module.scss";
import { UserType } from "../../types/types";

type UserPropsType = {
  user: UserType;
  followingInProgress: Array<number>;
  toggleUserFollow: (id: number) => void;
  toggleUserUnFollow: (id: number) => void;
};

const User: React.FC<UserPropsType> = ({
  followingInProgress,
  toggleUserFollow,
  toggleUserUnFollow,
  user,
}) => {
  return (
    <section>
      <div className={s.user}>
        <div className={s.user__photo}>
          <NavLink to={"/Profile/" + user.id}>
            <img
              src={
                user.photos.small != null
                  ? user.photos.small
                  : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
              }
              alt=""
            />
          </NavLink>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                toggleUserFollow(user.id);
              }}
            >
              UnFollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                toggleUserUnFollow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
        <div className={s.user__container}>
          <div className={s.user__containerInfo}>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </div>
          <div className={s.user__containerLocation}>
            <div>{"user.location.city"}</div>
            <div>{"user.location.country"}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
