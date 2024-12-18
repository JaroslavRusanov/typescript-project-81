import { expect, test } from 'vitest';
import TagGen from '../tagGen';

test('test toString() tag', () => {
  const tagSingle = new TagGen('input', { type: 'submit', value: 'Save' });
  const testResultSingle = '<input type="submit" value="Save">';

  expect(tagSingle.toString()).toEqual(testResultSingle);

  const tagDouble = new TagGen('label', { for: 'email' }, 'Email');
  const testResultDoble = '<label for="email">Email</label>';

  expect(tagDouble.toString()).toEqual(testResultDoble);

  const tagOnly = new TagGen('div');
  const testResultTagOnly = '<div></div>';

  expect(tagOnly.toString()).toEqual(testResultTagOnly);
});
