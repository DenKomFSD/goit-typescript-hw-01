export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
//examples of usage
console.log(RoleDescription[UserRole.admin]); // "Admin User"
console.log(RoleDescription[UserRole.editor]); // "Editor User"
console.log(RoleDescription[UserRole.guest]); // "Guest User"
