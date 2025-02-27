// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a resource to create a VPC routing table.
 * 
 * > **NOTE on Route Tables and Routes:** Terraform currently
 * provides both a standalone Route resource and a Route Table resource with routes
 * defined in-line. At this time you cannot use a Route Table with in-line routes
 * in conjunction with any Route resources. Doing so will cause
 * a conflict of rule settings and will overwrite rules.
 * 
 * > **NOTE on `gateway_id` and `nat_gateway_id`:** The AWS API is very forgiving with these two
 * attributes and the `aws_route_table` resource can be created with a NAT ID specified as a Gateway ID attribute.
 * This _will_ lead to a permanent diff between your configuration and statefile, as the API returns the correct
 * parameters in the returned route table. If you're experiencing constant diffs in your `aws_route_table` resources,
 * the first thing to check is whether or not you're specifying a NAT ID instead of a Gateway ID, or vice-versa.
 * 
 * > **NOTE on `propagating_vgws` and the `aws_vpn_gateway_route_propagation` resource:**
 * If the `propagating_vgws` argument is present, it's not supported to _also_
 * define route propagations using `aws_vpn_gateway_route_propagation`, since
 * this resource will delete any propagating gateways not explicitly listed in
 * `propagating_vgws`. Omit this argument when defining route propagation using
 * the separate resource.
 * 
 * ## Example usage with tags:
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const routeTable = new aws.ec2.RouteTable("r", {
 *     routes: [
 *         {
 *             cidrBlock: "10.0.1.0/24",
 *             gatewayId: aws_internet_gateway_main.id,
 *         },
 *         {
 *             egressOnlyGatewayId: aws_egress_only_internet_gateway_foo.id,
 *             ipv6CidrBlock: "::/0",
 *         },
 *     ],
 *     tags: {
 *         Name: "main",
 *     },
 *     vpcId: aws_vpc_default.id,
 * });
 * ```
 */
export class RouteTable extends pulumi.CustomResource {
    /**
     * Get an existing RouteTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouteTableState, opts?: pulumi.CustomResourceOptions): RouteTable {
        return new RouteTable(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ec2/routeTable:RouteTable';

    /**
     * Returns true if the given object is an instance of RouteTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouteTable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouteTable.__pulumiType;
    }

    /**
     * The ID of the AWS account that owns the route table
     */
    public /*out*/ readonly ownerId!: pulumi.Output<string>;
    /**
     * A list of virtual gateways for propagation.
     */
    public readonly propagatingVgws!: pulumi.Output<string[]>;
    /**
     * A list of route objects. Their keys are documented below. This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
     */
    public readonly routes!: pulumi.Output<{ cidrBlock?: string, egressOnlyGatewayId?: string, gatewayId?: string, instanceId?: string, ipv6CidrBlock?: string, natGatewayId?: string, networkInterfaceId?: string, transitGatewayId?: string, vpcPeeringConnectionId?: string }[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The VPC ID.
     */
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a RouteTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteTableArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouteTableArgs | RouteTableState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as RouteTableState | undefined;
            inputs["ownerId"] = state ? state.ownerId : undefined;
            inputs["propagatingVgws"] = state ? state.propagatingVgws : undefined;
            inputs["routes"] = state ? state.routes : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as RouteTableArgs | undefined;
            if (!args || args.vpcId === undefined) {
                throw new Error("Missing required property 'vpcId'");
            }
            inputs["propagatingVgws"] = args ? args.propagatingVgws : undefined;
            inputs["routes"] = args ? args.routes : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vpcId"] = args ? args.vpcId : undefined;
            inputs["ownerId"] = undefined /*out*/;
        }
        super(RouteTable.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RouteTable resources.
 */
export interface RouteTableState {
    /**
     * The ID of the AWS account that owns the route table
     */
    readonly ownerId?: pulumi.Input<string>;
    /**
     * A list of virtual gateways for propagation.
     */
    readonly propagatingVgws?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of route objects. Their keys are documented below. This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
     */
    readonly routes?: pulumi.Input<pulumi.Input<{ cidrBlock?: pulumi.Input<string>, egressOnlyGatewayId?: pulumi.Input<string>, gatewayId?: pulumi.Input<string>, instanceId?: pulumi.Input<string>, ipv6CidrBlock?: pulumi.Input<string>, natGatewayId?: pulumi.Input<string>, networkInterfaceId?: pulumi.Input<string>, transitGatewayId?: pulumi.Input<string>, vpcPeeringConnectionId?: pulumi.Input<string> }>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The VPC ID.
     */
    readonly vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouteTable resource.
 */
export interface RouteTableArgs {
    /**
     * A list of virtual gateways for propagation.
     */
    readonly propagatingVgws?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of route objects. Their keys are documented below. This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html).
     */
    readonly routes?: pulumi.Input<pulumi.Input<{ cidrBlock?: pulumi.Input<string>, egressOnlyGatewayId?: pulumi.Input<string>, gatewayId?: pulumi.Input<string>, instanceId?: pulumi.Input<string>, ipv6CidrBlock?: pulumi.Input<string>, natGatewayId?: pulumi.Input<string>, networkInterfaceId?: pulumi.Input<string>, transitGatewayId?: pulumi.Input<string>, vpcPeeringConnectionId?: pulumi.Input<string> }>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The VPC ID.
     */
    readonly vpcId: pulumi.Input<string>;
}
