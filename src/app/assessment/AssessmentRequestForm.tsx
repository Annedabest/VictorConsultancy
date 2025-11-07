'use client';

import { useActionState, useEffect, useMemo, useRef } from 'react';
import { startAssessmentSession, type AssessmentActionState } from './actions';

const initialState: AssessmentActionState = {
  status: 'idle',
};

export function AssessmentRequestForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, formAction, isPending] = useActionState(startAssessmentSession, initialState);
  const fieldErrors = useMemo(() => state.fieldErrors ?? {}, [state.fieldErrors]);

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-5 rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm"
    >
      <h2 className="text-lg font-semibold text-neutral-900">Assessment preview</h2>
      <p className="text-sm text-neutral-600">
        This form will evolve into a multi-step flow with Supabase-backed sessions, automated scoring, and PDF
        generation. Share your details to receive early access once the portal launches.
      </p>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="contact_name">
          Name
        </label>
        <input
          id="contact_name"
          name="contact_name"
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
            fieldErrors.contact_name
              ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
              : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
          }`}
          required
        />
        {fieldErrors.contact_name ? (
          <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.contact_name}</p>
        ) : null}
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="work_email">
          Work email
        </label>
        <input
          id="work_email"
          name="work_email"
          type="email"
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
            fieldErrors.work_email
              ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
              : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
          }`}
          required
        />
        {fieldErrors.work_email ? (
          <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.work_email}</p>
        ) : null}
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="company_name">
          Organisation
        </label>
        <input
          id="company_name"
          name="company_name"
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
            fieldErrors.company_name
              ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
              : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
          }`}
          required
        />
        {fieldErrors.company_name ? (
          <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.company_name}</p>
        ) : null}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="persona">
            Persona
          </label>
          <select
            id="persona"
            name="persona"
            className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
              fieldErrors.persona
                ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
                : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
            }`}
            required
          >
            <option value="">Select an option</option>
            <option value="executive">Executive sponsor</option>
            <option value="practitioner">Functional leader</option>
            <option value="public-sector">Public-sector innovator</option>
            <option value="nonprofit">Nonprofit leader</option>
            <option value="consultant">Consultant/agency partner</option>
          </select>
          {fieldErrors.persona ? (
            <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.persona}</p>
          ) : null}
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="team_size">
            Team size
          </label>
          <input
            id="team_size"
            name="team_size"
            className={`mt-2 w-full rounded-xl border border-dashed px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
              fieldErrors.team_size
                ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
                : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
            }`}
            placeholder="e.g. 50-100"
          />
          {fieldErrors.team_size ? (
            <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.team_size}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="strategy_score">
            Strategy score (1-5)
          </label>
          <input
            id="strategy_score"
            name="strategy_score"
            type="number"
            min="1"
            max="5"
            step="1"
            className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
              fieldErrors.strategy_score
                ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
                : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
            }`}
          />
          {fieldErrors.strategy_score ? (
            <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.strategy_score}</p>
          ) : null}
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="data_score">
            Data score (1-5)
          </label>
          <input
            id="data_score"
            name="data_score"
            type="number"
            min="1"
            max="5"
            step="1"
            className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
              fieldErrors.data_score
                ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
                : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
            }`}
          />
          {fieldErrors.data_score ? (
            <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.data_score}</p>
          ) : null}
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="operations_score">
            Operations score (1-5)
          </label>
          <input
            id="operations_score"
            name="operations_score"
            type="number"
            min="1"
            max="5"
            step="1"
            className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
              fieldErrors.operations_score
                ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
                : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
            }`}
          />
          {fieldErrors.operations_score ? (
            <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.operations_score}</p>
          ) : null}
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="people_score">
            People score (1-5)
          </label>
          <input
            id="people_score"
            name="people_score"
            type="number"
            min="1"
            max="5"
            step="1"
            className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
              fieldErrors.people_score
                ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
                : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
            }`}
          />
          {fieldErrors.people_score ? (
            <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.people_score}</p>
          ) : null}
        </div>
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="top_priority">
          Primary goal
        </label>
        <textarea
          id="top_priority"
          name="top_priority"
          rows={3}
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
            fieldErrors.top_priority
              ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
              : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
          }`}
          placeholder="Share the outcomes you want to accelerate"
        />
        {fieldErrors.top_priority ? (
          <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.top_priority}</p>
        ) : null}
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="timeline">
          Desired timeline
        </label>
        <input
          id="timeline"
          name="timeline"
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
            fieldErrors.timeline
              ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
              : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
          }`}
          placeholder="e.g. 3-month diagnostic"
        />
        {fieldErrors.timeline ? (
          <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.timeline}</p>
        ) : null}
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-neutral-500" htmlFor="additional_context">
          Additional context
        </label>
        <textarea
          id="additional_context"
          name="additional_context"
          rows={4}
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:ring-1 ${
            fieldErrors.additional_context
              ? 'border-red-400 focus:border-red-500 focus:ring-red-300'
              : 'border-neutral-300 focus:border-neutral-900 focus:ring-neutral-200'
          }`}
          placeholder="Share current tools, compliance requirements, or partner considerations"
        />
        {fieldErrors.additional_context ? (
          <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.additional_context}</p>
        ) : null}
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700 disabled:opacity-60"
        disabled={isPending}
      >
        {isPending ? 'Submitting…' : 'Request early access'}
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
