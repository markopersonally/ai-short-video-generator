"use client";

import React, { useEffect } from "react";
import { db } from "@/configs/db";
import { Users } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    user && isNewUser();
  }, [user]);

  const isNewUser = async () => {
    if (!user?.fullName) {
      console.error("User's full name is missing");
      return;
    }
  
    if (!user?.primaryEmailAddress?.emailAddress) {
      console.error("User's email address is missing");
      return;
    }
  
    const result = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user.primaryEmailAddress.emailAddress));
  
    console.log("Database query result:", result);
  
    if (!result[0]) {
      try {
        await db.insert(Users).values({
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          imageUrl: user?.imageUrl || "", 
        });
        console.log("New user inserted successfully");
      } catch (error) {
        console.error("Error inserting new user:", error);
      }
    }
  };
  

  return <div>{children}</div>;
}

export default Provider;
