import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

describe('Frontend Store and Router Tests', () => {
  test('Auth Zustand store initializes with unauthenticated state', async () => {
    const { useAuthStore } = await import('../../../frontend/src/shared/store/auth.store.js');
    const initialState = useAuthStore.getState();
    assert.strictEqual(initialState.isAuthenticated, false);
    assert.strictEqual(initialState.user, null);
    assert.strictEqual(initialState.role, null);
  });

  test('Auth store correctly updates user and authentication status', async () => {
    const { useAuthStore } = await import('../../../frontend/src/shared/store/auth.store.js');
    useAuthStore.getState().setUser({ name: 'Abu Fazal' }, 'admin');
    const updatedState = useAuthStore.getState();
    assert.strictEqual(updatedState.isAuthenticated, true);
    assert.strictEqual(updatedState.role, 'admin');

    // Reset store
    useAuthStore.getState().logout();
    assert.strictEqual(useAuthStore.getState().isAuthenticated, false);
  });
});
