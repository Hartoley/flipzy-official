"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Toast } from "./types";

interface Props {
  toasts: Toast[];
  removeToast: (id: number) => void;
}

const variants: Record<string, string> = {
  success: "border-l-green-500",
  error: "border-l-red-500",
  info: "border-l-blue-500",
  warning: "border-l-yellow-500",
};

export default function ToastContainer({ toasts, removeToast }: Props) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-[90vw] md:max-w-sm">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3 }}
            className={`bg-[#0F1115] text-white border-l-4 ${
              variants[toast.type || "info"]
            } rounded-xl shadow-xl p-4 flex gap-3`}
          >
            <div className="flex-1">
              <p className="text-sm font-semibold">{toast.title}</p>
              {toast.message && (
                <p className="text-xs text-gray-300 mt-1">{toast.message}</p>
              )}
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-gray-400 hover:text-white"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
