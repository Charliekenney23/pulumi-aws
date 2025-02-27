// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {Deployment} from "./deployment";
import {RestApi} from "./restApi";

/**
 * Provides an API Gateway Stage.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const testRestApi = new aws.apigateway.RestApi("test", {
 *     description: "This is my API for demonstration purposes",
 * });
 * const testResource = new aws.apigateway.Resource("test", {
 *     parentId: testRestApi.rootResourceId,
 *     pathPart: "mytestresource",
 *     restApi: testRestApi.id,
 * });
 * const testMethod = new aws.apigateway.Method("test", {
 *     authorization: "NONE",
 *     httpMethod: "GET",
 *     resourceId: testResource.id,
 *     restApi: testRestApi.id,
 * });
 * const testIntegration = new aws.apigateway.Integration("test", {
 *     httpMethod: testMethod.httpMethod,
 *     resourceId: testResource.id,
 *     restApi: testRestApi.id,
 *     type: "MOCK",
 * });
 * const testDeployment = new aws.apigateway.Deployment("test", {
 *     restApi: testRestApi.id,
 *     stageName: "dev",
 * }, {dependsOn: [testIntegration]});
 * const testStage = new aws.apigateway.Stage("test", {
 *     deployment: testDeployment.id,
 *     restApi: testRestApi.id,
 *     stageName: "prod",
 * });
 * const methodSettings = new aws.apigateway.MethodSettings("s", {
 *     methodPath: pulumi.interpolate`${testResource.pathPart}/${testMethod.httpMethod}`,
 *     restApi: testRestApi.id,
 *     settings: {
 *         loggingLevel: "INFO",
 *         metricsEnabled: true,
 *     },
 *     stageName: testStage.stageName,
 * });
 * ```
 */
export class Stage extends pulumi.CustomResource {
    /**
     * Get an existing Stage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StageState, opts?: pulumi.CustomResourceOptions): Stage {
        return new Stage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:apigateway/stage:Stage';

    /**
     * Returns true if the given object is an instance of Stage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Stage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Stage.__pulumiType;
    }

    /**
     * Enables access logs for the API stage. Detailed below.
     */
    public readonly accessLogSettings!: pulumi.Output<{ destinationArn: string, format: string } | undefined>;
    /**
     * Specifies whether a cache cluster is enabled for the stage
     */
    public readonly cacheClusterEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The size of the cache cluster for the stage, if enabled.
     * Allowed values include `0.5`, `1.6`, `6.1`, `13.5`, `28.4`, `58.2`, `118` and `237`.
     */
    public readonly cacheClusterSize!: pulumi.Output<string | undefined>;
    /**
     * The identifier of a client certificate for the stage.
     */
    public readonly clientCertificateId!: pulumi.Output<string | undefined>;
    /**
     * The ID of the deployment that the stage points to
     */
    public readonly deployment!: pulumi.Output<Deployment>;
    /**
     * The description of the stage
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The version of the associated API documentation
     */
    public readonly documentationVersion!: pulumi.Output<string | undefined>;
    /**
     * The execution ARN to be used in [`lambda_permission`](https://www.terraform.io/docs/providers/aws/r/lambda_permission.html)'s `source_arn`
     * when allowing API Gateway to invoke a Lambda function,
     * e.g. `arn:aws:execute-api:eu-west-2:123456789012:z4675bid1j/prod`
     */
    public /*out*/ readonly executionArn!: pulumi.Output<string>;
    /**
     * The URL to invoke the API pointing to the stage,
     * e.g. `https://z4675bid1j.execute-api.eu-west-2.amazonaws.com/prod`
     */
    public /*out*/ readonly invokeUrl!: pulumi.Output<string>;
    /**
     * The ID of the associated REST API
     */
    public readonly restApi!: pulumi.Output<RestApi>;
    /**
     * The name of the stage
     */
    public readonly stageName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * A map that defines the stage variables
     */
    public readonly variables!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Whether active tracing with X-ray is enabled. Defaults to `false`.
     */
    public readonly xrayTracingEnabled!: pulumi.Output<boolean | undefined>;

