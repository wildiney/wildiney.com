"use client"
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import * as gtag from '../../libs/gtag'

const GoogleAnalytics = () => {
  const pathname = usePathname()
  useEffect(() => {
    gtag.pageview(pathname)
  }, [pathname])
  return null
}

export default GoogleAnalytics
