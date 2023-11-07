import { Fragment } from "react";
import React from "react";
import "./Profile.css"; 
import { groupMembers } from "../data/ProfileData"; 
import CardProfile from "../component/ProfileCard"; 

export default function Profile() {
  return (
    <>
        <p className="profile-title centered-title">Group Members</p>
        {groupMembers.map((member, index) => (
            <Fragment key={member.id}>
            <CardProfile
                name={member.name}
                nim={member.nim}
                profilePicture={member.profilePicture}
            />
            {groupMembers.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
        ))}
        </>
  );
}