import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © 2026 Manish Kumar
        </p>

        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Full Stack Web Developer
        </p>
      </div>
    </Fade>
  );
}

// //  src/components/footer/Footer.js
// import React, {useContext} from "react";
// import "./Footer.scss";
// import {Fade} from "react-reveal";
// import emoji from "react-easy-emoji";
// import StyleContext from "../../contexts/StyleContext";

// export default function Footer() {
//   const {isDark} = useContext(StyleContext);
//   return (
//     <Fade bottom duration={1000} distance="5px">
//       <div className="footer-div">
//         <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
//           {emoji("Made with ❤️ by DeveloperFolio Team")}
//         </p>
//         <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
//           Theme by{" "}
//           <a
//             href="https://github.com/saadpasta/developerFolio"
//             target="_blank"
//             rel="noreferrer"
//           >
//             developerFolio
//           </a>
//         </p>
//       </div>
//     </Fade>
//   );
// }
