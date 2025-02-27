// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a Cognito User Group resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const mainUserPool = new aws.cognito.UserPool("main", {});
 * const groupRole = new aws.iam.Role("group_role", {
 *     assumeRolePolicy: `{
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Sid": "",
 *       "Effect": "Allow",
 *       "Principal": {
 *         "Federated": "cognito-identity.amazonaws.com"
 *       },
 *       "Action": "sts:AssumeRoleWithWebIdentity",
 *       "Condition": {
 *         "StringEquals": {
 *           "cognito-identity.amazonaws.com:aud": "us-east-1:12345678-dead-beef-cafe-123456790ab"
 *         },
 *         "ForAnyValue:StringLike": {
 *           "cognito-identity.amazonaws.com:amr": "authenticated"
 *         }
 *       }
 *     }
 *   ]
 * }
 * `,
 * });
 * const mainUserGroup = new aws.cognito.UserGroup("main", {
 *     description: "Managed by Terraform",
 *     precedence: 42,
 *     roleArn: groupRole.arn,
 *     userPoolId: mainUserPool.id,
 * });
 * ```
 */
export class UserGroup extends pulumi.CustomResource {
    /**
     * Get an existing UserGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserGroupState, opts?: pulumi.CustomResourceOptions): UserGroup {
        return new UserGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:cognito/userGroup:UserGroup';

    /**
     * Returns true if the given object is an instance of UserGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserGroup.__pulumiType;
    }

    /**
     * The description of the user group.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of the user group.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The precedence of the user group.
     */
    public readonly precedence!: pulumi.Output<number | undefined>;
    /**
     * The ARN of the IAM role to be associated with the user group.
     */
    public readonly roleArn!: pulumi.Output<string | undefined>;
    /**
     * The user pool ID.
     */
    public readonly userPoolId!: pulumi.Output<string>;

    /**
     * Create a UserGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserGroupArgs | UserGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as UserGroupState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["precedence"] = state ? state.precedence : undefined;
            inputs["roleArn"] = state ? state.roleArn : undefined;
            inputs["userPoolId"] = state ? state.userPoolId : undefined;
        } else {
            const args = argsOrState as UserGroupArgs | undefined;
            if (!args || args.userPoolId === undefined) {
                throw new Error("Missing required property 'userPoolId'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["precedence"] = args ? args.precedence : undefined;
            inputs["roleArn"] = args ? args.roleArn : undefined;
            inputs["userPoolId"] = args ? args.userPoolId : undefined;
        }
        super(UserGroup.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering UserGroup resources.
 */
export interface UserGroupState {
    /**
     * The description of the user group.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the user group.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The precedence of the user group.
     */
    readonly precedence?: pulumi.Input<number>;
    /**
     * The ARN of the IAM role to be associated with the user group.
     */
    readonly roleArn?: pulumi.Input<string>;
    /**
     * The user pool ID.
     */
    readonly userPoolId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserGroup resource.
 */
export interface UserGroupArgs {
    /**
     * The description of the user group.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the user group.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The precedence of the user group.
     */
    readonly precedence?: pulumi.Input<number>;
    /**
     * The ARN of the IAM role to be associated with the user group.
     */
    readonly roleArn?: pulumi.Input<string>;
    /**
     * The user pool ID.
     */
    readonly userPoolId: pulumi.Input<string>;
}
