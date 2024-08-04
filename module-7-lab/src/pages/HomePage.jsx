import { Greeting } from "../components/Greeting/Greeting";
import Emoji from "../components/Emoji/EmojiChanger";

export default function Homepage() {
    return (
        <div className="homepage">
            <Greeting name="Avril">
                <p>Welcome to my first ReactRouted Website!</p>
            </Greeting>
            <Emoji />
        </div>
    )
}