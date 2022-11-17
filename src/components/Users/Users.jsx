import React from "react";
import s from "./Users.module.scss";
import axios from "axios";
class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
      });

    // 72e23854-f5e3-4835-a7c4-abe54c7e9e9c
  }

  onPageChanged = (page) => {
    this.props.onCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        {pages.map((p, i) => {
          return (
            <span
              key={i}
              id={i}
              onClick={() => {
                this.onPageChanged(p);
              }}
              className={` ${s.page}  ${
                this.props.currentPage === p ? s.selectedPage : null
              }`}
            >
              {p}
            </span>
          );
        })}

        {this.props.users.map((u) => {
          return (
            <section key={u.id}>
              <div className={s.user}>
                <div className={s.user__photo}>
                  <img
                    src={
                      u.photos.small != null
                        ? u.photos.small
                        : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                    }
                    alt=""
                  />
                  {u.followed ? (
                    <button
                      onClick={() => {
                        this.props.onFollow(u.id);
                      }}
                    >
                      UnFollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.onUnFollow(u.id);
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
  }
}
export default Users;
