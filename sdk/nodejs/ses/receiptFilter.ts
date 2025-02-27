// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an SES receipt filter resource
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const filter = new aws.ses.ReceiptFilter("filter", {
 *     cidr: "10.10.10.10",
 *     policy: "Block",
 * });
 * ```
 */
export class ReceiptFilter extends pulumi.CustomResource {
    /**
     * Get an existing ReceiptFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReceiptFilterState, opts?: pulumi.CustomResourceOptions): ReceiptFilter {
        return new ReceiptFilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ses/receiptFilter:ReceiptFilter';

    /**
     * Returns true if the given object is an instance of ReceiptFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReceiptFilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReceiptFilter.__pulumiType;
    }

    /**
     * The IP address or address range to filter, in CIDR notation
     */
    public readonly cidr!: pulumi.Output<string>;
    /**
     * The name of the filter
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Block or Allow
     */
    public readonly policy!: pulumi.Output<string>;

    /**
     * Create a ReceiptFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReceiptFilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ReceiptFilterArgs | ReceiptFilterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ReceiptFilterState | undefined;
            inputs["cidr"] = state ? state.cidr : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["policy"] = state ? state.policy : undefined;
        } else {
            const args = argsOrState as ReceiptFilterArgs | undefined;
            if (!args || args.cidr === undefined) {
                throw new Error("Missing required property 'cidr'");
            }
            if (!args || args.policy === undefined) {
                throw new Error("Missing required property 'policy'");
            }
            inputs["cidr"] = args ? args.cidr : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["policy"] = args ? args.policy : undefined;
        }
        super(ReceiptFilter.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ReceiptFilter resources.
 */
export interface ReceiptFilterState {
    /**
     * The IP address or address range to filter, in CIDR notation
     */
    readonly cidr?: pulumi.Input<string>;
    /**
     * The name of the filter
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Block or Allow
     */
    readonly policy?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ReceiptFilter resource.
 */
export interface ReceiptFilterArgs {
    /**
     * The IP address or address range to filter, in CIDR notation
     */
    readonly cidr: pulumi.Input<string>;
    /**
     * The name of the filter
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Block or Allow
     */
    readonly policy: pulumi.Input<string>;
}
