import UserProfile from "components/profile/profile";
import user from "./assets/user.json";


export const App = () => {
  return (
    <div
    >
   <UserProfile {...user} />
      



    </div>
  );
};
