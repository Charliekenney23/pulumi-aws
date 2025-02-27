// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ecs

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// > **Note:** To prevent a race condition during service deletion, make sure to set `depends_on` to the related `aws_iam_role_policy`; otherwise, the policy may be destroyed too soon and the ECS service will then get stuck in the `DRAINING` state.
// 
// Provides an ECS service - effectively a task that is expected to run until an error occurs or a user terminates it (typically a webserver or a database).
// 
// See [ECS Services section in AWS developer guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
// 
// ## deployment_controller
// 
// The `deployment_controller` configuration block supports the following:
// 
// * `type` - (Optional) Type of deployment controller. Valid values: `CODE_DEPLOY`, `ECS`. Default: `ECS`.
// 
// ## load_balancer
// 
// `load_balancer` supports the following:
// 
// * `elb_name` - (Required for ELB Classic) The name of the ELB (Classic) to associate with the service.
// * `target_group_arn` - (Required for ALB/NLB) The ARN of the Load Balancer target group to associate with the service.
// * `container_name` - (Required) The name of the container to associate with the load balancer (as it appears in a container definition).
// * `container_port` - (Required) The port on the container to associate with the load balancer.
// 
// > **Note:** As a result of an AWS limitation, a single `load_balancer` can be attached to the ECS service at most. See [related docs](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html#load-balancing-concepts).
// 
// ## ordered_placement_strategy
// 
// `ordered_placement_strategy` supports the following:
// 
// * `type` - (Required) The type of placement strategy. Must be one of: `binpack`, `random`, or `spread`
// * `field` - (Optional) For the `spread` placement strategy, valid values are `instanceId` (or `host`,
//  which has the same effect), or any platform or custom attribute that is applied to a container instance.
//  For the `binpack` type, valid values are `memory` and `cpu`. For the `random` type, this attribute is not
//  needed. For more information, see [Placement Strategy](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PlacementStrategy.html).
// 
// > **Note:** for `spread`, `host` and `instanceId` will be normalized, by AWS, to be `instanceId`. This means the statefile will show `instanceId` but your config will differ if you use `host`.
// 
// ## placement_constraints
// 
// `placement_constraints` support the following:
// 
// * `type` - (Required) The type of constraint. The only valid values at this time are `memberOf` and `distinctInstance`.
// * `expression` -  (Optional) Cluster Query Language expression to apply to the constraint. Does not need to be specified
// for the `distinctInstance` type.
// For more information, see [Cluster Query Language in the Amazon EC2 Container
// Service Developer
// Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html).
// 
// ## network_configuration
// 
// `network_configuration` support the following:
// 
// * `subnets` - (Required) The subnets associated with the task or service.
// * `security_groups` - (Optional) The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used.
// * `assign_public_ip` - (Optional) Assign a public IP address to the ENI (Fargate launch type only). Valid values are `true` or `false`. Default `false`.
// 
// For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html)
// 
// ## service_registries
// 
// `service_registries` support the following:
// 
// * `registry_arn` - (Required) The ARN of the Service Registry. The currently supported service registry is Amazon Route 53 Auto Naming Service(`aws_service_discovery_service`). For more information, see [Service](https://docs.aws.amazon.com/Route53/latest/APIReference/API_autonaming_Service.html)
// * `port` - (Optional) The port value used if your Service Discovery service specified an SRV record.
// * `container_port` - (Optional) The port value, already specified in the task definition, to be used for your service discovery service.
// * `container_name` - (Optional) The container name value, already specified in the task definition, to be used for your service discovery service.
type Service struct {
	s *pulumi.ResourceState
}

