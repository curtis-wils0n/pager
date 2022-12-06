import '../styles/UserProfile.css';
import UserAvatar from '../components/UserAvatar';

export default function User() {


  return (
    <>
    <h1 className="page-header">My Profile</h1>
    <div className="profile-pic">
    <UserAvatar />
    </div>
    </>
  );
}