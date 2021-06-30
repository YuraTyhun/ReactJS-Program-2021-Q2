import React from 'react';
import { useSelector } from 'react-redux';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const genres = ['Action', 'Comedy', 'Crime', 'Drama', 'Music'];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const MultipleSelect = ({ fieldName, formik, label }) => {

    return (
        <div className="form-input-container">
            <label htmlFor={fieldName} className="form-input-label">{label}</label>
            <Autocomplete
                multiple
                name={fieldName}
                id={fieldName}
                options={genres}
                className="form-input-field"
                disableCloseOnSelect
                getOptionLabel={(name) => name}
                getOptionSelected={(option, value) => option === value}
                renderOption={(genre, { selected }) => (
                    <React.Fragment>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {genre}
                    </React.Fragment>
                )}
                onChange={(e, value) => {
                    formik.setFieldValue('genres', value);
                }}
                renderInput={(params) => (
                    <TextField {...params} variant="outlined" name={fieldName} placeholder="Select genre" />
                )}
            />
        </div>
    )
}

export default MultipleSelect;