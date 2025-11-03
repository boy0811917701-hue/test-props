import React from 'react'

function MemberCard({ name, role, avatar }) {


  return (
    <div>
        <div className="member-card">
            <h1 className="member-name">{name}</h1>
            <p className="member-role">{role}</p>
            <img className="avatar" src={avatar} alt={name} width="50%"/>
        </div>

    </div>
    
  );
}

export default MemberCard
