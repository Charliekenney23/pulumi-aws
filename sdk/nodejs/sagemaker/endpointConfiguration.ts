// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a SageMaker endpoint configuration resource.
 * 
 * ## Example Usage
 * 
 * 
 * Basic usage:
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const ec = new aws.sagemaker.EndpointConfiguration("ec", {
 *     productionVariants: [{
 *         initialInstanceCount: 1,
 *         instanceType: "ml.t2.medium",
 *         modelName: aws_sagemaker_model_m.name,
 *         variantName: "variant-1",
 *     }],
 *     tags: {
 *         Name: "foo",
 *     },
 * });
 * ```
 */
export class EndpointConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing EndpointConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EndpointConfigurationState, opts?: pulumi.CustomResourceOptions): EndpointConfiguration {
        return new EndpointConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:sagemaker/endpointConfiguration:EndpointConfiguration';

    /**
     * Returns true if the given object is an instance of EndpointConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EndpointConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EndpointConfiguration.__pulumiType;
    }

    /**
     * The Amazon Resource Name (ARN) assigned by AWS to this endpoint configuration.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
     */
    public readonly kmsKeyArn!: pulumi.Output<string | undefined>;
    /**
     * The name of the endpoint configuration. If omitted, Terraform will assign a random, unique name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Fields are documented below.
     */
    public readonly productionVariants!: pulumi.Output<{ acceleratorType?: string, initialInstanceCount: number, initialVariantWeight?: number, instanceType: string, modelName: string, variantName: string }[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a EndpointConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EndpointConfigurationArgs | EndpointConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EndpointConfigurationState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["kmsKeyArn"] = state ? state.kmsKeyArn : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["productionVariants"] = state ? state.productionVariants : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as EndpointConfigurationArgs | undefined;
            if (!args || args.productionVariants === undefined) {
                throw new Error("Missing required property 'productionVariants'");
            }
            inputs["kmsKeyArn"] = args ? args.kmsKeyArn : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["productionVariants"] = args ? args.productionVariants : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super(EndpointConfiguration.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EndpointConfiguration resources.
 */
export interface EndpointConfigurationState {
    /**
     * The Amazon Resource Name (ARN) assigned by AWS to this endpoint configuration.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
     */
    readonly kmsKeyArn?: pulumi.Input<string>;
    /**
     * The name of the endpoint configuration. If omitted, Terraform will assign a random, unique name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Fields are documented below.
     */
    readonly productionVariants?: pulumi.Input<pulumi.Input<{ acceleratorType?: pulumi.Input<string>, initialInstanceCount: pulumi.Input<number>, initialVariantWeight?: pulumi.Input<number>, instanceType: pulumi.Input<string>, modelName: pulumi.Input<string>, variantName?: pulumi.Input<string> }>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a EndpointConfiguration resource.
 */
export interface EndpointConfigurationArgs {
    /**
     * Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
     */
    readonly kmsKeyArn?: pulumi.Input<string>;
    /**
     * The name of the endpoint configuration. If omitted, Terraform will assign a random, unique name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Fields are documented below.
     */
    readonly productionVariants: pulumi.Input<pulumi.Input<{ acceleratorType?: pulumi.Input<string>, initialInstanceCount: pulumi.Input<number>, initialVariantWeight?: pulumi.Input<number>, instanceType: pulumi.Input<string>, modelName: pulumi.Input<string>, variantName?: pulumi.Input<string> }>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
