// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {PolicyDocument} from "./documents";
import {Role} from "./role";

/**
 * Provides an IAM role policy.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const testRole = new aws.iam.Role("test_role", {
 *     assumeRolePolicy: `{
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Action": "sts:AssumeRole",
 *       "Principal": {
 *         "Service": "ec2.amazonaws.com"
 *       },
 *       "Effect": "Allow",
 *       "Sid": ""
 *     }
 *   ]
 * }
 * `,
 * });
 * const testPolicy = new aws.iam.RolePolicy("test_policy", {
 *     policy: `{
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Action": [
 *         "ec2:Describe*"
 *       ],
 *       "Effect": "Allow",
 *       "Resource": "*"
 *     }
 *   ]
 * }
 * `,
 *     role: testRole.id,
 * });
 * ```
 */
export class RolePolicy extends pulumi.CustomResource {
    /**
     * Get an existing RolePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RolePolicyState, opts?: pulumi.CustomResourceOptions): RolePolicy {
        return new RolePolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:iam/rolePolicy:RolePolicy';

    /**
     * Returns true if the given object is an instance of RolePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RolePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RolePolicy.__pulumiType;
    }

    /**
     * The name of the role policy. If omitted, Terraform will
     * assign a random, unique name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    public readonly namePrefix!: pulumi.Output<string | undefined>;
    /**
     * The policy document. This is a JSON formatted string. For more information about building IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html)
     */
    public readonly policy!: pulumi.Output<string>;
    /**
     * The IAM role to attach to the policy.
     */
    public readonly role!: pulumi.Output<string>;

    /**
     * Create a RolePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RolePolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RolePolicyArgs | RolePolicyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as RolePolicyState | undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namePrefix"] = state ? state.namePrefix : undefined;
            inputs["policy"] = state ? state.policy : undefined;
            inputs["role"] = state ? state.role : undefined;
        } else {
            const args = argsOrState as RolePolicyArgs | undefined;
            if (!args || args.policy === undefined) {
                throw new Error("Missing required property 'policy'");
            }
            if (!args || args.role === undefined) {
                throw new Error("Missing required property 'role'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["namePrefix"] = args ? args.namePrefix : undefined;
            inputs["policy"] = args ? args.policy : undefined;
            inputs["role"] = args ? args.role : undefined;
        }
        super(RolePolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RolePolicy resources.
 */
export interface RolePolicyState {
    /**
     * The name of the role policy. If omitted, Terraform will
     * assign a random, unique name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * The policy document. This is a JSON formatted string. For more information about building IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html)
     */
    readonly policy?: pulumi.Input<string | PolicyDocument>;
    /**
     * The IAM role to attach to the policy.
     */
    readonly role?: pulumi.Input<string | Role>;
}

/**
 * The set of arguments for constructing a RolePolicy resource.
 */
export interface RolePolicyArgs {
    /**
     * The name of the role policy. If omitted, Terraform will
     * assign a random, unique name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * The policy document. This is a JSON formatted string. For more information about building IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html)
     */
    readonly policy: pulumi.Input<string | PolicyDocument>;
    /**
     * The IAM role to attach to the policy.
     */
    readonly role: pulumi.Input<string | Role>;
}
