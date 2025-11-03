import React from 'react'
import MemberCard from './MemberCard.jsx';


const App = () => {
  const teamMembers = [
    { name: "Alice", role: "Frontend Developer", avatar: "/FRONT_END__BACK_END__FULL_STACK_คืออะไร_OLS04.jpg" },
    { name: "Bob", role: "Backend Developer", avatar: "/How-to-Become-a-Front-End-Developer-in-2020.png" },
    { name: "Charlie", role: "UI/UX Designer", avatar: "/public/UXUI-Design-คืออะไร_What_IS_UXUI.png" },
  ];

  return (
    <div>
      <h1 className="team-container">Mick team</h1>

      <div className="team-grid">
     {teamMembers.map((member, index) => (
        <MemberCard
          key={index}
          name={member.name}
          role={member.role}
          avatar={member.avatar}
        />
      ))}
      </div>
    </div>
  );
};

export default App
