import User from "../components/user";

function UserList(props) {
  return (
    <>
      {props.users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
