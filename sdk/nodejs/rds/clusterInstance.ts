// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {EngineType} from "./engineType";
import {InstanceType} from "./instanceType";

/**
 * Provides an RDS Cluster Instance Resource. A Cluster Instance Resource defines
 * attributes that are specific to a single instance in a [RDS Cluster][3],
 * specifically running Amazon Aurora.
 * 
 * Unlike other RDS resources that support replication, with Amazon Aurora you do
 * not designate a primary and subsequent replicas. Instead, you simply add RDS
 * Instances and Aurora manages the replication. You can use the [count][5]
 * meta-parameter to make multiple instances and join them all to the same RDS
 * Cluster, or you may specify different Cluster Instance resources with various
 * `instance_class` sizes.
 * 
 * For more information on Amazon Aurora, see [Aurora on Amazon RDS][2] in the Amazon RDS User Guide.
 * 
 * > **NOTE:** Deletion Protection from the RDS service can only be enabled at the cluster level, not for individual cluster instances. You can still add the [`prevent_destroy` lifecycle behavior](https://www.terraform.io/docs/configuration/resources.html#prevent_destroy) to your Terraform resource configuration if you desire protection from accidental deletion.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const defaultCluster = new aws.rds.Cluster("default", {
 *     availabilityZones: [
 *         "us-west-2a",
 *         "us-west-2b",
 *         "us-west-2c",
 *     ],
 *     clusterIdentifier: "aurora-cluster-demo",
 *     databaseName: "mydb",
 *     masterPassword: "barbut8chars",
 *     masterUsername: "foo",
 * });
 * const clusterInstances: aws.rds.ClusterInstance[] = [];
 * for (let i = 0; i < 2; i++) {
 *     clusterInstances.push(new aws.rds.ClusterInstance(`cluster_instances-${i}`, {
 *         clusterIdentifier: defaultCluster.id,
 *         identifier: `aurora-cluster-demo-${i}`,
 *         instanceClass: "db.r4.large",
 *     }));
 * }
 * ```
 */
export class ClusterInstance extends pulumi.CustomResource {
    /**
     * Get an existing ClusterInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterInstanceState, opts?: pulumi.CustomResourceOptions): ClusterInstance {
        return new ClusterInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:rds/clusterInstance:ClusterInstance';

    /**
     * Returns true if the given object is an instance of ClusterInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterInstance.__pulumiType;
    }

    /**
     * Specifies whether any database modifications
     * are applied immediately, or during the next maintenance window. Default is`false`.
     */
    public readonly applyImmediately!: pulumi.Output<boolean>;
    /**
     * Amazon Resource Name (ARN) of cluster instance
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.
     */
    public readonly autoMinorVersionUpgrade!: pulumi.Output<boolean | undefined>;
    /**
     * The EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.
     */
    public readonly availabilityZone!: pulumi.Output<string>;
    /**
     * The identifier of the [`aws_rds_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_cluster.html) in which to launch this instance.
     */
    public readonly clusterIdentifier!: pulumi.Output<string>;
    /**
     * Indicates whether to copy all of the user-defined tags from the DB instance to snapshots of the DB instance. Default `false`.
     */
    public readonly copyTagsToSnapshot!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the DB parameter group to associate with this instance.
     */
    public readonly dbParameterGroupName!: pulumi.Output<string>;
    /**
     * A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` of the attached [`aws_rds_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_cluster.html).
     */
    public readonly dbSubnetGroupName!: pulumi.Output<string>;
    /**
     * The region-unique, immutable identifier for the DB instance.
     */
    public /*out*/ readonly dbiResourceId!: pulumi.Output<string>;
    /**
     * The DNS address for this instance. May not be writable
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * The name of the database engine to be used for the RDS instance. Defaults to `aurora`. Valid Values: `aurora`, `aurora-mysql`, `aurora-postgresql`.
     * For information on the difference between the available Aurora MySQL engines
     * see [Comparison between Aurora MySQL 1 and Aurora MySQL 2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Updates.20180206.html)
     * in the Amazon RDS User Guide.
     */
    public readonly engine!: pulumi.Output<EngineType | undefined>;
    /**
     * The database engine version.
     */
    public readonly engineVersion!: pulumi.Output<string>;
    /**
     * The indentifier for the RDS instance, if omitted, Terraform will assign a random, unique identifier.
     */
    public readonly identifier!: pulumi.Output<string>;
    /**
     * Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
     */
    public readonly identifierPrefix!: pulumi.Output<string>;
    /**
     * The instance class to use. For details on CPU
     * and memory, see [Scaling Aurora DB Instances][4]. Aurora uses `db.*` instance classes/types. Please see [AWS Documentation][7] for currently available instance classes and complete details.
     */
    public readonly instanceClass!: pulumi.Output<string>;
    /**
     * The ARN for the KMS encryption key if one is set to the cluster.
     */
    public /*out*/ readonly kmsKeyId!: pulumi.Output<string>;
    /**
     * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.
     */
    public readonly monitoringInterval!: pulumi.Output<number | undefined>;
    /**
     * The ARN for the IAM role that permits RDS to send
     * enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html)
     * what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
     */
    public readonly monitoringRoleArn!: pulumi.Output<string>;
    /**
     * Specifies whether Performance Insights is enabled or not.
     */
    public readonly performanceInsightsEnabled!: pulumi.Output<boolean>;
    /**
     * The ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.
     */
    public readonly performanceInsightsKmsKeyId!: pulumi.Output<string>;
    /**
     * The database port
     */
    public /*out*/ readonly port!: pulumi.Output<number>;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled.
     * Eg: "04:00-09:00"
     */
    public readonly preferredBackupWindow!: pulumi.Output<string>;
    /**
     * The window to perform maintenance in.
     * Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
     */
    public readonly preferredMaintenanceWindow!: pulumi.Output<string>;
    /**
     * Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.
     */
    public readonly promotionTier!: pulumi.Output<number | undefined>;
    /**
     * Bool to control if instance is publicly accessible.
     * Default `false`. See the documentation on [Creating DB Instances][6] for more
     * details on controlling this property.
     */
    public readonly publiclyAccessible!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether the DB cluster is encrypted.
     */
    public /*out*/ readonly storageEncrypted!: pulumi.Output<boolean>;
    /**
     * A mapping of tags to assign to the instance.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Boolean indicating if this instance is writable. `False` indicates this instance is a read replica.
     */
    public /*out*/ readonly writer!: pulumi.Output<boolean>;

