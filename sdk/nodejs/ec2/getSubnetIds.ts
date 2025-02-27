// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * `aws_subnet_ids` provides a list of ids for a vpc_id
 * 
 * This resource can be useful for getting back a list of subnet ids for a vpc.
 * 
 * ## Example Usage
 * 
 * The following shows outputing all cidr blocks for every subnet id in a vpc.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const exampleSubnetIds = pulumi.output(aws.ec2.getSubnetIds({
 *     vpcId: var_vpc_id,
 * }));
 * const exampleSubnet: Output<aws.ec2.GETSUBNETResult>[] = [];
 * for (let i = 0; i < exampleSubnetIds.apply(exampleSubnetIds => exampleSubnetIds.ids.length); i++) {
 *     exampleSubnet.push(aws.ec2.getSubnet);
 * %!(EXTRA string=exampleSubnetIds.apply(exampleSubnetIds => aws.ec2.getSubnet({
 *         id: exampleSubnetIds.ids[i],
 *     })))}
 * 
 * export const subnetCidrBlocks = exampleSubnet.map(v => v.cidrBlock);
 * ```
 * 
 * The following example retrieves a list of all subnets in a VPC with a custom
 * tag of `Tier` set to a value of "Private" so that the `aws_instance` resource
 * can loop through the subnets, putting instances across availability zones.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const privateSubnetIds = pulumi.output(aws.ec2.getSubnetIds({
 *     tags: {
 *         Tier: "Private",
 *     },
 *     vpcId: var_vpc_id,
 * }));
 * const app: aws.ec2.Instance[] = [];
 * for (let i = 0; i < 3; i++) {
 *     app.push(new aws.ec2.Instance(`app-${i}`, {
 *         ami: var_ami,
 *         instanceType: "t2.micro",
 *         subnetId: privateSubnetIds.apply(privateSubnetIds => privateSubnetIds.ids[i]),
 *     }));
 * }
 * ```
 */
export function getSubnetIds(args: GetSubnetIdsArgs, opts?: pulumi.InvokeOptions): Promise<GetSubnetIdsResult> {
    return pulumi.runtime.invoke("aws:ec2/getSubnetIds:getSubnetIds", {
        "filters": args.filters,
        "tags": args.tags,
        "vpcId": args.vpcId,
    }, opts);
}

/**
 * A collection of arguments for invoking getSubnetIds.
 */
export interface GetSubnetIdsArgs {
    /**
     * Custom filter block as described below.
     */
    readonly filters?: { name: string, values: string[] }[];
    /**
     * A mapping of tags, each pair of which must exactly match
     * a pair on the desired subnets.
     */
    readonly tags?: {[key: string]: any};
    /**
     * The VPC ID that you want to filter from.
     */
    readonly vpcId: string;
}

/**
 * A collection of values returned by getSubnetIds.
 */
export interface GetSubnetIdsResult {
    readonly filters?: { name: string, values: string[] }[];
    /**
     * A list of all the subnet ids found. This data source will fail if none are found.
     */
    readonly ids: string[];
    readonly tags: {[key: string]: any};
    readonly vpcId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
