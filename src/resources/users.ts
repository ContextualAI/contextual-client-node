// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Users extends APIResource {
  /**
   * Modify a given `User`.
   *
   * Fields not included in the request body will not be modified.
   */
  update(body: UserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.put('/users', { body, ...options });
  }

  /**
   * Retrieve a list of `users`.
   */
  list(query?: UserListParams, options?: Core.RequestOptions): Core.APIPromise<ListUsersResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ListUsersResponse>;
  list(
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListUsersResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/users', { query, ...options });
  }

  /**
   * Delete a given `user`.
   */
  deactivate(body: UserDeactivateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete('/users', { body, ...options });
  }

  /**
   * Invite users to the tenant. This checks if the user is already in the tenant and
   * if not, creates the user. We will return a list of user emails that were
   * successfully created (including existing users).
   */
  invite(body: UserInviteParams, options?: Core.RequestOptions): Core.APIPromise<InviteUsersResponse> {
    return this._client.post('/users', { body, ...options });
  }
}

export interface InviteUsersResponse {
  /**
   * Details of the errors occurred while inviting users, where keys are the emails
   * and values are the error messages
   */
  error_details: Record<string, string>;

  /**
   * List of emails of the invited users
   */
  invited_user_emails: Array<string>;
}

export interface ListUsersResponse {
  /**
   * List of users
   */
  users: Array<ListUsersResponse.User>;

  /**
   * Cursor for the beginning of the next page
   */
  next_cursor?: string | null;
}

export namespace ListUsersResponse {
  /**
   * The schema used for listing existing (activated / deactivated) users. Need to
   * keep in sync with `frontend/src/types/admin.ts`.
   */
  export interface User {
    id: string;

    /**
     * The email of the user
     */
    email: string;

    /**
     * Flag indicating if the user is a tenant admin
     */
    is_tenant_admin?: boolean;

    /**
     * Per agent level roles for the user. If a user is granted any role under `roles`,
     * then the user has that role for all the agents. Only the roles that need to be
     * updated should be part of this.
     */
    per_agent_roles?: Array<User.PerAgentRole>;

    /**
     * The user level roles of the user.
     */
    roles?: Array<'AGENT_USER'>;
  }

  export namespace User {
    /**
     * The schema used to capture agent level roles
     */
    export interface PerAgentRole {
      /**
       * ID of the agent on which to grant/revoke the role.
       */
      agent_id: string;

      /**
       * When set to true, the roles will be granted o/w revoked.
       */
      grant: boolean;

      /**
       * The roles that are granted/revoked
       */
      roles: Array<'AGENT_USER'>;
    }
  }
}

/**
 * The schema used for creating new users or updating existing users. Need to keep
 * in sync with `frontend/src/types/admin.ts`.
 */
export interface NewUser {
  /**
   * The email of the user
   */
  email: string;

  /**
   * Flag indicating if the user is a tenant admin
   */
  is_tenant_admin?: boolean;

  /**
   * Per agent level roles for the user. If a user is granted any role under `roles`,
   * then the user has that role for all the agents. Only the roles that need to be
   * updated should be part of this.
   */
  per_agent_roles?: Array<NewUser.PerAgentRole>;

  /**
   * The user level roles of the user.
   */
  roles?: Array<'AGENT_USER'>;
}

export namespace NewUser {
  /**
   * The schema used to capture agent level roles
   */
  export interface PerAgentRole {
    /**
     * ID of the agent on which to grant/revoke the role.
     */
    agent_id: string;

    /**
     * When set to true, the roles will be granted o/w revoked.
     */
    grant: boolean;

    /**
     * The roles that are granted/revoked
     */
    roles: Array<'AGENT_USER'>;
  }
}

export type UserUpdateResponse = unknown;

export type UserDeactivateResponse = unknown;

export interface UserUpdateParams {
  /**
   * The email of the user
   */
  email: string;

  /**
   * Flag indicating if the user is a tenant admin
   */
  is_tenant_admin?: boolean;

  /**
   * Per agent level roles for the user. If a user is granted any role under `roles`,
   * then the user has that role for all the agents. Only the roles that need to be
   * updated should be part of this.
   */
  per_agent_roles?: Array<UserUpdateParams.PerAgentRole>;

  /**
   * The user level roles of the user.
   */
  roles?: Array<'AGENT_USER'>;
}

export namespace UserUpdateParams {
  /**
   * The schema used to capture agent level roles
   */
  export interface PerAgentRole {
    /**
     * ID of the agent on which to grant/revoke the role.
     */
    agent_id: string;

    /**
     * When set to true, the roles will be granted o/w revoked.
     */
    grant: boolean;

    /**
     * The roles that are granted/revoked
     */
    roles: Array<'AGENT_USER'>;
  }
}

export interface UserListParams {
  /**
   * Cursor for the beginning of the current page
   */
  cursor?: string;

  /**
   * When set to true, return deactivated users instead.
   */
  deactivated?: boolean;

  /**
   * Number of users to return
   */
  limit?: number;

  /**
   * Query to filter users by email
   */
  search?: string;
}

export interface UserDeactivateParams {
  /**
   * The email of the user
   */
  email: string;
}

export interface UserInviteParams {
  /**
   * List of new users to be invited
   */
  new_users: Array<NewUser>;

  /**
   * The short name of the tenant
   */
  tenant_short_name: string;
}

export declare namespace Users {
  export {
    type InviteUsersResponse as InviteUsersResponse,
    type ListUsersResponse as ListUsersResponse,
    type NewUser as NewUser,
    type UserUpdateResponse as UserUpdateResponse,
    type UserDeactivateResponse as UserDeactivateResponse,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeactivateParams as UserDeactivateParams,
    type UserInviteParams as UserInviteParams,
  };
}
