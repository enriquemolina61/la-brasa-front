import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledUserItem } from "./style";

export function UserItem({ name, email, image, userId }: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/user/${userId}`);
  };
  return (
    <StyledUserItem onClick={handleClick}>
      <h2>{name}</h2>
      <p>{email}</p>
      <img src={image} />
    </StyledUserItem>
  );
}
type Props = {
  name: string;
  email: string;
  image: string;
  userId: string;
};
