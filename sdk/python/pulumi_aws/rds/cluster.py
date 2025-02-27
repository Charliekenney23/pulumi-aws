# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Cluster(pulumi.CustomResource):
    apply_immediately: pulumi.Output[bool]
    """
    Specifies whether any cluster modifications
    are applied immediately, or during the next maintenance window. Default is
    `false`. See [Amazon RDS Documentation for more information.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html)
    """
    arn: pulumi.Output[str]
    """
    Amazon Resource Name (ARN) of cluster
    """
    availability_zones: pulumi.Output[list]
    """
    A list of EC2 Availability Zones for the DB cluster storage where DB cluster instances can be created. RDS automatically assigns 3 AZs if less than 3 AZs are configured, which will show as a difference requiring resource recreation next Terraform apply. It is recommended to specify 3 AZs or use [the `lifecycle` configuration block `ignore_changes` argument](https://www.terraform.io/docs/configuration/resources.html#ignore_changes) if necessary.
    """
    backtrack_window: pulumi.Output[float]
    """
    The target backtrack window, in seconds. Only available for `aurora` engine currently. To disable backtracking, set this value to `0`. Defaults to `0`. Must be between `0` and `259200` (72 hours)
    """
    backup_retention_period: pulumi.Output[float]
    """
    The days to retain backups for. Default `1`
    """
    cluster_identifier: pulumi.Output[str]
    """
    The cluster identifier. If omitted, Terraform will assign a random, unique identifier.
    """
    cluster_identifier_prefix: pulumi.Output[str]
    """
    Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
    """
    cluster_members: pulumi.Output[list]
    """
    List of RDS Instances that are a part of this cluster
    """
    cluster_resource_id: pulumi.Output[str]
    """
    The RDS Cluster Resource ID
    """
    copy_tags_to_snapshot: pulumi.Output[bool]
    """
    Copy all Cluster `tags` to snapshots. Default is `false`.
    """
    database_name: pulumi.Output[str]
    """
    Name for an automatically created database on cluster creation. There are different naming restrictions per database engine: [RDS Naming Constraints][5]
    """
    db_cluster_parameter_group_name: pulumi.Output[str]
    """
    A cluster parameter group to associate with the cluster.
    """
    db_subnet_group_name: pulumi.Output[str]
    """
    A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` specified on every [`aws_rds_cluster_instance`](https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html) in the cluster.
    """
    deletion_protection: pulumi.Output[bool]
    """
    If the DB instance should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
    """
    enabled_cloudwatch_logs_exports: pulumi.Output[list]
    """
    List of log types to export to cloudwatch. If omitted, no logs will be exported.
    The following log types are supported: `audit`, `error`, `general`, `slowquery`.
    """
    endpoint: pulumi.Output[str]
    """
    The DNS address of the RDS instance
    """
    engine: pulumi.Output[str]
    """
    The name of the database engine to be used for this DB cluster. Defaults to `aurora`. Valid Values: `aurora`, `aurora-mysql`, `aurora-postgresql`
    """
    engine_mode: pulumi.Output[str]
    """
    The database engine mode. Valid values: `global`, `parallelquery`, `provisioned`, `serverless`. Defaults to: `provisioned`. See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/aurora-serverless.html) for limitations when using `serverless`.
    """
    engine_version: pulumi.Output[str]
    """
    The database engine version. Updating this argument results in an outage. See the [Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) and [Aurora Postgres](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.html) documentation for your configured engine to determine this value. For example with Aurora MySQL 2, a potential value for this argument is `5.7.mysql_aurora.2.03.2`.
    """
    final_snapshot_identifier: pulumi.Output[str]
    """
    The name of your final DB snapshot
    when this DB cluster is deleted. If omitted, no final snapshot will be
    made.
    """
    global_cluster_identifier: pulumi.Output[str]
    """
    The global cluster identifier specified on [`aws_rds_global_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html).
    """
    hosted_zone_id: pulumi.Output[str]
    """
    The Route53 Hosted Zone ID of the endpoint
    """
    iam_database_authentication_enabled: pulumi.Output[bool]
    """
    Specifies whether or mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) for availability and limitations.
    """
    iam_roles: pulumi.Output[list]
    """
    A List of ARNs for the IAM roles to associate to the RDS Cluster.
    """
    kms_key_id: pulumi.Output[str]
    """
    The ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.
    """
    master_password: pulumi.Output[str]
    """
    Password for the master DB user. Note that this may
    show up in logs, and it will be stored in the state file. Please refer to the [RDS Naming Constraints][5]
    """
    master_username: pulumi.Output[str]
    """
    Username for the master DB user. Please refer to the [RDS Naming Constraints][5]
    """
    port: pulumi.Output[float]
    """
    The port on which the DB accepts connections
    """
    preferred_backup_window: pulumi.Output[str]
    """
    The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC
    Default: A 30-minute window selected at random from an 8-hour block of time per region. e.g. 04:00-09:00
    """
    preferred_maintenance_window: pulumi.Output[str]
    """
    The weekly time range during which system maintenance can occur, in (UTC) e.g. wed:04:00-wed:04:30
    """
    reader_endpoint: pulumi.Output[str]
    """
    A read-only endpoint for the Aurora cluster, automatically
    load-balanced across replicas
    """
    replication_source_identifier: pulumi.Output[str]
    """
    ARN of a source DB cluster or DB instance if this DB cluster is to be created as a Read Replica.
    """
    s3_import: pulumi.Output[dict]
    scaling_configuration: pulumi.Output[dict]
    """
    Nested attribute with scaling properties. Only valid when `engine_mode` is set to `serverless`. More details below.
    """
    skip_final_snapshot: pulumi.Output[bool]
    """
    Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
    """
    snapshot_identifier: pulumi.Output[str]
    """
    Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot.
    """
    source_region: pulumi.Output[str]
    """
    The source region for an encrypted replica DB cluster.
    """
    storage_encrypted: pulumi.Output[bool]
    """
    Specifies whether the DB cluster is encrypted. The default is `false` for `provisioned` `engine_mode` and `true` for `serverless` `engine_mode`.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the DB cluster.
    """
    vpc_security_group_ids: pulumi.Output[list]
    """
    List of VPC security groups to associate
    with the Cluster
    """
    def __init__(__self__, resource_name, opts=None, apply_immediately=None, availability_zones=None, backtrack_window=None, backup_retention_period=None, cluster_identifier=None, cluster_identifier_prefix=None, cluster_members=None, copy_tags_to_snapshot=None, database_name=None, db_cluster_parameter_group_name=None, db_subnet_group_name=None, deletion_protection=None, enabled_cloudwatch_logs_exports=None, engine=None, engine_mode=None, engine_version=None, final_snapshot_identifier=None, global_cluster_identifier=None, iam_database_authentication_enabled=None, iam_roles=None, kms_key_id=None, master_password=None, master_username=None, port=None, preferred_backup_window=None, preferred_maintenance_window=None, replication_source_identifier=None, s3_import=None, scaling_configuration=None, skip_final_snapshot=None, snapshot_identifier=None, source_region=None, storage_encrypted=None, tags=None, vpc_security_group_ids=None, __name__=None, __opts__=None):
        """
        Manages a [RDS Aurora Cluster][2]. To manage cluster instances that inherit configuration from the cluster (when not running the cluster in `serverless` engine mode), see the [`aws_rds_cluster_instance` resource](https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html). To manage non-Aurora databases (e.g. MySQL, PostgreSQL, SQL Server, etc.), see the [`aws_db_instance` resource](https://www.terraform.io/docs/providers/aws/r/db_instance.html).
        
        For information on the difference between the available Aurora MySQL engines
        see [Comparison between Aurora MySQL 1 and Aurora MySQL 2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Updates.20180206.html)
        in the Amazon RDS User Guide.
        
        Changes to a RDS Cluster can occur when you manually change a
        parameter, such as `port`, and are reflected in the next maintenance
        window. Because of this, Terraform may report a difference in its planning
        phase because a modification has not yet taken place. You can use the
        `apply_immediately` flag to instruct the service to apply the change immediately
        (see documentation below).
        
        > **Note:** using `apply_immediately` can result in a
        brief downtime as the server reboots. See the AWS Docs on [RDS Maintenance][4]
        for more information.
        
        > **Note:** All arguments including the username and password will be stored in the raw state as plain-text.
        [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] apply_immediately: Specifies whether any cluster modifications
               are applied immediately, or during the next maintenance window. Default is
               `false`. See [Amazon RDS Documentation for more information.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html)
        :param pulumi.Input[list] availability_zones: A list of EC2 Availability Zones for the DB cluster storage where DB cluster instances can be created. RDS automatically assigns 3 AZs if less than 3 AZs are configured, which will show as a difference requiring resource recreation next Terraform apply. It is recommended to specify 3 AZs or use [the `lifecycle` configuration block `ignore_changes` argument](https://www.terraform.io/docs/configuration/resources.html#ignore_changes) if necessary.
        :param pulumi.Input[float] backtrack_window: The target backtrack window, in seconds. Only available for `aurora` engine currently. To disable backtracking, set this value to `0`. Defaults to `0`. Must be between `0` and `259200` (72 hours)
        :param pulumi.Input[float] backup_retention_period: The days to retain backups for. Default `1`
        :param pulumi.Input[str] cluster_identifier: The cluster identifier. If omitted, Terraform will assign a random, unique identifier.
        :param pulumi.Input[str] cluster_identifier_prefix: Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`.
        :param pulumi.Input[list] cluster_members: List of RDS Instances that are a part of this cluster
        :param pulumi.Input[bool] copy_tags_to_snapshot: Copy all Cluster `tags` to snapshots. Default is `false`.
        :param pulumi.Input[str] database_name: Name for an automatically created database on cluster creation. There are different naming restrictions per database engine: [RDS Naming Constraints][5]
        :param pulumi.Input[str] db_cluster_parameter_group_name: A cluster parameter group to associate with the cluster.
        :param pulumi.Input[str] db_subnet_group_name: A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` specified on every [`aws_rds_cluster_instance`](https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html) in the cluster.
        :param pulumi.Input[bool] deletion_protection: If the DB instance should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`.
        :param pulumi.Input[list] enabled_cloudwatch_logs_exports: List of log types to export to cloudwatch. If omitted, no logs will be exported.
               The following log types are supported: `audit`, `error`, `general`, `slowquery`.
        :param pulumi.Input[str] engine: The name of the database engine to be used for this DB cluster. Defaults to `aurora`. Valid Values: `aurora`, `aurora-mysql`, `aurora-postgresql`
        :param pulumi.Input[str] engine_mode: The database engine mode. Valid values: `global`, `parallelquery`, `provisioned`, `serverless`. Defaults to: `provisioned`. See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/aurora-serverless.html) for limitations when using `serverless`.
        :param pulumi.Input[str] engine_version: The database engine version. Updating this argument results in an outage. See the [Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) and [Aurora Postgres](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.html) documentation for your configured engine to determine this value. For example with Aurora MySQL 2, a potential value for this argument is `5.7.mysql_aurora.2.03.2`.
        :param pulumi.Input[str] final_snapshot_identifier: The name of your final DB snapshot
               when this DB cluster is deleted. If omitted, no final snapshot will be
               made.
        :param pulumi.Input[str] global_cluster_identifier: The global cluster identifier specified on [`aws_rds_global_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html).
        :param pulumi.Input[bool] iam_database_authentication_enabled: Specifies whether or mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) for availability and limitations.
        :param pulumi.Input[list] iam_roles: A List of ARNs for the IAM roles to associate to the RDS Cluster.
        :param pulumi.Input[str] kms_key_id: The ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.
        :param pulumi.Input[str] master_password: Password for the master DB user. Note that this may
               show up in logs, and it will be stored in the state file. Please refer to the [RDS Naming Constraints][5]
        :param pulumi.Input[str] master_username: Username for the master DB user. Please refer to the [RDS Naming Constraints][5]
        :param pulumi.Input[float] port: The port on which the DB accepts connections
        :param pulumi.Input[str] preferred_backup_window: The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC
               Default: A 30-minute window selected at random from an 8-hour block of time per region. e.g. 04:00-09:00
        :param pulumi.Input[str] preferred_maintenance_window: The weekly time range during which system maintenance can occur, in (UTC) e.g. wed:04:00-wed:04:30
        :param pulumi.Input[str] replication_source_identifier: ARN of a source DB cluster or DB instance if this DB cluster is to be created as a Read Replica.
        :param pulumi.Input[dict] scaling_configuration: Nested attribute with scaling properties. Only valid when `engine_mode` is set to `serverless`. More details below.
        :param pulumi.Input[bool] skip_final_snapshot: Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
        :param pulumi.Input[str] snapshot_identifier: Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot.
        :param pulumi.Input[str] source_region: The source region for an encrypted replica DB cluster.
        :param pulumi.Input[bool] storage_encrypted: Specifies whether the DB cluster is encrypted. The default is `false` for `provisioned` `engine_mode` and `true` for `serverless` `engine_mode`.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the DB cluster.
        :param pulumi.Input[list] vpc_security_group_ids: List of VPC security groups to associate
               with the Cluster
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['apply_immediately'] = apply_immediately

        __props__['availability_zones'] = availability_zones

        __props__['backtrack_window'] = backtrack_window

        __props__['backup_retention_period'] = backup_retention_period

        __props__['cluster_identifier'] = cluster_identifier

        __props__['cluster_identifier_prefix'] = cluster_identifier_prefix

        __props__['cluster_members'] = cluster_members

        __props__['copy_tags_to_snapshot'] = copy_tags_to_snapshot

        __props__['database_name'] = database_name

        __props__['db_cluster_parameter_group_name'] = db_cluster_parameter_group_name

        __props__['db_subnet_group_name'] = db_subnet_group_name

        __props__['deletion_protection'] = deletion_protection

        __props__['enabled_cloudwatch_logs_exports'] = enabled_cloudwatch_logs_exports

        __props__['engine'] = engine

        __props__['engine_mode'] = engine_mode

        __props__['engine_version'] = engine_version

        __props__['final_snapshot_identifier'] = final_snapshot_identifier

        __props__['global_cluster_identifier'] = global_cluster_identifier

        __props__['iam_database_authentication_enabled'] = iam_database_authentication_enabled

        __props__['iam_roles'] = iam_roles

        __props__['kms_key_id'] = kms_key_id

        __props__['master_password'] = master_password

        __props__['master_username'] = master_username

        __props__['port'] = port

        __props__['preferred_backup_window'] = preferred_backup_window

        __props__['preferred_maintenance_window'] = preferred_maintenance_window

        __props__['replication_source_identifier'] = replication_source_identifier

        __props__['s3_import'] = s3_import

        __props__['scaling_configuration'] = scaling_configuration

        __props__['skip_final_snapshot'] = skip_final_snapshot

        __props__['snapshot_identifier'] = snapshot_identifier

        __props__['source_region'] = source_region

        __props__['storage_encrypted'] = storage_encrypted

        __props__['tags'] = tags

        __props__['vpc_security_group_ids'] = vpc_security_group_ids

        __props__['arn'] = None
        __props__['cluster_resource_id'] = None
        __props__['endpoint'] = None
        __props__['hosted_zone_id'] = None
        __props__['reader_endpoint'] = None

        super(Cluster, __self__).__init__(
            'aws:rds/cluster:Cluster',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

