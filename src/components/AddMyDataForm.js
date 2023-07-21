import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddMyDataForm({onHandleSubmit, onUpdate}) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if(onUpdate){
            setValues(onUpdate);
            handleClickOpen();
        }
    },[onUpdate])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let myDataSchema = Yup.object({
        name: Yup.string().required("Please Enter Name"),
        age: Yup.number().required("Please Enter Number")
    })

    const formik = useFormik({
        validationSchema: myDataSchema,
        initialValues: {
            name: '',
            age: ''
        },
        onSubmit: (values, action) => {
            onHandleSubmit(values)
            action.resetForm();
            handleClose()
            console.log(values);
        }
    });


    const {handleSubmit, handleChange, handleBlur, setValues, values, errors, touched } = formik;

    return (
        <div>
            <Button className='text-center my-3' variant="outlined" onClick={handleClickOpen}>
                Add My Data
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>ADD DATA</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            type="text"
                            name='name'
                            margin="dense"
                            id="name"
                            label="Enter Name"
                            fullWidth
                            variant="standard"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span>{errors.name && touched.name ? errors.name : ''}</span>
                        <TextField
                            type="text"
                            name='age'
                            margin="dense"
                            id="age"
                            label="Enter Age"
                            fullWidth
                            variant="standard"
                            value={values.age}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span>{errors.age && touched.age ? errors.age : ''}</span>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type='submit'>Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}