    /**
     * Create a Stage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StageArgs | StageState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as StageState | undefined;
            inputs["accessLogSettings"] = state ? state.accessLogSettings : undefined;
            inputs["cacheClusterEnabled"] = state ? state.cacheClusterEnabled : undefined;
            inputs["cacheClusterSize"] = state ? state.cacheClusterSize : undefined;
            inputs["clientCertificateId"] = state ? state.clientCertificateId : undefined;
            inputs["deployment"] = state ? state.deployment : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["documentationVersion"] = state ? state.documentationVersion : undefined;
            inputs["executionArn"] = state ? state.executionArn : undefined;
            inputs["invokeUrl"] = state ? state.invokeUrl : undefined;
            inputs["restApi"] = state ? state.restApi : undefined;
            inputs["stageName"] = state ? state.stageName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["variables"] = state ? state.variables : undefined;
            inputs["xrayTracingEnabled"] = state ? state.xrayTracingEnabled : undefined;
        } else {
            const args = argsOrState as StageArgs | undefined;
            if (!args || args.deployment === undefined) {
                throw new Error("Missing required property 'deployment'");
            }
            if (!args || args.restApi === undefined) {
                throw new Error("Missing required property 'restApi'");
            }
            if (!args || args.stageName === undefined) {
                throw new Error("Missing required property 'stageName'");
            }
            inputs["accessLogSettings"] = args ? args.accessLogSettings : undefined;
            inputs["cacheClusterEnabled"] = args ? args.cacheClusterEnabled : undefined;
            inputs["cacheClusterSize"] = args ? args.cacheClusterSize : undefined;
            inputs["clientCertificateId"] = args ? args.clientCertificateId : undefined;
            inputs["deployment"] = args ? args.deployment : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["documentationVersion"] = args ? args.documentationVersion : undefined;
            inputs["restApi"] = args ? args.restApi : undefined;
            inputs["stageName"] = args ? args.stageName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["variables"] = args ? args.variables : undefined;
            inputs["xrayTracingEnabled"] = args ? args.xrayTracingEnabled : undefined;
            inputs["executionArn"] = undefined /*out*/;
            inputs["invokeUrl"] = undefined /*out*/;
        }
        super(Stage.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Stage resources.
 */
export interface StageState {
    /**
     * Enables access logs for the API stage. Detailed below.
     */
    readonly accessLogSettings?: pulumi.Input<{ destinationArn: pulumi.Input<string>, format: pulumi.Input<string> }>;
    /**
     * Specifies whether a cache cluster is enabled for the stage
     */
    readonly cacheClusterEnabled?: pulumi.Input<boolean>;
    /**
     * The size of the cache cluster for the stage, if enabled.
     * Allowed values include `0.5`, `1.6`, `6.1`, `13.5`, `28.4`, `58.2`, `118` and `237`.
     */
    readonly cacheClusterSize?: pulumi.Input<string>;
    /**
     * The identifier of a client certificate for the stage.
     */
    readonly clientCertificateId?: pulumi.Input<string>;
    /**
     * The ID of the deployment that the stage points to
     */
    readonly deployment?: pulumi.Input<Deployment>;
    /**
     * The description of the stage
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The version of the associated API documentation
     */
    readonly documentationVersion?: pulumi.Input<string>;
    /**
     * The execution ARN to be used in [`lambda_permission`](https://www.terraform.io/docs/providers/aws/r/lambda_permission.html)'s `source_arn`
     * when allowing API Gateway to invoke a Lambda function,
     * e.g. `arn:aws:execute-api:eu-west-2:123456789012:z4675bid1j/prod`
     */
    readonly executionArn?: pulumi.Input<string>;
    /**
     * The URL to invoke the API pointing to the stage,
     * e.g. `https://z4675bid1j.execute-api.eu-west-2.amazonaws.com/prod`
     */
    readonly invokeUrl?: pulumi.Input<string>;
    /**
     * The ID of the associated REST API
     */
    readonly restApi?: pulumi.Input<RestApi>;
    /**
     * The name of the stage
     */
    readonly stageName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A map that defines the stage variables
     */
    readonly variables?: pulumi.Input<{[key: string]: any}>;
    /**
     * Whether active tracing with X-ray is enabled. Defaults to `false`.
     */
    readonly xrayTracingEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Stage resource.
 */
export interface StageArgs {
    /**
     * Enables access logs for the API stage. Detailed below.
     */
    readonly accessLogSettings?: pulumi.Input<{ destinationArn: pulumi.Input<string>, format: pulumi.Input<string> }>;
    /**
     * Specifies whether a cache cluster is enabled for the stage
     */
    readonly cacheClusterEnabled?: pulumi.Input<boolean>;
    /**
     * The size of the cache cluster for the stage, if enabled.
     * Allowed values include `0.5`, `1.6`, `6.1`, `13.5`, `28.4`, `58.2`, `118` and `237`.
     */
    readonly cacheClusterSize?: pulumi.Input<string>;
    /**
     * The identifier of a client certificate for the stage.
     */
    readonly clientCertificateId?: pulumi.Input<string>;
    /**
     * The ID of the deployment that the stage points to
     */
    readonly deployment: pulumi.Input<Deployment>;
    /**
     * The description of the stage
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The version of the associated API documentation
     */
    readonly documentationVersion?: pulumi.Input<string>;
    /**
     * The ID of the associated REST API
     */
    readonly restApi: pulumi.Input<RestApi>;
    /**
     * The name of the stage
     */
    readonly stageName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A map that defines the stage variables
     */
    readonly variables?: pulumi.Input<{[key: string]: any}>;
    /**
     * Whether active tracing with X-ray is enabled. Defaults to `false`.
     */
    readonly xrayTracingEnabled?: pulumi.Input<boolean>;
}
