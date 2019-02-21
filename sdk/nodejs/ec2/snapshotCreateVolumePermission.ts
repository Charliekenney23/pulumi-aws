// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

/**
 * Adds permission to create volumes off of a given EBS Snapshot.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.ebs.Volume("example", {
 *     availabilityZone: "us-west-2a",
 *     size: 40,
 * });
 * const exampleSnapshot = new aws.ebs.Snapshot("example_snapshot", {
 *     volumeId: example.id,
 * });
 * const examplePerm = new aws.ec2.SnapshotCreateVolumePermission("example_perm", {
 *     accountId: "12345678",
 *     snapshotId: exampleSnapshot.id,
 * });
 * ```
 */
export class SnapshotCreateVolumePermission extends pulumi.CustomResource {
    /**
     * Get an existing SnapshotCreateVolumePermission resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnapshotCreateVolumePermissionState, opts?: pulumi.CustomResourceOptions): SnapshotCreateVolumePermission {
        return new SnapshotCreateVolumePermission(name, <any>state, { ...opts, id: id });
    }

    public static list(): rxjs.Observable<SnapshotCreateVolumePermissionResult> {
        return rxjs.from(
            pulumi.runtime
                .invoke('pulumi:pulumi:readStackResourceOutputs', {
                    stackName: pulumi.runtime.getStack(),
                    type: 'aws:ec2/snapshotCreateVolumePermission:SnapshotCreateVolumePermission',
                })
                .then(o => Object.keys(o.outputs).map(k => o.outputs[k]))
        ).pipe(
            operators.mergeAll(),
        );
    }

    /**
     * An AWS Account ID to add create volume permissions
     */
    public readonly accountId: pulumi.Output<string>;
    /**
     * A snapshot ID
     */
    public readonly snapshotId: pulumi.Output<string>;

    /**
     * Create a SnapshotCreateVolumePermission resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotCreateVolumePermissionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnapshotCreateVolumePermissionArgs | SnapshotCreateVolumePermissionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SnapshotCreateVolumePermissionState = argsOrState as SnapshotCreateVolumePermissionState | undefined;
            inputs["accountId"] = state ? state.accountId : undefined;
            inputs["snapshotId"] = state ? state.snapshotId : undefined;
        } else {
            const args = argsOrState as SnapshotCreateVolumePermissionArgs | undefined;
            if (!args || args.accountId === undefined) {
                throw new Error("Missing required property 'accountId'");
            }
            if (!args || args.snapshotId === undefined) {
                throw new Error("Missing required property 'snapshotId'");
            }
            inputs["accountId"] = args ? args.accountId : undefined;
            inputs["snapshotId"] = args ? args.snapshotId : undefined;
        }
        super("aws:ec2/snapshotCreateVolumePermission:SnapshotCreateVolumePermission", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SnapshotCreateVolumePermission resources.
 */
export interface SnapshotCreateVolumePermissionState {
    /**
     * An AWS Account ID to add create volume permissions
     */
    readonly accountId?: pulumi.Input<string>;
    /**
     * A snapshot ID
     */
    readonly snapshotId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SnapshotCreateVolumePermission resource.
 */
export interface SnapshotCreateVolumePermissionArgs {
    /**
     * An AWS Account ID to add create volume permissions
     */
    readonly accountId: pulumi.Input<string>;
    /**
     * A snapshot ID
     */
    readonly snapshotId: pulumi.Input<string>;
}

/**
 * The live SnapshotCreateVolumePermission resource.
 */
export interface SnapshotCreateVolumePermissionResult {
    /**
     * An AWS Account ID to add create volume permissions
     */
    readonly accountId: string;
    /**
     * A snapshot ID
     */
    readonly snapshotId: string;
}
