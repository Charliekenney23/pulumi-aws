// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.
 */
export class SubnetGroup extends pulumi.CustomResource {
    /**
     * Get an existing SubnetGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubnetGroupState, opts?: pulumi.CustomResourceOptions): SubnetGroup {
        return new SubnetGroup(name, <any>state, { ...opts, id: id });
    }

    /**
     * The description of the Redshift Subnet group. Defaults to "Managed by Terraform".
     */
    public readonly description: pulumi.Output<string>;
    /**
     * The name of the Redshift Subnet group.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * An array of VPC subnet IDs.
     */
    public readonly subnetIds: pulumi.Output<string[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a SubnetGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubnetGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SubnetGroupArgs | SubnetGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SubnetGroupState = argsOrState as SubnetGroupState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["subnetIds"] = state ? state.subnetIds : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as SubnetGroupArgs | undefined;
            if (!args || args.subnetIds === undefined) {
                throw new Error("Missing required property 'subnetIds'");
            }
            inputs["description"] = (args ? args.description : undefined) || "Managed by Pulumi";
            inputs["name"] = args ? args.name : undefined;
            inputs["subnetIds"] = args ? args.subnetIds : undefined;
            inputs["tags"] = args ? args.tags : undefined;
        }
        super("aws:redshift/subnetGroup:SubnetGroup", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SubnetGroup resources.
 */
export interface SubnetGroupState {
    /**
     * The description of the Redshift Subnet group. Defaults to "Managed by Terraform".
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the Redshift Subnet group.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * An array of VPC subnet IDs.
     */
    readonly subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a SubnetGroup resource.
 */
export interface SubnetGroupArgs {
    /**
     * The description of the Redshift Subnet group. Defaults to "Managed by Terraform".
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the Redshift Subnet group.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * An array of VPC subnet IDs.
     */
    readonly subnetIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
