// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a Inspector resource group
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const bar = new aws.inspector.ResourceGroup("bar", {
 *     tags: {
 *         Env: "bar",
 *         Name: "foo",
 *     },
 * });
 * ```
 */
export class ResourceGroup extends pulumi.CustomResource {
    /**
     * Get an existing ResourceGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResourceGroupState, opts?: pulumi.CustomResourceOptions): ResourceGroup {
        return new ResourceGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:inspector/resourceGroup:ResourceGroup';

    /**
     * Returns true if the given object is an instance of ResourceGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ResourceGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ResourceGroup.__pulumiType;
    }

    /**
     * The resource group ARN.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The tags on your EC2 Instance.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a ResourceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourceGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ResourceGroupArgs | ResourceGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ResourceGroupState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ResourceGroupArgs | undefined;
            if (!args || args.tags === undefined) {
                throw new Error("Missing required property 'tags'");
            }
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super(ResourceGroup.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ResourceGroup resources.
 */
export interface ResourceGroupState {
    /**
     * The resource group ARN.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The tags on your EC2 Instance.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a ResourceGroup resource.
 */
export interface ResourceGroupArgs {
    /**
     * The tags on your EC2 Instance.
     */
    readonly tags: pulumi.Input<{[key: string]: any}>;
}
