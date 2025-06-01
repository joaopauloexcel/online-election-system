import { Box, Button, styled } from "@mui/material";

import { theme } from "@/presentation/theme";
import { TypographyTitleDisabled } from "@/presentation/components/Typography";
import { MaskedTextField } from "@/presentation/components";

export const BoxCardEleicao = styled(Box)`
    display: flex;
    gap: ${theme.spacing(2)};
    justify-content: space-between;
    flex-wrap: wrap;
`

export const BoxCardFlex = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center'
    },
}));

export const ButtonCustom = styled(Button)`
    flex: 1;
    height: ${theme.spacing(5)};
    width: ${theme.spacing(25)};
`

export const TypographyDisabledCustom = styled(TypographyTitleDisabled)`
    margin-top: ${theme.spacing(0.5)};
`

export const MaskedTextFieldCustom = styled(MaskedTextField)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flex: 1
    },
    [theme.breakpoints.down('sm')]: {
        width: theme.spacing(20)
    },
}));

export const ButtonInitCustom = styled(Button)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flex: 1
    },
    [theme.breakpoints.down('sm')]: {
        width: theme.spacing(20)
    },
}));
