import { render } from "@testing-library/react"
import Messages from "./Messages"

test('first test for message component', ()=>{
    const component = render(<Messages message="message1"></Messages >).asFragment;
    expect(component()).toMatchSnapshot();
})

test('No message prop', ()=>{
    const component = render(<Messages></Messages >).asFragment;
    expect(component()).toMatchSnapshot();
})