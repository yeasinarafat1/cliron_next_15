import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { AUTHOR_BY_GOOGLE_EMAIL_QUERY } from "@/sanity/lib/query";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { sub: googleId } = profile as any;

      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GOOGLE_EMAIL_QUERY, { email: user.email });
      if (!existingUser) {
        await writeClient.create({
          _type: "user",
          id: profile?.sub,
          name: user.name,
          email: user.email,
          image: user.image,
        });
      }

      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        let user;

        user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GOOGLE_EMAIL_QUERY, { email: profile?.email });

        if (user) {
          token.id = user.id;
          token.provider = account.provider;
        }
      }

      return token;
    },
    async session({ session, token }) {
      return { ...session, id: token.id, provider: token.provider };
    },
  },
});
