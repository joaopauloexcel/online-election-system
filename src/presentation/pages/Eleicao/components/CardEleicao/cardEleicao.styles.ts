import { Box, Button, styled } from "@mui/material";

import { theme } from "@/presentation/theme";
import { TypographyTitleDisabled } from "@/presentation/components/Typography";

export const BoxCardEleicao = styled(Box)`
    display: flex;
    gap: ${theme.spacing(2)};
    justify-content: space-between;
`

export const BoxCardFlex = styled(Box)`
    display: flex;
    gap: ${theme.spacing(2)};
`

export const ButtonCustom = styled(Button)`
    flex: 1;
    height: ${theme.spacing(5)};
    width: ${theme.spacing(25)};
`

export const TypographyDisabledCustom = styled(TypographyTitleDisabled)`
    margin-top: ${theme.spacing(0.5)};
`