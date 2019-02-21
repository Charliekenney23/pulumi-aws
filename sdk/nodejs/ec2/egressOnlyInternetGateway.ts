// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

/**
 * [IPv6 only] Creates an egress-only Internet gateway for your VPC.
 * An egress-only Internet gateway is used to enable outbound communication
 * over IPv6 from instances in your VPC to the Internet, and prevents hosts
 * outside of your VPC from initiating an IPv6 connection with your instance.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const fooVpc = new aws.ec2.Vpc("foo", {
 *     assignGeneratedIpv6CidrBlock: true,
 *     cidrBlock: "10.1.0.0/16",
 * });
 * const fooEgressOnlyInternetGateway = new aws.ec2.EgressOnlyInternetGateway("foo", {
 *     vpcId: fooVpc.id,
 * });
 * ```
 */
export class EgressOnlyInternetGateway extends pulumi.CustomResource {
    /**
     * Get an existing EgressOnlyInternetGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EgressOnlyInternetGatewayState, opts?: pulumi.CustomResourceOptions): EgressOnlyInternetGateway {
        return new EgressOnlyInternetGateway(name, <any>state, { ...opts, id: id });
    }

    public static list(): rxjs.Observable<EgressOnlyInternetGatewayResult> {
        return rxjs.from(
            pulumi.runtime
                .invoke('pulumi:pulumi:readStackResourceOutputs', {
                    stackName: pulumi.runtime.getStack(),
                    type: 'aws:ec2/egressOnlyInternetGateway:EgressOnlyInternetGateway',
                })
                .then(o => Object.keys(o.outputs).map(k => o.outputs[k]))
        ).pipe(
            operators.mergeAll(),
        );
    }

    /**
     * The VPC ID to create in.
     */
    public readonly vpcId: pulumi.Output<string>;

    /**
     * Create a EgressOnlyInternetGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EgressOnlyInternetGatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EgressOnlyInternetGatewayArgs | EgressOnlyInternetGatewayState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: EgressOnlyInternetGatewayState = argsOrState as EgressOnlyInternetGatewayState | undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as EgressOnlyInternetGatewayArgs | undefined;
            if (!args || args.vpcId === undefined) {
                throw new Error("Missing required property 'vpcId'");
            }
            inputs["vpcId"] = args ? args.vpcId : undefined;
        }
        super("aws:ec2/egressOnlyInternetGateway:EgressOnlyInternetGateway", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EgressOnlyInternetGateway resources.
 */
export interface EgressOnlyInternetGatewayState {
    /**
     * The VPC ID to create in.
     */
    readonly vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EgressOnlyInternetGateway resource.
 */
export interface EgressOnlyInternetGatewayArgs {
    /**
     * The VPC ID to create in.
     */
    readonly vpcId: pulumi.Input<string>;
}

/**
 * The live EgressOnlyInternetGateway resource.
 */
export interface EgressOnlyInternetGatewayResult {
    /**
     * The VPC ID to create in.
     */
    readonly vpcId: string;
}
