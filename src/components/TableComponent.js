import React from 'react'
import { Table } from 'antd';

export const TableComponent = ({ isPage, columns, data }) => {

    return (
        <div className='table'>

            <Table
                columns={columns}
                dataSource={data}
                pagination={isPage}
            />

        </div>
    )
}





