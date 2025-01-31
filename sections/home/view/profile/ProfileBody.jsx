import React from "react";
import css from "@/styles/ProfileView.module.css";
import FollowButton from "./FollowButton";
import FollowInfoBox from "./FollowInfoBox";
import FriendsSuggestion from "@/components/FriendsSuggestion";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import PostGenerator from "@/components/Post/PostGenrator";
import Posts from "@/components/Posts";
const ProfileBody = ({ userId }) => {
  const { user: currentUser } = useUser();
  const isCurrentUser = currentUser?.id === userId;

  return (
    <div className={css.profileBody}>
      <div className={css.left}>
        <div className={css.sticky}>
          {!isCurrentUser && <FollowButton id={userId} />}

          {/* start from here */}
          <FollowInfoBox id={userId} />
          <FriendsSuggestion />
        </div>
      </div>
      <div className={css.right}>
        {isCurrentUser && <PostGenerator />}
        <Posts id={userId} />
      </div>
    </div>
  );
};

export default ProfileBody;