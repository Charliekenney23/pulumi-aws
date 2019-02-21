// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

/**
 * `aws_route_table` provides details about a specific Route Table.
 * 
 * This resource can prove useful when a module accepts a Subnet id as
 * an input variable and needs to, for example, add a route in
 * the Route Table.
 * 
 * ## Example Usage
 * 
 * The following example shows how one might accept a Route Table id as a variable
 * and use this data source to obtain the data necessary to create a route.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const config = new pulumi.Config();
 * const subnetId = config.require("subnetId");
 * 
 * const selected = pulumi.output(aws.ec2.getRouteTable({
 *     subnetId: subnetId,
 * }));
 * const route = new aws.ec2.Route("route", {
 *     destinationCidrBlock: "10.0.1.0/22",
 *     routeTableId: selected.apply(selected => selected.id),
 *     vpcPeeringConnectionId: "pcx-45ff3dc1",
 * });
 * ```
 */
export function getRouteTable(args?: GetRouteTableArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteTableResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:ec2/getRouteTable:getRouteTable", {
        "filters": args.filters,
        "routeTableId": args.routeTableId,
        "subnetId": args.subnetId,
        "tags": args.tags,
        "vpcId": args.vpcId,
    }, opts);
}

/**
 * A collection of arguments for invoking getRouteTable.
 */
export interface GetRouteTableArgs {
    /**
     * Custom filter block as described below.
     */
    readonly filters?: { name: string, values: string[] }[];
    /**
     * The id of the specific Route Table to retrieve.
     */
    readonly routeTableId?: string;
    /**
     * The id of a Subnet which is connected to the Route Table (not be exported if not given in parameter).
     */
    readonly subnetId?: string;
    /**
     * A mapping of tags, each pair of which must exactly match
     * a pair on the desired Route Table.
     */
    readonly tags?: {[key: string]: any};
    /**
     * The id of the VPC that the desired Route Table belongs to.
     */
    readonly vpcId?: string;
}

/**
 * A collection of values returned by getRouteTable.
 */
export interface GetRouteTableResult {
    readonly associations: { main: boolean, routeTableAssociationId: string, routeTableId: string, subnetId: string }[];
    /**
     * The ID of the AWS account that owns the route table
     */
    readonly ownerId: string;
    /**
     * The Route Table ID.
     */
    readonly routeTableId: string;
    readonly routes: { cidrBlock: string, egressOnlyGatewayId: string, gatewayId: string, instanceId: string, ipv6CidrBlock: string, natGatewayId: string, networkInterfaceId: string, transitGatewayId: string, vpcPeeringConnectionId: string }[];
    /**
     * The Subnet ID.
     */
    readonly subnetId: string;
    readonly tags: {[key: string]: any};
    readonly vpcId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
