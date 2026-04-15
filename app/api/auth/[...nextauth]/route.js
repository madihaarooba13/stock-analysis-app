import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const connectDB = require("../../../../server/config/db");
const User = require("../../../../server/models/User");

const handler = NextAuth({
  providers: [
    // 🔥 GOOGLE
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // 🔥 GITHUB
   GitHubProvider({
  clientId: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_SECRET,
}),
  ],

  callbacks: {
    async signIn({ user }) {
      try {
        console.log("USER:", user);

        await connectDB();

        let existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            watchlist: [],
          });
          console.log("NEW USER CREATED");
        }

        return true;
      } catch (err) {
        console.error("SIGNIN ERROR:", err);
        return false;
      }
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };