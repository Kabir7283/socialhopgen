
import ProfileView from "@/sections/home/view/profile/view/ProfileView";
import React from "react";


export const generateMetadata = (params) => {
  return {
    title: `${params?.searchParams?.person}'s profile`,
    description: `Profile page of user ${params?.params?.id}`,
  };
};
const ProfilePage = (params) => {
  return <ProfileView userId={params?.params?.id} />;
};

export default ProfilePage;