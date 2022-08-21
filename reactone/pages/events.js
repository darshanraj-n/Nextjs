import { useState } from "react"
import {useRouter} from 'next/router'
function EventList({ eventList }) {

    const [events, setEvents] = useState(eventList)
    const router = useRouter()

    const sportsEvent = async () => {             // to push category to url...to change path in url
        const response = await fetch(`http://localhost:4000/events?category=sports`)
        const data = await response.json()
        setEvents(data)
        router.push('/events?category=sports', undefined,{shallow:true})  //undefined- as it is not necessary
    }


    return (
        <>
            <button onClick={sportsEvent}>Sports events</button>
            <h1>List of events</h1>
            {events.map((event) => {
                return (
                    <div key={event.id}>
                        <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                        <p>{event.description}</p>
                        <hr></hr>
                    </div>
                )
            })}
        </>
    )
}
export default EventList


export async function getServerSideProps(context) {
    const { query } = context
    const { category } = query
    const queryString= category ? 'category=sports' : ''
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()

    return {
        props: {
            eventList: data
        }
    }
}