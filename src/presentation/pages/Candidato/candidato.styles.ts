import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';

import { primary } from '@/presentation/theme';
import { MaskedTextField } from '@/presentation/components';

export const FormContainer = styled('form')({
    display: 'flex',
    gap: '16px',
});

export const InputContainer = styled(Box)({
    flex: 1,
    position: 'relative',
    top: '24px',
});

export const SubmitButton = styled(IconButton)({
    background: primary[500],
    color: '#fff',
    '&:hover': {
        background: primary[700],
    },
});

export const MaskedTextFieldCustom = styled(MaskedTextField)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '184px'
    },
    [theme.breakpoints.up('md')]: {
        flex: 1
    },
}));