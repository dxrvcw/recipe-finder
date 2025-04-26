'use client';

import Button from '@/components/base/Button';
import Select from '@/components/base/Select';
import TextInput from '@/components/base/TextInput';
import { useState } from 'react';
import { CUISINES } from './const';

import qs from 'query-string';
import { useRouter } from 'next/navigation';

export const RecipesSearchForm = () => {
  const router = useRouter();

  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [maxReadyTime, setMaxReadyTime] = useState('');

  const handleSearch = () => {
    const queryParams = qs.stringify(
      {
        query,
        cuisine,
        maxReadyTime,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(`/recipes?${queryParams}`);
  };

  const isButtonEnabled = query.length || cuisine.length || maxReadyTime.length;

  return (
    <div className="container mx-auto mt-4">
      <div className="max-w-lg mx-auto flex flex-col gap-6">
        <TextInput
          label="Recipe"
          value={query}
          onChange={(value) => setQuery(value)}
          placeholder="e.g., Pasta, Salad"
        />
        <Select
          label="Select cuisine"
          value={cuisine}
          onChange={(value) => setCuisine(value)}
          options={CUISINES}
        />
        <TextInput
          label="Max Time (minutes)"
          value={maxReadyTime}
          onChange={(value) => setMaxReadyTime(value)}
          placeholder="e.g., 30"
          type="number"
        />
        <Button onClick={handleSearch} disabled={!isButtonEnabled} text="Next" />
      </div>
    </div>
  );
};
