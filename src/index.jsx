
import Message from './components/Message'

class HelloMessage extends React.Component {
    constructor() {
        super();

        this.state = {
            messages: []
        };
    }

    addMessage = () => {
        let mess = prompt('Введите сообщение' );
        const { messages } = this.state;
        this.setState({messages: [...messages, mess]})
    };

    render() {
        const { messages } = this.state
        return (
            <div>
                <button onClick={this.addMessage}>Добавить</button>
                Список
                <ul>
                    {messages.map((message, index) => (
                        <Message key={index} message={message} />
                    ))}
                </ul>
                <span>Всего - {messages.length}</span>
            </div>
        );
    }
}

ReactDOM.render(
<HelloMessage name="45" />,
    document.getElementById('content')
);