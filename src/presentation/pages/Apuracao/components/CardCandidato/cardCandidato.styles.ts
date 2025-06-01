import { Box, styled } from "@mui/material";

import { CardDefault } from "@/presentation/components";
import { primary, theme } from "@/presentation/theme";

export const CardDefaultCustom = styled(CardDefault)`
    flex-direction: column;
    display: flex;
    gap: ${theme.spacing(2)};
    color: ${primary[500]};
    border-radius: ${theme.spacing(1)};
    box-shadow: 0px 0px 3px 1px #CED5DE;
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
`

export const BoxFlexCenter = styled(Box)`
    align-items: center;
    display: flex;
`

export const BoxWidth = styled(Box)`
   padding-right: ${theme.spacing(1)};
`

export const BoxBlock = styled(Box)`
    min-width: ${theme.spacing(31)};
`
