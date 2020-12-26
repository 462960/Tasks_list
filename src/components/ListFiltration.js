import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Paper } from '@material-ui/core';

const ListFiltration = ({ filterValue, setFilterValue }) => {
    const handleChange = (e) => {
        setFilterValue(e.target.value);
    };

    return (
        <div className="items-wrapper">
            <Paper>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={filterValue}
                        onChange={handleChange}
                    >
                        <ul className="radio-controls">
                            <li>
                                <FormControlLabel
                                    value="all"
                                    control={<Radio color="primary" />}
                                    label="All"
                                />
                            </li>
                            <li>
                                <FormControlLabel
                                    value="checked"
                                    control={<Radio color="primary" />}
                                    label="Checked"
                                />
                            </li>
                            <li>
                                <FormControlLabel
                                    value="todo"
                                    control={<Radio color="primary" />}
                                    label="To do"
                                />
                            </li>
                        </ul>
                    </RadioGroup>
                </FormControl>
            </Paper>
        </div>
    );
};

export default ListFiltration;
