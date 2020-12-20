import React, { useRef } from "react";
import './App.scss';
import InputForm from './Components/InputForm';
import EditForm from './Components/EditForm';
import useDoubleClick from 'use-double-click';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
    font: 'Roboto',
    primary: 'rgb(1, 143, 165)',
    background: 'rgb(49, 39, 73)',
    marginTop: '0px',
    transform: 'capitalize',
    width: '35%',
    textAlign: 'center',
};

const H1 = styled.h1`
  margin-top: ${(props) => props.theme.marginTop};
  text-transform: ${(props) => props.theme.transform};
`;

const Div = styled.div`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.background};
  width: ${(props) => props.theme.width};
  text-align: ${(props) => props.theme.textAlign};
`;

const List = ({ onDouble, obj, removeListValue }) => {
    // console.log(editValue, 'val edit')
    const buttonRef = useRef()

    useDoubleClick({
        onDoubleClick: () => {
            onDouble(obj)
        }, ref: buttonRef
    })

    return <ul className="list-item">
        <li ref={buttonRef} className="fas fa-check"> {obj.text} </li>
        <button className="fas fa-trash trash" onClick={removeListValue}></button>
    </ul>
}

class App extends React.Component {
    state = {
        listValues: [{ text: "Task 1", id: '1' }, { text: "Task 2", id: '2' }, { text: "Task 3", id: '3' }],
        newValue: "",
        editForm: false,
        idEdit: {},
        editIndex: {}

    };

    setListValues = (listValues) => this.setState({ listValues });

    addListValue = (text) => {
        const newListValues = this.state.listValues.concat({ text });
        this.setListValues(newListValues);
    };

    submitHandler = (event) => {
        event.preventDefault();
        if (!this.state.newValue) return;
        this.addListValue(this.state.newValue);
        this.setState({
            newValue: "",
        });
    };

    deleteHandler = (event) => {
        // console.log(event, "delete");
        const confirm = window.confirm(`Are you sure, you want to delete the item?`)
        if (confirm) {
            const deleteItem = this.state.listValues.splice(event, 1)
            this.setState({ deleteItem })
        }
    }

    render() {
        const disable = this.state.newValue.length <= 0 ? true : false
        return (
            <ThemeProvider theme={theme}>
                <Div className="App" >
                    <H1>todo list</H1>
                    {this.state.listValues.map((listValue, index) => (
                        <List
                            key={index}
                            onDouble={(data) => {
                                this.setState({
                                    editIndex: data,
                                    editForm: !this.state.editForm,
                                    idEdit: index
                                })
                            }}
                            obj={listValue}
                            removeListValue={() => this.deleteHandler(index)}
                        />
                    ))}
                    {this.state.editForm ?
                        <EditForm
                            onSubmit={() => {
                                console.log(this.state.idEdit, 'iD');
                                const newData = this.state.listValues.map((val, index) => {
                                    if (index === this.state.idEdit) {
                                        return this.state.editIndex
                                    }
                                    return val
                                })
                                this.setState({
                                    listValues: newData,
                                    newValue: '',
                                    editForm: false,
                                })
                            }}
                            changeValue={this.state.editIndex.text}

                            onValueChanged={(event) => {
                                this.setState({
                                    editIndex: {
                                        ...this.state.editIndex,
                                        text: event.target.value
                                    }
                                })
                            }}
                        /> :
                        <InputForm
                            disabled={disable}
                            submit={this.submitHandler}
                            onValueChange={(value) =>
                                this.setState({
                                    newValue: value,
                                })
                            }
                            value={this.state.newValue}
                        />}
                </Div>
            </ThemeProvider>
        );
    }
}

export default App;