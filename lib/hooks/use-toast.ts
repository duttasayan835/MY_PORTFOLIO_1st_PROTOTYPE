"use client";

import { useToastStore } from "./use-toast-store";

export function useToast() {
  const { toasts, addToast, dismissToast } = useToastStore();

  return {
    toasts,
    toast: (props: Parameters<typeof addToast>[0]) => {
      addToast(props);
    },
    dismiss: dismissToast,
  };
}