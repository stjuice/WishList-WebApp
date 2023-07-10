import { from } from 'rxjs';

export const executeGraphqlQuery = (query: string, variables?: object) => {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };

  return from(
    fetch('/graphql', options)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
  );
};
