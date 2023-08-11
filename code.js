function checkLogin(username, password) {
    const dataFile = "./data.csv";
  
    if (!fs.existsSync(dataFile)) {
      console.log("Database not found");
      return;
    }
  
    try {
      const data = fs.readFileSync(dataFile, "utf-8");
      const rows = data.split("\n");
      for (const row of rows) {
        const [storedUsername, storedPassword] = row.split(",");
        if (storedUsername.toUpperCase() === username.toUpperCase() && storedPassword.toUpperCase() === password.toUpperCase()) {
          loginSuccess(username);
          return;
        }
      }
      loginFailure();
    } catch (error) {
      console.error("Error reading CSV:", error);
    }
  }
  
  function loginSuccess(username) {
    alert(`Login successful! Welcome, ${username}.`);
  }
  
  function loginFailure() {
    alert("Invalid username or password");
  }
  
  const providedUsername = "username";
  const providedPassword = "password";
  
  checkLogin(providedUsername, providedPassword);
  