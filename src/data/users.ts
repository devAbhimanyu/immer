import { User } from 'types';

export const allUsers = [
  '🐶',
  '🐱',
  '🐭',
  '🐹',
  '🐰',
  '🦊',
  '🐻',
  '🐼',
  '🐨',
  '🐯',
  '🦁',
  '🐮',
  '🐷',
  '🐸',
  '🐒',
  '🦇',
  '🦉',
  '🦅',
  '🦆',
  '🐦',
  '🐧',
  '🐔',
  '🐺',
  '🐗',
  '🐴',
  '🦄',
  '🐝',
  '🐛',
  '🦋',
  '🐌',
  '🐜',
  '🐢',
].map((emoji, idx) => ({
  id: idx,
  name: emoji,
}));

export function getCurrentUser(): User | null {
  if (typeof sessionStorage === 'undefined') return null; // not a browser no current user
  // picks a random user, and stores it on the session storage to preserve identity during hot reloads
  const currentUserId: string =
    sessionStorage.getItem('user') ||
    Math.round(Math.random() * (allUsers.length - 1)).toString();
  sessionStorage.setItem('user', currentUserId);
  return allUsers[parseInt(currentUserId)];
}
