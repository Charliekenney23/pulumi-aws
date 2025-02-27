// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Resource for managing SES Identity Notification Topics
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const test = new aws.ses.IdentityNotificationTopic("test", {
 *     identity: aws_ses_domain_identity_example.domain,
 *     includeOriginalHeaders: true,
 *     notificationType: "Bounce",
 *     topicArn: aws_sns_topic_example.arn,
 * });
 * ```
 */
export class IdentityNotificationTopic extends pulumi.CustomResource {
    /**
     * Get an existing IdentityNotificationTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityNotificationTopicState, opts?: pulumi.CustomResourceOptions): IdentityNotificationTopic {
        return new IdentityNotificationTopic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ses/identityNotificationTopic:IdentityNotificationTopic';

    /**
     * Returns true if the given object is an instance of IdentityNotificationTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityNotificationTopic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityNotificationTopic.__pulumiType;
    }

    /**
     * The identity for which the Amazon SNS topic will be set. You can specify an identity by using its name or by using its Amazon Resource Name (ARN).
     */
    public readonly identity!: pulumi.Output<string>;
    /**
     * Whether SES should include original email headers in SNS notifications of this type. *false* by default.
     */
    public readonly includeOriginalHeaders!: pulumi.Output<boolean | undefined>;
    /**
     * The type of notifications that will be published to the specified Amazon SNS topic. Valid Values: *Bounce*, *Complaint* or *Delivery*.
     */
    public readonly notificationType!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic. Can be set to "" (an empty string) to disable publishing.
     */
    public readonly topicArn!: pulumi.Output<string | undefined>;

    /**
     * Create a IdentityNotificationTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityNotificationTopicArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityNotificationTopicArgs | IdentityNotificationTopicState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as IdentityNotificationTopicState | undefined;
            inputs["identity"] = state ? state.identity : undefined;
            inputs["includeOriginalHeaders"] = state ? state.includeOriginalHeaders : undefined;
            inputs["notificationType"] = state ? state.notificationType : undefined;
            inputs["topicArn"] = state ? state.topicArn : undefined;
        } else {
            const args = argsOrState as IdentityNotificationTopicArgs | undefined;
            if (!args || args.identity === undefined) {
                throw new Error("Missing required property 'identity'");
            }
            if (!args || args.notificationType === undefined) {
                throw new Error("Missing required property 'notificationType'");
            }
            inputs["identity"] = args ? args.identity : undefined;
            inputs["includeOriginalHeaders"] = args ? args.includeOriginalHeaders : undefined;
            inputs["notificationType"] = args ? args.notificationType : undefined;
            inputs["topicArn"] = args ? args.topicArn : undefined;
        }
        super(IdentityNotificationTopic.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IdentityNotificationTopic resources.
 */
export interface IdentityNotificationTopicState {
    /**
     * The identity for which the Amazon SNS topic will be set. You can specify an identity by using its name or by using its Amazon Resource Name (ARN).
     */
    readonly identity?: pulumi.Input<string>;
    /**
     * Whether SES should include original email headers in SNS notifications of this type. *false* by default.
     */
    readonly includeOriginalHeaders?: pulumi.Input<boolean>;
    /**
     * The type of notifications that will be published to the specified Amazon SNS topic. Valid Values: *Bounce*, *Complaint* or *Delivery*.
     */
    readonly notificationType?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic. Can be set to "" (an empty string) to disable publishing.
     */
    readonly topicArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IdentityNotificationTopic resource.
 */
export interface IdentityNotificationTopicArgs {
    /**
     * The identity for which the Amazon SNS topic will be set. You can specify an identity by using its name or by using its Amazon Resource Name (ARN).
     */
    readonly identity: pulumi.Input<string>;
    /**
     * Whether SES should include original email headers in SNS notifications of this type. *false* by default.
     */
    readonly includeOriginalHeaders?: pulumi.Input<boolean>;
    /**
     * The type of notifications that will be published to the specified Amazon SNS topic. Valid Values: *Bounce*, *Complaint* or *Delivery*.
     */
    readonly notificationType: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic. Can be set to "" (an empty string) to disable publishing.
     */
    readonly topicArn?: pulumi.Input<string>;
}
