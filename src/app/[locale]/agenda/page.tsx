import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
}

export default function AgendaPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Agenda</h1>
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hfWTdXtsh7kMVTp3b5V7O9zb0FKzv-1UMBLKyYR5Vr1oUbWBMBhcT89FH8Ec9FaUJo36H5uXm"
        style={{ border: 0, width: '100%', height: '600px' }}
        title="Agenda"
      />
    </main>
  )
}
