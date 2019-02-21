// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

/**
 * Provides an Neptune Cluster Resource. A Cluster Resource defines attributes that are
 * applied to the entire cluster of Neptune Cluster Instances.
 * 
 * Changes to a Neptune Cluster can occur when you manually change a
 * parameter, such as `backup_retention_period`, and are reflected in the next maintenance
 * window. Because of this, Terraform may report a difference in its planning
 * phase because a modification has not yet taken place. You can use the
 * `apply_immediately` flag to instruct the service to apply the change immediately
 * (see documentation below).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const defaultCluster = new aws.neptune.Cluster("default", {
 *     applyImmediately: true,
 *     backupRetentionPeriod: 5,
 *     clusterIdentifier: "neptune-cluster-demo",
 *     engine: "neptune",
 *     iamDatabaseAuthenticationEnabled: true,
 *     preferredBackupWindow: "07:00-09:00",
 *     skipFinalSnapshot: true,
 * });
 * ```
 * 
 * > **Note:** AWS Neptune does not support user name/password–based access control.
 * See the AWS [Docs](https://docs.aws.amazon.com/neptune/latest/userguide/limits.html) for more information.
 */
export class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterState, opts?: pulumi.CustomResourceOptions): Cluster {
        return new Cluster(name, <any>state, { ...opts, id: id });
    }

    public static list(): rxjs.Observable<ClusterResult> {
        return rxjs.from(
            pulumi.runtime
                .invoke('pulumi:pulumi:readStackResourceOutputs', {
                    stackName: pulumi.runtime.getStack(),
                    type: 'aws:neptune/cluster:Cluster',
                })
                .then(o => Object.keys(o.outputs).map(k => o.outputs[k]))
        ).pipe(
            operators.mergeAll(),
        );
    }

    /**
     * Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`.
     */
    public readonly applyImmediately: pulumi.Output<boolean>;
    /**
     * The Neptune Cluster Amazon Resource Name (ARN)
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * A list of EC2 Availability Zones that instances in the Neptune cluster can be created in.
     */
    public readonly availabilityZones: pulumi.Output<string[]>;
    /**
     * The days to retain backups for. Default `1`
     */
    public readonly backupRetentionPeriod: pulumi.Output<number | undefined>;
    /**
     * The cluster identifier. If omitted, Terraform will assign a random, unique identifier.
     */
    public readonly clusterIdentifier: pulumi.Output<string>;
    /**
     * Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
     */
    public readonly clusterIdentifierPrefix: pulumi.Output<string>;
    /**
     * List of Neptune Instances that are a part of this cluster
     */
    public /*out*/ readonly clusterMembers: pulumi.Output<string[]>;
    /**
     * The Neptune Cluster Resource ID
     */
    public /*out*/ readonly clusterResourceId: pulumi.Output<string>;
    /**
     * The DNS address of the Neptune instance
     */
    public /*out*/ readonly endpoint: pulumi.Output<string>;
    /**
     * The name of the database engine to be used for this Neptune cluster. Defaults to `neptune`.
     */
    public readonly engine: pulumi.Output<string | undefined>;
    /**
     * The database engine version.
     */
    public readonly engineVersion: pulumi.Output<string>;
    /**
     * The name of your final Neptune snapshot when this Neptune cluster is deleted. If omitted, no final snapshot will be made.
     */
    public readonly finalSnapshotIdentifier: pulumi.Output<string | undefined>;
    /**
     * The Route53 Hosted Zone ID of the endpoint
     */
    public /*out*/ readonly hostedZoneId: pulumi.Output<string>;
    /**
     * Specifies whether or mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled.
     */
    public readonly iamDatabaseAuthenticationEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A List of ARNs for the IAM roles to associate to the Neptune Cluster.
     */
    public readonly iamRoles: pulumi.Output<string[] | undefined>;
    /**
     * The ARN for the KMS encryption key. When specifying `kms_key_arn`, `storage_encrypted` needs to be set to true.
     */
    public readonly kmsKeyArn: pulumi.Output<string>;
    /**
     * A cluster parameter group to associate with the cluster.
     */
    public readonly neptuneClusterParameterGroupName: pulumi.Output<string | undefined>;
    /**
     * A Neptune subnet group to associate with this Neptune instance.
     */
    public readonly neptuneSubnetGroupName: pulumi.Output<string>;
    /**
     * The port on which the Neptune accepts connections. Default is `8182`.
     */
    public readonly port: pulumi.Output<number | undefined>;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. Time in UTC. Default: A 30-minute window selected at random from an 8-hour block of time per region. e.g. 04:00-09:00
     */
    public readonly preferredBackupWindow: pulumi.Output<string>;
    /**
     * The weekly time range during which system maintenance can occur, in (UTC) e.g. wed:04:00-wed:04:30
     */
    public readonly preferredMaintenanceWindow: pulumi.Output<string>;
    /**
     * A read-only endpoint for the Neptune cluster, automatically load-balanced across replicas
     */
    public /*out*/ readonly readerEndpoint: pulumi.Output<string>;
    /**
     * ARN of a source Neptune cluster or Neptune instance if this Neptune cluster is to be created as a Read Replica.
     */
    public readonly replicationSourceIdentifier: pulumi.Output<string | undefined>;
    /**
     * Determines whether a final Neptune snapshot is created before the Neptune cluster is deleted. If true is specified, no Neptune snapshot is created. If false is specified, a Neptune snapshot is created before the Neptune cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
     */
    public readonly skipFinalSnapshot: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a Neptune cluster snapshot, or the ARN when specifying a Neptune snapshot.
     */
    public readonly snapshotIdentifier: pulumi.Output<string | undefined>;
    /**
     * Specifies whether the Neptune cluster is encrypted. The default is `false` if not specified.
     */
    public readonly storageEncrypted: pulumi.Output<boolean | undefined>;
    /**
     * A mapping of tags to assign to the Neptune cluster.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * List of VPC security groups to associate with the Cluster
     */
    public readonly vpcSecurityGroupIds: pulumi.Output<string[]>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterArgs | ClusterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ClusterState = argsOrState as ClusterState | undefined;
            inputs["applyImmediately"] = state ? state.applyImmediately : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["availabilityZones"] = state ? state.availabilityZones : undefined;
            inputs["backupRetentionPeriod"] = state ? state.backupRetentionPeriod : undefined;
            inputs["clusterIdentifier"] = state ? state.clusterIdentifier : undefined;
            inputs["clusterIdentifierPrefix"] = state ? state.clusterIdentifierPrefix : undefined;
            inputs["clusterMembers"] = state ? state.clusterMembers : undefined;
            inputs["clusterResourceId"] = state ? state.clusterResourceId : undefined;
            inputs["endpoint"] = state ? state.endpoint : undefined;
            inputs["engine"] = state ? state.engine : undefined;
            inputs["engineVersion"] = state ? state.engineVersion : undefined;
            inputs["finalSnapshotIdentifier"] = state ? state.finalSnapshotIdentifier : undefined;
            inputs["hostedZoneId"] = state ? state.hostedZoneId : undefined;
            inputs["iamDatabaseAuthenticationEnabled"] = state ? state.iamDatabaseAuthenticationEnabled : undefined;
            inputs["iamRoles"] = state ? state.iamRoles : undefined;
            inputs["kmsKeyArn"] = state ? state.kmsKeyArn : undefined;
            inputs["neptuneClusterParameterGroupName"] = state ? state.neptuneClusterParameterGroupName : undefined;
            inputs["neptuneSubnetGroupName"] = state ? state.neptuneSubnetGroupName : undefined;
            inputs["port"] = state ? state.port : undefined;
            inputs["preferredBackupWindow"] = state ? state.preferredBackupWindow : undefined;
            inputs["preferredMaintenanceWindow"] = state ? state.preferredMaintenanceWindow : undefined;
            inputs["readerEndpoint"] = state ? state.readerEndpoint : undefined;
            inputs["replicationSourceIdentifier"] = state ? state.replicationSourceIdentifier : undefined;
            inputs["skipFinalSnapshot"] = state ? state.skipFinalSnapshot : undefined;
            inputs["snapshotIdentifier"] = state ? state.snapshotIdentifier : undefined;
            inputs["storageEncrypted"] = state ? state.storageEncrypted : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vpcSecurityGroupIds"] = state ? state.vpcSecurityGroupIds : undefined;
        } else {
            const args = argsOrState as ClusterArgs | undefined;
            inputs["applyImmediately"] = args ? args.applyImmediately : undefined;
            inputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            inputs["backupRetentionPeriod"] = args ? args.backupRetentionPeriod : undefined;
            inputs["clusterIdentifier"] = args ? args.clusterIdentifier : undefined;
            inputs["clusterIdentifierPrefix"] = args ? args.clusterIdentifierPrefix : undefined;
            inputs["engine"] = args ? args.engine : undefined;
            inputs["engineVersion"] = args ? args.engineVersion : undefined;
            inputs["finalSnapshotIdentifier"] = args ? args.finalSnapshotIdentifier : undefined;
            inputs["iamDatabaseAuthenticationEnabled"] = args ? args.iamDatabaseAuthenticationEnabled : undefined;
            inputs["iamRoles"] = args ? args.iamRoles : undefined;
            inputs["kmsKeyArn"] = args ? args.kmsKeyArn : undefined;
            inputs["neptuneClusterParameterGroupName"] = args ? args.neptuneClusterParameterGroupName : undefined;
            inputs["neptuneSubnetGroupName"] = args ? args.neptuneSubnetGroupName : undefined;
            inputs["port"] = args ? args.port : undefined;
            inputs["preferredBackupWindow"] = args ? args.preferredBackupWindow : undefined;
            inputs["preferredMaintenanceWindow"] = args ? args.preferredMaintenanceWindow : undefined;
            inputs["replicationSourceIdentifier"] = args ? args.replicationSourceIdentifier : undefined;
            inputs["skipFinalSnapshot"] = args ? args.skipFinalSnapshot : undefined;
            inputs["snapshotIdentifier"] = args ? args.snapshotIdentifier : undefined;
            inputs["storageEncrypted"] = args ? args.storageEncrypted : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vpcSecurityGroupIds"] = args ? args.vpcSecurityGroupIds : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["clusterMembers"] = undefined /*out*/;
            inputs["clusterResourceId"] = undefined /*out*/;
            inputs["endpoint"] = undefined /*out*/;
            inputs["hostedZoneId"] = undefined /*out*/;
            inputs["readerEndpoint"] = undefined /*out*/;
        }
        super("aws:neptune/cluster:Cluster", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    /**
     * Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`.
     */
    readonly applyImmediately?: pulumi.Input<boolean>;
    /**
     * The Neptune Cluster Amazon Resource Name (ARN)
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * A list of EC2 Availability Zones that instances in the Neptune cluster can be created in.
     */
    readonly availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The days to retain backups for. Default `1`
     */
    readonly backupRetentionPeriod?: pulumi.Input<number>;
    /**
     * The cluster identifier. If omitted, Terraform will assign a random, unique identifier.
     */
    readonly clusterIdentifier?: pulumi.Input<string>;
    /**
     * Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
     */
    readonly clusterIdentifierPrefix?: pulumi.Input<string>;
    /**
     * List of Neptune Instances that are a part of this cluster
     */
    readonly clusterMembers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Neptune Cluster Resource ID
     */
    readonly clusterResourceId?: pulumi.Input<string>;
    /**
     * The DNS address of the Neptune instance
     */
    readonly endpoint?: pulumi.Input<string>;
    /**
     * The name of the database engine to be used for this Neptune cluster. Defaults to `neptune`.
     */
    readonly engine?: pulumi.Input<string>;
    /**
     * The database engine version.
     */
    readonly engineVersion?: pulumi.Input<string>;
    /**
     * The name of your final Neptune snapshot when this Neptune cluster is deleted. If omitted, no final snapshot will be made.
     */
    readonly finalSnapshotIdentifier?: pulumi.Input<string>;
    /**
     * The Route53 Hosted Zone ID of the endpoint
     */
    readonly hostedZoneId?: pulumi.Input<string>;
    /**
     * Specifies whether or mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled.
     */
    readonly iamDatabaseAuthenticationEnabled?: pulumi.Input<boolean>;
    /**
     * A List of ARNs for the IAM roles to associate to the Neptune Cluster.
     */
    readonly iamRoles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ARN for the KMS encryption key. When specifying `kms_key_arn`, `storage_encrypted` needs to be set to true.
     */
    readonly kmsKeyArn?: pulumi.Input<string>;
    /**
     * A cluster parameter group to associate with the cluster.
     */
    readonly neptuneClusterParameterGroupName?: pulumi.Input<string>;
    /**
     * A Neptune subnet group to associate with this Neptune instance.
     */
    readonly neptuneSubnetGroupName?: pulumi.Input<string>;
    /**
     * The port on which the Neptune accepts connections. Default is `8182`.
     */
    readonly port?: pulumi.Input<number>;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. Time in UTC. Default: A 30-minute window selected at random from an 8-hour block of time per region. e.g. 04:00-09:00
     */
    readonly preferredBackupWindow?: pulumi.Input<string>;
    /**
     * The weekly time range during which system maintenance can occur, in (UTC) e.g. wed:04:00-wed:04:30
     */
    readonly preferredMaintenanceWindow?: pulumi.Input<string>;
    /**
     * A read-only endpoint for the Neptune cluster, automatically load-balanced across replicas
     */
    readonly readerEndpoint?: pulumi.Input<string>;
    /**
     * ARN of a source Neptune cluster or Neptune instance if this Neptune cluster is to be created as a Read Replica.
     */
    readonly replicationSourceIdentifier?: pulumi.Input<string>;
    /**
     * Determines whether a final Neptune snapshot is created before the Neptune cluster is deleted. If true is specified, no Neptune snapshot is created. If false is specified, a Neptune snapshot is created before the Neptune cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
     */
    readonly skipFinalSnapshot?: pulumi.Input<boolean>;
    /**
     * Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a Neptune cluster snapshot, or the ARN when specifying a Neptune snapshot.
     */
    readonly snapshotIdentifier?: pulumi.Input<string>;
    /**
     * Specifies whether the Neptune cluster is encrypted. The default is `false` if not specified.
     */
    readonly storageEncrypted?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the Neptune cluster.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * List of VPC security groups to associate with the Cluster
     */
    readonly vpcSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`.
     */
    readonly applyImmediately?: pulumi.Input<boolean>;
    /**
     * A list of EC2 Availability Zones that instances in the Neptune cluster can be created in.
     */
    readonly availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The days to retain backups for. Default `1`
     */
    readonly backupRetentionPeriod?: pulumi.Input<number>;
    /**
     * The cluster identifier. If omitted, Terraform will assign a random, unique identifier.
     */
    readonly clusterIdentifier?: pulumi.Input<string>;
    /**
     * Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
     */
    readonly clusterIdentifierPrefix?: pulumi.Input<string>;
    /**
     * The name of the database engine to be used for this Neptune cluster. Defaults to `neptune`.
     */
    readonly engine?: pulumi.Input<string>;
    /**
     * The database engine version.
     */
    readonly engineVersion?: pulumi.Input<string>;
    /**
     * The name of your final Neptune snapshot when this Neptune cluster is deleted. If omitted, no final snapshot will be made.
     */
    readonly finalSnapshotIdentifier?: pulumi.Input<string>;
    /**
     * Specifies whether or mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled.
     */
    readonly iamDatabaseAuthenticationEnabled?: pulumi.Input<boolean>;
    /**
     * A List of ARNs for the IAM roles to associate to the Neptune Cluster.
     */
    readonly iamRoles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ARN for the KMS encryption key. When specifying `kms_key_arn`, `storage_encrypted` needs to be set to true.
     */
    readonly kmsKeyArn?: pulumi.Input<string>;
    /**
     * A cluster parameter group to associate with the cluster.
     */
    readonly neptuneClusterParameterGroupName?: pulumi.Input<string>;
    /**
     * A Neptune subnet group to associate with this Neptune instance.
     */
    readonly neptuneSubnetGroupName?: pulumi.Input<string>;
    /**
     * The port on which the Neptune accepts connections. Default is `8182`.
     */
    readonly port?: pulumi.Input<number>;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. Time in UTC. Default: A 30-minute window selected at random from an 8-hour block of time per region. e.g. 04:00-09:00
     */
    readonly preferredBackupWindow?: pulumi.Input<string>;
    /**
     * The weekly time range during which system maintenance can occur, in (UTC) e.g. wed:04:00-wed:04:30
     */
    readonly preferredMaintenanceWindow?: pulumi.Input<string>;
    /**
     * ARN of a source Neptune cluster or Neptune instance if this Neptune cluster is to be created as a Read Replica.
     */
    readonly replicationSourceIdentifier?: pulumi.Input<string>;
    /**
     * Determines whether a final Neptune snapshot is created before the Neptune cluster is deleted. If true is specified, no Neptune snapshot is created. If false is specified, a Neptune snapshot is created before the Neptune cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
     */
    readonly skipFinalSnapshot?: pulumi.Input<boolean>;
    /**
     * Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a Neptune cluster snapshot, or the ARN when specifying a Neptune snapshot.
     */
    readonly snapshotIdentifier?: pulumi.Input<string>;
    /**
     * Specifies whether the Neptune cluster is encrypted. The default is `false` if not specified.
     */
    readonly storageEncrypted?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the Neptune cluster.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * List of VPC security groups to associate with the Cluster
     */
    readonly vpcSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The live Cluster resource.
 */
export interface ClusterResult {
    /**
     * Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`.
     */
    readonly applyImmediately: boolean;
    /**
     * The Neptune Cluster Amazon Resource Name (ARN)
     */
    readonly arn: string;
    /**
     * A list of EC2 Availability Zones that instances in the Neptune cluster can be created in.
     */
    readonly availabilityZones: string[];
    /**
     * The days to retain backups for. Default `1`
     */
    readonly backupRetentionPeriod?: number;
    /**
     * The cluster identifier. If omitted, Terraform will assign a random, unique identifier.
     */
    readonly clusterIdentifier: string;
    /**
     * Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
     */
    readonly clusterIdentifierPrefix: string;
    /**
     * List of Neptune Instances that are a part of this cluster
     */
    readonly clusterMembers: string[];
    /**
     * The Neptune Cluster Resource ID
     */
    readonly clusterResourceId: string;
    /**
     * The DNS address of the Neptune instance
     */
    readonly endpoint: string;
    /**
     * The name of the database engine to be used for this Neptune cluster. Defaults to `neptune`.
     */
    readonly engine?: string;
    /**
     * The database engine version.
     */
    readonly engineVersion: string;
    /**
     * The name of your final Neptune snapshot when this Neptune cluster is deleted. If omitted, no final snapshot will be made.
     */
    readonly finalSnapshotIdentifier?: string;
    /**
     * The Route53 Hosted Zone ID of the endpoint
     */
    readonly hostedZoneId: string;
    /**
     * Specifies whether or mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled.
     */
    readonly iamDatabaseAuthenticationEnabled?: boolean;
    /**
     * A List of ARNs for the IAM roles to associate to the Neptune Cluster.
     */
    readonly iamRoles?: string[];
    /**
     * The ARN for the KMS encryption key. When specifying `kms_key_arn`, `storage_encrypted` needs to be set to true.
     */
    readonly kmsKeyArn: string;
    /**
     * A cluster parameter group to associate with the cluster.
     */
    readonly neptuneClusterParameterGroupName?: string;
    /**
     * A Neptune subnet group to associate with this Neptune instance.
     */
    readonly neptuneSubnetGroupName: string;
    /**
     * The port on which the Neptune accepts connections. Default is `8182`.
     */
    readonly port?: number;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. Time in UTC. Default: A 30-minute window selected at random from an 8-hour block of time per region. e.g. 04:00-09:00
     */
    readonly preferredBackupWindow: string;
    /**
     * The weekly time range during which system maintenance can occur, in (UTC) e.g. wed:04:00-wed:04:30
     */
    readonly preferredMaintenanceWindow: string;
    /**
     * A read-only endpoint for the Neptune cluster, automatically load-balanced across replicas
     */
    readonly readerEndpoint: string;
    /**
     * ARN of a source Neptune cluster or Neptune instance if this Neptune cluster is to be created as a Read Replica.
     */
    readonly replicationSourceIdentifier?: string;
    /**
     * Determines whether a final Neptune snapshot is created before the Neptune cluster is deleted. If true is specified, no Neptune snapshot is created. If false is specified, a Neptune snapshot is created before the Neptune cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
     */
    readonly skipFinalSnapshot?: boolean;
    /**
     * Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a Neptune cluster snapshot, or the ARN when specifying a Neptune snapshot.
     */
    readonly snapshotIdentifier?: string;
    /**
     * Specifies whether the Neptune cluster is encrypted. The default is `false` if not specified.
     */
    readonly storageEncrypted?: boolean;
    /**
     * A mapping of tags to assign to the Neptune cluster.
     */
    readonly tags?: {[key: string]: any};
    /**
     * List of VPC security groups to associate with the Cluster
     */
    readonly vpcSecurityGroupIds: string[];
}
