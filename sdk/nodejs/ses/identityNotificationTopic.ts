// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

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

    public static list(): rxjs.Observable<IdentityNotificationTopicResult> {
        return rxjs.from(
            pulumi.runtime
                .invoke('pulumi:pulumi:readStackResourceOutputs', {
                    stackName: pulumi.runtime.getStack(),
                    type: 'aws:ses/identityNotificationTopic:IdentityNotificationTopic',
                })
                .then(o => Object.keys(o.outputs).map(k => o.outputs[k]))
        ).pipe(
            operators.mergeAll(),
        );
    }

    /**
     * The identity for which the Amazon SNS topic will be set. You can specify an identity by using its name or by using its Amazon Resource Name (ARN).
     */
    public readonly identity: pulumi.Output<string>;
    /**
     * The type of notifications that will be published to the specified Amazon SNS topic. Valid Values: *Bounce*, *Complaint* or *Delivery*.
     */
    public readonly notificationType: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic. Can be set to "" (an empty string) to disable publishing.
     */
    public readonly topicArn: pulumi.Output<string | undefined>;

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
            const state: IdentityNotificationTopicState = argsOrState as IdentityNotificationTopicState | undefined;
            inputs["identity"] = state ? state.identity : undefined;
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
            inputs["notificationType"] = args ? args.notificationType : undefined;
            inputs["topicArn"] = args ? args.topicArn : undefined;
        }
        super("aws:ses/identityNotificationTopic:IdentityNotificationTopic", name, inputs, opts);
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
     * The type of notifications that will be published to the specified Amazon SNS topic. Valid Values: *Bounce*, *Complaint* or *Delivery*.
     */
    readonly notificationType: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic. Can be set to "" (an empty string) to disable publishing.
     */
    readonly topicArn?: pulumi.Input<string>;
}

/**
 * The live IdentityNotificationTopic resource.
 */
export interface IdentityNotificationTopicResult {
    /**
     * The identity for which the Amazon SNS topic will be set. You can specify an identity by using its name or by using its Amazon Resource Name (ARN).
     */
    readonly identity: string;
    /**
     * The type of notifications that will be published to the specified Amazon SNS topic. Valid Values: *Bounce*, *Complaint* or *Delivery*.
     */
    readonly notificationType: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic. Can be set to "" (an empty string) to disable publishing.
     */
    readonly topicArn?: string;
}
