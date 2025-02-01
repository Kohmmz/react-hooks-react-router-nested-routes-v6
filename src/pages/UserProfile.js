// UserProfile.js
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  const users = useOutletContext();
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) return <h2>User not found</h2>;

  return (
    <section>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </section>
  );
}

export default UserProfile;
