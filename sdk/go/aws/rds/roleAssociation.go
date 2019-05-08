// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package rds

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a RDS DB Instance association with an IAM Role. Example use cases:
// 
// * [Amazon RDS Oracle integration with Amazon S3](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-s3-integration.html)
// * [Importing Amazon S3 Data into an RDS PostgreSQL DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PostgreSQL.S3Import.html)
// 
// > To manage the RDS DB Instance IAM Role for [Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html), see the `aws_db_instance` resource `monitoring_role_arn` argument instead.
type RoleAssociation struct {
	s *pulumi.ResourceState
}

// NewRoleAssociation registers a new resource with the given unique name, arguments, and options.
func NewRoleAssociation(ctx *pulumi.Context,
	name string, args *RoleAssociationArgs, opts ...pulumi.ResourceOpt) (*RoleAssociation, error) {
	if args == nil || args.DbInstanceIdentifier == nil {
		return nil, errors.New("missing required argument 'DbInstanceIdentifier'")
	}
	if args == nil || args.FeatureName == nil {
		return nil, errors.New("missing required argument 'FeatureName'")
	}
	if args == nil || args.RoleArn == nil {
		return nil, errors.New("missing required argument 'RoleArn'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["dbInstanceIdentifier"] = nil
		inputs["featureName"] = nil
		inputs["roleArn"] = nil
	} else {
		inputs["dbInstanceIdentifier"] = args.DbInstanceIdentifier
		inputs["featureName"] = args.FeatureName
		inputs["roleArn"] = args.RoleArn
	}
	s, err := ctx.RegisterResource("aws:rds/roleAssociation:RoleAssociation", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &RoleAssociation{s: s}, nil
}

// GetRoleAssociation gets an existing RoleAssociation resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRoleAssociation(ctx *pulumi.Context,
	name string, id pulumi.ID, state *RoleAssociationState, opts ...pulumi.ResourceOpt) (*RoleAssociation, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["dbInstanceIdentifier"] = state.DbInstanceIdentifier
		inputs["featureName"] = state.FeatureName
		inputs["roleArn"] = state.RoleArn
	}
	s, err := ctx.ReadResource("aws:rds/roleAssociation:RoleAssociation", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &RoleAssociation{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *RoleAssociation) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *RoleAssociation) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// DB Instance Identifier to associate with the IAM Role.
func (r *RoleAssociation) DbInstanceIdentifier() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["dbInstanceIdentifier"])
}

// Name of the feature for association. This can be found in the AWS documentation relevant to the integration or a full list is available in the `SupportedFeatureNames` list returned by [AWS CLI rds describe-db-engine-versions](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html).
func (r *RoleAssociation) FeatureName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["featureName"])
}

// Amazon Resource Name (ARN) of the IAM Role to associate with the DB Instance.
func (r *RoleAssociation) RoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["roleArn"])
}

// Input properties used for looking up and filtering RoleAssociation resources.
type RoleAssociationState struct {
	// DB Instance Identifier to associate with the IAM Role.
	DbInstanceIdentifier interface{}
	// Name of the feature for association. This can be found in the AWS documentation relevant to the integration or a full list is available in the `SupportedFeatureNames` list returned by [AWS CLI rds describe-db-engine-versions](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html).
	FeatureName interface{}
	// Amazon Resource Name (ARN) of the IAM Role to associate with the DB Instance.
	RoleArn interface{}
}

// The set of arguments for constructing a RoleAssociation resource.
type RoleAssociationArgs struct {
	// DB Instance Identifier to associate with the IAM Role.
	DbInstanceIdentifier interface{}
	// Name of the feature for association. This can be found in the AWS documentation relevant to the integration or a full list is available in the `SupportedFeatureNames` list returned by [AWS CLI rds describe-db-engine-versions](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html).
	FeatureName interface{}
	// Amazon Resource Name (ARN) of the IAM Role to associate with the DB Instance.
	RoleArn interface{}
}
