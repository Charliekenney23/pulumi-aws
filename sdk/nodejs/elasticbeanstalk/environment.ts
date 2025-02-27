// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {Application} from "./application";
import {ApplicationVersion} from "./applicationVersion";

/**
 * Provides an Elastic Beanstalk Environment Resource. Elastic Beanstalk allows
 * you to deploy and manage applications in the AWS cloud without worrying about
 * the infrastructure that runs those applications.
 * 
 * Environments are often things such as `development`, `integration`, or
 * `production`.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const tftest = new aws.elasticbeanstalk.Application("tftest", {
 *     description: "tf-test-desc",
 * });
 * const tfenvtest = new aws.elasticbeanstalk.Environment("tfenvtest", {
 *     application: tftest.name,
 *     solutionStackName: "64bit Amazon Linux 2015.03 v2.0.3 running Go 1.4",
 * });
 * ```
 * 
 * ## Option Settings
 * 
 * Some options can be stack-specific, check [AWS Docs](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options-general.html)
 * for supported options and examples.
 * 
 * The `setting` and `all_settings` mappings support the following format:
 * 
 * * `namespace` - unique namespace identifying the option's associated AWS resource
 * * `name` - name of the configuration option
 * * `value` - value for the configuration option
 * * `resource` - (Optional) resource name for [scheduled action](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options-general.html#command-options-general-autoscalingscheduledaction)
 * 
 * ### Example With Options
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const tftest = new aws.elasticbeanstalk.Application("tftest", {
 *     description: "tf-test-desc",
 * });
 * const tfenvtest = new aws.elasticbeanstalk.Environment("tfenvtest", {
 *     application: tftest.name,
 *     settings: [
 *         {
 *             name: "VPCId",
 *             namespace: "aws:ec2:vpc",
 *             value: "vpc-xxxxxxxx",
 *         },
 *         {
 *             name: "Subnets",
 *             namespace: "aws:ec2:vpc",
 *             value: "subnet-xxxxxxxx",
 *         },
 *     ],
 *     solutionStackName: "64bit Amazon Linux 2015.03 v2.0.3 running Go 1.4",
 * });
 * ```
 */
export class Environment extends pulumi.CustomResource {
    /**
     * Get an existing Environment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnvironmentState, opts?: pulumi.CustomResourceOptions): Environment {
        return new Environment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:elasticbeanstalk/environment:Environment';

    /**
     * Returns true if the given object is an instance of Environment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Environment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Environment.__pulumiType;
    }

    /**
     * List of all option settings configured in the Environment. These
     * are a combination of default settings and their overrides from `setting` in
     * the configuration.
     */
    public /*out*/ readonly allSettings!: pulumi.Output<{ name: string, namespace: string, resource?: string, value: string }[]>;
    /**
     * Name of the application that contains the version
     * to be deployed
     */
    public readonly application!: pulumi.Output<Application>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The autoscaling groups used by this environment.
     */
    public /*out*/ readonly autoscalingGroups!: pulumi.Output<string[]>;
    /**
     * Fully qualified DNS name for the Environment.
     */
    public /*out*/ readonly cname!: pulumi.Output<string>;
    /**
     * Prefix to use for the fully qualified DNS name of
     * the Environment.
     */
    public readonly cnamePrefix!: pulumi.Output<string>;
    /**
     * Short description of the Environment
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Instances used by this environment.
     */
    public /*out*/ readonly instances!: pulumi.Output<string[]>;
    /**
     * Launch configurations in use by this environment.
     */
    public /*out*/ readonly launchConfigurations!: pulumi.Output<string[]>;
    /**
     * Elastic load balancers in use by this environment.
     */
    public /*out*/ readonly loadBalancers!: pulumi.Output<string[]>;
    /**
     * A unique name for this Environment. This name is used
     * in the application URL
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The [ARN][2] of the Elastic Beanstalk [Platform][3]
     * to use in deployment
     */
    public readonly platformArn!: pulumi.Output<string>;
    /**
     * The time between polling the AWS API to
     * check if changes have been applied. Use this to adjust the rate of API calls
     * for any `create` or `update` action. Minimum `10s`, maximum `180s`. Omit this to
     * use the default behavior, which is an exponential backoff
     */
    public readonly pollInterval!: pulumi.Output<string | undefined>;
    /**
     * SQS queues in use by this environment.
     */
    public /*out*/ readonly queues!: pulumi.Output<string[]>;
    /**
     * Option settings to configure the new Environment. These
     * override specific values that are set as defaults. The format is detailed
     * below in Option Settings
     */
    public readonly settings!: pulumi.Output<{ name: string, namespace: string, resource?: string, value: string }[] | undefined>;
    /**
     * A solution stack to base your environment
     * off of. Example stacks can be found in the [Amazon API documentation][1]
     */
    public readonly solutionStackName!: pulumi.Output<string>;
    /**
     * A set of tags to apply to the Environment.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The name of the Elastic Beanstalk Configuration
     * template to use in deployment
     */
    public readonly templateName!: pulumi.Output<string | undefined>;
    /**
     * Elastic Beanstalk Environment tier. Valid values are `Worker`
     * or `WebServer`. If tier is left blank `WebServer` will be used.
     */
    public readonly tier!: pulumi.Output<string | undefined>;
    /**
     * Autoscaling triggers in use by this environment.
     */
    public /*out*/ readonly triggers!: pulumi.Output<string[]>;
    /**
     * The name of the Elastic Beanstalk Application Version
     * to use in deployment.
     */
    public readonly version!: pulumi.Output<ApplicationVersion>;
    /**
     * The maximum
     * [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
     * wait for an Elastic Beanstalk Environment to be in a ready state before timing
     * out.
     */
    public readonly waitForReadyTimeout!: pulumi.Output<string | undefined>;

