"use client";

import { useEffect, useState } from "react";

import { CreateThreadModal } from "../modals/create-thread-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CreateThreadModal />
    </>
  );
};
