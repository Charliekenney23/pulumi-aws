// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Creates a Lambda function alias. Creates an alias that points to the specified Lambda function version.
 * 
 * For information about Lambda and how to use it, see [What is AWS Lambda?][1]
 * For information about function aliases, see [CreateAlias][2] and [AliasRoutingConfiguration][3] in the API docs.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const testAlias = new aws.lambda.Alias("test_alias", {
 *     description: "a sample description",
 *     functionName: aws_lambda_function_lambda_function_test.arn,
 *     functionVersion: "1",
 *     routingConfig: {
 *         additionalVersionWeights: {
 *             "2": 0.5,
 *         },
 *     },
 * });
 * ```
 */
export class Alias extends pulumi.CustomResource {
    /**
     * Get an existing Alias resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AliasState, opts?: pulumi.CustomResourceOptions): Alias {
        return new Alias(name, <any>state, { ...opts, id: id });
    }

    /**
     * The Amazon Resource Name (ARN) identifying your Lambda function alias.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Description of the alias.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The function ARN of the Lambda function for which you want to create an alias.
     */
    public readonly functionName!: pulumi.Output<string>;
    /**
     * Lambda function version for which you are creating the alias. Pattern: `(\$LATEST|[0-9]+)`.
     */
    public readonly functionVersion!: pulumi.Output<string>;
    /**
     * The ARN to be used for invoking Lambda Function from API Gateway - to be used in [`aws_api_gateway_integration`](https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html)'s `uri`
     */
    public /*out*/ readonly invokeArn!: pulumi.Output<string>;
    /**
     * Name for the alias you are creating. Pattern: `(?!^[0-9]+$)([a-zA-Z0-9-_]+)`
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The Lambda alias' route configuration settings. Fields documented below
     */
    public readonly routingConfig!: pulumi.Output<{ additionalVersionWeights?: {[key: string]: number} } | undefined>;

    /**
     * Create a Alias resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AliasArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AliasArgs | AliasState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AliasState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["functionName"] = state ? state.functionName : undefined;
            inputs["functionVersion"] = state ? state.functionVersion : undefined;
            inputs["invokeArn"] = state ? state.invokeArn : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["routingConfig"] = state ? state.routingConfig : undefined;
        } else {
            const args = argsOrState as AliasArgs | undefined;
            if (!args || args.functionName === undefined) {
                throw new Error("Missing required property 'functionName'");
            }
            if (!args || args.functionVersion === undefined) {
                throw new Error("Missing required property 'functionVersion'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["functionName"] = args ? args.functionName : undefined;
            inputs["functionVersion"] = args ? args.functionVersion : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["routingConfig"] = args ? args.routingConfig : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["invokeArn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super("aws:lambda/alias:Alias", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Alias resources.
 */
export interface AliasState {
    /**
     * The Amazon Resource Name (ARN) identifying your Lambda function alias.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Description of the alias.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The function ARN of the Lambda function for which you want to create an alias.
     */
    readonly functionName?: pulumi.Input<string>;
    /**
     * Lambda function version for which you are creating the alias. Pattern: `(\$LATEST|[0-9]+)`.
     */
    readonly functionVersion?: pulumi.Input<string>;
    /**
     * The ARN to be used for invoking Lambda Function from API Gateway - to be used in [`aws_api_gateway_integration`](https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html)'s `uri`
     */
    readonly invokeArn?: pulumi.Input<string>;
    /**
     * Name for the alias you are creating. Pattern: `(?!^[0-9]+$)([a-zA-Z0-9-_]+)`
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The Lambda alias' route configuration settings. Fields documented below
     */
    readonly routingConfig?: pulumi.Input<{ additionalVersionWeights?: pulumi.Input<{[key: string]: pulumi.Input<number>}> }>;
}

/**
 * The set of arguments for constructing a Alias resource.
 */
export interface AliasArgs {
    /**
     * Description of the alias.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The function ARN of the Lambda function for which you want to create an alias.
     */
    readonly functionName: pulumi.Input<string>;
    /**
     * Lambda function version for which you are creating the alias. Pattern: `(\$LATEST|[0-9]+)`.
     */
    readonly functionVersion: pulumi.Input<string>;
    /**
     * Name for the alias you are creating. Pattern: `(?!^[0-9]+$)([a-zA-Z0-9-_]+)`
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The Lambda alias' route configuration settings. Fields documented below
     */
    readonly routingConfig?: pulumi.Input<{ additionalVersionWeights?: pulumi.Input<{[key: string]: pulumi.Input<number>}> }>;
}
