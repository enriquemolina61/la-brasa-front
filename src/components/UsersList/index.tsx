import { useEffect, useState } from "react";
import { getUsers } from "../../utils/api/api";
import { Users } from "../../types/product";
import { UserItem } from "../UserItem";
import { StyledUsersList } from "./style";
type Props = {};

export default function UserList({}: Props) {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    async function getUser() {
      const data = await getUsers();
      setUsers(data);
    }
    getUser();
  }, []);
  return (
    <StyledUsersList>
      {users.length > 0 &&
        users.map((users) => (
          <UserItem
            userId={users.id as string}
            key={users.id}
            name={users.name}
            email={users.email}
            image={users.image}
          />
        ))}
    </StyledUsersList>
  );
}
