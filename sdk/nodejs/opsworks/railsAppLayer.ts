// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

/**
 * Provides an OpsWorks Ruby on Rails application layer resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const app = new aws.opsworks.RailsAppLayer("app", {
 *     stackId: aws_opsworks_stack_main.id,
 * });
 * ```
 */
export class RailsAppLayer extends pulumi.CustomResource {
    /**
     * Get an existing RailsAppLayer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RailsAppLayerState, opts?: pulumi.CustomResourceOptions): RailsAppLayer {
        return new RailsAppLayer(name, <any>state, { ...opts, id: id });
    }

    public static list(): rxjs.Observable<RailsAppLayerResult> {
        return rxjs.from(
            pulumi.runtime
                .invoke('pulumi:pulumi:readStackResourceOutputs', {
                    stackName: pulumi.runtime.getStack(),
                    type: 'aws:opsworks/railsAppLayer:RailsAppLayer',
                })
                .then(o => Object.keys(o.outputs).map(k => o.outputs[k]))
        ).pipe(
            operators.mergeAll(),
        );
    }

    /**
     * Keyword for the app server to use. Defaults to "apache_passenger".
     */
    public readonly appServer: pulumi.Output<string | undefined>;
    /**
     * Whether to automatically assign an elastic IP address to the layer's instances.
     */
    public readonly autoAssignElasticIps: pulumi.Output<boolean | undefined>;
    /**
     * For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
     */
    public readonly autoAssignPublicIps: pulumi.Output<boolean | undefined>;
    /**
     * Whether to enable auto-healing for the layer.
     */
    public readonly autoHealing: pulumi.Output<boolean | undefined>;
    /**
     * When OpsWorks is managing Bundler, which version to use. Defaults to "1.5.3".
     */
    public readonly bundlerVersion: pulumi.Output<string | undefined>;
    public readonly customConfigureRecipes: pulumi.Output<string[] | undefined>;
    public readonly customDeployRecipes: pulumi.Output<string[] | undefined>;
    /**
     * The ARN of an IAM profile that will be used for the layer's instances.
     */
    public readonly customInstanceProfileArn: pulumi.Output<string | undefined>;
    /**
     * Custom JSON attributes to apply to the layer.
     */
    public readonly customJson: pulumi.Output<string | undefined>;
    /**
     * Ids for a set of security groups to apply to the layer's instances.
     */
    public readonly customSecurityGroupIds: pulumi.Output<string[] | undefined>;
    public readonly customSetupRecipes: pulumi.Output<string[] | undefined>;
    public readonly customShutdownRecipes: pulumi.Output<string[] | undefined>;
    public readonly customUndeployRecipes: pulumi.Output<string[] | undefined>;
    /**
     * Whether to enable Elastic Load Balancing connection draining.
     */
    public readonly drainElbOnShutdown: pulumi.Output<boolean | undefined>;
    /**
     * `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
     */
    public readonly ebsVolumes: pulumi.Output<{ iops?: number, mountPoint: string, numberOfDisks: number, raidLevel?: string, size: number, type?: string }[] | undefined>;
    /**
     * Name of an Elastic Load Balancer to attach to this layer
     */
    public readonly elasticLoadBalancer: pulumi.Output<string | undefined>;
    /**
     * Whether to install OS and package updates on each instance when it boots.
     */
    public readonly installUpdatesOnBoot: pulumi.Output<boolean | undefined>;
    /**
     * The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
     */
    public readonly instanceShutdownTimeout: pulumi.Output<number | undefined>;
    /**
     * Whether OpsWorks should manage bundler. On by default.
     */
    public readonly manageBundler: pulumi.Output<boolean | undefined>;
    /**
     * A human-readable name for the layer.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The version of Passenger to use. Defaults to "4.0.46".
     */
    public readonly passengerVersion: pulumi.Output<string | undefined>;
    /**
     * The version of Ruby to use. Defaults to "2.0.0".
     */
    public readonly rubyVersion: pulumi.Output<string | undefined>;
    /**
     * The version of RubyGems to use. Defaults to "2.2.2".
     */
    public readonly rubygemsVersion: pulumi.Output<string | undefined>;
    /**
     * The id of the stack the layer will belong to.
     */
    public readonly stackId: pulumi.Output<string>;
    /**
     * Names of a set of system packages to install on the layer's instances.
     */
    public readonly systemPackages: pulumi.Output<string[] | undefined>;
    /**
     * Whether to use EBS-optimized instances.
     */
    public readonly useEbsOptimizedInstances: pulumi.Output<boolean | undefined>;

