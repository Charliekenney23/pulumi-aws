// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a CloudWatch Log Metric Filter resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const dada = new aws.cloudwatch.LogGroup("dada", {});
 * const yada = new aws.cloudwatch.LogMetricFilter("yada", {
 *     logGroupName: dada.name,
 *     metricTransformation: {
 *         name: "EventCount",
 *         namespace: "YourNamespace",
 *         value: "1",
 *     },
 *     pattern: "",
 * });
 * ```
 */
export class LogMetricFilter extends pulumi.CustomResource {
    /**
     * Get an existing LogMetricFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogMetricFilterState, opts?: pulumi.CustomResourceOptions): LogMetricFilter {
        return new LogMetricFilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:cloudwatch/logMetricFilter:LogMetricFilter';

    /**
     * Returns true if the given object is an instance of LogMetricFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogMetricFilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogMetricFilter.__pulumiType;
    }

    /**
     * The name of the log group to associate the metric filter with.
     */
    public readonly logGroupName!: pulumi.Output<string>;
    /**
     * A block defining collection of information
     * needed to define how metric data gets emitted. See below.
     */
    public readonly metricTransformation!: pulumi.Output<{ defaultValue?: string, name: string, namespace: string, value: string }>;
    /**
     * A name for the metric filter.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A valid [CloudWatch Logs filter pattern](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/FilterAndPatternSyntax.html)
     * for extracting metric data out of ingested log events.
     */
    public readonly pattern!: pulumi.Output<string>;

    /**
     * Create a LogMetricFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogMetricFilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogMetricFilterArgs | LogMetricFilterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as LogMetricFilterState | undefined;
            inputs["logGroupName"] = state ? state.logGroupName : undefined;
            inputs["metricTransformation"] = state ? state.metricTransformation : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["pattern"] = state ? state.pattern : undefined;
        } else {
            const args = argsOrState as LogMetricFilterArgs | undefined;
            if (!args || args.logGroupName === undefined) {
                throw new Error("Missing required property 'logGroupName'");
            }
            if (!args || args.metricTransformation === undefined) {
                throw new Error("Missing required property 'metricTransformation'");
            }
            if (!args || args.pattern === undefined) {
                throw new Error("Missing required property 'pattern'");
            }
            inputs["logGroupName"] = args ? args.logGroupName : undefined;
            inputs["metricTransformation"] = args ? args.metricTransformation : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["pattern"] = args ? args.pattern : undefined;
        }
        super(LogMetricFilter.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LogMetricFilter resources.
 */
export interface LogMetricFilterState {
    /**
     * The name of the log group to associate the metric filter with.
     */
    readonly logGroupName?: pulumi.Input<string>;
    /**
     * A block defining collection of information
     * needed to define how metric data gets emitted. See below.
     */
    readonly metricTransformation?: pulumi.Input<{ defaultValue?: pulumi.Input<string>, name: pulumi.Input<string>, namespace: pulumi.Input<string>, value: pulumi.Input<string> }>;
    /**
     * A name for the metric filter.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A valid [CloudWatch Logs filter pattern](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/FilterAndPatternSyntax.html)
     * for extracting metric data out of ingested log events.
     */
    readonly pattern?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LogMetricFilter resource.
 */
export interface LogMetricFilterArgs {
    /**
     * The name of the log group to associate the metric filter with.
     */
    readonly logGroupName: pulumi.Input<string>;
    /**
     * A block defining collection of information
     * needed to define how metric data gets emitted. See below.
     */
    readonly metricTransformation: pulumi.Input<{ defaultValue?: pulumi.Input<string>, name: pulumi.Input<string>, namespace: pulumi.Input<string>, value: pulumi.Input<string> }>;
    /**
     * A name for the metric filter.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A valid [CloudWatch Logs filter pattern](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/FilterAndPatternSyntax.html)
     * for extracting metric data out of ingested log events.
     */
    readonly pattern: pulumi.Input<string>;
}
