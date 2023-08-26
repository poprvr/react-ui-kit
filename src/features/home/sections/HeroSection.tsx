import { ReactNode } from "react";
import { Box, Container, Stack, SxProps, Typography } from "@mui/material";

const _sx: Record<string, SxProps> = {
  root: {
    height: "30rem",
    paddingY: "2rem",
    background: "#222",
    color: "white",
  },
  container: {
    height: "100%",
  },
  stack: {
    height: "100%",
    justifyContent: "center",
  },
  title: {},
  subtext: {
    width: { xs: "100%", sm: "80%", md: "50%" },
    textOverflow: "ellipsis",
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 4,
    textAlign: "justify",
  },
};

interface HeroSectionProps {
  sx?: SxProps;
  align?: "left" | "right" | "center";

  title?: ReactNode;
  content?: ReactNode;
  button?: ReactNode;
  children?: ReactNode;
}

const HeroSection = ({
  sx,
  align = "left",
  title,
  content,
  button,
  children,
}: HeroSectionProps): JSX.Element => {
  return (
    <Box sx={{ ..._sx.root, ...sx } as SxProps}>
      <Container sx={_sx.container}>
        <Stack
          sx={_sx.stack}
          alignItems={
            align === "right"
              ? "flex-end"
              : align === "left"
              ? "flex-start"
              : "center"
          }
          spacing={2}
        >
          {children || (
            <>
              <Typography variant="h2" sx={_sx.title}>
                {title}
              </Typography>
              <Typography variant="subtitle1" sx={_sx.subtext}>
                {content}
              </Typography>
              {button}
            </>
          )}
        </Stack>
      </Container>
    </Box>
  );
};
export default HeroSection;
