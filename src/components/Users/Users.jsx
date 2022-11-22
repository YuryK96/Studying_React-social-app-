import axios from "axios";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
import s from "./Users.module.scss";

const Users = ({
  onPageChanged,
  currentPage,
  users,
  onUnFollow,
  onFollow,
  totalUsersCount,
  pageSize,
  followingInProgress,
  toggleIsFollowing,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
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
      {users.map((u) => {
        return (
          <section key={u.id}>
            <div className={s.user}>
              <div className={s.user__photo}>
                <NavLink to={"/Profile/" + u.id}>
                  <img
                    src={
                      u.photos.small != null
                        ? u.photos.small
                        : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                    }
                    alt=""
                  />
                </NavLink>
                {u.followed ? (
                  <button
                    disabled={followingInProgress.some((id) => id === u.id)}
                    onClick={() => {
                      toggleIsFollowing(true, u.id);

                      usersAPI.unFollow(u.id).then((response) => {
                        if (response.resultCode === 0) {
                          onFollow(u.id);
                        }
                        toggleIsFollowing(false, u.id);
                      });
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    disabled={followingInProgress.some((id) => id === u.id)}
                    onClick={() => {
                      toggleIsFollowing(true, u.id);
                      usersAPI.follow(u.id).then((response) => {
                        if (response.resultCode === 0) {
                          onUnFollow(u.id);
                        }

                        toggleIsFollowing(false, u.id);
                      });
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
              <div className={s.user__container}>
                <div className={s.user__containerInfo}>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </div>
                <div className={s.user__containerLocation}>
                  <div>{"u.location.city"}</div>
                  <div>{"u.location.country"}</div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Users;
