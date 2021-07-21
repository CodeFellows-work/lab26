import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Form from '../components/form/index.js';



describe('Testing Form component submissions', () => {
    it('Testing if form component will render in output area upon submission', () => {
        render(<Form />)
    })
});