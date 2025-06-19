"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, X } from "lucide-react"

interface SuccessDialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  isSuccess: boolean
}

export function SuccessDialog({ isOpen, onClose, title, message, isSuccess }: SuccessDialogProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-cream">
          <div className="flex items-center space-x-3">
            {isSuccess ? <CheckCircle className="h-6 w-6 text-green-600" /> : <X className="h-6 w-6 text-red-600" />}
            <h3 className="text-lg font-bold text-primary">{title}</h3>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-6">{message}</p>

          {isSuccess && (
            <div className="bg-cream p-4 rounded-lg mb-6">
              <p className="text-sm text-primary">
                <strong>What happens next?</strong>
              </p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• We'll review your request within 24 hours</li>
                <li>• Our team will contact you to discuss details</li>
                <li>• You'll receive a customized quote</li>
              </ul>
            </div>
          )}

          <div className="flex gap-3">
            <Button onClick={onClose} className="flex-1 bg-primary hover:bg-primary/90 text-white">
              Close
            </Button>
            {!isSuccess && (
              <Button variant="outline" className="flex-1" onClick={onClose}>
                Try Again
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
