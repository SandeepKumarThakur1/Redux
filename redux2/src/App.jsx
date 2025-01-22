// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./store/reducers/UsersReducer";

const App = () => {
  // const [user, setUser] = useState();
  const { users } = useSelector((state) => state.UsersReducer);
  // console.log(p);
  const dispatch = useDispatch()

  const DeleteHandler = (index) => {
    console.log(index)
    dispatch(deleteUser(index));
  }
  return (
    <>
      <div className="bg-[#61616129] container w-[80%] mx-auto px-5 py-8 mt-5 rounded-md">
        <h1 className="text-2xl font-bold mb-3">User List</h1>
        {users.map((user,index) => (
          <ul key={user.id}>
            <li className="text-md mt-1">
              {" "}
              - {user.name}{" "}
              <span onClick={()=>DeleteHandler(index)} className="text-red-600 font-extrabold cursor-pointer select-none">
                x
              </span>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default App;
