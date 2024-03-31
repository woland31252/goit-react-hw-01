import userData from '../userData.json';
import Profile from './Profile/Pfofile';


const App = () => {
  return (
    <>
      <Profile
        marker
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
       
      />
    </>
  );
};


export default App
