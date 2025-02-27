// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a Resource Access Manager (RAM) principal association.
 * 
 * > *NOTE:* For an AWS Account ID principal, the target account must accept the RAM association invitation after resource creation.
 * 
 * ## Example Usage
 * 
 * ### AWS Account ID
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const exampleResourceShare = new aws.ram.ResourceShare("example", {
 *     // ... other configuration ...
 *     allowExternalPrincipals: true,
 * });
 * const examplePrincipalAssociation = new aws.ram.PrincipalAssociation("example", {
 *     principal: "111111111111",
 *     resourceShareArn: exampleResourceShare.arn,
 * });
 * ```
 * 
 * ### AWS Organization
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.ram.PrincipalAssociation("example", {
 *     principal: aws_organizations_organization_example.arn,
 *     resourceShareArn: aws_ram_resource_share_example.arn,
 * });
 * ```
 */
export class PrincipalAssociation extends pulumi.CustomResource {
    /**
     * Get an existing PrincipalAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrincipalAssociationState, opts?: pulumi.CustomResourceOptions): PrincipalAssociation {
        return new PrincipalAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ram/principalAssociation:PrincipalAssociation';

    /**
     * Returns true if the given object is an instance of PrincipalAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrincipalAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrincipalAssociation.__pulumiType;
    }

    /**
     * The principal to associate with the resource share. Possible values are an AWS account ID, an AWS Organizations Organization ARN, or an AWS Organizations Organization Unit ARN.
     */
    public readonly principal!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    public readonly resourceShareArn!: pulumi.Output<string>;

    /**
     * Create a PrincipalAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrincipalAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrincipalAssociationArgs | PrincipalAssociationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PrincipalAssociationState | undefined;
            inputs["principal"] = state ? state.principal : undefined;
            inputs["resourceShareArn"] = state ? state.resourceShareArn : undefined;
        } else {
            const args = argsOrState as PrincipalAssociationArgs | undefined;
            if (!args || args.principal === undefined) {
                throw new Error("Missing required property 'principal'");
            }
            if (!args || args.resourceShareArn === undefined) {
                throw new Error("Missing required property 'resourceShareArn'");
            }
            inputs["principal"] = args ? args.principal : undefined;
            inputs["resourceShareArn"] = args ? args.resourceShareArn : undefined;
        }
        super(PrincipalAssociation.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PrincipalAssociation resources.
 */
export interface PrincipalAssociationState {
    /**
     * The principal to associate with the resource share. Possible values are an AWS account ID, an AWS Organizations Organization ARN, or an AWS Organizations Organization Unit ARN.
     */
    readonly principal?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    readonly resourceShareArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PrincipalAssociation resource.
 */
export interface PrincipalAssociationArgs {
    /**
     * The principal to associate with the resource share. Possible values are an AWS account ID, an AWS Organizations Organization ARN, or an AWS Organizations Organization Unit ARN.
     */
    readonly principal: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    readonly resourceShareArn: pulumi.Input<string>;
}
