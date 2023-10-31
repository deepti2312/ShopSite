import './profile.css';

function Profile() {
  let user = JSON.parse(localStorage.getItem('userDetails'))

  return (
    <>
      <div className='profile'>
        <p><b>Username: </b> {user.username}</p>
        <p><b>Name: </b> {user.name}</p>
        <p><b>Email: </b> {user.email}</p>
        <p><b>Address: </b>{user.address}</p>
      </div>
    </>
  )
}

export default Profile;
