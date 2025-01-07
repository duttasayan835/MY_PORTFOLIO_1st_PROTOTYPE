"use client";

import { create } from "zustand";
import { ToastProps, ToastActionElement } from "@/components/ui/toast/toast";

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

interface ToastStore {
  toasts: ToasterToast[];
  addToast: (toast: Omit<ToasterToast, "id">) => void;
  dismissToast: (toastId?: string) => void;
  removeToast: (toastId?: string) => void;
}

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) => {
    const id = genId();
    set((state) => ({
      toasts: [
        { ...toast, id, open: true, onOpenChange: (open: boolean) => {
          if (!open) state.dismissToast(id);
        }},
        ...state.toasts,
      ].slice(0, 1),
    }));
  },
  dismissToast: (toastId) => {
    set((state) => ({
      toasts: state.toasts.map((t) =>
        t.id === toastId || toastId === undefined
          ? { ...t, open: false }
          : t
      ),
    }));
  },
  removeToast: (toastId) => {
    set((state) => ({
      toasts: toastId === undefined 
        ? [] 
        : state.toasts.filter((t) => t.id !== toastId),
    }));
  },
}));