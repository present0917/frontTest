"use client"

import { useState, useEffect } from "react"
import { getAllEvents, getEventById, type EventResponse } from "@/lib/api/events"
import { fallbackEvents, getFallbackEventById } from "@/lib/data/fallback-events"

export function useEvents() {
  const [events, setEvents] = useState<EventResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [usingFallback, setUsingFallback] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        setError(null)
        const apiEvents = await getAllEvents()
        setEvents(apiEvents)
        setUsingFallback(false)
      } catch (err) {
        console.warn("API 호출 실패, fallback 데이터 사용:", err)
        setEvents(fallbackEvents)
        setUsingFallback(true)
        setError("API 연결에 실패했습니다. 샘플 데이터를 표시합니다.")
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return { events, loading, error, usingFallback }
}

export function useEvent(id: number) {
  const [event, setEvent] = useState<EventResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [usingFallback, setUsingFallback] = useState(false)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true)
        setError(null)
        const apiEvent = await getEventById(id)
        setEvent(apiEvent)
        setUsingFallback(false)
      } catch (err) {
        console.warn(`API 호출 실패 (ID: ${id}), fallback 데이터 사용:`, err)
        const fallbackEvent = getFallbackEventById(id)
        setEvent(fallbackEvent || null)
        setUsingFallback(true)
        setError("API 연결에 실패했습니다. 샘플 데이터를 표시합니다.")
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchEvent()
    }
  }, [id])

  return { event, loading, error, usingFallback }
}
