import HomeNavbar from '../components/HomeNavbar';
import '../styles/LastPage.css'

export default function LastPage() {
  
  return (
    <>
    <HomeNavbar />
    <h1 className="final-page-header">Thanks for watching!</h1>
    <div class="profile-container">
    <div class="curtis-profile">
      <img class="last-page-pic" alt="" src="https://i.imgur.com/bpB5lE3.png"></img>
      <p class="real-name">Curtis Wilson</p>
      <div class="curtis-about">
      <img class="gh-logo" alt="" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img> 
      <p class="gh-name"><strong>curtis-wils0n</strong></p>
      </div>
      </div>
      <div class="emily-profile">
        <img class="last-page-pic" alt="" src="https://i.imgur.com/LfY62Z6.jpg"></img>
        <p class="real-name">Emily Villett</p>
        <div class="emily-about">
        <img class="gh-logo" alt="" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img> <p class="gh-name"><strong>MeowPup</strong></p>
        </div>
      </div>
      </div>
      <h1 className="page-hire-message">For business inquiries please contact: curtis.wils0n@protonmail.com or emily.villett@gmail.com</h1>
    </>
  )
}