import { Typography } from "@mui/material";
import React from "react";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        veniam? Reiciendis, cumque labore impedit fugiat reprehenderit at ullam
        maxime eos deserunt, ab beatae distinctio minima cupiditate voluptatem
        sunt, nam animi.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas
        aspernatur perspiciatis. Vitae soluta id dolorum iste nam eaque
        laboriosam corrupti deleniti, laudantium accusamus quas commodi
        inventore mollitia, suscipit tempore!
      </Typography>
    </div>
  );
};

export default MuiTypography;
