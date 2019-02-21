// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

/**
 * Use this data source to get the id of a Resource in API Gateway. 
 * To fetch the Resource, you must provide the REST API id as well as the full path.  
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const myResource = pulumi.output(aws.apigateway.getResource({
 *     path: "/endpoint/path",
 *     restApiId: aws_api_gateway_rest_api_my_rest_api.id,
 * }));
 * const myRestApi = pulumi.output(aws.apigateway.getRestApi({
 *     name: "my-rest-api",
 * }));
 * ```
 */
export function getResource(args: GetResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceResult> {
    return pulumi.runtime.invoke("aws:apigateway/getResource:getResource", {
        "path": args.path,
        "restApiId": args.restApiId,
    }, opts);
}

/**
 * A collection of arguments for invoking getResource.
 */
export interface GetResourceArgs {
    /**
     * The full path of the resource.  If no path is found, an error will be returned.
     */
    readonly path: string;
    /**
     * The REST API id that owns the resource. If no REST API is found, an error will be returned.
     */
    readonly restApiId: string;
}

/**
 * A collection of values returned by getResource.
 */
export interface GetResourceResult {
    /**
     * Set to the ID of the parent Resource.
     */
    readonly parentId: string;
    /**
     * Set to the path relative to the parent Resource.
     */
    readonly pathPart: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