    /**
     * Create a ClusterInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterInstanceArgs | ClusterInstanceState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ClusterInstanceState | undefined;
            inputs["applyImmediately"] = state ? state.applyImmediately : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["autoMinorVersionUpgrade"] = state ? state.autoMinorVersionUpgrade : undefined;
            inputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            inputs["clusterIdentifier"] = state ? state.clusterIdentifier : undefined;
            inputs["copyTagsToSnapshot"] = state ? state.copyTagsToSnapshot : undefined;
            inputs["dbParameterGroupName"] = state ? state.dbParameterGroupName : undefined;
            inputs["dbSubnetGroupName"] = state ? state.dbSubnetGroupName : undefined;
            inputs["dbiResourceId"] = state ? state.dbiResourceId : undefined;
            inputs["endpoint"] = state ? state.endpoint : undefined;
            inputs["engine"] = state ? state.engine : undefined;
            inputs["engineVersion"] = state ? state.engineVersion : undefined;
            inputs["identifier"] = state ? state.identifier : undefined;
            inputs["identifierPrefix"] = state ? state.identifierPrefix : undefined;
            inputs["instanceClass"] = state ? state.instanceClass : undefined;
            inputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            inputs["monitoringInterval"] = state ? state.monitoringInterval : undefined;
            inputs["monitoringRoleArn"] = state ? state.monitoringRoleArn : undefined;
            inputs["performanceInsightsEnabled"] = state ? state.performanceInsightsEnabled : undefined;
            inputs["performanceInsightsKmsKeyId"] = state ? state.performanceInsightsKmsKeyId : undefined;
            inputs["port"] = state ? state.port : undefined;
            inputs["preferredBackupWindow"] = state ? state.preferredBackupWindow : undefined;
            inputs["preferredMaintenanceWindow"] = state ? state.preferredMaintenanceWindow : undefined;
            inputs["promotionTier"] = state ? state.promotionTier : undefined;
            inputs["publiclyAccessible"] = state ? state.publiclyAccessible : undefined;
            inputs["storageEncrypted"] = state ? state.storageEncrypted : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["writer"] = state ? state.writer : undefined;
        } else {
            const args = argsOrState as ClusterInstanceArgs | undefined;
            if (!args || args.clusterIdentifier === undefined) {
                throw new Error("Missing required property 'clusterIdentifier'");
            }
            if (!args || args.instanceClass === undefined) {
                throw new Error("Missing required property 'instanceClass'");
            }
            inputs["applyImmediately"] = args ? args.applyImmediately : undefined;
            inputs["autoMinorVersionUpgrade"] = args ? args.autoMinorVersionUpgrade : undefined;
            inputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            inputs["clusterIdentifier"] = args ? args.clusterIdentifier : undefined;
            inputs["copyTagsToSnapshot"] = args ? args.copyTagsToSnapshot : undefined;
            inputs["dbParameterGroupName"] = args ? args.dbParameterGroupName : undefined;
            inputs["dbSubnetGroupName"] = args ? args.dbSubnetGroupName : undefined;
            inputs["engine"] = args ? args.engine : undefined;
            inputs["engineVersion"] = args ? args.engineVersion : undefined;
            inputs["identifier"] = args ? args.identifier : undefined;
            inputs["identifierPrefix"] = args ? args.identifierPrefix : undefined;
            inputs["instanceClass"] = args ? args.instanceClass : undefined;
            inputs["monitoringInterval"] = args ? args.monitoringInterval : undefined;
            inputs["monitoringRoleArn"] = args ? args.monitoringRoleArn : undefined;
            inputs["performanceInsightsEnabled"] = args ? args.performanceInsightsEnabled : undefined;
            inputs["performanceInsightsKmsKeyId"] = args ? args.performanceInsightsKmsKeyId : undefined;
            inputs["preferredBackupWindow"] = args ? args.preferredBackupWindow : undefined;
            inputs["preferredMaintenanceWindow"] = args ? args.preferredMaintenanceWindow : undefined;
            inputs["promotionTier"] = args ? args.promotionTier : undefined;
            inputs["publiclyAccessible"] = args ? args.publiclyAccessible : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["dbiResourceId"] = undefined /*out*/;
            inputs["endpoint"] = undefined /*out*/;
            inputs["kmsKeyId"] = undefined /*out*/;
            inputs["port"] = undefined /*out*/;
            inputs["storageEncrypted"] = undefined /*out*/;
            inputs["writer"] = undefined /*out*/;
        }
        super(ClusterInstance.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ClusterInstance resources.
 */
export interface ClusterInstanceState {
    /**
     * Specifies whether any database modifications
     * are applied immediately, or during the next maintenance window. Default is`false`.
     */
    readonly applyImmediately?: pulumi.Input<boolean>;
    /**
     * Amazon Resource Name (ARN) of cluster instance
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.
     */
    readonly autoMinorVersionUpgrade?: pulumi.Input<boolean>;
    /**
     * The EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.
     */
    readonly availabilityZone?: pulumi.Input<string>;
    /**
     * The identifier of the [`aws_rds_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_cluster.html) in which to launch this instance.
     */
    readonly clusterIdentifier?: pulumi.Input<string>;
    /**
     * Indicates whether to copy all of the user-defined tags from the DB instance to snapshots of the DB instance. Default `false`.
     */
    readonly copyTagsToSnapshot?: pulumi.Input<boolean>;
    /**
     * The name of the DB parameter group to associate with this instance.
     */
    readonly dbParameterGroupName?: pulumi.Input<string>;
    /**
     * A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` of the attached [`aws_rds_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_cluster.html).
     */
    readonly dbSubnetGroupName?: pulumi.Input<string>;
    /**
     * The region-unique, immutable identifier for the DB instance.
     */
    readonly dbiResourceId?: pulumi.Input<string>;
    /**
     * The DNS address for this instance. May not be writable
     */
    readonly endpoint?: pulumi.Input<string>;
    /**
     * The name of the database engine to be used for the RDS instance. Defaults to `aurora`. Valid Values: `aurora`, `aurora-mysql`, `aurora-postgresql`.
     * For information on the difference between the available Aurora MySQL engines
     * see [Comparison between Aurora MySQL 1 and Aurora MySQL 2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Updates.20180206.html)
     * in the Amazon RDS User Guide.
     */
    readonly engine?: pulumi.Input<EngineType>;
    /**
     * The database engine version.
     */
    readonly engineVersion?: pulumi.Input<string>;
    /**
     * The indentifier for the RDS instance, if omitted, Terraform will assign a random, unique identifier.
     */
    readonly identifier?: pulumi.Input<string>;
    /**
     * Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
     */
    readonly identifierPrefix?: pulumi.Input<string>;
    /**
     * The instance class to use. For details on CPU
     * and memory, see [Scaling Aurora DB Instances][4]. Aurora uses `db.*` instance classes/types. Please see [AWS Documentation][7] for currently available instance classes and complete details.
     */
    readonly instanceClass?: pulumi.Input<string | InstanceType>;
    /**
     * The ARN for the KMS encryption key if one is set to the cluster.
     */
    readonly kmsKeyId?: pulumi.Input<string>;
    /**
     * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.
     */
    readonly monitoringInterval?: pulumi.Input<number>;
    /**
     * The ARN for the IAM role that permits RDS to send
     * enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html)
     * what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
     */
    readonly monitoringRoleArn?: pulumi.Input<string>;
    /**
     * Specifies whether Performance Insights is enabled or not.
     */
    readonly performanceInsightsEnabled?: pulumi.Input<boolean>;
    /**
     * The ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.
     */
    readonly performanceInsightsKmsKeyId?: pulumi.Input<string>;
    /**
     * The database port
     */
    readonly port?: pulumi.Input<number>;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled.
     * Eg: "04:00-09:00"
     */
    readonly preferredBackupWindow?: pulumi.Input<string>;
    /**
     * The window to perform maintenance in.
     * Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
     */
    readonly preferredMaintenanceWindow?: pulumi.Input<string>;
    /**
     * Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.
     */
    readonly promotionTier?: pulumi.Input<number>;
    /**
     * Bool to control if instance is publicly accessible.
     * Default `false`. See the documentation on [Creating DB Instances][6] for more
     * details on controlling this property.
     */
    readonly publiclyAccessible?: pulumi.Input<boolean>;
    /**
     * Specifies whether the DB cluster is encrypted.
     */
    readonly storageEncrypted?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the instance.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Boolean indicating if this instance is writable. `False` indicates this instance is a read replica.
     */
    readonly writer?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ClusterInstance resource.
 */
export interface ClusterInstanceArgs {
    /**
     * Specifies whether any database modifications
     * are applied immediately, or during the next maintenance window. Default is`false`.
     */
    readonly applyImmediately?: pulumi.Input<boolean>;
    /**
     * Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.
     */
    readonly autoMinorVersionUpgrade?: pulumi.Input<boolean>;
    /**
     * The EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.
     */
    readonly availabilityZone?: pulumi.Input<string>;
    /**
     * The identifier of the [`aws_rds_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_cluster.html) in which to launch this instance.
     */
    readonly clusterIdentifier: pulumi.Input<string>;
    /**
     * Indicates whether to copy all of the user-defined tags from the DB instance to snapshots of the DB instance. Default `false`.
     */
    readonly copyTagsToSnapshot?: pulumi.Input<boolean>;
    /**
     * The name of the DB parameter group to associate with this instance.
     */
    readonly dbParameterGroupName?: pulumi.Input<string>;
    /**
     * A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` of the attached [`aws_rds_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_cluster.html).
     */
    readonly dbSubnetGroupName?: pulumi.Input<string>;
    /**
     * The name of the database engine to be used for the RDS instance. Defaults to `aurora`. Valid Values: `aurora`, `aurora-mysql`, `aurora-postgresql`.
     * For information on the difference between the available Aurora MySQL engines
     * see [Comparison between Aurora MySQL 1 and Aurora MySQL 2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Updates.20180206.html)
     * in the Amazon RDS User Guide.
     */
    readonly engine?: pulumi.Input<EngineType>;
    /**
     * The database engine version.
     */
    readonly engineVersion?: pulumi.Input<string>;
    /**
     * The indentifier for the RDS instance, if omitted, Terraform will assign a random, unique identifier.
     */
    readonly identifier?: pulumi.Input<string>;
    /**
     * Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
     */
    readonly identifierPrefix?: pulumi.Input<string>;
    /**
     * The instance class to use. For details on CPU
     * and memory, see [Scaling Aurora DB Instances][4]. Aurora uses `db.*` instance classes/types. Please see [AWS Documentation][7] for currently available instance classes and complete details.
     */
    readonly instanceClass: pulumi.Input<string | InstanceType>;
    /**
     * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.
     */
    readonly monitoringInterval?: pulumi.Input<number>;
    /**
     * The ARN for the IAM role that permits RDS to send
     * enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html)
     * what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
     */
    readonly monitoringRoleArn?: pulumi.Input<string>;
    /**
     * Specifies whether Performance Insights is enabled or not.
     */
    readonly performanceInsightsEnabled?: pulumi.Input<boolean>;
    /**
     * The ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.
     */
    readonly performanceInsightsKmsKeyId?: pulumi.Input<string>;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled.
     * Eg: "04:00-09:00"
     */
    readonly preferredBackupWindow?: pulumi.Input<string>;
    /**
     * The window to perform maintenance in.
     * Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
     */
    readonly preferredMaintenanceWindow?: pulumi.Input<string>;
    /**
     * Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.
     */
    readonly promotionTier?: pulumi.Input<number>;
    /**
     * Bool to control if instance is publicly accessible.
     * Default `false`. See the documentation on [Creating DB Instances][6] for more
     * details on controlling this property.
     */
    readonly publiclyAccessible?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the instance.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
