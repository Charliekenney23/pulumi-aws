// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package msk

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages AWS Managed Streaming for Kafka cluster
type Cluster struct {
	s *pulumi.ResourceState
}

// NewCluster registers a new resource with the given unique name, arguments, and options.
func NewCluster(ctx *pulumi.Context,
	name string, args *ClusterArgs, opts ...pulumi.ResourceOpt) (*Cluster, error) {
	if args == nil || args.BrokerNodeGroupInfo == nil {
		return nil, errors.New("missing required argument 'BrokerNodeGroupInfo'")
	}
	if args == nil || args.ClusterName == nil {
		return nil, errors.New("missing required argument 'ClusterName'")
	}
	if args == nil || args.KafkaVersion == nil {
		return nil, errors.New("missing required argument 'KafkaVersion'")
	}
	if args == nil || args.NumberOfBrokerNodes == nil {
		return nil, errors.New("missing required argument 'NumberOfBrokerNodes'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["brokerNodeGroupInfo"] = nil
		inputs["clientAuthentication"] = nil
		inputs["clusterName"] = nil
		inputs["configurationInfo"] = nil
		inputs["encryptionInfo"] = nil
		inputs["enhancedMonitoring"] = nil
		inputs["kafkaVersion"] = nil
		inputs["numberOfBrokerNodes"] = nil
		inputs["tags"] = nil
	} else {
		inputs["brokerNodeGroupInfo"] = args.BrokerNodeGroupInfo
		inputs["clientAuthentication"] = args.ClientAuthentication
		inputs["clusterName"] = args.ClusterName
		inputs["configurationInfo"] = args.ConfigurationInfo
		inputs["encryptionInfo"] = args.EncryptionInfo
		inputs["enhancedMonitoring"] = args.EnhancedMonitoring
		inputs["kafkaVersion"] = args.KafkaVersion
		inputs["numberOfBrokerNodes"] = args.NumberOfBrokerNodes
		inputs["tags"] = args.Tags
	}
	inputs["arn"] = nil
	inputs["bootstrapBrokers"] = nil
	inputs["bootstrapBrokersTls"] = nil
	inputs["currentVersion"] = nil
	inputs["zookeeperConnectString"] = nil
	s, err := ctx.RegisterResource("aws:msk/cluster:Cluster", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Cluster{s: s}, nil
}

// GetCluster gets an existing Cluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCluster(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ClusterState, opts ...pulumi.ResourceOpt) (*Cluster, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["arn"] = state.Arn
		inputs["bootstrapBrokers"] = state.BootstrapBrokers
		inputs["bootstrapBrokersTls"] = state.BootstrapBrokersTls
		inputs["brokerNodeGroupInfo"] = state.BrokerNodeGroupInfo
		inputs["clientAuthentication"] = state.ClientAuthentication
		inputs["clusterName"] = state.ClusterName
		inputs["configurationInfo"] = state.ConfigurationInfo
		inputs["currentVersion"] = state.CurrentVersion
		inputs["encryptionInfo"] = state.EncryptionInfo
		inputs["enhancedMonitoring"] = state.EnhancedMonitoring
		inputs["kafkaVersion"] = state.KafkaVersion
		inputs["numberOfBrokerNodes"] = state.NumberOfBrokerNodes
		inputs["tags"] = state.Tags
		inputs["zookeeperConnectString"] = state.ZookeeperConnectString
	}
	s, err := ctx.ReadResource("aws:msk/cluster:Cluster", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Cluster{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Cluster) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Cluster) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster.
func (r *Cluster) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// A comma separated list of one or more hostname:port pairs of kafka brokers suitable to boostrap connectivity to the kafka cluster. Only contains value if `client_broker` encryption in transit is set to `PLAINTEXT` or `TLS_PLAINTEXT`.
func (r *Cluster) BootstrapBrokers() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["bootstrapBrokers"])
}

// A comma separated list of one or more DNS names (or IPs) and TLS port pairs kafka brokers suitable to boostrap connectivity to the kafka cluster. Only contains value if `client_broker` encryption in transit is set to `TLS_PLAINTEXT` or `TLS`.
func (r *Cluster) BootstrapBrokersTls() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["bootstrapBrokersTls"])
}

// Configuration block for the broker nodes of the Kafka cluster.
func (r *Cluster) BrokerNodeGroupInfo() *pulumi.Output {
	return r.s.State["brokerNodeGroupInfo"]
}

// Configuration block for specifying a client authentication. See below.
func (r *Cluster) ClientAuthentication() *pulumi.Output {
	return r.s.State["clientAuthentication"]
}

