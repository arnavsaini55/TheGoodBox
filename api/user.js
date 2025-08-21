import auth from '@react-native-firebase/auth';

export const createUser = async (fullname, email, password) => {
  try {
    console.log("Creating user with:", fullname, email, password);

    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    await userCredential.user.updateProfile({ displayName: fullname });

    console.log("User created successfully:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log("That email is already in use");
    } else if (error.code === 'auth/invalid-email') {
      console.log("That email address is invalid");
    } else if (error.code === 'auth/weak-password') {
      console.log("Password should be at least 6 characters");
    } else {
      console.log("Registration error:", error);
    }
  }
};
