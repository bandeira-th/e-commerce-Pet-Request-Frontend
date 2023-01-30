import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";



export default function SignUp(){

    return(

       <Container>
         <Logo><p>PetRequest</p></Logo>
            
            <ContentSingUp>

         <FormsSignUp>
            <input placeholder='Nome' required/>
            <input type='email' placeholder='E-mail' required/>
            <input type='password' placeholder='Senha' required/>
            <input type='password' placeholder='Confirme sua senha' required/>
            <button type='submit'><p>Fazer Cadastro</p></button>
         </FormsSignUp>


         <Link to='/' style={{ textDecoration:'none' }}>
           <LinkSignIn>
           <p>Já possui uma conta? clique aqui!</p>
           </LinkSignIn>

         </Link>

         </ContentSingUp>

       </Container>
    )
}


const Container = styled.div`
width: 100%;
height: 667px;
background-color: #B8EAFF;
margin: 0 auto;
display: flex;
flex-direction: column;
@media (min-width: 375px){
  width: 375px;
}
`

const Logo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 147px;
height: 50px;
margin: 0 auto ;
margin-top: 100px;
p{
    font-family: 'Raleway', sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 50.37px;
    color: #A328D6;
}
`

const ContentSingUp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
`

const FormsSignUp = styled.form`
display: flex;
flex-direction: column;
align-items: center;
input{
    box-shadow: 0 1px 4px 0 #00000040;
    width: 299px;
    height: 52px;
    border-radius: 30px;
    margin-bottom: 16px;
    padding-left: 10px;
    border: 1px solid white;
    &::placeholder{
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color:#000000;
    }
}
button{
width: 298px;
height: 52px;
background-color: #A328D6;
border-radius: 30px;
box-shadow: 0 1px 4px 0 #00000040;
margin-top: 10px;
border: 1px solid #A328D6;
&:hover{
cursor: pointer;
}
}
p{
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.5px;
  color: #FFFFFF; 
}
`

const LinkSignIn = styled.div`
margin-top: 15px;
p{
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: blueviolet;
}
`