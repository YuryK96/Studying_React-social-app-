import React from "react";
import s from "./Users.module.scss";
import axios from "axios";
class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });

    // 72e23854-f5e3-4835-a7c4-abe54c7e9e9c
  }

  render() {
    return (
      <div>
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
