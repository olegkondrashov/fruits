import { ReactComponent as LogoImg } from '../../assets/logo.svg'
import styled from 'styled-components'

export const Logo = styled(LogoImg)`
    width: 50px;
    height: 50px;
    text{
        font-size: 24px
    }
`

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
    gap: 10px;
    height: 100px;
    align-items: center;
    a{
        text-decoration: none;
        color: #000;
        text-transform: uppercase;
    }
    a:hover{
        color: #000;
    }
`