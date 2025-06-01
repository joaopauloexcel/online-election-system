import { Box, Button, styled } from "@mui/material";

import { theme } from "@/presentation/theme";

export const BoxFlexApuracao = styled(Box)`
    gap: ${theme.spacing(2)};
    display: flex;
    align-items: center;
    border-radius: ${theme.spacing(1)};
    border: 1px solid;
    padding: ${theme.spacing(0)} ${theme.spacing(1)};
`

export const ButtonAcoes = styled(Button)`
    width: ${theme.spacing(18)};
    height: ${theme.spacing(5)};
    border-radius: ${theme.spacing(1)};
`