


interface habitProps {
    completed: number
}
export default function Habit (props: habitProps) {

    return (
        <div className='rounded-lg bg-purple-600 w-6 h-6'>
            <p>{props.completed}</p>
        </div>
    )
}