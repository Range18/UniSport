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

  export enum SectionExceptions {
    SectionNotFound = 'Section is not found',
  }

  export enum SectionCategoryExceptions {
    SectionCategoryNotFound = 'SectionCategory is not found',
  }

  export enum EventCategoryExceptions {
    NotFound = 'EventCategory is not found',
  }

  export enum GroundExceptions {
    NotFound = 'Ground is not found',
  }

  export enum EventExceptions {
    EventNotFound = 'Event is not found',
  }
  export enum UserExceptions {
    UserNotFound = 'User is not found',
    UserAlreadyExists = 'User already exists',
    RelationConflict = 'You can not be parent or child of yourself',
  }

  export enum ChildExceptions {
    ChildNotFound = 'Child is not yours already',
    ChildIsAlreadyYours = 'Child is already yours',
    IsNotChild = 'User is not child',
  }

  export enum PermissionExceptions {
    NotTheSameUser = 'Action is forbidden because user in entity is different.',
    NoRequiredRole = 'You are not allowed to do that action, because of your role',
  }

  export enum RolesExceptions {
    NotFound = 'Role is not found',
  }

  export enum NewsExceptions {
    NotFound = 'Post is not found',
  }

  export enum StorageExceptions {
    FileNotFound = 'File not found',
    ExtNotAllowed = 'File extension is not allowed',
  }

  export enum Queries {
    InvalidLimitOffset = 'limit * offset - offset can`t be < 0',
  }
}
