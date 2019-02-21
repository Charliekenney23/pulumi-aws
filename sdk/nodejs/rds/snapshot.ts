// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

/**
 * Manages a RDS database instance snapshot. For managing RDS database cluster snapshots, see the [`aws_db_cluster_snapshot` resource](https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const bar = new aws.rds.Instance("bar", {
 *     allocatedStorage: 10,
 *     backupRetentionPeriod: 0,
 *     engine: "MySQL",
 *     engineVersion: "5.6.21",
 *     instanceClass: "db.t2.micro",
 *     maintenanceWindow: "Fri:09:00-Fri:09:30",
 *     name: "baz",
 *     parameterGroupName: "default.mysql5.6",
 *     password: "barbarbarbar",
 *     username: "foo",
 * });
 * const test = new aws.rds.Snapshot("test", {
 *     dbInstanceIdentifier: bar.id,
 *     dbSnapshotIdentifier: "testsnapshot1234",
 * });
 * ```
 */
export class Snapshot extends pulumi.CustomResource {
    /**
     * Get an existing Snapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnapshotState, opts?: pulumi.CustomResourceOptions): Snapshot {
        return new Snapshot(name, <any>state, { ...opts, id: id });
    }

    public static list(): rxjs.Observable<SnapshotResult> {
        return rxjs.from(
            pulumi.runtime
                .invoke('pulumi:pulumi:readStackResourceOutputs', {
                    stackName: pulumi.runtime.getStack(),
                    type: 'aws:rds/snapshot:Snapshot',
                })
                .then(o => Object.keys(o.outputs).map(k => o.outputs[k]))
        ).pipe(
            operators.mergeAll(),
        );
    }

    /**
     * Specifies the allocated storage size in gigabytes (GB).
     */
    public /*out*/ readonly allocatedStorage: pulumi.Output<number>;
    /**
     * Specifies the name of the Availability Zone the DB instance was located in at the time of the DB snapshot.
     */
    public /*out*/ readonly availabilityZone: pulumi.Output<string>;
    /**
     * The DB Instance Identifier from which to take the snapshot.
     */
    public readonly dbInstanceIdentifier: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) for the DB snapshot.
     */
    public /*out*/ readonly dbSnapshotArn: pulumi.Output<string>;
    /**
     * The Identifier for the snapshot.
     */
    public readonly dbSnapshotIdentifier: pulumi.Output<string>;
    /**
     * Specifies whether the DB snapshot is encrypted.
     */
    public /*out*/ readonly encrypted: pulumi.Output<boolean>;
    /**
     * Specifies the name of the database engine.
     */
    public /*out*/ readonly engine: pulumi.Output<string>;
    /**
     * Specifies the version of the database engine.
     */
    public /*out*/ readonly engineVersion: pulumi.Output<string>;
    /**
     * Specifies the Provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.
     */
    public /*out*/ readonly iops: pulumi.Output<number>;
    /**
     * The ARN for the KMS encryption key.
     */
    public /*out*/ readonly kmsKeyId: pulumi.Output<string>;
    /**
     * License model information for the restored DB instance.
     */
    public /*out*/ readonly licenseModel: pulumi.Output<string>;
    /**
     * Provides the option group name for the DB snapshot.
     */
    public /*out*/ readonly optionGroupName: pulumi.Output<string>;
    public /*out*/ readonly port: pulumi.Output<number>;
    public /*out*/ readonly snapshotType: pulumi.Output<string>;
    /**
     * The DB snapshot Arn that the DB snapshot was copied from. It only has value in case of cross customer or cross region copy.
     */
    public /*out*/ readonly sourceDbSnapshotIdentifier: pulumi.Output<string>;
    /**
     * The region that the DB snapshot was created in or copied from.
     */
    public /*out*/ readonly sourceRegion: pulumi.Output<string>;
    /**
     * Specifies the status of this DB snapshot.
     */
    public /*out*/ readonly status: pulumi.Output<string>;
    /**
     * Specifies the storage type associated with DB snapshot.
     */
    public /*out*/ readonly storageType: pulumi.Output<string>;
    /**
     * Key-value mapping of resource tags
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Specifies the storage type associated with DB snapshot.
     */
    public /*out*/ readonly vpcId: pulumi.Output<string>;

    /**
     * Create a Snapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnapshotArgs | SnapshotState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SnapshotState = argsOrState as SnapshotState | undefined;
            inputs["allocatedStorage"] = state ? state.allocatedStorage : undefined;
            inputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            inputs["dbInstanceIdentifier"] = state ? state.dbInstanceIdentifier : undefined;
            inputs["dbSnapshotArn"] = state ? state.dbSnapshotArn : undefined;
            inputs["dbSnapshotIdentifier"] = state ? state.dbSnapshotIdentifier : undefined;
            inputs["encrypted"] = state ? state.encrypted : undefined;
            inputs["engine"] = state ? state.engine : undefined;
            inputs["engineVersion"] = state ? state.engineVersion : undefined;
            inputs["iops"] = state ? state.iops : undefined;
            inputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            inputs["licenseModel"] = state ? state.licenseModel : undefined;
            inputs["optionGroupName"] = state ? state.optionGroupName : undefined;
            inputs["port"] = state ? state.port : undefined;
            inputs["snapshotType"] = state ? state.snapshotType : undefined;
            inputs["sourceDbSnapshotIdentifier"] = state ? state.sourceDbSnapshotIdentifier : undefined;
            inputs["sourceRegion"] = state ? state.sourceRegion : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["storageType"] = state ? state.storageType : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as SnapshotArgs | undefined;
            if (!args || args.dbInstanceIdentifier === undefined) {
                throw new Error("Missing required property 'dbInstanceIdentifier'");
            }
            if (!args || args.dbSnapshotIdentifier === undefined) {
                throw new Error("Missing required property 'dbSnapshotIdentifier'");
            }
            inputs["dbInstanceIdentifier"] = args ? args.dbInstanceIdentifier : undefined;
            inputs["dbSnapshotIdentifier"] = args ? args.dbSnapshotIdentifier : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["allocatedStorage"] = undefined /*out*/;
            inputs["availabilityZone"] = undefined /*out*/;
            inputs["dbSnapshotArn"] = undefined /*out*/;
            inputs["encrypted"] = undefined /*out*/;
            inputs["engine"] = undefined /*out*/;
            inputs["engineVersion"] = undefined /*out*/;
            inputs["iops"] = undefined /*out*/;
            inputs["kmsKeyId"] = undefined /*out*/;
            inputs["licenseModel"] = undefined /*out*/;
            inputs["optionGroupName"] = undefined /*out*/;
            inputs["port"] = undefined /*out*/;
            inputs["snapshotType"] = undefined /*out*/;
            inputs["sourceDbSnapshotIdentifier"] = undefined /*out*/;
            inputs["sourceRegion"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["storageType"] = undefined /*out*/;
            inputs["vpcId"] = undefined /*out*/;
        }
        super("aws:rds/snapshot:Snapshot", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Snapshot resources.
 */
export interface SnapshotState {
    /**
     * Specifies the allocated storage size in gigabytes (GB).
     */
    readonly allocatedStorage?: pulumi.Input<number>;
    /**
     * Specifies the name of the Availability Zone the DB instance was located in at the time of the DB snapshot.
     */
    readonly availabilityZone?: pulumi.Input<string>;
    /**
     * The DB Instance Identifier from which to take the snapshot.
     */
    readonly dbInstanceIdentifier?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) for the DB snapshot.
     */
    readonly dbSnapshotArn?: pulumi.Input<string>;
    /**
     * The Identifier for the snapshot.
     */
    readonly dbSnapshotIdentifier?: pulumi.Input<string>;
    /**
     * Specifies whether the DB snapshot is encrypted.
     */
    readonly encrypted?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the database engine.
     */
    readonly engine?: pulumi.Input<string>;
    /**
     * Specifies the version of the database engine.
     */
    readonly engineVersion?: pulumi.Input<string>;
    /**
     * Specifies the Provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.
     */
    readonly iops?: pulumi.Input<number>;
    /**
     * The ARN for the KMS encryption key.
     */
    readonly kmsKeyId?: pulumi.Input<string>;
    /**
     * License model information for the restored DB instance.
     */
    readonly licenseModel?: pulumi.Input<string>;
    /**
     * Provides the option group name for the DB snapshot.
     */
    readonly optionGroupName?: pulumi.Input<string>;
    readonly port?: pulumi.Input<number>;
    readonly snapshotType?: pulumi.Input<string>;
    /**
     * The DB snapshot Arn that the DB snapshot was copied from. It only has value in case of cross customer or cross region copy.
     */
    readonly sourceDbSnapshotIdentifier?: pulumi.Input<string>;
    /**
     * The region that the DB snapshot was created in or copied from.
     */
    readonly sourceRegion?: pulumi.Input<string>;
    /**
     * Specifies the status of this DB snapshot.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * Specifies the storage type associated with DB snapshot.
     */
    readonly storageType?: pulumi.Input<string>;
    /**
     * Key-value mapping of resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the storage type associated with DB snapshot.
     */
    readonly vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Snapshot resource.
 */
export interface SnapshotArgs {
    /**
     * The DB Instance Identifier from which to take the snapshot.
     */
    readonly dbInstanceIdentifier: pulumi.Input<string>;
    /**
     * The Identifier for the snapshot.
     */
    readonly dbSnapshotIdentifier: pulumi.Input<string>;
    /**
     * Key-value mapping of resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The live Snapshot resource.
 */
export interface SnapshotResult {
    /**
     * Specifies the allocated storage size in gigabytes (GB).
     */
    readonly allocatedStorage: number;
    /**
     * Specifies the name of the Availability Zone the DB instance was located in at the time of the DB snapshot.
     */
    readonly availabilityZone: string;
    /**
     * The DB Instance Identifier from which to take the snapshot.
     */
    readonly dbInstanceIdentifier: string;
    /**
     * The Amazon Resource Name (ARN) for the DB snapshot.
     */
    readonly dbSnapshotArn: string;
    /**
     * The Identifier for the snapshot.
     */
    readonly dbSnapshotIdentifier: string;
    /**
     * Specifies whether the DB snapshot is encrypted.
     */
    readonly encrypted: boolean;
    /**
     * Specifies the name of the database engine.
     */
    readonly engine: string;
    /**
     * Specifies the version of the database engine.
     */
    readonly engineVersion: string;
    /**
     * Specifies the Provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.
     */
    readonly iops: number;
    /**
     * The ARN for the KMS encryption key.
     */
    readonly kmsKeyId: string;
    /**
     * License model information for the restored DB instance.
     */
    readonly licenseModel: string;
    /**
     * Provides the option group name for the DB snapshot.
     */
    readonly optionGroupName: string;
    readonly port: number;
    readonly snapshotType: string;
    /**
     * The DB snapshot Arn that the DB snapshot was copied from. It only has value in case of cross customer or cross region copy.
     */
    readonly sourceDbSnapshotIdentifier: string;
    /**
     * The region that the DB snapshot was created in or copied from.
     */
    readonly sourceRegion: string;
    /**
     * Specifies the status of this DB snapshot.
     */
    readonly status: string;
    /**
     * Specifies the storage type associated with DB snapshot.
     */
    readonly storageType: string;
    /**
     * Key-value mapping of resource tags
     */
    readonly tags?: {[key: string]: any};
    /**
     * Specifies the storage type associated with DB snapshot.
     */
    readonly vpcId: string;
}
