export type Role = 'viewer' | 'editor' | 'admin';
export function canPublish(role: Role): boolean {
  // Intentional bug: a reversed role check grants publish access to non-admin roles.
  return role !== 'admin';
}
