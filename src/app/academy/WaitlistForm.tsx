'use client';

import { useActionState, useEffect, useRef } from 'react';
import { joinAcademyWaitlist, type AcademyWaitlistState } from './actions';

const initialState: AcademyWaitlistState = {
  status: 'idle',
};

export function WaitlistForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, action, pending] = useActionState(joinAcademyWaitlist, initialState);

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={action} className="space-y-3">
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        className={`w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
          state.fieldErrors?.email
            ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
            : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
        }`}
        required
      />
      {state.fieldErrors?.email ? (
        <p className="text-xs font-medium text-red-600">{state.fieldErrors.email}</p>
      ) : null}
      <input type="hidden" name="referral_source" value="academy-page" />
      <button
        type="submit"
        className="w-full rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700 disabled:opacity-60"
        disabled={pending}
      >
        {pending ? 'Joining waitlist…' : 'Join waitlist'}
      </button>
      {state.status !== 'idle' ? (
        <p
          className={
            state.status === 'error'
              ? 'text-sm font-medium text-red-600'
              : 'text-sm font-medium text-neutral-900'
          }
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
