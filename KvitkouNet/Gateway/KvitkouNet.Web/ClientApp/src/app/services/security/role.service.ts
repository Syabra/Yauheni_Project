/**
 * My Title
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent } from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from './encoder';

import { Observable } from 'rxjs';

import { ActionResponse } from '../../models/security/actionResponse';
import { EditRoleRequest } from '../../models/security/editRoleRequest';
import { RoleResponse } from '../../models/security/roleResponse';

import { BASE_PATH, COLLECTION_FORMATS } from './variables';
import { Configuration } from './configuration';


@Injectable()
export class RoleService {

    protected basePath = 'https://localhost:5002';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     *
     *
     * @param roleName
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public roleAddRole(roleName: string, observe?: 'body', reportProgress?: boolean): Observable<ActionResponse>;
    public roleAddRole(roleName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ActionResponse>>;
    public roleAddRole(roleName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ActionResponse>>;
    public roleAddRole(roleName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (roleName === null || roleName === undefined) {
            throw new Error('Required parameter roleName was null or undefined when calling roleAddRole.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<ActionResponse>(`${this.basePath}/security/role`,
            roleName,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public roleDeleteRole(id: number, observe?: 'body', reportProgress?: boolean): Observable<ActionResponse>;
    public roleDeleteRole(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ActionResponse>>;
    public roleDeleteRole(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ActionResponse>>;
    public roleDeleteRole(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling roleDeleteRole.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];

        return this.httpClient.delete<ActionResponse>(`${this.basePath}/security/role/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public roleEditRole(request: EditRoleRequest, observe?: 'body', reportProgress?: boolean): Observable<ActionResponse>;
    public roleEditRole(request: EditRoleRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ActionResponse>>;
    public roleEditRole(request: EditRoleRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ActionResponse>>;
    public roleEditRole(request: EditRoleRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling roleEditRole.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<ActionResponse>(`${this.basePath}/security/role`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param perPage
     * @param page
     * @param mask
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public roleGetRoles(perPage: number, page: number, mask?: string, observe?: 'body', reportProgress?: boolean): Observable<RoleResponse>;
    public roleGetRoles(perPage: number, page: number, mask?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RoleResponse>>;
    public roleGetRoles(perPage: number, page: number, mask?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RoleResponse>>;
    public roleGetRoles(perPage: number, page: number, mask?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (perPage === null || perPage === undefined) {
            throw new Error('Required parameter perPage was null or undefined when calling roleGetRoles.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling roleGetRoles.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (mask !== undefined && mask !== null) {
            queryParameters = queryParameters.set('mask', <any>mask);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];

        return this.httpClient.get<RoleResponse>(`${this.basePath}/security/roles/${encodeURIComponent(String(perPage))}/${encodeURIComponent(String(page))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}