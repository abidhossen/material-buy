import React from 'react';
import '../App.css';
import {FaAngleDown} from 'react-icons/fa';
import { Dropdown } from 'semantic-ui-react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';

function LinkItems(){

    
        
    return(
        <div className="linkGrid" >
            
            <Dropdown text='All'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Building Materials' />
                    <Dropdown.Item text='Modular Kitchen' >
                        <Dropdown text='Modular Kitchen'>
                            <Dropdown.Menu>
                                <Dropdown.Header>Wooden Plank</Dropdown.Header>
                                <Dropdown.Item>Wooden Plank</Dropdown.Item>
                                <Dropdown.Item>Wooden Planknts</Dropdown.Item>
                                <Dropdown.Item>Wooden Plank</Dropdown.Item>
                                <Dropdown.Item>Wooden Plank</Dropdown.Item>
                                <Dropdown.Item>Wooden Plank</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item text='Furniture' />
                    <Dropdown.Item text='Wooden Plank' />
                    <Dropdown.Item text='Hardware' />
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown text='Building Materials'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Building Materials' />
                    <Dropdown.Item text='Modular Kitchen' >
                        <Dropdown text='Modular Kitchen'>
                            <Dropdown.Menu>
                                <Dropdown.Header>Wooden Plank</Dropdown.Header>
                                <Dropdown.Item>Wooden Plank</Dropdown.Item>
                                <Dropdown.Item>Wooden Planknts</Dropdown.Item>
                                <Dropdown.Item>Wooden Plank</Dropdown.Item>
                                <Dropdown.Item>Wooden Plank</Dropdown.Item>
                                <Dropdown.Item>Wooden Plank</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item text='Furniture' />
                    <Dropdown.Item text='Wooden Plank' />
                    <Dropdown.Item text='Hardware' />
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown text='Roofing Products'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Furniture' />
                    <Dropdown.Item text='Wooden Plank' />
                    <Dropdown.Item text='Hardware' />
                </Dropdown.Menu>
            </Dropdown>
            <div className="dropdwn">
                <a href="#" className="drphd">Hardwares</a>
            </div>
            <div className="dropdwn">
                <a href="#" className="drphd">Modular Kitchen</a>

            </div>
            <div className="dropdwn">
                <a href="#" className="drphd">Furniture</a>
            </div>
            <div className="dropdwn">
                <a href="#" className="drphd" >Wooden Plank</a>
            </div>
        </div>
    )
}

export default LinkItems;
