// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

/**
 * Provides a Direct Connect LAG.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const hoge = new aws.directconnect.LinkAggregationGroup("hoge", {
 *     connectionsBandwidth: "1Gbps",
 *     forceDestroy: true,
 *     location: "EqDC2",
 *     name: "tf-dx-lag",
 *     numberOfConnections: 2,
 * });
 * ```
 */
export class LinkAggregationGroup extends pulumi.CustomResource {
    /**
     * Get an existing LinkAggregationGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkAggregationGroupState, opts?: pulumi.CustomResourceOptions): LinkAggregationGroup {
        return new LinkAggregationGroup(name, <any>state, { ...opts, id: id });
    }

    public static list(): rxjs.Observable<LinkAggregationGroupResult> {
        return rxjs.from(
            pulumi.runtime
                .invoke('pulumi:pulumi:readStackResourceOutputs', {
                    stackName: pulumi.runtime.getStack(),
                    type: 'aws:directconnect/linkAggregationGroup:LinkAggregationGroup',
                })
                .then(o => Object.keys(o.outputs).map(k => o.outputs[k]))
        ).pipe(
            operators.mergeAll(),
        );
    }

    /**
     * The ARN of the LAG.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The bandwidth of the individual physical connections bundled by the LAG. Available values: 1Gbps, 10Gbps. Case sensitive.
     */
    public readonly connectionsBandwidth: pulumi.Output<string>;
    /**
     * A boolean that indicates all connections associated with the LAG should be deleted so that the LAG can be destroyed without error. These objects are *not* recoverable.
     */
    public readonly forceDestroy: pulumi.Output<boolean | undefined>;
    /**
     * The AWS Direct Connect location in which the LAG should be allocated. See [DescribeLocations](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html) for the list of AWS Direct Connect locations. Use `locationCode`.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * The name of the LAG.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The number of physical connections initially provisioned and bundled by the LAG. Use `aws_dx_connection` and `aws_dx_connection_association` resources instead. Default connections will be removed as part of LAG creation automatically in future versions.
     */
    public readonly numberOfConnections: pulumi.Output<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a LinkAggregationGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkAggregationGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LinkAggregationGroupArgs | LinkAggregationGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: LinkAggregationGroupState = argsOrState as LinkAggregationGroupState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["connectionsBandwidth"] = state ? state.connectionsBandwidth : undefined;
            inputs["forceDestroy"] = state ? state.forceDestroy : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["numberOfConnections"] = state ? state.numberOfConnections : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as LinkAggregationGroupArgs | undefined;
            if (!args || args.connectionsBandwidth === undefined) {
                throw new Error("Missing required property 'connectionsBandwidth'");
            }
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            inputs["connectionsBandwidth"] = args ? args.connectionsBandwidth : undefined;
            inputs["forceDestroy"] = args ? args.forceDestroy : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["numberOfConnections"] = args ? args.numberOfConnections : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:directconnect/linkAggregationGroup:LinkAggregationGroup", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LinkAggregationGroup resources.
 */
export interface LinkAggregationGroupState {
    /**
     * The ARN of the LAG.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The bandwidth of the individual physical connections bundled by the LAG. Available values: 1Gbps, 10Gbps. Case sensitive.
     */
    readonly connectionsBandwidth?: pulumi.Input<string>;
    /**
     * A boolean that indicates all connections associated with the LAG should be deleted so that the LAG can be destroyed without error. These objects are *not* recoverable.
     */
    readonly forceDestroy?: pulumi.Input<boolean>;
    /**
     * The AWS Direct Connect location in which the LAG should be allocated. See [DescribeLocations](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html) for the list of AWS Direct Connect locations. Use `locationCode`.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the LAG.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The number of physical connections initially provisioned and bundled by the LAG. Use `aws_dx_connection` and `aws_dx_connection_association` resources instead. Default connections will be removed as part of LAG creation automatically in future versions.
     */
    readonly numberOfConnections?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a LinkAggregationGroup resource.
 */
export interface LinkAggregationGroupArgs {
    /**
     * The bandwidth of the individual physical connections bundled by the LAG. Available values: 1Gbps, 10Gbps. Case sensitive.
     */
    readonly connectionsBandwidth: pulumi.Input<string>;
    /**
     * A boolean that indicates all connections associated with the LAG should be deleted so that the LAG can be destroyed without error. These objects are *not* recoverable.
     */
    readonly forceDestroy?: pulumi.Input<boolean>;
    /**
     * The AWS Direct Connect location in which the LAG should be allocated. See [DescribeLocations](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html) for the list of AWS Direct Connect locations. Use `locationCode`.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the LAG.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The number of physical connections initially provisioned and bundled by the LAG. Use `aws_dx_connection` and `aws_dx_connection_association` resources instead. Default connections will be removed as part of LAG creation automatically in future versions.
     */
    readonly numberOfConnections?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The live LinkAggregationGroup resource.
 */
export interface LinkAggregationGroupResult {
    /**
     * The ARN of the LAG.
     */
    readonly arn: string;
    /**
     * The bandwidth of the individual physical connections bundled by the LAG. Available values: 1Gbps, 10Gbps. Case sensitive.
     */
    readonly connectionsBandwidth: string;
    /**
     * A boolean that indicates all connections associated with the LAG should be deleted so that the LAG can be destroyed without error. These objects are *not* recoverable.
     */
    readonly forceDestroy?: boolean;
    /**
     * The AWS Direct Connect location in which the LAG should be allocated. See [DescribeLocations](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html) for the list of AWS Direct Connect locations. Use `locationCode`.
     */
    readonly location: string;
    /**
     * The name of the LAG.
     */
    readonly name: string;
    /**
     * The number of physical connections initially provisioned and bundled by the LAG. Use `aws_dx_connection` and `aws_dx_connection_association` resources instead. Default connections will be removed as part of LAG creation automatically in future versions.
     */
    readonly numberOfConnections: number;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: {[key: string]: any};
}
