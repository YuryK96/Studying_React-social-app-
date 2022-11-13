import s from "./Users.module.scss";

const Users = ({ users, onFollow, onUnFollow, setUsers }) => {
  if (users.length === 0) {
    setUsers([
      {
        id: "1",
        photoURL:
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        fullName: "Dmitry",
        status: "I'm a boss",
        location: { city: "Minsk", country: "Belarus" },
        followed: false,
      },
      {
        id: "2",
        fullName: "Alex",
        photoURL:
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        status: "I'm a boss",
        location: { city: "Moscow", country: "Russia" },
        followed: false,
      },
      {
        id: "3",
        fullName: "Olga",
        photoURL:
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        status: "I'm a boss",
        location: { city: "Kiev", country: "Ukraine" },
        followed: false,
      },
      {
        id: "4",
        fullName: "Sergio",
        photoURL:
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        status: "I'm a boss",
        location: { city: "Minsk", country: "Grodno" },
        followed: true,
      },
      {
        id: "5",
        fullName: "Evgeniy",
        photoURL:
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        status: "I'm a boss",
        location: { city: "Brest", country: "Belarus" },
        followed: true,
      },
    ]);
  }

  return (
    <div>
      {users.map((u) => {
        return (
          <section key={u.id}>
            <div className={s.user}>
              <div className={s.user__photo}>
                <img src={u.photoURL} alt="" />
                {u.followed ? (
                  <button
                    onClick={() => {
                      onFollow(u.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onUnFollow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
              <div className={s.user__container}>
                <div className={s.user__containerInfo}>
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
                </div>
                <div className={s.user__containerLocation}>
                  <div>{u.location.city}</div>
                  <div>{u.location.country}</div>
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
