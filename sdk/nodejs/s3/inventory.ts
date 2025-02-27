// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a S3 bucket [inventory configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html) resource.
 * 
 * ## Example Usage
 * 
 * ### Add inventory configuration
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const inventory = new aws.s3.Bucket("inventory", {});
 * const testBucket = new aws.s3.Bucket("test", {});
 * const testInventory = new aws.s3.Inventory("test", {
 *     bucket: testBucket.id,
 *     destination: {
 *         bucket: {
 *             bucketArn: inventory.arn,
 *             format: "ORC",
 *         },
 *     },
 *     includedObjectVersions: "All",
 *     schedule: {
 *         frequency: "Daily",
 *     },
 * });
 * ```
 * 
 * ### Add inventory configuration with S3 bucket object prefix
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const inventory = new aws.s3.Bucket("inventory", {});
 * const test = new aws.s3.Bucket("test", {});
 * const test_prefix = new aws.s3.Inventory("test-prefix", {
 *     bucket: test.id,
 *     destination: {
 *         bucket: {
 *             bucketArn: inventory.arn,
 *             format: "ORC",
 *             prefix: "inventory",
 *         },
 *     },
 *     filter: {
 *         prefix: "documents/",
 *     },
 *     includedObjectVersions: "All",
 *     schedule: {
 *         frequency: "Daily",
 *     },
 * });
 * ```
 */
export class Inventory extends pulumi.CustomResource {
    /**
     * Get an existing Inventory resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InventoryState, opts?: pulumi.CustomResourceOptions): Inventory {
        return new Inventory(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:s3/inventory:Inventory';

    /**
     * Returns true if the given object is an instance of Inventory.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Inventory {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Inventory.__pulumiType;
    }

    /**
     * The S3 bucket configuration where inventory results are published (documented below).
     */
    public readonly bucket!: pulumi.Output<string>;
    /**
     * Destination bucket where inventory list files are written (documented below).
     */
    public readonly destination!: pulumi.Output<{ bucket: { accountId?: string, bucketArn: string, encryption?: { sseKms?: { keyId: string }, sseS3?: {  } }, format: string, prefix?: string } }>;
    /**
     * Specifies whether the inventory is enabled or disabled.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Object filtering that accepts a prefix (documented below).
     */
    public readonly filter!: pulumi.Output<{ prefix?: string } | undefined>;
    /**
     * Object filtering that accepts a prefix (documented below). Can be `All` or `Current`.
     */
    public readonly includedObjectVersions!: pulumi.Output<string>;
    /**
     * Unique identifier of the inventory configuration for the bucket.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Contains the optional fields that are included in the inventory results.
     */
    public readonly optionalFields!: pulumi.Output<string[] | undefined>;
    /**
     * Contains the frequency for generating inventory results (documented below).
     */
    public readonly schedule!: pulumi.Output<{ frequency: string }>;

    /**
     * Create a Inventory resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InventoryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InventoryArgs | InventoryState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as InventoryState | undefined;
            inputs["bucket"] = state ? state.bucket : undefined;
            inputs["destination"] = state ? state.destination : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["filter"] = state ? state.filter : undefined;
            inputs["includedObjectVersions"] = state ? state.includedObjectVersions : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["optionalFields"] = state ? state.optionalFields : undefined;
            inputs["schedule"] = state ? state.schedule : undefined;
        } else {
            const args = argsOrState as InventoryArgs | undefined;
            if (!args || args.bucket === undefined) {
                throw new Error("Missing required property 'bucket'");
            }
            if (!args || args.destination === undefined) {
                throw new Error("Missing required property 'destination'");
            }
            if (!args || args.includedObjectVersions === undefined) {
                throw new Error("Missing required property 'includedObjectVersions'");
            }
            if (!args || args.schedule === undefined) {
                throw new Error("Missing required property 'schedule'");
            }
            inputs["bucket"] = args ? args.bucket : undefined;
            inputs["destination"] = args ? args.destination : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["filter"] = args ? args.filter : undefined;
            inputs["includedObjectVersions"] = args ? args.includedObjectVersions : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["optionalFields"] = args ? args.optionalFields : undefined;
            inputs["schedule"] = args ? args.schedule : undefined;
        }
        super(Inventory.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Inventory resources.
 */
export interface InventoryState {
    /**
     * The S3 bucket configuration where inventory results are published (documented below).
     */
    readonly bucket?: pulumi.Input<string>;
    /**
     * Destination bucket where inventory list files are written (documented below).
     */
    readonly destination?: pulumi.Input<{ bucket: pulumi.Input<{ accountId?: pulumi.Input<string>, bucketArn: pulumi.Input<string>, encryption?: pulumi.Input<{ sseKms?: pulumi.Input<{ keyId: pulumi.Input<string> }>, sseS3?: pulumi.Input<{  }> }>, format: pulumi.Input<string>, prefix?: pulumi.Input<string> }> }>;
    /**
     * Specifies whether the inventory is enabled or disabled.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Object filtering that accepts a prefix (documented below).
     */
    readonly filter?: pulumi.Input<{ prefix?: pulumi.Input<string> }>;
    /**
     * Object filtering that accepts a prefix (documented below). Can be `All` or `Current`.
     */
    readonly includedObjectVersions?: pulumi.Input<string>;
    /**
     * Unique identifier of the inventory configuration for the bucket.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Contains the optional fields that are included in the inventory results.
     */
    readonly optionalFields?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Contains the frequency for generating inventory results (documented below).
     */
    readonly schedule?: pulumi.Input<{ frequency: pulumi.Input<string> }>;
}

/**
 * The set of arguments for constructing a Inventory resource.
 */
export interface InventoryArgs {
    /**
     * The S3 bucket configuration where inventory results are published (documented below).
     */
    readonly bucket: pulumi.Input<string>;
    /**
     * Destination bucket where inventory list files are written (documented below).
     */
    readonly destination: pulumi.Input<{ bucket: pulumi.Input<{ accountId?: pulumi.Input<string>, bucketArn: pulumi.Input<string>, encryption?: pulumi.Input<{ sseKms?: pulumi.Input<{ keyId: pulumi.Input<string> }>, sseS3?: pulumi.Input<{  }> }>, format: pulumi.Input<string>, prefix?: pulumi.Input<string> }> }>;
    /**
     * Specifies whether the inventory is enabled or disabled.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Object filtering that accepts a prefix (documented below).
     */
    readonly filter?: pulumi.Input<{ prefix?: pulumi.Input<string> }>;
    /**
     * Object filtering that accepts a prefix (documented below). Can be `All` or `Current`.
     */
    readonly includedObjectVersions: pulumi.Input<string>;
    /**
     * Unique identifier of the inventory configuration for the bucket.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Contains the optional fields that are included in the inventory results.
     */
    readonly optionalFields?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Contains the frequency for generating inventory results (documented below).
     */
    readonly schedule: pulumi.Input<{ frequency: pulumi.Input<string> }>;
}
