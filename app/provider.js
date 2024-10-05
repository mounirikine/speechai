'use client';

import { Users } from '../configs/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react';
import { db } from '../configs/db'; // Ensure db is correctly imported

const Provider = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    const checkNewUser = async () => {
      if (user) {
        await isNewUser();
      }
    };

    checkNewUser();
  }, [user]);

  const isNewUser = async () => {
    if (!user) return;

    const result = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));

    console.log(result);

    if (!result[0]) {
      await db.insert(Users).values({
        name: user.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl, // Corrected to user (singular)
      });
    }
  };

  return <div>{children}</div>;
};

export default Provider;
