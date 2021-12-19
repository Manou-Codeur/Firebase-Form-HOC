I share with you this firebase form HOC named withForm, which saves some time and repetetive code for you. It's usefull for you if and only if you're using firebase for handling 
the backend. By using this HOC you won't be worrying anymore about forms validations neither error handling because it handles all this stuff for you.
## So how it works ?

1. Donwload this files and include them in your project folder.

----> Project-Folder </br>
-------> Your files and folders </br>
-------> formHOC </br>
------------> errorHandling.js </br>
------------> form.jsx </br>
------------> helperFunctions.js </br>
------------> yupSchemas.js </br>

2. Make the changes you need on the code (if the actual code doesn't suits your needs for 100%).  

3. Import the withForm HOC and then pass to it your form component and the inputs it contains in an array of strings as parameters.
 
```jsx
import withForm from "./formHOC/form.jsx";

const SignIn = () => {};

const inputs = ["email", "password"];
export default withForm(SignIn, inputs);
```
