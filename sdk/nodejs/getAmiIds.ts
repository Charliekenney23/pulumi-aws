// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

/**
 * Use this data source to get a list of AMI IDs matching the specified criteria.
 * 
 * > **NOTE:** The `owners` argument will be **required** in the next major version.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const ubuntu = pulumi.output(aws.getAmiIds({
 *     filters: [{
 *         name: "name",
 *         values: ["ubuntu/images/ubuntu-*-*-amd64-server-*"],
 *     }],
 *     owners: ["099720109477"],
 * }));
 * ```
 */
export function getAmiIds(args?: GetAmiIdsArgs, opts?: pulumi.InvokeOptions): Promise<GetAmiIdsResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:index/getAmiIds:getAmiIds", {
        "executableUsers": args.executableUsers,
        "filters": args.filters,
        "nameRegex": args.nameRegex,
        "owners": args.owners,
        "sortAscending": args.sortAscending,
    }, opts);
}

/**
 * A collection of arguments for invoking getAmiIds.
 */
export interface GetAmiIdsArgs {
    /**
     * Limit search to users with *explicit* launch
     * permission on  the image. Valid items are the numeric account ID or `self`.
     */
    readonly executableUsers?: string[];
    /**
     * One or more name/value pairs to filter off of. There
     * are several valid keys, for a full reference, check out
     * [describe-images in the AWS CLI reference][1].
     */
    readonly filters?: { name: string, values: string[] }[];
    /**
     * A regex string to apply to the AMI list returned
     * by AWS. This allows more advanced filtering not supported from the AWS API.
     * This filtering is done locally on what AWS returns, and could have a performance
     * impact if the result is large. It is recommended to combine this with other
     * options to narrow down the list AWS returns.
     */
    readonly nameRegex?: string;
    /**
     * Limit search to specific AMI owners. Valid items are
     * the numeric account ID, `amazon`, or `self`.
     */
    readonly owners?: string[];
    /**
     * Used to sort AMIs by creation time.
     */
    readonly sortAscending?: boolean;
}

/**
 * A collection of values returned by getAmiIds.
 */
export interface GetAmiIdsResult {
    readonly ids: string[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
