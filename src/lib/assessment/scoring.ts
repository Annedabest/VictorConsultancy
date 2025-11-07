type ScoreInput = {
  strategy?: number;
  data?: number;
  operations?: number;
  people?: number;
};

export type ReadinessScore = {
  overall: number | null;
  categories: Required<ScoreInput>;
  confidence: number;
};

const CATEGORY_KEYS: (keyof ScoreInput)[] = ['strategy', 'data', 'operations', 'people'];

export function normaliseScore(value?: number): number | null {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return null;
  }

  const clamped = Math.max(1, Math.min(5, value));
  return Math.round(clamped * 10) / 10;
}

export function calculateReadinessScore(scores: ScoreInput): ReadinessScore {
  const normalised = CATEGORY_KEYS.reduce<Required<ScoreInput>>((acc, key) => {
    const value = normaliseScore(scores[key]);
    acc[key] = typeof value === 'number' ? value : 0;
    return acc;
  }, {
    strategy: 0,
    data: 0,
    operations: 0,
    people: 0,
  });

  const availableValues = CATEGORY_KEYS
    .map((key) => normaliseScore(scores[key]))
    .filter((value): value is number => typeof value === 'number');

  const overall = availableValues.length
    ? Math.round((availableValues.reduce((sum, value) => sum + value, 0) / availableValues.length) * 10) / 10
    : null;

  const confidence = Math.round((availableValues.length / CATEGORY_KEYS.length) * 100);

  return {
    overall,
    categories: normalised,
    confidence,
  };
}
