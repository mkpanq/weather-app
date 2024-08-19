export class DefaultError extends Error {
  constructor(message: string) {
    super();
    this.message = `Server Error: ${message}`;
    this.name = "DefaultError";
  }
}

export class CityNotFoundError extends Error {
  constructor() {
    super();
    this.message = "City not found !";
    this.name = "CityNotFoundError";
  }
}

export class ApiKeyInvalidError extends Error {
  constructor() {
    super();
    this.message = "API Key is not provided or it's invalid !";
    this.name = "ApiKeyInvalidError";
  }
}

export class ApiLimitationError extends Error {
  constructor() {
    super();
    this.message = "API limitation - check your subscription !";
    this.name = "ApiLimitationError";
  }
}