// Name of the MSK cluster.
func (r *Cluster) ClusterName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["clusterName"])
}

// Configuration block for specifying a MSK Configuration to attach to Kafka brokers. See below.
func (r *Cluster) ConfigurationInfo() *pulumi.Output {
	return r.s.State["configurationInfo"]
}

// Current version of the MSK Cluster used for updates, e.g. `K13V1IB3VIYZZH`
// * `encryption_info.0.encryption_at_rest_kms_key_arn` - The ARN of the KMS key used for encryption at rest of the broker data volumes.
func (r *Cluster) CurrentVersion() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["currentVersion"])
}

// Configuration block for specifying encryption. See below.
func (r *Cluster) EncryptionInfo() *pulumi.Output {
	return r.s.State["encryptionInfo"]
}

// Specify the desired enhanced MSK CloudWatch monitoring level.  See [Monitoring Amazon MSK with Amazon CloudWatch](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html)
func (r *Cluster) EnhancedMonitoring() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["enhancedMonitoring"])
}

// Specify the desired Kafka software version.
func (r *Cluster) KafkaVersion() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["kafkaVersion"])
}

// The desired total number of broker nodes in the kafka cluster.  It must be a multiple of the number of specified client subnets.
func (r *Cluster) NumberOfBrokerNodes() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["numberOfBrokerNodes"])
}

// A mapping of tags to assign to the resource
func (r *Cluster) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// A comma separated list of one or more IP:port pairs to use to connect to the Apache Zookeeper cluster.
func (r *Cluster) ZookeeperConnectString() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["zookeeperConnectString"])
}

// Input properties used for looking up and filtering Cluster resources.
type ClusterState struct {
	// Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster.
	Arn interface{}
	// A comma separated list of one or more hostname:port pairs of kafka brokers suitable to boostrap connectivity to the kafka cluster. Only contains value if `client_broker` encryption in transit is set to `PLAINTEXT` or `TLS_PLAINTEXT`.
	BootstrapBrokers interface{}
	// A comma separated list of one or more DNS names (or IPs) and TLS port pairs kafka brokers suitable to boostrap connectivity to the kafka cluster. Only contains value if `client_broker` encryption in transit is set to `TLS_PLAINTEXT` or `TLS`.
	BootstrapBrokersTls interface{}
	// Configuration block for the broker nodes of the Kafka cluster.
	BrokerNodeGroupInfo interface{}
	// Configuration block for specifying a client authentication. See below.
	ClientAuthentication interface{}
	// Name of the MSK cluster.
	ClusterName interface{}
	// Configuration block for specifying a MSK Configuration to attach to Kafka brokers. See below.
	ConfigurationInfo interface{}
	// Current version of the MSK Cluster used for updates, e.g. `K13V1IB3VIYZZH`
	// * `encryption_info.0.encryption_at_rest_kms_key_arn` - The ARN of the KMS key used for encryption at rest of the broker data volumes.
	CurrentVersion interface{}
	// Configuration block for specifying encryption. See below.
	EncryptionInfo interface{}
	// Specify the desired enhanced MSK CloudWatch monitoring level.  See [Monitoring Amazon MSK with Amazon CloudWatch](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html)
	EnhancedMonitoring interface{}
	// Specify the desired Kafka software version.
	KafkaVersion interface{}
	// The desired total number of broker nodes in the kafka cluster.  It must be a multiple of the number of specified client subnets.
	NumberOfBrokerNodes interface{}
	// A mapping of tags to assign to the resource
	Tags interface{}
	// A comma separated list of one or more IP:port pairs to use to connect to the Apache Zookeeper cluster.
	ZookeeperConnectString interface{}
}

// The set of arguments for constructing a Cluster resource.
type ClusterArgs struct {
	// Configuration block for the broker nodes of the Kafka cluster.
	BrokerNodeGroupInfo interface{}
	// Configuration block for specifying a client authentication. See below.
	ClientAuthentication interface{}
	// Name of the MSK cluster.
	ClusterName interface{}
	// Configuration block for specifying a MSK Configuration to attach to Kafka brokers. See below.
	ConfigurationInfo interface{}
	// Configuration block for specifying encryption. See below.
	EncryptionInfo interface{}
	// Specify the desired enhanced MSK CloudWatch monitoring level.  See [Monitoring Amazon MSK with Amazon CloudWatch](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html)
	EnhancedMonitoring interface{}
	// Specify the desired Kafka software version.
	KafkaVersion interface{}
	// The desired total number of broker nodes in the kafka cluster.  It must be a multiple of the number of specified client subnets.
	NumberOfBrokerNodes interface{}
	// A mapping of tags to assign to the resource
	Tags interface{}
}
