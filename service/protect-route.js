// protect user page & related


import { useRouter } from 'next/router';
import { useEffect } from 'react';

const protectRoute = (WrappedComponent) => {
  const Auth = (props) => {
    const router = useRouter();
    useEffect(() => {
      const user = localStorage.getItem('user');
      if (!user) {
        router.replace('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
  return Auth;
};

export default protectRoute;