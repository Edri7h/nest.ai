// types/express/index.d.ts
export {};

declare global {
  namespace Express {
    interface Request {
      auth: () => Promise<{
        userId: string;
        has: (args: { plan: string }) => Promise<boolean>;
      }>;
      plan?: "free" | "premium";
      free_usage?: number;
    }
  }
}
