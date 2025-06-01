import { Box, Button, styled } from "@mui/material";

import { theme } from "@/presentation/theme";

export const BoxFlexAcoes = styled(Box)`
    flex: 1;
    gap: ${theme.spacing(1)};
    display: flex;
    margin-bottom: ${theme.spacing(2)};
`

export const ButtonAcoes = styled(Button)`
    width: ${theme.spacing(18)};
    height: ${theme.spacing(5)};
    border-radius: ${theme.spacing(1)};
`
