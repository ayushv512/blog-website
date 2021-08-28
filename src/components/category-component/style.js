import styled from 'styled-components';
import { deviceWidths } from '../../config/config';

export const CategoryComponentWrapper = styled.div`
    
    .category-filter-dropdown {
        padding: 20px;
        font-size: 16px;
        border: none;
        box-shadow: 0 2px 2px rgb(0 0 0 / 0.1);
    }
    .category-filter-dropdown: focus {
        outline: none;
    }

    @media (max-width:${deviceWidths.phoneWidth}) {
       
    }

`