import UserProfile from "components/profile/profile";
import user from "./assets/user.json";
import Statistics from "components/statistics/statistics";
import data from "./assets/data.json";
import FriendList from "components/friendslist/friendlist";
import friends from "./assets/friends.json"; 

export const App = () => {
  return (
    <div
    >
      <UserProfile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />

      



    </div>
  );
};
