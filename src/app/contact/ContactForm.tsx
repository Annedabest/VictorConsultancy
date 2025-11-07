'use client';

import { useActionState, useEffect, useMemo, useRef } from 'react';
import { submitContactInquiry, type ContactActionState } from './actions';

const initialState: ContactActionState = {
  status: 'idle',
};

export function ContactForm({ inquiryTypes }: { inquiryTypes: { label: string; description: string }[] }) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, action, isPending] = useActionState(submitContactInquiry, initialState);
  const fieldErrors = useMemo(() => state.fieldErrors ?? {}, [state.fieldErrors]);

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={action} className="space-y-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
            fieldErrors.name
              ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
              : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
          }`}
          placeholder="Full name"
          required
        />
        {fieldErrors.name ? <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.name}</p> : null}
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
            fieldErrors.email
              ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
              : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
          }`}
          placeholder="you@organisation.com"
          required
        />
        {fieldErrors.email ? <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.email}</p> : null}
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="organisation">
          Organisation
        </label>
        <input
          id="organisation"
          name="organisation"
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
            fieldErrors.organisation
              ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
              : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
          }`}
          placeholder="Organisation name"
          required
        />
        {fieldErrors.organisation ? (
          <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.organisation}</p>
        ) : null}
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="inquiry_type">
          Inquiry type
        </label>
        <select
          id="inquiry_type"
          name="inquiry_type"
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
            fieldErrors.inquiry_type
              ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
              : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
          }`}
          required
        >
          <option value="">Select an option</option>
          {inquiryTypes.map((item) => (
            <option key={item.label} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
        {fieldErrors.inquiry_type ? (
          <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.inquiry_type}</p>
        ) : null}
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
            fieldErrors.message
              ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
              : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
          }`}
          placeholder="Share context, goals, timelines, or partners we should align with"
        />
        {fieldErrors.message ? <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.message}</p> : null}
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700 disabled:opacity-60"
        disabled={isPending}
      >
        {isPending ? 'Submitting…' : 'Submit inquiry'}
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
