export namespace AllExceptions {
  export enum AuthExceptions {
    AccountIsNotVerified = 'Account is not verified. Please verify your email.',
    WrongPassword = 'Wrong password',
    ExpiredToken = 'Access token expired',
    InvalidAccessToken = 'Invalid access token',
  }

  export enum SessionExceptions {
    SessionNotFound = 'Session is not found',
    SessionExpired = 'Session expired',
  }

  export enum UserExceptions {
    UserNotFound = 'User is not found',
    UserAlreadyExists = 'User already exists',
  }

  export enum PermissionExceptions {
    NotTheSameUser = 'Action is forbidden because user in entity is different.',
    NoRequiredRole = 'You are not allowed to do that action, because of your role',
  }

  export enum RolesExceptions {
    NotFound = 'Role is not found',
  }

  export enum StorageExceptions {
    ExtNotAllowed = 'File extension is not allowed',
  }

  export enum Queries {
    InvalidLimitOffset = 'limit * offset - offset can`t be < 0',
  }
}
