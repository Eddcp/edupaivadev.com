export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag &&
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url
    })
}

type EventProps = {
  action: string
  category: string
  label: string
  value: string
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventProps) => {
  window.gtag &&
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    })
}
