export function Greeting({name="world", children}) {

    return (
        <div>
            <h2>Hello {name}</h2>
            <div>{children}</div>
        </div>
        
    )
}