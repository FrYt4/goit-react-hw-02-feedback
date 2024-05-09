import UserProfile from "components/profile/profile";
import user from "./assets/user.json";
import Statistics from "components/statistics/statistics";
import data from "./assets/data.json";
import FriendList from "components/friendslist/friendlist";
import friends from "./assets/friends.json"; 
import TransactionHistory from "components/transationhistory/transationhistory";
import transactions from "./assets/transactions.json";

export const App = () => {
  return (
    <div
    >
      <UserProfile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>

    </div>
  );
};
