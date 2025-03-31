// Make sure the Window interface is properly extended
declare global {
  interface Window {
    Cal?: CalAPI
  }
}

// Type definitions for Cal.com embed
interface CalAPI {
  (method: "inline", options: CalInlineOptions): CalInstance
  (method: "ui", options: CalUIOptions): CalInstance
  openModal: (options: CalOpenModalOptions) => void
}

interface CalInstance {
  on: (event: string, callback: (data?: any) => void) => void
  destroy: () => void
}

interface CalInlineOptions {
  elementOrSelector: string | HTMLElement
  calLink: string
  calendarId?: string
  layout?: "month_view" | "week_view" | "column_view"
  hideEventTypeDetails?: boolean
  hideBranding?: boolean
  theme?: "light" | "dark" | "auto"
  [key: string]: any
}

interface CalUIOptions {
  styles?: {
    branding?: {
      brandColor?: string
    }
  }
  hideEventTypeDetails?: boolean
  hideBranding?: boolean
  [key: string]: any
}

interface CalOpenModalOptions {
  calLink: string
  calendarId?: string
  onModalClose?: () => void
  [key: string]: any
}

declare global {
  interface Window {
    Cal?: CalAPI
  }
}

export {}