// NewService registers a new resource with the given unique name, arguments, and options.
func NewService(ctx *pulumi.Context,
	name string, args *ServiceArgs, opts ...pulumi.ResourceOpt) (*Service, error) {
	if args == nil || args.TaskDefinition == nil {
		return nil, errors.New("missing required argument 'TaskDefinition'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["cluster"] = nil
		inputs["deploymentController"] = nil
		inputs["deploymentMaximumPercent"] = nil
		inputs["deploymentMinimumHealthyPercent"] = nil
		inputs["desiredCount"] = nil
		inputs["enableEcsManagedTags"] = nil
		inputs["healthCheckGracePeriodSeconds"] = nil
		inputs["iamRole"] = nil
		inputs["launchType"] = nil
		inputs["loadBalancers"] = nil
		inputs["name"] = nil
		inputs["networkConfiguration"] = nil
		inputs["orderedPlacementStrategies"] = nil
		inputs["placementConstraints"] = nil
		inputs["platformVersion"] = nil
		inputs["propagateTags"] = nil
		inputs["schedulingStrategy"] = nil
		inputs["serviceRegistries"] = nil
		inputs["tags"] = nil
		inputs["taskDefinition"] = nil
		inputs["waitForSteadyState"] = nil
	} else {
		inputs["cluster"] = args.Cluster
		inputs["deploymentController"] = args.DeploymentController
		inputs["deploymentMaximumPercent"] = args.DeploymentMaximumPercent
		inputs["deploymentMinimumHealthyPercent"] = args.DeploymentMinimumHealthyPercent
		inputs["desiredCount"] = args.DesiredCount
		inputs["enableEcsManagedTags"] = args.EnableEcsManagedTags
		inputs["healthCheckGracePeriodSeconds"] = args.HealthCheckGracePeriodSeconds
		inputs["iamRole"] = args.IamRole
		inputs["launchType"] = args.LaunchType
		inputs["loadBalancers"] = args.LoadBalancers
		inputs["name"] = args.Name
		inputs["networkConfiguration"] = args.NetworkConfiguration
		inputs["orderedPlacementStrategies"] = args.OrderedPlacementStrategies
		inputs["placementConstraints"] = args.PlacementConstraints
		inputs["platformVersion"] = args.PlatformVersion
		inputs["propagateTags"] = args.PropagateTags
		inputs["schedulingStrategy"] = args.SchedulingStrategy
		inputs["serviceRegistries"] = args.ServiceRegistries
		inputs["tags"] = args.Tags
		inputs["taskDefinition"] = args.TaskDefinition
		inputs["waitForSteadyState"] = args.WaitForSteadyState
	}
	s, err := ctx.RegisterResource("aws:ecs/service:Service", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Service{s: s}, nil
}

// GetService gets an existing Service resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetService(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ServiceState, opts ...pulumi.ResourceOpt) (*Service, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["cluster"] = state.Cluster
		inputs["deploymentController"] = state.DeploymentController
		inputs["deploymentMaximumPercent"] = state.DeploymentMaximumPercent
		inputs["deploymentMinimumHealthyPercent"] = state.DeploymentMinimumHealthyPercent
		inputs["desiredCount"] = state.DesiredCount
		inputs["enableEcsManagedTags"] = state.EnableEcsManagedTags
		inputs["healthCheckGracePeriodSeconds"] = state.HealthCheckGracePeriodSeconds
		inputs["iamRole"] = state.IamRole
		inputs["launchType"] = state.LaunchType
		inputs["loadBalancers"] = state.LoadBalancers
		inputs["name"] = state.Name
		inputs["networkConfiguration"] = state.NetworkConfiguration
		inputs["orderedPlacementStrategies"] = state.OrderedPlacementStrategies
		inputs["placementConstraints"] = state.PlacementConstraints
		inputs["platformVersion"] = state.PlatformVersion
		inputs["propagateTags"] = state.PropagateTags
		inputs["schedulingStrategy"] = state.SchedulingStrategy
		inputs["serviceRegistries"] = state.ServiceRegistries
		inputs["tags"] = state.Tags
		inputs["taskDefinition"] = state.TaskDefinition
		inputs["waitForSteadyState"] = state.WaitForSteadyState
	}
	s, err := ctx.ReadResource("aws:ecs/service:Service", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Service{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Service) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Service) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// ARN of an ECS cluster
func (r *Service) Cluster() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["cluster"])
}

// Configuration block containing deployment controller configuration. Defined below.
func (r *Service) DeploymentController() *pulumi.Output {
	return r.s.State["deploymentController"]
}

// The upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
func (r *Service) DeploymentMaximumPercent() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["deploymentMaximumPercent"])
}

// The lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment.
func (r *Service) DeploymentMinimumHealthyPercent() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["deploymentMinimumHealthyPercent"])
}

// The number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the `DAEMON` scheduling strategy.
func (r *Service) DesiredCount() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["desiredCount"])
}

// Specifies whether to enable Amazon ECS managed tags for the tasks within the service.
func (r *Service) EnableEcsManagedTags() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["enableEcsManagedTags"])
}

// Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 2147483647. Only valid for services configured to use load balancers.
func (r *Service) HealthCheckGracePeriodSeconds() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["healthCheckGracePeriodSeconds"])
}

// ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.
func (r *Service) IamRole() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["iamRole"])
}

// The launch type on which to run your service. The valid values are `EC2` and `FARGATE`. Defaults to `EC2`.
func (r *Service) LaunchType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["launchType"])
}

// A load balancer block. Load balancers documented below.
func (r *Service) LoadBalancers() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["loadBalancers"])
}

// The name of the service (up to 255 letters, numbers, hyphens, and underscores)
func (r *Service) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes.
func (r *Service) NetworkConfiguration() *pulumi.Output {
	return r.s.State["networkConfiguration"]
}

// Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. The maximum number of `ordered_placement_strategy` blocks is `5`. Defined below.
func (r *Service) OrderedPlacementStrategies() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["orderedPlacementStrategies"])
}

// rules that are taken into consideration during task placement. Maximum number of
// `placement_constraints` is `10`. Defined below.
func (r *Service) PlacementConstraints() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["placementConstraints"])
}

// The platform version on which to run your service. Only applicable for `launch_type` set to `FARGATE`. Defaults to `LATEST`. More information about Fargate platform versions can be found in the [AWS ECS User Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).
func (r *Service) PlatformVersion() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["platformVersion"])
}

// Specifies whether to propagate the tags from the task definition or the service to the tasks. The valid values are `SERVICE` and `TASK_DEFINITION`.
func (r *Service) PropagateTags() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["propagateTags"])
}

