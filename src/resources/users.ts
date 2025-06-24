// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { UsersPage, type UsersPageParams } from '../pagination';

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
  list(
    query?: UserListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ListUsersResponseUsersUsersPage, ListUsersResponse.User>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<ListUsersResponseUsersUsersPage, ListUsersResponse.User>;
  list(
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ListUsersResponseUsersUsersPage, ListUsersResponse.User> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/users', ListUsersResponseUsersUsersPage, { query, ...options });
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

export class ListUsersResponseUsersUsersPage extends UsersPage<ListUsersResponse.User> {}

export interface InviteUsersResponse {
  /**
   * Details of the errors occurred while inviting users, where keys are the emails
   * and values are the error messages
   */
  error_details: { [key: string]: string };

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
   * The schema used for listing existing (activated / deactivated) users.
   */
  export interface User {
    id: string;

    /**
     * The email of the user
     */
    email: string;

    /**
     * The effective roles of the user.
     */
    effective_roles?: Array<
      | 'VISITOR'
      | 'AGENT_USER'
      | 'CUSTOMER_INTERNAL_USER'
      | 'CONTEXTUAL_STAFF_USER'
      | 'CONTEXTUAL_EXTERNAL_STAFF_USER'
      | 'CONTEXTUAL_INTERNAL_STAFF_USER'
      | 'TENANT_ADMIN'
      | 'SUPER_ADMIN'
    >;

    /**
     * Flag indicating if the user is a tenant admin
     */
    is_tenant_admin?: boolean;

    /**
     * The user level roles of the user.
     */
    roles?: Array<
      | 'VISITOR'
      | 'AGENT_USER'
      | 'CUSTOMER_INTERNAL_USER'
      | 'CONTEXTUAL_STAFF_USER'
      | 'CONTEXTUAL_EXTERNAL_STAFF_USER'
      | 'CONTEXTUAL_INTERNAL_STAFF_USER'
      | 'TENANT_ADMIN'
      | 'SUPER_ADMIN'
    >;
  }
}

/**
 * The schema used for creating new users or updating existing users.
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
   * The user level roles of the user.
   */
  roles?: Array<
    | 'VISITOR'
    | 'AGENT_USER'
    | 'CUSTOMER_INTERNAL_USER'
    | 'CONTEXTUAL_STAFF_USER'
    | 'CONTEXTUAL_EXTERNAL_STAFF_USER'
    | 'CONTEXTUAL_INTERNAL_STAFF_USER'
    | 'TENANT_ADMIN'
    | 'SUPER_ADMIN'
  >;
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
   * The user level roles of the user.
   */
  roles?: Array<
    | 'VISITOR'
    | 'AGENT_USER'
    | 'CUSTOMER_INTERNAL_USER'
    | 'CONTEXTUAL_STAFF_USER'
    | 'CONTEXTUAL_EXTERNAL_STAFF_USER'
    | 'CONTEXTUAL_INTERNAL_STAFF_USER'
    | 'TENANT_ADMIN'
    | 'SUPER_ADMIN'
  >;
}

export interface UserListParams extends UsersPageParams {
  /**
   * When set to true, return deactivated users instead.
   */
  deactivated?: boolean;

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

Users.ListUsersResponseUsersUsersPage = ListUsersResponseUsersUsersPage;

export declare namespace Users {
  export {
    type InviteUsersResponse as InviteUsersResponse,
    type ListUsersResponse as ListUsersResponse,
    type NewUser as NewUser,
    type UserUpdateResponse as UserUpdateResponse,
    type UserDeactivateResponse as UserDeactivateResponse,
    ListUsersResponseUsersUsersPage as ListUsersResponseUsersUsersPage,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeactivateParams as UserDeactivateParams,
    type UserInviteParams as UserInviteParams,
  };
}
