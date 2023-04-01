import React, { useState } from 'react'
import { Button, Input } from 'antd';
import Search from 'antd/es/input/Search';
import { SearchOutlined } from '@ant-design/icons'
import { TableComponent } from './TableComponent';

export const Screen1 = ({ isPage, columns, data }) => {

    const [search, setSearch] = useState("")
    return (
        <div>
            <div className='search'>
                <Search
                    placeholder="input search text"
                    style={{ width: 200 }}
                    onSearch={(value) => {
                        setSearch(value)
                    }}
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }} />
            </div>
            <TableComponent
                isPage={true}
                columns={[
                    {
                        title: 'Name',
                        dataIndex: 'name',
                        filteredValue: [search],
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
                            return record.name.toLowerCase().includes(value.toLowerCase());
                        },
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
                    },
                    {
                        title: 'Role',
                        dataIndex: 'role',
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
                            return record.role
                                .toLowerCase()
                                .includes(value.toLowerCase())
                        },
                    },
                    {
                        title: 'Experience(Year)',
                        dataIndex: 'experience',
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
                            return record.experience
                                .toLowerCase()
                                .includes(value.toLowerCase())
                        },
                    }
                ]}
                data={[
                    {
                        key: '1',
                        name: 'John Brown',
                        age: 32,
                        address: 'New York No. 1 Lake Park',
                        email: 'john@gmail.com',
                        role: 'Frontend Developer',
                        experience: 2,
                    },
                    {
                        key: '2',
                        name: 'Jim Green',
                        age: 42,
                        address: 'London No. 1 Lake Park',
                        email: 'jim@gmail.com',
                        role: 'Backend Developer',
                        experience: 1,
                    },
                    {
                        key: '3',
                        name: 'Joe Black',
                        age: 32,
                        address: 'Sydney No. 1 Lake Park',
                        email: 'joe@gmail.com',
                        role: 'FullStack Developer',
                        experience: 1,
                    },
                    {
                        key: '4',
                        name: 'John Wick',
                        age: 38,
                        address: 'New York No. 1 Lake Park',
                        email: 'wick@gmail.com',
                        role: 'FullStack Developer',
                        experience: 2,
                    },
                    {
                        key: '5',
                        name: 'Jamie Black',
                        age: 44,
                        address: 'Sydney No. 1 Lake Park',
                        email: 'jamie@gmail.com',
                        role: 'Frontend Developer',
                        experience: 3,
                    },
                    {
                        key: '6',
                        name: 'Jame Black',
                        age: 44,
                        address: 'London No. 1 Lake Park',
                        email: 'jame@gmail.com',
                        role: 'FullStack Developer',
                        experience: 1,
                    },
                ]}
            />
        </div>
    )
}