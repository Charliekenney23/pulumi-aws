// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Requests automatic route propagation between a VPN gateway and a route table.
 * 
 * > **Note:** This resource should not be used with a route table that has
 * the `propagating_vgws` argument set. If that argument is set, any route
 * propagation not explicitly listed in its value will be removed.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.ec2.VpnGatewayRoutePropagation("example", {
 *     routeTableId: aws_route_table_example.id,
 *     vpnGatewayId: aws_vpn_gateway_example.id,
 * });
 * ```
 */
export class VpnGatewayRoutePropagation extends pulumi.CustomResource {
    /**
     * Get an existing VpnGatewayRoutePropagation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnGatewayRoutePropagationState, opts?: pulumi.CustomResourceOptions): VpnGatewayRoutePropagation {
        return new VpnGatewayRoutePropagation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ec2/vpnGatewayRoutePropagation:VpnGatewayRoutePropagation';

    /**
     * Returns true if the given object is an instance of VpnGatewayRoutePropagation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnGatewayRoutePropagation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnGatewayRoutePropagation.__pulumiType;
    }

    /**
     * The id of the `aws_route_table` to propagate routes into.
     */
    public readonly routeTableId!: pulumi.Output<string>;
    /**
     * The id of the `aws_vpn_gateway` to propagate routes from.
     */
    public readonly vpnGatewayId!: pulumi.Output<string>;

    /**
     * Create a VpnGatewayRoutePropagation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnGatewayRoutePropagationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpnGatewayRoutePropagationArgs | VpnGatewayRoutePropagationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as VpnGatewayRoutePropagationState | undefined;
            inputs["routeTableId"] = state ? state.routeTableId : undefined;
            inputs["vpnGatewayId"] = state ? state.vpnGatewayId : undefined;
        } else {
            const args = argsOrState as VpnGatewayRoutePropagationArgs | undefined;
            if (!args || args.routeTableId === undefined) {
                throw new Error("Missing required property 'routeTableId'");
            }
            if (!args || args.vpnGatewayId === undefined) {
                throw new Error("Missing required property 'vpnGatewayId'");
            }
            inputs["routeTableId"] = args ? args.routeTableId : undefined;
            inputs["vpnGatewayId"] = args ? args.vpnGatewayId : undefined;
        }
        super(VpnGatewayRoutePropagation.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering VpnGatewayRoutePropagation resources.
 */
export interface VpnGatewayRoutePropagationState {
    /**
     * The id of the `aws_route_table` to propagate routes into.
     */
    readonly routeTableId?: pulumi.Input<string>;
    /**
     * The id of the `aws_vpn_gateway` to propagate routes from.
     */
    readonly vpnGatewayId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpnGatewayRoutePropagation resource.
 */
export interface VpnGatewayRoutePropagationArgs {
    /**
     * The id of the `aws_route_table` to propagate routes into.
     */
    readonly routeTableId: pulumi.Input<string>;
    /**
     * The id of the `aws_vpn_gateway` to propagate routes from.
     */
    readonly vpnGatewayId: pulumi.Input<string>;
}
