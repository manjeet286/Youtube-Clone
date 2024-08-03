import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";

// Google provider setup
const googleProvider = new GoogleAuthProvider();

export const logInWithGoogle = async () => {
  try {
      console.log("Attempting to log in with Google...");
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google sign-in successful:", result);
      return result.user;
  } catch (error) {
      console.error("Error logging in with Google:", error.message);
      throw error;
  }
}

export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error logging out:", error.message);
        throw error;
    }
};


