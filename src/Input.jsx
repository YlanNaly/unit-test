export function Input(props) {
    const { onChange, onKeyUp } = props;

    return (
        <input type="text" id="add-todo" onChange={onChange} onKeyUp={onKeyUp}/>
    );
}