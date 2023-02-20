import {fireEvent ,screen, render} from "@testing-library/react";

import { ListItem } from "../ListItem";

const mockOnCheck = jest.fn();

describe('ListItem', () => {
    it('display value correctly', () => {
        const { getByText } = render(
            <ListItem
                id='list-item-test'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );

        const value = getByText('Lorem ipsum dolor sit amet consectetur');
        expect(value).toBeInTheDocument();
    });
    
    it('checkbox is shown', () => {
        const { getByTestId } = render(
            <ListItem
                id='list-item-1'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );

        const value = getByTestId('test-list-item-1');
        expect(value).toBeInTheDocument();
    });

    it('checkbox is hidden', () => {
        const { getByTestId, debug } = render(
            <ListItem
                id='list-item-1'
                checkable={false}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        const node = getByTestId('test-list-item-1-container');
        expect(node.children).toHaveLength(1);
    });
    
    it('callback is called', () => {
        const item='Lorem ipsum dolor sit amet consectetur'
        const { getByTestId } = render(
            <ListItem
                id='1'
                checkable={true}
                onCheck={mockOnCheck}
                item={item}
            />
        );
        const input = getByTestId("test-1");
        fireEvent.click(input);
        expect(mockOnCheck).toHaveBeenCalledTimes(1);
    });

    it('callback is not called when not checkable', () => {
        const mockCallback = jest.fn();
        render(<ListItem checkable={false} onCheck={mockCallback} id="test-1" item="test item" />);
        const checkbox = screen.queryByTestId('test-test-1');
        if (checkbox) {
            fireEvent.click(checkbox);
        }
        expect(mockCallback).not.toHaveBeenCalled();
    });

    it('matches saved snapshot', () => {
        const tree = render(
            <ListItem
                id='list-item-test'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        expect(tree).toMatchSnapshot();
    });
});