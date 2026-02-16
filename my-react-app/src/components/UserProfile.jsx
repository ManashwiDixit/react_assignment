import useAuth from "../hooks/useAuth";
const { user, logout } = useAuth();

function UserProfile() {

  const { user, logout } = useContext(UserContext);

  if (!user) {
    return <h3 style={{ textAlign: "center" }}>No user logged in</h3>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Welcome {user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserProfile;
