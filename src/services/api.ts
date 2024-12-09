const API_URL = '/api';

export const getBandMembers = async () => {
  const response = await fetch(`${API_URL}/band-members`);
  if (!response.ok) {
    throw new Error('Failed to fetch band members');
  }
  return response.json();
};

export const getBandInfo = async () => {
  const response = await fetch(`${API_URL}/band-info`);
  if (!response.ok) {
    throw new Error('Failed to fetch band info');
  }
  return response.json();
};