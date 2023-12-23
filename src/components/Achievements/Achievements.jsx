

// import React from "react";
// import "./Achievements.styles.css";
// import Members from "../Achievements/logo/Members.svg";
// import Bookings from "../Achievements/logo/Booking .svg";
// import Clubs from "../Achievements/logo/Clubs.svg";
// import Payments from "../Achievements/logo/Payments.svg";



// function Achievements() {
//   const achievementsData = [
//     { logo: Members, count: "2,245,341", title: "Members" },
//     { logo: Clubs, count: "46,328", title: "Clubs" },
//     { logo: Bookings, count: "828,867", title: "Bookings" },
//     { logo: Payments, count: "1926436", title: "Payments" },
//   ];

//   return (
//     <div className="achievements">
//       <div className="achievements-box-1">
//         <h3 className="WeBelieve-heading">Helping a local</h3>
//         <h3 className="WeBelieve-blue-hedline">business reinvent itself</h3>
//         <p>We reached here with our hard work and dedication</p>
//       </div>
//       <div className="achievements-box-2">
//       {achievementsData.map((achievement, index) => (
//   <div key={index} className="achievement">
//     <img
//       className="achievements-logo"
//       alt={achievement.title}
//       src={achievement.logo}
//     />
//     <div className="achievement-details">
//       <h3 className="achievements-title">{achievement.count}</h3>
//       <p className="achievements-subtitle">{achievement.title}</p>
//     </div>
//   </div>
// ))}
//       </div>
//     </div>
//   );
// }

// export default Achievements;



import React from "react";
import "./Achievements.styles.css";
import Members from "../Achievements/logo/Members.svg";
import Bookings from "../Achievements/logo/Booking .svg";
import Clubs from "../Achievements/logo/Clubs.svg";
import Payments from "../Achievements/logo/Payments.svg";


function Achievements() {
  const achievementsData = [
    { logo: Members, count: "2,245,341", title: "Members" },
    { logo: Clubs, count: "46,328", title: "Clubs" },
    { logo: Bookings, count: "828,867", title: "Bookings" },
    { logo: Payments, count: "1926436", title: "Payments" },
  ];

  return (
    <div className="achievements">
      <div className="achievements-box-1">
        <h3 className="WeBelieve-heading">Helping a local</h3>
        <h3 className="WeBelieve-blue-hedline">business reinvent itself</h3>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className="achievements-box-2">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="achievement">
            <img
              className="achievements-logo"
              alt={achievement.title}
              src={achievement.logo}
            />
            <div>
              <h3 className="achievements-title">{achievement.count}</h3>
              <p className="achievements-subtitle">{achievement.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;

