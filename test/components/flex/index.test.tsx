import { render } from '@testing-library/react';
import { Flex } from '@/components/flex';
import '@testing-library/jest-dom';

describe('Components', () => {
    describe('Flex', () => {
        it('renders flex components', () => {
            render(<Flex>Test</Flex>);
            expect(true).toEqual(true);
        });
    });
});