    /**
     * Create a Environment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EnvironmentArgs | EnvironmentState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EnvironmentState | undefined;
            inputs["allSettings"] = state ? state.allSettings : undefined;
            inputs["application"] = state ? state.application : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["autoscalingGroups"] = state ? state.autoscalingGroups : undefined;
            inputs["cname"] = state ? state.cname : undefined;
            inputs["cnamePrefix"] = state ? state.cnamePrefix : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["instances"] = state ? state.instances : undefined;
            inputs["launchConfigurations"] = state ? state.launchConfigurations : undefined;
            inputs["loadBalancers"] = state ? state.loadBalancers : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["platformArn"] = state ? state.platformArn : undefined;
            inputs["pollInterval"] = state ? state.pollInterval : undefined;
            inputs["queues"] = state ? state.queues : undefined;
            inputs["settings"] = state ? state.settings : undefined;
            inputs["solutionStackName"] = state ? state.solutionStackName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["templateName"] = state ? state.templateName : undefined;
            inputs["tier"] = state ? state.tier : undefined;
            inputs["triggers"] = state ? state.triggers : undefined;
            inputs["version"] = state ? state.version : undefined;
            inputs["waitForReadyTimeout"] = state ? state.waitForReadyTimeout : undefined;
        } else {
            const args = argsOrState as EnvironmentArgs | undefined;
            if (!args || args.application === undefined) {
                throw new Error("Missing required property 'application'");
            }
            inputs["application"] = args ? args.application : undefined;
            inputs["cnamePrefix"] = args ? args.cnamePrefix : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["platformArn"] = args ? args.platformArn : undefined;
            inputs["pollInterval"] = args ? args.pollInterval : undefined;
            inputs["settings"] = args ? args.settings : undefined;
            inputs["solutionStackName"] = args ? args.solutionStackName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["templateName"] = args ? args.templateName : undefined;
            inputs["tier"] = args ? args.tier : undefined;
            inputs["version"] = args ? args.version : undefined;
            inputs["waitForReadyTimeout"] = args ? args.waitForReadyTimeout : undefined;
            inputs["allSettings"] = undefined /*out*/;
            inputs["arn"] = undefined /*out*/;
            inputs["autoscalingGroups"] = undefined /*out*/;
            inputs["cname"] = undefined /*out*/;
            inputs["instances"] = undefined /*out*/;
            inputs["launchConfigurations"] = undefined /*out*/;
            inputs["loadBalancers"] = undefined /*out*/;
            inputs["queues"] = undefined /*out*/;
            inputs["triggers"] = undefined /*out*/;
        }
        super(Environment.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Environment resources.
 */
export interface EnvironmentState {
    /**
     * List of all option settings configured in the Environment. These
     * are a combination of default settings and their overrides from `setting` in
     * the configuration.
     */
    readonly allSettings?: pulumi.Input<pulumi.Input<{ name: pulumi.Input<string>, namespace: pulumi.Input<string>, resource?: pulumi.Input<string>, value: pulumi.Input<string> }>[]>;
    /**
     * Name of the application that contains the version
     * to be deployed
     */
    readonly application?: pulumi.Input<Application>;
    readonly arn?: pulumi.Input<string>;
    /**
     * The autoscaling groups used by this environment.
     */
    readonly autoscalingGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Fully qualified DNS name for the Environment.
     */
    readonly cname?: pulumi.Input<string>;
    /**
     * Prefix to use for the fully qualified DNS name of
     * the Environment.
     */
    readonly cnamePrefix?: pulumi.Input<string>;
    /**
     * Short description of the Environment
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Instances used by this environment.
     */
    readonly instances?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Launch configurations in use by this environment.
     */
    readonly launchConfigurations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Elastic load balancers in use by this environment.
     */
    readonly loadBalancers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A unique name for this Environment. This name is used
     * in the application URL
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The [ARN][2] of the Elastic Beanstalk [Platform][3]
     * to use in deployment
     */
    readonly platformArn?: pulumi.Input<string>;
    /**
     * The time between polling the AWS API to
     * check if changes have been applied. Use this to adjust the rate of API calls
     * for any `create` or `update` action. Minimum `10s`, maximum `180s`. Omit this to
     * use the default behavior, which is an exponential backoff
     */
    readonly pollInterval?: pulumi.Input<string>;
    /**
     * SQS queues in use by this environment.
     */
    readonly queues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Option settings to configure the new Environment. These
     * override specific values that are set as defaults. The format is detailed
     * below in Option Settings
     */
    readonly settings?: pulumi.Input<pulumi.Input<{ name: pulumi.Input<string>, namespace: pulumi.Input<string>, resource?: pulumi.Input<string>, value: pulumi.Input<string> }>[]>;
    /**
     * A solution stack to base your environment
     * off of. Example stacks can be found in the [Amazon API documentation][1]
     */
    readonly solutionStackName?: pulumi.Input<string>;
    /**
     * A set of tags to apply to the Environment.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The name of the Elastic Beanstalk Configuration
     * template to use in deployment
     */
    readonly templateName?: pulumi.Input<string>;
    /**
     * Elastic Beanstalk Environment tier. Valid values are `Worker`
     * or `WebServer`. If tier is left blank `WebServer` will be used.
     */
    readonly tier?: pulumi.Input<string>;
    /**
     * Autoscaling triggers in use by this environment.
     */
    readonly triggers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Elastic Beanstalk Application Version
     * to use in deployment.
     */
    readonly version?: pulumi.Input<ApplicationVersion>;
    /**
     * The maximum
     * [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
     * wait for an Elastic Beanstalk Environment to be in a ready state before timing
     * out.
     */
    readonly waitForReadyTimeout?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Environment resource.
 */
export interface EnvironmentArgs {
    /**
     * Name of the application that contains the version
     * to be deployed
     */
    readonly application: pulumi.Input<Application>;
    /**
     * Prefix to use for the fully qualified DNS name of
     * the Environment.
     */
    readonly cnamePrefix?: pulumi.Input<string>;
    /**
     * Short description of the Environment
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A unique name for this Environment. This name is used
     * in the application URL
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The [ARN][2] of the Elastic Beanstalk [Platform][3]
     * to use in deployment
     */
    readonly platformArn?: pulumi.Input<string>;
    /**
     * The time between polling the AWS API to
     * check if changes have been applied. Use this to adjust the rate of API calls
     * for any `create` or `update` action. Minimum `10s`, maximum `180s`. Omit this to
     * use the default behavior, which is an exponential backoff
     */
    readonly pollInterval?: pulumi.Input<string>;
    /**
     * Option settings to configure the new Environment. These
     * override specific values that are set as defaults. The format is detailed
     * below in Option Settings
     */
    readonly settings?: pulumi.Input<pulumi.Input<{ name: pulumi.Input<string>, namespace: pulumi.Input<string>, resource?: pulumi.Input<string>, value: pulumi.Input<string> }>[]>;
    /**
     * A solution stack to base your environment
     * off of. Example stacks can be found in the [Amazon API documentation][1]
     */
    readonly solutionStackName?: pulumi.Input<string>;
    /**
     * A set of tags to apply to the Environment.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The name of the Elastic Beanstalk Configuration
     * template to use in deployment
     */
    readonly templateName?: pulumi.Input<string>;
    /**
     * Elastic Beanstalk Environment tier. Valid values are `Worker`
     * or `WebServer`. If tier is left blank `WebServer` will be used.
     */
    readonly tier?: pulumi.Input<string>;
    /**
     * The name of the Elastic Beanstalk Application Version
     * to use in deployment.
     */
    readonly version?: pulumi.Input<ApplicationVersion>;
    /**
     * The maximum
     * [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
     * wait for an Elastic Beanstalk Environment to be in a ready state before timing
     * out.
     */
    readonly waitForReadyTimeout?: pulumi.Input<string>;
}
