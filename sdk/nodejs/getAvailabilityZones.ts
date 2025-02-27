// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The Availability Zones data source allows access to the list of AWS
 * Availability Zones which can be accessed by an AWS account within the region
 * configured in the provider.
 * 
 * This is different from the `aws_availability_zone` (singular) data source,
 * which provides some details about a specific availability zone.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * // Declare the data source
 * const available = pulumi.output(aws.getAvailabilityZones({
 *     state: "available",
 * }));
 * const primary = new aws.ec2.Subnet("primary", {
 *     availabilityZone: available.apply(available => available.names[0]),
 * });
 * const secondary = new aws.ec2.Subnet("secondary", {
 *     availabilityZone: available.apply(available => available.names[1]),
 * });
 * ```
 */
export function getAvailabilityZones(args?: GetAvailabilityZonesArgs, opts?: pulumi.InvokeOptions): Promise<GetAvailabilityZonesResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:index/getAvailabilityZones:getAvailabilityZones", {
        "blacklistedNames": args.blacklistedNames,
        "blacklistedZoneIds": args.blacklistedZoneIds,
        "state": args.state,
    }, opts);
}

/**
 * A collection of arguments for invoking getAvailabilityZones.
 */
export interface GetAvailabilityZonesArgs {
    /**
     * List of blacklisted Availability Zone names.
     */
    readonly blacklistedNames?: string[];
    /**
     * List of blacklisted Availability Zone IDs.
     */
    readonly blacklistedZoneIds?: string[];
    /**
     * Allows to filter list of Availability Zones based on their
     * current state. Can be either `"available"`, `"information"`, `"impaired"` or
     * `"unavailable"`. By default the list includes a complete set of Availability Zones
     * to which the underlying AWS account has access, regardless of their state.
     */
    readonly state?: string;
}

/**
 * A collection of values returned by getAvailabilityZones.
 */
export interface GetAvailabilityZonesResult {
    readonly blacklistedNames?: string[];
    readonly blacklistedZoneIds?: string[];
    /**
     * A list of the Availability Zone names available to the account.
     */
    readonly names: string[];
    readonly state?: string;
    /**
     * A list of the Availability Zone IDs available to the account.
     */
    readonly zoneIds: string[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
