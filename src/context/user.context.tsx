import { inferProcedureOutput } from '@trpc/server';
import React, { createContext, useContext } from 'react';
import { appRouter } from '../server/route/app.router';

type TQuery = keyof appRouter['_def']['queries'];

type InferQueryOutput<tRouteKey extends TQuery> = inferProcedureOutput<
  appRouter['_def']['queries'][tRouteKey]
>;

const UserContext = createContext<InferQueryOutput<'users.me'>>(null);

function UserContextProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: InferQueryOutput<'users.me'> | undefined;
}) {
  return (
    <UserContext.Provider value={value || null}>
      {children}
    </UserContext.Provider>
  );
}

const useUserContext = () => useContext(UserContext);

export { useUserContext, UserContextProvider };
