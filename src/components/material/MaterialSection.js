import Material from "./Material";

export function MaterialSection(){
    const materialComponents = [];

    for (let i=1; i<5; i++){
        materialComponents.push(<Material key={i} courseCounter={i}/>);
    }

    return(
        <div className="materialComponents">{materialComponents}</div>
    )
}