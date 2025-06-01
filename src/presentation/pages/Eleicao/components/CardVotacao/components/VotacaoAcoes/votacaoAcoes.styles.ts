import { Box, Button, styled } from "@mui/material";

import { theme } from "@/presentation/theme";

export const BoxFlexAcoes = styled(Box)(({ theme }) => ({
    flex: 1,
    gap: theme.spacing(1),
    display: 'flex',
    marginBottom: theme.spacing(2),
    flexWrap: 'wrap',
    justifyContent: 'flex-start',

    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
    },
}));

export const ButtonAcoes = styled(Button)`
    width: ${theme.spacing(20)};
    height: ${theme.spacing(5)};
    border-radius: ${theme.spacing(1)};
`
