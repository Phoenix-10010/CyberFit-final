import { toast } from "react-toastify";

// basic notification service
export const notify = {
  succes: (message) => toast(message, { type: 'success' }),
  error: (message) => toast(message, { type: 'error' })
}