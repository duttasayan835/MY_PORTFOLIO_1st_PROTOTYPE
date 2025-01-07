import * as React from "react"

interface ToastProps {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  duration?: number
}

type ToastActionElement = React.ReactElement<any, string | React.JSXElementConstructor<any>>

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: string
  description?: string
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([])

  const addToast = React.useCallback(
    function (props: Omit<ToasterToast, "id">) {
      setToasts((state) => [...state, { ...props, id: genId() }].slice(-TOAST_LIMIT))
    },
    []
  )

  const dismissToast = React.useCallback(function (id: string) {
    setToasts((state) => state.filter((toast) => toast.id !== id))
  }, [])

  const updateToast = React.useCallback(
    function (id: string, props: Partial<ToasterToast>) {
      setToasts((state) => {
        const index = state.findIndex((t) => t.id === id)
        if (index === -1) return state
        const newState = [...state]
        newState[index] = { ...newState[index], ...props }
        return newState
      })
    },
    []
  )

  return {
    toasts,
    addToast,
    updateToast,
    dismissToast,
  }
}

export type { ToastProps, ToastActionElement }