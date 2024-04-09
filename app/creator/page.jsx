"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@components/Profile";

const Creator = () => {
  const [allPosts, setAllPosts] = useState([]);
  const searchParams = useSearchParams();
  const creator_id = searchParams.get("id");
  const creator_username = searchParams.get("username");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${creator_id}/posts`);
      const data = await response.json();
      setAllPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <Profile
      name={`${creator_username}'s`}
      desc={`Welcome to ${creator_username}'s profile page.`}
      data={allPosts}
    />
  );
};

export default Creator;
