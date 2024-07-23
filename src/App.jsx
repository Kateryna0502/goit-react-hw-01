
import userData from './userData.json';
import friends from "./friends.json";
import Profile from './components/Profile/Profile.jsx';
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
       <div>
        <TransactionHistory transactions={transactions} />
      </div>
   </>
 );
}
    
    
  


export default App
