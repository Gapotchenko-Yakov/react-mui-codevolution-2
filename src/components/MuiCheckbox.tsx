import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

const MuiCheckbox = () => {
  const [acceptTC, setAcceptTC] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log("🚀 ~ MuiCheckbox ~ skills:", skills);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    setAcceptTC(e.target.checked);
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const index = skills.indexOf(value);

    if (index === -1) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={acceptTC}
              onChange={handleChange}
            />
          }
          label="I accept terms and conditions."
        />
      </Box>
      <Box>
        <Checkbox
          color="success"
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={acceptTC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error={skills.length > 0}>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                  value="html"
                />
              }
              label="HTML"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                  value="css"
                />
              }
              label="CSS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                  value="javascript"
                />
              }
              label="JAVASCRIPT"
            />
          </FormGroup>
          {skills.length > 0 ? (
            <FormHelperText>Invalid selection</FormHelperText>
          ) : null}
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
