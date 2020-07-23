import { useState, useEffect } from "react";

export const useAuth = (auth) => {
  const [authentificated, setAuthentificated] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.isAuthentificated().then((isAuthentificated) => {
      if (isAuthentificated !== authentificated) {
        setAuthentificated(isAuthentificated);
      }
    });
  });

  useEffect(() => {
    if (authentificated) {
      auth.getUser().then(setUser);
    } else {
      setUser(null);
    }
  }, [authentificated]);

  return [authentificated, user];
};
