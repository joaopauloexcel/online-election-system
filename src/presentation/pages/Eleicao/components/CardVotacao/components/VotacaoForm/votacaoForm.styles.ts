import { Autocomplete, Box, Button, styled, TextField } from "@mui/material";

import { theme } from "@/presentation/theme";

export const BoxFlexForm = styled(Box)`
    display: flex;
`
export const TextFieldCustom = styled(TextField)`
    flex: 1;
    margin: ${theme.spacing(2)} ${theme.spacing(0)};
`

export const BoxButtonForm = styled(Box)`
    flex: 4;
    position: relative;
    top: ${theme.spacing(2)};
    margin-left: ${theme.spacing(2)};
`
export const AutocompleteForm = styled(Autocomplete)`
    flex: 1;
`

export const BoxEmpty = styled(Box)`
    flex: 1;
`

export const ButtonAdd = styled(Button)`
    height: ${theme.spacing(7)};
`
