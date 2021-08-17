import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { toast } from "react-toastify";

const GroupsUserContext = createContext();

export const GroupsUserProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenzinho:token")) || ""
  );

  const getGroups = (token) => {
    api
      .get("groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGroups([...response.data]);
      })
      .catch((err) => console.log(err));
  };

  const subscribeToAGroup = (id) => {
    api
      .post(`groups/${id}/subscribe/`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGroups(token);
        toast.success("Inscrição realizada com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Você já faz parte desse grupo")
      });
  };
  
  const handleGroupCreation = (data) => {
    const { name, description, category } = data;
    api
      .post(
        "groups/",
        {
          name: name,
          description: description,
          category: category,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getGroups(token);
  }, [token]);

  return (
    <GroupsUserContext.Provider
      value={{ groups, setGroups, getGroups, handleGroupCreation, subscribeToAGroup }}
    >
      {children}
    </GroupsUserContext.Provider>
  );
};

export const useGroupsUser = () => useContext(GroupsUserContext);
