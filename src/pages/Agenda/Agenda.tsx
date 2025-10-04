import Header from '@/components/Header';

function Agenda () {
  const offset = 100
  return (
    <>
      <Header />
      <main className='flex w-full h-screen flex-col bg-white relative  '>

        <iframe
          title="Google Agenda"
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0rjo_kqSkHRFYJC68085JI-8bxkpBxdJ0ZhWoC_2yulFw_i_KbRQF0Qeez9d2Rot6mHEm57g39?gv=true&showTitle=0"
          width="100%"
          height="100%"
          className="absolute bg-white"
          style={{
            top: `-${offset}px`,
            height: `calc(100% + ${offset}px)`
          }}
          allowFullScreen
        ></iframe>
      </main>
    </>
  )
}

export default Agenda