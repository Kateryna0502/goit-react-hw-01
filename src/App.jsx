
import userData from './userData.json';
import friends from "./friends.json";
import Profile from './components/Profile/Profile.jsx';

import FriendList from "./components/FriendList/FriendList.jsx";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx"
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
      <div>
        <FriendList friends={friends} />
        </div>
       <div>
        <TransactionHistory transactions={transactions} />
      </div>
   </>
 );
}
    
    
  


export default App
