// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

/**
 * Provides an AutoScaling Attachment resource.
 * 
 * > **NOTE on AutoScaling Groups and ASG Attachments:** Terraform currently provides
 * both a standalone ASG Attachment resource (describing an ASG attached to
 * an ELB), and an AutoScaling Group resource with
 * `load_balancers` defined in-line. At this time you cannot use an ASG with in-line
 * load balancers in conjunction with an ASG Attachment resource. Doing so will cause a
 * conflict and will overwrite attachments.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * // Create a new load balancer attachment
 * const asgAttachmentBar = new aws.autoscaling.Attachment("asg_attachment_bar", {
 *     autoscalingGroupName: aws_autoscaling_group_asg.id,
 *     elb: aws_elb_bar.id,
 * });
 * ```
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * // Create a new ALB Target Group attachment
 * const asgAttachmentBar = new aws.autoscaling.Attachment("asg_attachment_bar", {
 *     albTargetGroupArn: aws_alb_target_group_test.arn,
 *     autoscalingGroupName: aws_autoscaling_group_asg.id,
 * });
 * ```
 */
export class Attachment extends pulumi.CustomResource {
    /**
     * Get an existing Attachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AttachmentState, opts?: pulumi.CustomResourceOptions): Attachment {
        return new Attachment(name, <any>state, { ...opts, id: id });
    }

    public static list(): rxjs.Observable<AttachmentResult> {
        return rxjs.from(
            pulumi.runtime
                .invoke('pulumi:pulumi:readStackResourceOutputs', {
                    stackName: pulumi.runtime.getStack(),
                    type: 'aws:autoscaling/attachment:Attachment',
                })
                .then(o => Object.keys(o.outputs).map(k => o.outputs[k]))
        ).pipe(
            operators.mergeAll(),
        );
    }

    /**
     * The ARN of an ALB Target Group.
     */
    public readonly albTargetGroupArn: pulumi.Output<string | undefined>;
    /**
     * Name of ASG to associate with the ELB.
     */
    public readonly autoscalingGroupName: pulumi.Output<string>;
    /**
     * The name of the ELB.
     */
    public readonly elb: pulumi.Output<string | undefined>;

    /**
     * Create a Attachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AttachmentArgs | AttachmentState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: AttachmentState = argsOrState as AttachmentState | undefined;
            inputs["albTargetGroupArn"] = state ? state.albTargetGroupArn : undefined;
            inputs["autoscalingGroupName"] = state ? state.autoscalingGroupName : undefined;
            inputs["elb"] = state ? state.elb : undefined;
        } else {
            const args = argsOrState as AttachmentArgs | undefined;
            if (!args || args.autoscalingGroupName === undefined) {
                throw new Error("Missing required property 'autoscalingGroupName'");
            }
            inputs["albTargetGroupArn"] = args ? args.albTargetGroupArn : undefined;
            inputs["autoscalingGroupName"] = args ? args.autoscalingGroupName : undefined;
            inputs["elb"] = args ? args.elb : undefined;
        }
        super("aws:autoscaling/attachment:Attachment", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Attachment resources.
 */
export interface AttachmentState {
    /**
     * The ARN of an ALB Target Group.
     */
    readonly albTargetGroupArn?: pulumi.Input<string>;
    /**
     * Name of ASG to associate with the ELB.
     */
    readonly autoscalingGroupName?: pulumi.Input<string>;
    /**
     * The name of the ELB.
     */
    readonly elb?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Attachment resource.
 */
export interface AttachmentArgs {
    /**
     * The ARN of an ALB Target Group.
     */
    readonly albTargetGroupArn?: pulumi.Input<string>;
    /**
     * Name of ASG to associate with the ELB.
     */
    readonly autoscalingGroupName: pulumi.Input<string>;
    /**
     * The name of the ELB.
     */
    readonly elb?: pulumi.Input<string>;
}

/**
 * The live Attachment resource.
 */
export interface AttachmentResult {
    /**
     * The ARN of an ALB Target Group.
     */
    readonly albTargetGroupArn?: string;
    /**
     * Name of ASG to associate with the ELB.
     */
    readonly autoscalingGroupName: string;
    /**
     * The name of the ELB.
     */
    readonly elb?: string;
}
