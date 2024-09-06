const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      validate: async () => {
        let token = localStorage.getItem("token");
        if (!token) {
          console.log("No token");
          return false;
        }
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/validate",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (!response.ok) {
            const errorText = await response.text();
            console.error(
              "Error en el envío HTTP:",
              response.status,
              errorText
            );
            throw new Error(
              `HTTP error! status: ${response.status}, ${errorText}`
            );
          }
          let data = await response.json();
          if (data.validate === true) {
            console.log("we are logged in");
            return true;
          } else return false;
        } catch (error) {
          console.log("validation error", error);
          return false;
        }
      },

      login: async (loginData) => {
        console.log(loginData);
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(loginData),
          });
          if (!response.ok) {
            const errorText = await response.text();
            console.error(
              "Error en el envío HTTP:",
              response.status,
              errorText
            );
            throw new Error(
              `HTTP error! status: ${response.status}, ${errorText}`
            );
          }
          const data = await response.json();

          console.log("data entrada", data);

          if (data.access_token) {
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("username", data.username);
          } else {
            console.log("No se recibio token");
          }
        } catch (error) {
          console.log("Log Error: ", error);
        }
      },
      createUser: async (accountData) => {
        console.log("this is body ", JSON.stringify(accountData));
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/create",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(accountData),
            }
          );

          if (!response.ok) {
            alert("There was a problem, try again");
            const errorText = await response.text();
            console.error(
              "Error en el envío HTTP:",
              response.status,
              errorText
            );
            throw new Error(
              `HTTP error! status: ${response.status}, ${errorText}`
            );
          }
          alert("your account was created, go back to login");
        } catch (error) {
          console.log(error.message);
        }
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
