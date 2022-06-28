import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greetings from './Greetings';

describe("Greetings section",()=>{
    test('renders Hello world as text', () => {
        //Arrange
        render(<Greetings />);
        //Act
        //......nothing

        //Assert
        const helloWorldElement = screen.getByText('Hello world');
        expect(helloWorldElement).toBeInTheDocument();
      });

      test("when the button is clicked",()=>{
        render(<Greetings/>);
        //act
        const buttonElement =screen.getByRole('button');
        userEvent.click(buttonElement);
        const outputElement = screen.getByText('changs when button clicks',{exact:false});
        expect(outputElement).toBeInTheDocument();
      });
      test("when the button is clicked not display the para",()=>{
        render(<Greetings/>);
        //act
        const buttonElement =screen.getByRole('button');
        userEvent.click(buttonElement);
        const outputElement = screen.queryByText('Greetings from vinod',{exact:false});
        expect(outputElement).toBeNull();
      });
      

})


