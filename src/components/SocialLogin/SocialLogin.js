import React from "react";
import { Button } from "react-bootstrap";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.init";

const SocialLogin = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gituser, gitloading, giterror] =
    useSignInWithGithub(auth);
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  if (error || giterror) {
    errorElement = (
      <>
        Error: {error?.message} {giterror?.message}
      </>
    );
  }
  if (user || gituser) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <p className="text-danger">{errorElement}</p>
      <div className="social_login">
        <div className="mb-2">
          <Button onClick={() => signInWithGoogle()}>
            Sign in with google
          </Button>
        </div>
        <div>
          <Button onClick={() => signInWithGithub()}>
            Sign in with Github
          </Button>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
