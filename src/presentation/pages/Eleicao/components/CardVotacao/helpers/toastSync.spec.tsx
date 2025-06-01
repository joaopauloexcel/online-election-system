import { describe, it, vi, expect } from 'vitest';
import toast from 'react-hot-toast';

import toastSync from './toastSync';
import * as toastSyncHook from '@/presentation/hooks/core/useToastSync/useToastSync';

vi.mock('react-hot-toast', () => ({
    default: {
        success: vi.fn(),
        error: vi.fn(),
    },
    __esModule: true,
}));

vi.mock('@/presentation/hooks/core/useToastSync/useToastSync', () => ({
    sendToastToOtherTabs: vi.fn(),
}));

describe('toastSync function', () => {
    it('should call toast.success and sendToastToOtherTabs for success type', () => {
        toastSync('success', 'Success message');
        expect(toastSyncHook.sendToastToOtherTabs).toHaveBeenCalledWith('success', 'Success message');
        expect(toast.success).toHaveBeenCalledWith('Success message');
    });

    it('should call toast.error and sendToastToOtherTabs for error type', () => {
        toastSync('error', 'Error message');
        expect(toastSyncHook.sendToastToOtherTabs).toHaveBeenCalledWith('error', 'Error message');
        expect(toast.error).toHaveBeenCalledWith('Error message');
    });
});
