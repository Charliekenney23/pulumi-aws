// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an SSM Patch Group resource
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const production = new aws.ssm.PatchBaseline("production", {
 *     approvedPatches: ["KB123456"],
 * });
 * const patchgroup = new aws.ssm.PatchGroup("patchgroup", {
 *     baselineId: production.id,
 *     patchGroup: "patch-group-name",
 * });
 * ```
 */
export class PatchGroup extends pulumi.CustomResource {
    /**
     * Get an existing PatchGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PatchGroupState, opts?: pulumi.CustomResourceOptions): PatchGroup {
        return new PatchGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ssm/patchGroup:PatchGroup';

    /**
     * Returns true if the given object is an instance of PatchGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PatchGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PatchGroup.__pulumiType;
    }

    /**
     * The ID of the patch baseline to register the patch group with.
     */
    public readonly baselineId!: pulumi.Output<string>;
    /**
     * The name of the patch group that should be registered with the patch baseline.
     */
    public readonly patchGroup!: pulumi.Output<string>;

    /**
     * Create a PatchGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PatchGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PatchGroupArgs | PatchGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PatchGroupState | undefined;
            inputs["baselineId"] = state ? state.baselineId : undefined;
            inputs["patchGroup"] = state ? state.patchGroup : undefined;
        } else {
            const args = argsOrState as PatchGroupArgs | undefined;
            if (!args || args.baselineId === undefined) {
                throw new Error("Missing required property 'baselineId'");
            }
            if (!args || args.patchGroup === undefined) {
                throw new Error("Missing required property 'patchGroup'");
            }
            inputs["baselineId"] = args ? args.baselineId : undefined;
            inputs["patchGroup"] = args ? args.patchGroup : undefined;
        }
        super(PatchGroup.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PatchGroup resources.
 */
export interface PatchGroupState {
    /**
     * The ID of the patch baseline to register the patch group with.
     */
    readonly baselineId?: pulumi.Input<string>;
    /**
     * The name of the patch group that should be registered with the patch baseline.
     */
    readonly patchGroup?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PatchGroup resource.
 */
export interface PatchGroupArgs {
    /**
     * The ID of the patch baseline to register the patch group with.
     */
    readonly baselineId: pulumi.Input<string>;
    /**
     * The name of the patch group that should be registered with the patch baseline.
     */
    readonly patchGroup: pulumi.Input<string>;
}
