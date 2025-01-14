import styled from 'styled-components';
import {useForm} from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Wapper = styled.section`
    width: ${props => props.theme.mainWidth};
    max-width:${props => props.theme.mainMaxWidth};
`

const Search = styled.section`
    width:100%;
    margin-bottom: 40px;
`

const Form = styled.form`
    width:100%;
    position: relative;
`

const Input = styled.input`
    width:100%;
    height: 45px;
    font-size: 22px;
    padding-left: 42px;
    border : none;
    border-radius: 15px;
    background-color: #F5F5F5;
`

const InputIcon = styled(FontAwesomeIcon)`
    position: absolute;
    bottom : 9px;
    left: 8px;
    font-size: 27px;
`



function BoardSearch() {
    const {register, handleSubmit} = useForm();
    const onValid = (data) => {
        console.log(data);
    }

    return (
        <Wapper>
            <Search>
                <Form onSubmit={handleSubmit(onValid)}>
                    <InputIcon icon={faMagnifyingGlass}/>
                    <Input {...register("search", {required : true})}
                            placeholder = "제목, 내용, 해시태그 검색" >
                            </Input>
                </Form>
            </Search>
        </Wapper>
    );
}

export default BoardSearch;