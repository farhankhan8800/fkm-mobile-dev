// protect auth pages like  Login , register etc ..


import { useRouter } from 'next/router';
import { useEffect } from 'react';

const authPageProtect = (WrappedComponent) => {
  const Auth = (props) => {
    const router = useRouter();
    useEffect(() => {
      const user = localStorage.getItem('user');
      if (user) {
        router.replace('/');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default authPageProtect;