// The scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [*Fargate tasks do not support the `DAEMON` scheduling strategy*](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html).
func (r *Service) SchedulingStrategy() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["schedulingStrategy"])
}

// The service discovery registries for the service. The maximum number of `service_registries` blocks is `1`.
func (r *Service) ServiceRegistries() *pulumi.Output {
	return r.s.State["serviceRegistries"]
}

// Key-value mapping of resource tags
func (r *Service) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// The family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service.
func (r *Service) TaskDefinition() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["taskDefinition"])
}

// If `true`, Terraform will wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`.
func (r *Service) WaitForSteadyState() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["waitForSteadyState"])
}

// Input properties used for looking up and filtering Service resources.
type ServiceState struct {
	// ARN of an ECS cluster
	Cluster interface{}
	// Configuration block containing deployment controller configuration. Defined below.
	DeploymentController interface{}
	// The upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
	DeploymentMaximumPercent interface{}
	// The lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment.
	DeploymentMinimumHealthyPercent interface{}
	// The number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the `DAEMON` scheduling strategy.
	DesiredCount interface{}
	// Specifies whether to enable Amazon ECS managed tags for the tasks within the service.
	EnableEcsManagedTags interface{}
	// Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 2147483647. Only valid for services configured to use load balancers.
	HealthCheckGracePeriodSeconds interface{}
	// ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.
	IamRole interface{}
	// The launch type on which to run your service. The valid values are `EC2` and `FARGATE`. Defaults to `EC2`.
	LaunchType interface{}
	// A load balancer block. Load balancers documented below.
	LoadBalancers interface{}
	// The name of the service (up to 255 letters, numbers, hyphens, and underscores)
	Name interface{}
	// The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes.
	NetworkConfiguration interface{}
	// Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. The maximum number of `ordered_placement_strategy` blocks is `5`. Defined below.
	OrderedPlacementStrategies interface{}
	// rules that are taken into consideration during task placement. Maximum number of
	// `placement_constraints` is `10`. Defined below.
	PlacementConstraints interface{}
	// The platform version on which to run your service. Only applicable for `launch_type` set to `FARGATE`. Defaults to `LATEST`. More information about Fargate platform versions can be found in the [AWS ECS User Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).
	PlatformVersion interface{}
	// Specifies whether to propagate the tags from the task definition or the service to the tasks. The valid values are `SERVICE` and `TASK_DEFINITION`.
	PropagateTags interface{}
	// The scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [*Fargate tasks do not support the `DAEMON` scheduling strategy*](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html).
	SchedulingStrategy interface{}
	// The service discovery registries for the service. The maximum number of `service_registries` blocks is `1`.
	ServiceRegistries interface{}
	// Key-value mapping of resource tags
	Tags interface{}
	// The family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service.
	TaskDefinition interface{}
	// If `true`, Terraform will wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`.
	WaitForSteadyState interface{}
}

// The set of arguments for constructing a Service resource.
type ServiceArgs struct {
	// ARN of an ECS cluster
	Cluster interface{}
	// Configuration block containing deployment controller configuration. Defined below.
	DeploymentController interface{}
	// The upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
	DeploymentMaximumPercent interface{}
	// The lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment.
	DeploymentMinimumHealthyPercent interface{}
	// The number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the `DAEMON` scheduling strategy.
	DesiredCount interface{}
	// Specifies whether to enable Amazon ECS managed tags for the tasks within the service.
	EnableEcsManagedTags interface{}
	// Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 2147483647. Only valid for services configured to use load balancers.
	HealthCheckGracePeriodSeconds interface{}
	// ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.
	IamRole interface{}
	// The launch type on which to run your service. The valid values are `EC2` and `FARGATE`. Defaults to `EC2`.
	LaunchType interface{}
	// A load balancer block. Load balancers documented below.
	LoadBalancers interface{}
	// The name of the service (up to 255 letters, numbers, hyphens, and underscores)
	Name interface{}
	// The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes.
	NetworkConfiguration interface{}
	// Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. The maximum number of `ordered_placement_strategy` blocks is `5`. Defined below.
	OrderedPlacementStrategies interface{}
	// rules that are taken into consideration during task placement. Maximum number of
	// `placement_constraints` is `10`. Defined below.
	PlacementConstraints interface{}
	// The platform version on which to run your service. Only applicable for `launch_type` set to `FARGATE`. Defaults to `LATEST`. More information about Fargate platform versions can be found in the [AWS ECS User Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).
	PlatformVersion interface{}
	// Specifies whether to propagate the tags from the task definition or the service to the tasks. The valid values are `SERVICE` and `TASK_DEFINITION`.
	PropagateTags interface{}
	// The scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [*Fargate tasks do not support the `DAEMON` scheduling strategy*](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html).
	SchedulingStrategy interface{}
	// The service discovery registries for the service. The maximum number of `service_registries` blocks is `1`.
	ServiceRegistries interface{}
	// Key-value mapping of resource tags
	Tags interface{}
	// The family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service.
	TaskDefinition interface{}
	// If `true`, Terraform will wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`.
	WaitForSteadyState interface{}
}
