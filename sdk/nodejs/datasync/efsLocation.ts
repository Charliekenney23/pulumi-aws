// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {ARN} from "../index";

/**
 * Manages an AWS DataSync EFS Location.
 * 
 * > **NOTE:** The EFS File System must have a mounted EFS Mount Target before creating this resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.datasync.EfsLocation("example", {
 *     ec2Config: {
 *         securityGroupArns: [aws_security_group_example.arn],
 *         subnetArn: aws_subnet_example.arn,
 *     },
 *     // The below example uses aws_efs_mount_target as a reference to ensure a mount target already exists when resource creation occurs.
 *     // You can accomplish the same behavior with depends_on or an aws_efs_mount_target data source reference.
 *     efsFileSystemArn: aws_efs_mount_target_example.fileSystemArn,
 * });
 * ```
 */
export class EfsLocation extends pulumi.CustomResource {
    /**
     * Get an existing EfsLocation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EfsLocationState, opts?: pulumi.CustomResourceOptions): EfsLocation {
        return new EfsLocation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:datasync/efsLocation:EfsLocation';

    /**
     * Returns true if the given object is an instance of EfsLocation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EfsLocation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EfsLocation.__pulumiType;
    }

    /**
     * Amazon Resource Name (ARN) of the DataSync Location.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Configuration block containing EC2 configurations for connecting to the EFS File System.
     */
    public readonly ec2Config!: pulumi.Output<{ securityGroupArns: string[], subnetArn: string }>;
    /**
     * Amazon Resource Name (ARN) of EFS File System.
     */
    public readonly efsFileSystemArn!: pulumi.Output<ARN>;
    /**
     * Subdirectory to perform actions as source or destination. Default `/`.
     */
    public readonly subdirectory!: pulumi.Output<string | undefined>;
    /**
     * Key-value pairs of resource tags to assign to the DataSync Location.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly uri!: pulumi.Output<string>;

    /**
     * Create a EfsLocation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EfsLocationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EfsLocationArgs | EfsLocationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EfsLocationState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["ec2Config"] = state ? state.ec2Config : undefined;
            inputs["efsFileSystemArn"] = state ? state.efsFileSystemArn : undefined;
            inputs["subdirectory"] = state ? state.subdirectory : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["uri"] = state ? state.uri : undefined;
        } else {
            const args = argsOrState as EfsLocationArgs | undefined;
            if (!args || args.ec2Config === undefined) {
                throw new Error("Missing required property 'ec2Config'");
            }
            if (!args || args.efsFileSystemArn === undefined) {
                throw new Error("Missing required property 'efsFileSystemArn'");
            }
            inputs["ec2Config"] = args ? args.ec2Config : undefined;
            inputs["efsFileSystemArn"] = args ? args.efsFileSystemArn : undefined;
            inputs["subdirectory"] = args ? args.subdirectory : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["uri"] = undefined /*out*/;
        }
        super(EfsLocation.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EfsLocation resources.
 */
export interface EfsLocationState {
    /**
     * Amazon Resource Name (ARN) of the DataSync Location.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Configuration block containing EC2 configurations for connecting to the EFS File System.
     */
    readonly ec2Config?: pulumi.Input<{ securityGroupArns: pulumi.Input<pulumi.Input<string>[]>, subnetArn: pulumi.Input<string> }>;
    /**
     * Amazon Resource Name (ARN) of EFS File System.
     */
    readonly efsFileSystemArn?: pulumi.Input<ARN>;
    /**
     * Subdirectory to perform actions as source or destination. Default `/`.
     */
    readonly subdirectory?: pulumi.Input<string>;
    /**
     * Key-value pairs of resource tags to assign to the DataSync Location.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    readonly uri?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EfsLocation resource.
 */
export interface EfsLocationArgs {
    /**
     * Configuration block containing EC2 configurations for connecting to the EFS File System.
     */
    readonly ec2Config: pulumi.Input<{ securityGroupArns: pulumi.Input<pulumi.Input<string>[]>, subnetArn: pulumi.Input<string> }>;
    /**
     * Amazon Resource Name (ARN) of EFS File System.
     */
    readonly efsFileSystemArn: pulumi.Input<ARN>;
    /**
     * Subdirectory to perform actions as source or destination. Default `/`.
     */
    readonly subdirectory?: pulumi.Input<string>;
    /**
     * Key-value pairs of resource tags to assign to the DataSync Location.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
