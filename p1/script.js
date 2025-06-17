const loginForm = () => {
    const str = `
    <div class="login-form">
        <h3>Login Form</h3>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="garv@gmail.com">

        <label for="pass">Password</label>
        <input type="password" id="pass" placeholder="Enter your password">

        <p><button onclick="showHome()">Submit</button></p>
        <p><button onclick="registerForm()">Create Account</button></p>
    </div>`;
    
    root.innerHTML = str;
}


const registerForm = () => {
     const str = `<div>
    <h3>Registration Form</h3>
    <label for="email">Email</label>
        <input type="email" id="email" placeholder="garv@gmail.com">

        <label for="pass">Password</label>
        <input type="password" id="pass" placeholder="Enter your password">

         <label for="cnfpass">Confirm Password</label>
        <input type="password">
    <p><button onclick='loginForm()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    `
    root.innerHTML = str + "</div>"
}

const showHome = () => {
     const str = `<div>
    <h3>Welcome</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    `
    root.innerHTML = str + "</div>"
}
