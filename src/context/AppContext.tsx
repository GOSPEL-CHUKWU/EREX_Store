import React, { useContext, useRef } from 'react';

const AppContext = React.createContext({});

function AppProvider({ children }: any) {
  const refContainer = useRef(null);

  // useEffect(() => {
  //   console.log('ref', refContainer.current);

  // }, []);
  return (
    <AppContext.Provider value={{ refContainer }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
