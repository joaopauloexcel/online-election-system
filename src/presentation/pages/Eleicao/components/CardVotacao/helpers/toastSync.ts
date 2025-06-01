import toast from 'react-hot-toast';

import { sendToastToOtherTabs } from '@/presentation/hooks/core/useToastSync/useToastSync';

const toastSync = (type: 'success' | 'default' | 'error', message: string) => {
    sendToastToOtherTabs(type, message);
    if (type === 'success') toast.success(message);
    else if (type === 'error') toast.error(message);
    else toast(message);
};

export default toastSync
