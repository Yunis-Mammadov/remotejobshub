// import React from 'react'
// import HeroSection from './HeroSection'
// import CarouselApp from './CarouselApp'
// import { Button, Link } from '@mui/material';
// import NewJobs from './NewJobs'
// import '../../styles/Home.scss'

// const Home = () => {
//   return (
//     <div style={{
//       background: "rgb(228, 231, 234)"
//     }}>
//       <HeroSection />
//       <div style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-end",
//         gap: "20px",
//         width: "95%",
//         margin: "50px auto",
//         backgroundColor: "red"
//       }}>

//         {/* carousel */}
//         <h2 style={{ margin: "10px auto", color: "black", fontSize: "22px" }}>Featured in</h2>
//         <CarouselApp />

//         {/* newjobs */}
//         <div className='newJobs'>
//           <div className='newJobsBtn'>
//             <h2 style={{ color: "black", padding: "10px", fontSize: "22px" }}>New Jobs</h2>
//             <a href="/jobs">
//               <Button
//                 component={Link}
//                 to="/jobs"
//                 className="textBtn"
//                 variant="text"
//               >
//                 See all jobs →
//               </Button>
//             </a>
//           </div>
//           <div>
//             <NewJobs />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home

import React from 'react'
import HeroSection from './HeroSection'
import CarouselApp from './CarouselApp'
import NewJobs from './NewJobs'
import PopularJobs from './PopularJobs'
import TopPay from './TopPay'
import InfoSection from './InfoSection'
import '../../styles/Home.scss'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='parentSections'>
        <div className='sections'>
          <CarouselApp />
          <NewJobs />
          <PopularJobs />
          <TopPay />
          <InfoSection />
        </div>
      </div>
    </div>
  )
}

export default Home
