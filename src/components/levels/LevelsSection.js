import { Level } from "./Level";

export function LevelsSection()
{
    const registerComponents = [];

    for (let i = 1; i < 3; i++) {
        registerComponents.push(<Level key={i} levelCounter={i}/>);
    }
    return(
        <div>{registerComponents}</div>
    )
}