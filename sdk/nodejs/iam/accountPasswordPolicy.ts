// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * > **Note:** There is only a single policy allowed per AWS account. An existing policy will be lost when using this resource as an effect of this limitation.
 * 
 * Manages Password Policy for the AWS Account.
 * See more about [Account Password Policy](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html)
 * in the official AWS docs.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const strict = new aws.iam.AccountPasswordPolicy("strict", {
 *     allowUsersToChangePassword: true,
 *     minimumPasswordLength: 8,
 *     requireLowercaseCharacters: true,
 *     requireNumbers: true,
 *     requireSymbols: true,
 *     requireUppercaseCharacters: true,
 * });
 * ```
 */
export class AccountPasswordPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AccountPasswordPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccountPasswordPolicyState, opts?: pulumi.CustomResourceOptions): AccountPasswordPolicy {
        return new AccountPasswordPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:iam/accountPasswordPolicy:AccountPasswordPolicy';

    /**
     * Returns true if the given object is an instance of AccountPasswordPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccountPasswordPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccountPasswordPolicy.__pulumiType;
    }

    /**
     * Whether to allow users to change their own password
     */
    public readonly allowUsersToChangePassword!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether passwords in the account expire.
     * Returns `true` if `max_password_age` contains a value greater than `0`.
     * Returns `false` if it is `0` or _not present_.
     */
    public /*out*/ readonly expirePasswords!: pulumi.Output<boolean>;
    /**
     * Whether users are prevented from setting a new password after their password has expired
     * (i.e. require administrator reset)
     */
    public readonly hardExpiry!: pulumi.Output<boolean>;
    /**
     * The number of days that an user password is valid.
     */
    public readonly maxPasswordAge!: pulumi.Output<number>;
    /**
     * Minimum length to require for user passwords.
     */
    public readonly minimumPasswordLength!: pulumi.Output<number | undefined>;
    /**
     * The number of previous passwords that users are prevented from reusing.
     */
    public readonly passwordReusePrevention!: pulumi.Output<number>;
    /**
     * Whether to require lowercase characters for user passwords.
     */
    public readonly requireLowercaseCharacters!: pulumi.Output<boolean>;
    /**
     * Whether to require numbers for user passwords.
     */
    public readonly requireNumbers!: pulumi.Output<boolean>;
    /**
     * Whether to require symbols for user passwords.
     */
    public readonly requireSymbols!: pulumi.Output<boolean>;
    /**
     * Whether to require uppercase characters for user passwords.
     */
    public readonly requireUppercaseCharacters!: pulumi.Output<boolean>;

    /**
     * Create a AccountPasswordPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AccountPasswordPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccountPasswordPolicyArgs | AccountPasswordPolicyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AccountPasswordPolicyState | undefined;
            inputs["allowUsersToChangePassword"] = state ? state.allowUsersToChangePassword : undefined;
            inputs["expirePasswords"] = state ? state.expirePasswords : undefined;
            inputs["hardExpiry"] = state ? state.hardExpiry : undefined;
            inputs["maxPasswordAge"] = state ? state.maxPasswordAge : undefined;
            inputs["minimumPasswordLength"] = state ? state.minimumPasswordLength : undefined;
            inputs["passwordReusePrevention"] = state ? state.passwordReusePrevention : undefined;
            inputs["requireLowercaseCharacters"] = state ? state.requireLowercaseCharacters : undefined;
            inputs["requireNumbers"] = state ? state.requireNumbers : undefined;
            inputs["requireSymbols"] = state ? state.requireSymbols : undefined;
            inputs["requireUppercaseCharacters"] = state ? state.requireUppercaseCharacters : undefined;
        } else {
            const args = argsOrState as AccountPasswordPolicyArgs | undefined;
            inputs["allowUsersToChangePassword"] = args ? args.allowUsersToChangePassword : undefined;
            inputs["hardExpiry"] = args ? args.hardExpiry : undefined;
            inputs["maxPasswordAge"] = args ? args.maxPasswordAge : undefined;
            inputs["minimumPasswordLength"] = args ? args.minimumPasswordLength : undefined;
            inputs["passwordReusePrevention"] = args ? args.passwordReusePrevention : undefined;
            inputs["requireLowercaseCharacters"] = args ? args.requireLowercaseCharacters : undefined;
            inputs["requireNumbers"] = args ? args.requireNumbers : undefined;
            inputs["requireSymbols"] = args ? args.requireSymbols : undefined;
            inputs["requireUppercaseCharacters"] = args ? args.requireUppercaseCharacters : undefined;
            inputs["expirePasswords"] = undefined /*out*/;
        }
        super(AccountPasswordPolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AccountPasswordPolicy resources.
 */
export interface AccountPasswordPolicyState {
    /**
     * Whether to allow users to change their own password
     */
    readonly allowUsersToChangePassword?: pulumi.Input<boolean>;
    /**
     * Indicates whether passwords in the account expire.
     * Returns `true` if `max_password_age` contains a value greater than `0`.
     * Returns `false` if it is `0` or _not present_.
     */
    readonly expirePasswords?: pulumi.Input<boolean>;
    /**
     * Whether users are prevented from setting a new password after their password has expired
     * (i.e. require administrator reset)
     */
    readonly hardExpiry?: pulumi.Input<boolean>;
    /**
     * The number of days that an user password is valid.
     */
    readonly maxPasswordAge?: pulumi.Input<number>;
    /**
     * Minimum length to require for user passwords.
     */
    readonly minimumPasswordLength?: pulumi.Input<number>;
    /**
     * The number of previous passwords that users are prevented from reusing.
     */
    readonly passwordReusePrevention?: pulumi.Input<number>;
    /**
     * Whether to require lowercase characters for user passwords.
     */
    readonly requireLowercaseCharacters?: pulumi.Input<boolean>;
    /**
     * Whether to require numbers for user passwords.
     */
    readonly requireNumbers?: pulumi.Input<boolean>;
    /**
     * Whether to require symbols for user passwords.
     */
    readonly requireSymbols?: pulumi.Input<boolean>;
    /**
     * Whether to require uppercase characters for user passwords.
     */
    readonly requireUppercaseCharacters?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a AccountPasswordPolicy resource.
 */
export interface AccountPasswordPolicyArgs {
    /**
     * Whether to allow users to change their own password
     */
    readonly allowUsersToChangePassword?: pulumi.Input<boolean>;
    /**
     * Whether users are prevented from setting a new password after their password has expired
     * (i.e. require administrator reset)
     */
    readonly hardExpiry?: pulumi.Input<boolean>;
    /**
     * The number of days that an user password is valid.
     */
    readonly maxPasswordAge?: pulumi.Input<number>;
    /**
     * Minimum length to require for user passwords.
     */
    readonly minimumPasswordLength?: pulumi.Input<number>;
    /**
     * The number of previous passwords that users are prevented from reusing.
     */
    readonly passwordReusePrevention?: pulumi.Input<number>;
    /**
     * Whether to require lowercase characters for user passwords.
     */
    readonly requireLowercaseCharacters?: pulumi.Input<boolean>;
    /**
     * Whether to require numbers for user passwords.
     */
    readonly requireNumbers?: pulumi.Input<boolean>;
    /**
     * Whether to require symbols for user passwords.
     */
    readonly requireSymbols?: pulumi.Input<boolean>;
    /**
     * Whether to require uppercase characters for user passwords.
     */
    readonly requireUppercaseCharacters?: pulumi.Input<boolean>;
}
