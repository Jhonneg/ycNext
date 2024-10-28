declare module "next-auth" {
  interface Session {
    id: session;
  }
  interface JWT {
    id: string;
  }
}
