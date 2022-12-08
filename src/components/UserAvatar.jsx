import React from 'react';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

/**
 * Component for displaying user avatar and relevant information
 * @returns JSX Functional Component
 */
export default function UserAvatar() {

  return (
    <div class="container bootstrap snippets bootdey">
      <div class="profile card">
        <div class="profile-body">
          <div class="profile-bio">
            <div class="row">
              <div class="col-md-5 text-center">
                <img
                  class="img-thumbnail md-margin-bottom-10"
                  src="https://img.freepik.com/premium-vector/young-muslimah-woman-hold-quran-book-profile-aesthetic-illustration_513640-467.jpg"
                  alt=""
                />
              </div>
              <div class="col-md-7">
                <h2 class="user-name"><strong>Abigal Abraham</strong></h2>
                  <div class="user-info">
                    <span>Username:<strong> abby123</strong></span>
                    <span># of Books read:<strong> 24</strong></span>
                    <span># of Books reviewed:<strong> 3</strong></span>
                  </div>
                <hr/>
                <p><strong>Love me some good books.</strong></p>
              </div>
              <div class="currently-reading">
                <h2>Currently Reading:</h2>
                <img
                  className="book-cover"
                  src="https://github.com/curtis-wils0n/pager-api/blob/main/src/db/assetts/Dune_cover.jpeg?raw=true"
                  alt="Dune cover"
                  width={150}
                  height={225}
                />
              </div>
              <div class="edit-profile">
                <BorderColorOutlinedIcon />
                </div>
            </div>    
          </div>
    	  </div>
      </div>
    </div> 
  )
}