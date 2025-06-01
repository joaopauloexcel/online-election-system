import { Box, IconButton, styled } from '@mui/material';

import { primary, theme } from '@/presentation/theme';

export const BoxWrapper = styled(Box)({
    display: 'flex',
    gap: theme.spacing(2),
    flexWrap: 'wrap',
    marginTop: theme.spacing(2),
});

export const IconButtonStyled = styled(IconButton)({
    background: primary[500],
    color: '#fff',
});
