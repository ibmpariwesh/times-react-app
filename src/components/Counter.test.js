import { render, screen } from '@testing-library/react';
import Counter from "./Counter";

test('scenario 1', ()=>{
    render(<Counter  count='5'/>);
  const element = screen.getByText("5");
    console.log('testing....');
    expect(element.innerHTML).toBe("5");
    expect(element.tagName).toEqual('SPAN');
})

xtest('testing using snapshot', ()=>{
    const element  = render(<Counter  count='5'/>).asFragment;
    expect(element()).toMatchSnapshot();
})

xtest('testing using snapshot with count=10', ()=>{
    const element  = render(<Counter  count='10'/>).asFragment;
    expect(element()).toMatchSnapshot();
})