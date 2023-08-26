import { FC, ReactNode } from "react";
import { Box, Container, Grid, Typography, SxProps } from "@mui/material";

const _sx: Record<string, SxProps> = {
  root: {
    py: "4rem",
  },
  gridContainer: {
    alignItems: "stretch",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

interface MediaContentSectionProps {
  sx?: SxProps;
  align?: "left" | "right";

  media?: ReactNode;
  image?: { url: string };

  children?: ReactNode;
  title?: ReactNode;
  content?: ReactNode;
  button?: ReactNode;
}

const MediaContentSection: FC<MediaContentSectionProps> = ({
  sx,
  align = "right",

  media,
  image,

  children,
  title,
  content,
  button,
}) => {
  const _media = media ? (
    media
  ) : image ? (
    <img src={image.url} width="100%" />
  ) : undefined;

  return (
    <Box sx={{ ..._sx.root, ...sx } as SxProps}>
      <Container>
        <Grid container spacing={20} sx={_sx.gridContainer}>
          <Grid
            item
            xs={12}
            md={6}
            sx={
              {
                ..._sx.gridItem,
                order: { md: align === "left" ? 2 : 0 },
              } as SxProps
            }
          >
            {_media}
          </Grid>
          <Grid item xs={12} md={6} sx={_sx.gridItem}>
            {children || (
              <>
                <Typography variant="h3" sx={{ mb: "1rem" }}>
                  {title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: "justify", mb: "1rem" }}
                >
                  {content}
                </Typography>
                {button}
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MediaContentSection;