    /**
     * Create a RailsAppLayer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RailsAppLayerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RailsAppLayerArgs | RailsAppLayerState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: RailsAppLayerState = argsOrState as RailsAppLayerState | undefined;
            inputs["appServer"] = state ? state.appServer : undefined;
            inputs["autoAssignElasticIps"] = state ? state.autoAssignElasticIps : undefined;
            inputs["autoAssignPublicIps"] = state ? state.autoAssignPublicIps : undefined;
            inputs["autoHealing"] = state ? state.autoHealing : undefined;
            inputs["bundlerVersion"] = state ? state.bundlerVersion : undefined;
            inputs["customConfigureRecipes"] = state ? state.customConfigureRecipes : undefined;
            inputs["customDeployRecipes"] = state ? state.customDeployRecipes : undefined;
            inputs["customInstanceProfileArn"] = state ? state.customInstanceProfileArn : undefined;
            inputs["customJson"] = state ? state.customJson : undefined;
            inputs["customSecurityGroupIds"] = state ? state.customSecurityGroupIds : undefined;
            inputs["customSetupRecipes"] = state ? state.customSetupRecipes : undefined;
            inputs["customShutdownRecipes"] = state ? state.customShutdownRecipes : undefined;
            inputs["customUndeployRecipes"] = state ? state.customUndeployRecipes : undefined;
            inputs["drainElbOnShutdown"] = state ? state.drainElbOnShutdown : undefined;
            inputs["ebsVolumes"] = state ? state.ebsVolumes : undefined;
            inputs["elasticLoadBalancer"] = state ? state.elasticLoadBalancer : undefined;
            inputs["installUpdatesOnBoot"] = state ? state.installUpdatesOnBoot : undefined;
            inputs["instanceShutdownTimeout"] = state ? state.instanceShutdownTimeout : undefined;
            inputs["manageBundler"] = state ? state.manageBundler : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["passengerVersion"] = state ? state.passengerVersion : undefined;
            inputs["rubyVersion"] = state ? state.rubyVersion : undefined;
            inputs["rubygemsVersion"] = state ? state.rubygemsVersion : undefined;
            inputs["stackId"] = state ? state.stackId : undefined;
            inputs["systemPackages"] = state ? state.systemPackages : undefined;
            inputs["useEbsOptimizedInstances"] = state ? state.useEbsOptimizedInstances : undefined;
        } else {
            const args = argsOrState as RailsAppLayerArgs | undefined;
            if (!args || args.stackId === undefined) {
                throw new Error("Missing required property 'stackId'");
            }
            inputs["appServer"] = args ? args.appServer : undefined;
            inputs["autoAssignElasticIps"] = args ? args.autoAssignElasticIps : undefined;
            inputs["autoAssignPublicIps"] = args ? args.autoAssignPublicIps : undefined;
            inputs["autoHealing"] = args ? args.autoHealing : undefined;
            inputs["bundlerVersion"] = args ? args.bundlerVersion : undefined;
            inputs["customConfigureRecipes"] = args ? args.customConfigureRecipes : undefined;
            inputs["customDeployRecipes"] = args ? args.customDeployRecipes : undefined;
            inputs["customInstanceProfileArn"] = args ? args.customInstanceProfileArn : undefined;
            inputs["customJson"] = args ? args.customJson : undefined;
            inputs["customSecurityGroupIds"] = args ? args.customSecurityGroupIds : undefined;
            inputs["customSetupRecipes"] = args ? args.customSetupRecipes : undefined;
            inputs["customShutdownRecipes"] = args ? args.customShutdownRecipes : undefined;
            inputs["customUndeployRecipes"] = args ? args.customUndeployRecipes : undefined;
            inputs["drainElbOnShutdown"] = args ? args.drainElbOnShutdown : undefined;
            inputs["ebsVolumes"] = args ? args.ebsVolumes : undefined;
            inputs["elasticLoadBalancer"] = args ? args.elasticLoadBalancer : undefined;
            inputs["installUpdatesOnBoot"] = args ? args.installUpdatesOnBoot : undefined;
            inputs["instanceShutdownTimeout"] = args ? args.instanceShutdownTimeout : undefined;
            inputs["manageBundler"] = args ? args.manageBundler : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["passengerVersion"] = args ? args.passengerVersion : undefined;
            inputs["rubyVersion"] = args ? args.rubyVersion : undefined;
            inputs["rubygemsVersion"] = args ? args.rubygemsVersion : undefined;
            inputs["stackId"] = args ? args.stackId : undefined;
            inputs["systemPackages"] = args ? args.systemPackages : undefined;
            inputs["useEbsOptimizedInstances"] = args ? args.useEbsOptimizedInstances : undefined;
        }
        super("aws:opsworks/railsAppLayer:RailsAppLayer", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RailsAppLayer resources.
 */
export interface RailsAppLayerState {
    /**
     * Keyword for the app server to use. Defaults to "apache_passenger".
     */
    readonly appServer?: pulumi.Input<string>;
    /**
     * Whether to automatically assign an elastic IP address to the layer's instances.
     */
    readonly autoAssignElasticIps?: pulumi.Input<boolean>;
    /**
     * For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
     */
    readonly autoAssignPublicIps?: pulumi.Input<boolean>;
    /**
     * Whether to enable auto-healing for the layer.
     */
    readonly autoHealing?: pulumi.Input<boolean>;
    /**
     * When OpsWorks is managing Bundler, which version to use. Defaults to "1.5.3".
     */
    readonly bundlerVersion?: pulumi.Input<string>;
    readonly customConfigureRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customDeployRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ARN of an IAM profile that will be used for the layer's instances.
     */
    readonly customInstanceProfileArn?: pulumi.Input<string>;
    /**
     * Custom JSON attributes to apply to the layer.
     */
    readonly customJson?: pulumi.Input<string>;
    /**
     * Ids for a set of security groups to apply to the layer's instances.
     */
    readonly customSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customSetupRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customShutdownRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customUndeployRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to enable Elastic Load Balancing connection draining.
     */
    readonly drainElbOnShutdown?: pulumi.Input<boolean>;
    /**
     * `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
     */
    readonly ebsVolumes?: pulumi.Input<pulumi.Input<{ iops?: pulumi.Input<number>, mountPoint: pulumi.Input<string>, numberOfDisks: pulumi.Input<number>, raidLevel?: pulumi.Input<string>, size: pulumi.Input<number>, type?: pulumi.Input<string> }>[]>;
    /**
     * Name of an Elastic Load Balancer to attach to this layer
     */
    readonly elasticLoadBalancer?: pulumi.Input<string>;
    /**
     * Whether to install OS and package updates on each instance when it boots.
     */
    readonly installUpdatesOnBoot?: pulumi.Input<boolean>;
    /**
     * The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
     */
    readonly instanceShutdownTimeout?: pulumi.Input<number>;
    /**
     * Whether OpsWorks should manage bundler. On by default.
     */
    readonly manageBundler?: pulumi.Input<boolean>;
    /**
     * A human-readable name for the layer.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The version of Passenger to use. Defaults to "4.0.46".
     */
    readonly passengerVersion?: pulumi.Input<string>;
    /**
     * The version of Ruby to use. Defaults to "2.0.0".
     */
    readonly rubyVersion?: pulumi.Input<string>;
    /**
     * The version of RubyGems to use. Defaults to "2.2.2".
     */
    readonly rubygemsVersion?: pulumi.Input<string>;
    /**
     * The id of the stack the layer will belong to.
     */
    readonly stackId?: pulumi.Input<string>;
    /**
     * Names of a set of system packages to install on the layer's instances.
     */
    readonly systemPackages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to use EBS-optimized instances.
     */
    readonly useEbsOptimizedInstances?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a RailsAppLayer resource.
 */
export interface RailsAppLayerArgs {
    /**
     * Keyword for the app server to use. Defaults to "apache_passenger".
     */
    readonly appServer?: pulumi.Input<string>;
    /**
     * Whether to automatically assign an elastic IP address to the layer's instances.
     */
    readonly autoAssignElasticIps?: pulumi.Input<boolean>;
    /**
     * For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
     */
    readonly autoAssignPublicIps?: pulumi.Input<boolean>;
    /**
     * Whether to enable auto-healing for the layer.
     */
    readonly autoHealing?: pulumi.Input<boolean>;
    /**
     * When OpsWorks is managing Bundler, which version to use. Defaults to "1.5.3".
     */
    readonly bundlerVersion?: pulumi.Input<string>;
    readonly customConfigureRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customDeployRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ARN of an IAM profile that will be used for the layer's instances.
     */
    readonly customInstanceProfileArn?: pulumi.Input<string>;
    /**
     * Custom JSON attributes to apply to the layer.
     */
    readonly customJson?: pulumi.Input<string>;
    /**
     * Ids for a set of security groups to apply to the layer's instances.
     */
    readonly customSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customSetupRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customShutdownRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly customUndeployRecipes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to enable Elastic Load Balancing connection draining.
     */
    readonly drainElbOnShutdown?: pulumi.Input<boolean>;
    /**
     * `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
     */
    readonly ebsVolumes?: pulumi.Input<pulumi.Input<{ iops?: pulumi.Input<number>, mountPoint: pulumi.Input<string>, numberOfDisks: pulumi.Input<number>, raidLevel?: pulumi.Input<string>, size: pulumi.Input<number>, type?: pulumi.Input<string> }>[]>;
    /**
     * Name of an Elastic Load Balancer to attach to this layer
     */
    readonly elasticLoadBalancer?: pulumi.Input<string>;
    /**
     * Whether to install OS and package updates on each instance when it boots.
     */
    readonly installUpdatesOnBoot?: pulumi.Input<boolean>;
    /**
     * The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
     */
    readonly instanceShutdownTimeout?: pulumi.Input<number>;
    /**
     * Whether OpsWorks should manage bundler. On by default.
     */
    readonly manageBundler?: pulumi.Input<boolean>;
    /**
     * A human-readable name for the layer.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The version of Passenger to use. Defaults to "4.0.46".
     */
    readonly passengerVersion?: pulumi.Input<string>;
    /**
     * The version of Ruby to use. Defaults to "2.0.0".
     */
    readonly rubyVersion?: pulumi.Input<string>;
    /**
     * The version of RubyGems to use. Defaults to "2.2.2".
     */
    readonly rubygemsVersion?: pulumi.Input<string>;
    /**
     * The id of the stack the layer will belong to.
     */
    readonly stackId: pulumi.Input<string>;
    /**
     * Names of a set of system packages to install on the layer's instances.
     */
    readonly systemPackages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to use EBS-optimized instances.
     */
    readonly useEbsOptimizedInstances?: pulumi.Input<boolean>;
}

/**
 * The live RailsAppLayer resource.
 */
export interface RailsAppLayerResult {
    /**
     * Keyword for the app server to use. Defaults to "apache_passenger".
     */
    readonly appServer?: string;
    /**
     * Whether to automatically assign an elastic IP address to the layer's instances.
     */
    readonly autoAssignElasticIps?: boolean;
    /**
     * For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
     */
    readonly autoAssignPublicIps?: boolean;
    /**
     * Whether to enable auto-healing for the layer.
     */
    readonly autoHealing?: boolean;
    /**
     * When OpsWorks is managing Bundler, which version to use. Defaults to "1.5.3".
     */
    readonly bundlerVersion?: string;
    readonly customConfigureRecipes?: string[];
    readonly customDeployRecipes?: string[];
    /**
     * The ARN of an IAM profile that will be used for the layer's instances.
     */
    readonly customInstanceProfileArn?: string;
    /**
     * Custom JSON attributes to apply to the layer.
     */
    readonly customJson?: string;
    /**
     * Ids for a set of security groups to apply to the layer's instances.
     */
    readonly customSecurityGroupIds?: string[];
    readonly customSetupRecipes?: string[];
    readonly customShutdownRecipes?: string[];
    readonly customUndeployRecipes?: string[];
    /**
     * Whether to enable Elastic Load Balancing connection draining.
     */
    readonly drainElbOnShutdown?: boolean;
    /**
     * `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
     */
    readonly ebsVolumes?: { iops?: number, mountPoint: string, numberOfDisks: number, raidLevel?: string, size: number, type?: string }[];
    /**
     * Name of an Elastic Load Balancer to attach to this layer
     */
    readonly elasticLoadBalancer?: string;
    /**
     * Whether to install OS and package updates on each instance when it boots.
     */
    readonly installUpdatesOnBoot?: boolean;
    /**
     * The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
     */
    readonly instanceShutdownTimeout?: number;
    /**
     * Whether OpsWorks should manage bundler. On by default.
     */
    readonly manageBundler?: boolean;
    /**
     * A human-readable name for the layer.
     */
    readonly name: string;
    /**
     * The version of Passenger to use. Defaults to "4.0.46".
     */
    readonly passengerVersion?: string;
    /**
     * The version of Ruby to use. Defaults to "2.0.0".
     */
    readonly rubyVersion?: string;
    /**
     * The version of RubyGems to use. Defaults to "2.2.2".
     */
    readonly rubygemsVersion?: string;
    /**
     * The id of the stack the layer will belong to.
     */
    readonly stackId: string;
    /**
     * Names of a set of system packages to install on the layer's instances.
     */
    readonly systemPackages?: string[];
    /**
     * Whether to use EBS-optimized instances.
     */
    readonly useEbsOptimizedInstances?: boolean;
}
