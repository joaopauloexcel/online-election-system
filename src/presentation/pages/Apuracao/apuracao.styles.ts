import { Box, styled } from "@mui/material";

import { CardDefault } from "@/presentation/components";
import { primary, theme } from "@/presentation/theme";
import { TypographyTitleDisabled } from "@/presentation/components/Typography";

export const CardDefaultCustom = styled(CardDefault)`
    flex-direction: column;
    display: flex;
    gap: ${theme.spacing(2)};
    min-width: ${theme.spacing(31)};
    color: ${primary[500]};
    border-radius: ${theme.spacing(1)};
    box-shadow: 0px 0px 3px 1px #CED5DE;
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
`

export const BoxFlexCenter = styled(Box)`
    align-items: center;
    display: flex;
`

export const BoxFlex = styled(Box)`
   display: flex;
`

export const TypographyDisabledCustom = styled(TypographyTitleDisabled)`
    margin-left: ${theme.spacing(2)};
`

export const BoxCardsCandidato = styled(Box)`
    display:flex;
    gap: ${theme.spacing(3)};
    margin-top: ${theme.spacing(2)};
    flex-wrap:wrap;
`

