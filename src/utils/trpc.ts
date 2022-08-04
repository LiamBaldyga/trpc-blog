import { createReactQueryHooks } from '@trpc/react';
import { appRouter } from '../server/route/app.router';

export const trpc = createReactQueryHooks<appRouter>();
