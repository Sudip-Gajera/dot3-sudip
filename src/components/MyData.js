import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMyData, deleteMyData, getMyData, updateMyData } from '../redux/action/myData.action';
import { DataGrid } from '@mui/x-data-grid';
import AddMyDataForm from './AddMyDataForm';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function MyData(props) {
    const [update, setUpdate] = useState(null);

    const dispatch = useDispatch();
    const myData = useSelector(state => state.myData)

    useEffect(() => {
        dispatch(getMyData());
    }, [])

    const handleSubmit = (data) => {
        if(update){
            dispatch(updateMyData(data));
        }else{
            dispatch(addMyData(data))
        }
        setUpdate(null);    
    }

    const handleEdit = (data) => {
        setUpdate(data);
    }

    const handleRemove = (id) => {
        console.log(id);
        dispatch(deleteMyData(id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'age', headerName: 'Age', width: 130 },
        {
            field: 'Action',
            headerName: 'Action',
            renderCell: (params) => (
                <>
                    <IconButton aria-label="update" color="success" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="error" onClick={() => handleRemove(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        },
    ];

    return (
        <div>
            <div className='text-center'>
                <h1>My Data</h1>
                <AddMyDataForm onHandleSubmit={handleSubmit} onUpdate={update}/>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={myData.myData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default MyData;