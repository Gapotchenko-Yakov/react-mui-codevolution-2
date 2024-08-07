import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("🚀 ~ handleChange ~ value:", value.toString());

    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        fullWidth
        aria-label="Select country"
        select
        value={countries}
        onChange={handleChange}
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText={countries.length > 0 ? null : "Please select your country."}
        error={countries.length > 0 ? false : true}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="CN">China</MenuItem>
        <MenuItem value="CD">Kongo</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
