import React, { useState } from 'react'
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { TableComponent } from './TableComponent';


export const Screen2 = () => {

    const handleClick = () => {
        window.location.reload()
    }

    return (
        <div>
            <div
                style={{
                    margin: 16,
                    textAlign: 'center'
                }}
            >
                <Button onClick={handleClick} >
                    Refresh
                </Button>
            </div>
            <TableComponent
                isPage={false}
                columns={[
                    {
                        title: 'Name',
                        dataIndex: 'name',
                        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
                            return (
                                <>
                                    <Input
                                        autoFocus placeholder='Type text here'
                                        value={selectedKeys[0]}
                                        onChange={(e) => {
                                            setSelectedKeys(e.target.value ? [e.target.value] : [])
                                            confirm({ closeDropdown: false });
                                        }}
                                        onPressEnter={() => {
                                            confirm()
                                        }}
                                        onBlur={() => {
                                            confirm()
                                        }}
                                    />
                                    <Button
                                        onClick={() => {
                                            confirm();
                                        }}
                                        type='primary'>Search</Button>
                                    <Button
                                        onClick={() => {
                                            clearFilters();
                                        }}
                                        type='danger'>Reset</Button>
                                </>
                            )
                        },
                        filterIcon: () => {
                            return <SearchOutlined />
                        },
                        onFilter: (value, record) => {
                            return record.name
                                .toLowerCase()
                                .includes(value.toLowerCase())
                        },
                        sorter: (a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1,
                    },
                    {
                        title: 'Age',
                        dataIndex: 'age',
                        filterDropdown: ({
                            setSelectedKeys,
                            selectedKeys,
                            confirm,
                            clearFilters,
                        }) => {
                            return (
                                <>
                                    <Input
                                        autoFocus
                                        placeholder="Type text here"
                                        value={selectedKeys[0]}
                                        onChange={(e) => {
                                            setSelectedKeys(e.target.value ? [e.target.value] : []);
                                            confirm({ closeDropdown: false });
                                        }}
                                        onPressEnter={() => {
                                            confirm();
                                        }}
                                        onBlur={() => {
                                            confirm();
                                        }}
                                    ></Input>
                                    <Button
                                        onClick={() => {
                                            confirm();
                                        }}
                                        type="primary"
                                    >
                                        Search
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            clearFilters();
                                        }}
                                        type="danger"
                                    >
                                        Reset
                                    </Button>
                                </>
                            );
                        },
                        filterIcon: () => {
                            return <SearchOutlined />;
                        },
                        onFilter: (value, record) => {
                            return record.age === value;
                        },
                        sorter: (record1, recod2) => {
                            return record1.age > recod2.age
                        }
                    },
                    {
                        title: 'Address',
                        dataIndex: 'address',
                        filterDropdown: ({
                            setSelectedKeys,
                            selectedKeys,
                            confirm,
                            clearFilters,
                        }) => {
                            return (
                                <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
                                    <Input
                                        autoFocus
                                        placeholder="Type text here"
                                        value={selectedKeys[0]}
                                        onChange={(e) => {
                                            setSelectedKeys(e.target.value ? [e.target.value] : []);
                                            confirm({ closeDropdown: false });
                                        }}
                                        onPressEnter={() => {
                                            confirm();
                                        }}
                                        onBlur={() => {
                                            confirm();
                                        }}
                                    ></Input>
                                    <Button
                                        onClick={() => {
                                            confirm();
                                        }}
                                        type="primary"
                                    >
                                        Search
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            clearFilters();
                                        }}
                                        type="danger"
                                    >
                                        Reset
                                    </Button>
                                </div>
                            );
                        },
                        filterIcon: () => {
                            return <SearchOutlined />;
                        },
                        onFilter: (value, record) => {
                            return record.address.toLowerCase().includes(value.toLowerCase());
                        },
                        sorter: (a, b) => a.address > b.address ? 1 : a.address === b.address ? 0 : -1,
                    },
                    {
                        title: 'Email',
                        dataIndex: 'email',
                        filterDropdown: ({
                            setSelectedKeys,
                            selectedKeys,
                            confirm,
                            clearFilters,
                        }) => {
                            return (
                                <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
                                    <Input
                                        autoFocus
                                        placeholder="Type text here"
                                        value={selectedKeys[0]}
                                        onChange={(e) => {
                                            setSelectedKeys(e.target.value ? [e.target.value] : []);
                                            confirm({ closeDropdown: false });
                                        }}
                                        onPressEnter={() => {
                                            confirm();
                                        }}
                                        onBlur={() => {
                                            confirm();
                                        }}
                                    ></Input>
                                    <Button
                                        onClick={() => {
                                            confirm();
                                        }}
                                        type="primary"
                                    >
                                        Search
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            clearFilters();
                                        }}
                                        type="danger"
                                    >
                                        Reset
                                    </Button>
                                </div>
                            );
                        },
                        filterIcon: () => {
                            return <SearchOutlined />;
                        },
                        onFilter: (value, record) => {
                            return record.email.toLowerCase().includes(value.toLowerCase());
                        },
                        sorter: (a, b) => a.email > b.email ? 1 : a.email === b.email ? 0 : -1,
                    },
                ]}
                data={[
                    {
                        key: '1',
                        name: 'John Brown',
                        age: 32,
                        address: 'New York No. 1 Lake Park',
                        email: 'john@gmail.com',
                    },
                    {
                        key: '2',
                        name: 'Jim Green',
                        age: 42,
                        address: 'London No. 1 Lake Park',
                        email: 'jim@gmail.com',
                    },
                    {
                        key: '3',
                        name: 'Joe Black',
                        age: 32,
                        address: 'Sydney No. 1 Lake Park',
                        email: 'joe@gmail.com',
                    },
                    {
                        key: '4',
                        name: 'John Wick',
                        age: 38,
                        address: 'New York No. 1 Lake Park',
                        email: 'wick@gmail.com',
                    },
                    {
                        key: '5',
                        name: 'Jamie Black',
                        age: 44,
                        address: 'Sydney No. 1 Lake Park',
                        email: 'jamie@gmail.com',
                    },
                    {
                        key: '6',
                        name: 'Jame Black',
                        age: 44,
                        address: 'London No. 1 Lake Park',
                        email: 'jame@gmail.com',
                    },
                ]}
            />
        </div>
    )
}