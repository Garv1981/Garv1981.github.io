
const users = [];

const loginForm = () => {
    const str = `
    <div class="login-form">
        <h3>Login Form</h3>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="garv@gmail.com">

        <label for="pass">Password</label>
        <input type="password" id="pass" placeholder="Enter your password">

        <p><button onclick="loginUser()">Submit</button></p>
        <p><button onclick="registerForm()">Create Account</button></p>
    </div>`;
    
    root.innerHTML = str;
};

const registerForm = () => {
    const str = `
    <div>
        <h3>Registration Form</h3>
        <label for="regEmail">Email</label>
        <input type="email" id="regEmail" placeholder="garv@gmail.com">

        <label for="regPass">Password</label>
        <input type="password" id="regPass" placeholder="Enter your password">

        <label for="cnfPass">Confirm Password</label>
        <input type="password" id="cnfPass" placeholder="Confirm your password">

        <p><button onclick='registerUser()'>Submit</button></p>
        <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    </div>`;
    
    root.innerHTML = str;
};

const showHome = (email) => {
    const str = `
    <div>
        <h3>Welcome, ${email}!</h3>
        <p><button onclick='loginForm()'>Logout</button></p>
    </div>`;
    
    root.innerHTML = str;
};

const registerUser = () => {
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPass").value;
    const cnfPass = document.getElementById("cnfPass").value;

    if (!email || !pass || !cnfPass) {
        alert("Please fill all fields.");
        return;
    }

    if (pass !== cnfPass) {
        alert("Passwords do not match.");
        return;
    }

    const exists = users.some(user => user.email === email);
    if (exists) {
        alert("User already registered.");
        return;
    }

    users.push({ email, pass });
    alert("Registered successfully!");
    loginForm();
};

const loginUser = () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    const user = users.find(user => user.email === email && user.pass === pass);

    if (user) {
        showHome(email);
    } else {
        alert("Invalid email or password.");
    }
};


loginForm();

