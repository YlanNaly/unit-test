export function ListItem(props) {
    const {checkable, onCheck, id, item} = props;

    return <li className="list-item" data-testid={`test-${id}-container`}>
        {checkable && (
            <input  type="checkbox" id={id} data-testid={`test-${id}`}
                   onChange={checkable ? 
                    (event, item, i) => onCheck(event, item, i) : 
                    () => {}
                }/>
        )}
        <label data-testid="label-item" htmlFor={id}>{item}</label>
    </li>;
}