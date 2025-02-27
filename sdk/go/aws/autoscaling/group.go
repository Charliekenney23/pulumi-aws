// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package autoscaling

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides an AutoScaling Group resource.
// 
// > **Note:** You must specify either `launch_configuration`, `launch_template`, or `mixed_instances_policy`.
// 
// ## Waiting for Capacity
// 
// A newly-created ASG is initially empty and begins to scale to `min_size` (or
// `desired_capacity`, if specified) by launching instances using the provided
// Launch Configuration. These instances take time to launch and boot.
// 
// On ASG Update, changes to these values also take time to result in the target
// number of instances providing service.
// 
// Terraform provides two mechanisms to help consistently manage ASG scale up
// time across dependent resources.
// 
// #### Waiting for ASG Capacity
// 
// The first is default behavior. Terraform waits after ASG creation for
// `min_size` (or `desired_capacity`, if specified) healthy instances to show up
// in the ASG before continuing.
// 
// If `min_size` or `desired_capacity` are changed in a subsequent update,
// Terraform will also wait for the correct number of healthy instances before
// continuing.
// 
// Terraform considers an instance "healthy" when the ASG reports `HealthStatus:
// "Healthy"` and `LifecycleState: "InService"`. See the [AWS AutoScaling
// Docs](https://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingGroupLifecycle.html)
// for more information on an ASG's lifecycle.
// 
// Terraform will wait for healthy instances for up to
// `wait_for_capacity_timeout`. If ASG creation is taking more than a few minutes,
// it's worth investigating for scaling activity errors, which can be caused by
// problems with the selected Launch Configuration.
// 
// Setting `wait_for_capacity_timeout` to `"0"` disables ASG Capacity waiting.
// 
// #### Waiting for ELB Capacity
// 
// The second mechanism is optional, and affects ASGs with attached ELBs specified
// via the `load_balancers` attribute or with ALBs specified with `target_group_arns`.
// 
// The `min_elb_capacity` parameter causes Terraform to wait for at least the
// requested number of instances to show up `"InService"` in all attached ELBs
// during ASG creation.  It has no effect on ASG updates.
// 
// If `wait_for_elb_capacity` is set, Terraform will wait for exactly that number
// of Instances to be `"InService"` in all attached ELBs on both creation and
// updates.
// 
// These parameters can be used to ensure that service is being provided before
// Terraform moves on. If new instances don't pass the ELB's health checks for any
// reason, the Terraform apply will time out, and the ASG will be marked as
// tainted (i.e. marked to be destroyed in a follow up run).
// 
// As with ASG Capacity, Terraform will wait for up to `wait_for_capacity_timeout`
// for the proper number of instances to be healthy.
// 
// #### Troubleshooting Capacity Waiting Timeouts
// 
// If ASG creation takes more than a few minutes, this could indicate one of a
// number of configuration problems. See the [AWS Docs on Load Balancer
// Troubleshooting](https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-troubleshooting.html)
// for more information.
type Group struct {
	s *pulumi.ResourceState
}

// NewGroup registers a new resource with the given unique name, arguments, and options.
func NewGroup(ctx *pulumi.Context,
	name string, args *GroupArgs, opts ...pulumi.ResourceOpt) (*Group, error) {
	if args == nil || args.MaxSize == nil {
		return nil, errors.New("missing required argument 'MaxSize'")
	}
	if args == nil || args.MinSize == nil {
		return nil, errors.New("missing required argument 'MinSize'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["availabilityZones"] = nil
		inputs["defaultCooldown"] = nil
		inputs["desiredCapacity"] = nil
		inputs["enabledMetrics"] = nil
		inputs["forceDelete"] = nil
		inputs["healthCheckGracePeriod"] = nil
		inputs["healthCheckType"] = nil
		inputs["initialLifecycleHooks"] = nil
		inputs["launchConfiguration"] = nil
		inputs["launchTemplate"] = nil
		inputs["loadBalancers"] = nil
		inputs["maxSize"] = nil
		inputs["metricsGranularity"] = nil
		inputs["minElbCapacity"] = nil
		inputs["minSize"] = nil
		inputs["mixedInstancesPolicy"] = nil
		inputs["name"] = nil
		inputs["namePrefix"] = nil
		inputs["placementGroup"] = nil
		inputs["protectFromScaleIn"] = nil
		inputs["serviceLinkedRoleArn"] = nil
		inputs["suspendedProcesses"] = nil
		inputs["tags"] = nil
		inputs["tagsCollection"] = nil
		inputs["targetGroupArns"] = nil
		inputs["terminationPolicies"] = nil
		inputs["vpcZoneIdentifiers"] = nil
		inputs["waitForCapacityTimeout"] = nil
		inputs["waitForElbCapacity"] = nil
	} else {
		inputs["availabilityZones"] = args.AvailabilityZones
		inputs["defaultCooldown"] = args.DefaultCooldown
		inputs["desiredCapacity"] = args.DesiredCapacity
		inputs["enabledMetrics"] = args.EnabledMetrics
		inputs["forceDelete"] = args.ForceDelete
		inputs["healthCheckGracePeriod"] = args.HealthCheckGracePeriod
		inputs["healthCheckType"] = args.HealthCheckType
		inputs["initialLifecycleHooks"] = args.InitialLifecycleHooks
		inputs["launchConfiguration"] = args.LaunchConfiguration
		inputs["launchTemplate"] = args.LaunchTemplate
		inputs["loadBalancers"] = args.LoadBalancers
		inputs["maxSize"] = args.MaxSize
		inputs["metricsGranularity"] = args.MetricsGranularity
		inputs["minElbCapacity"] = args.MinElbCapacity
		inputs["minSize"] = args.MinSize
		inputs["mixedInstancesPolicy"] = args.MixedInstancesPolicy
		inputs["name"] = args.Name
		inputs["namePrefix"] = args.NamePrefix
		inputs["placementGroup"] = args.PlacementGroup
		inputs["protectFromScaleIn"] = args.ProtectFromScaleIn
		inputs["serviceLinkedRoleArn"] = args.ServiceLinkedRoleArn
		inputs["suspendedProcesses"] = args.SuspendedProcesses
		inputs["tags"] = args.Tags
		inputs["tagsCollection"] = args.TagsCollection
		inputs["targetGroupArns"] = args.TargetGroupArns
		inputs["terminationPolicies"] = args.TerminationPolicies
		inputs["vpcZoneIdentifiers"] = args.VpcZoneIdentifiers
		inputs["waitForCapacityTimeout"] = args.WaitForCapacityTimeout
		inputs["waitForElbCapacity"] = args.WaitForElbCapacity
	}
	inputs["arn"] = nil
	s, err := ctx.RegisterResource("aws:autoscaling/group:Group", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Group{s: s}, nil
}

// GetGroup gets an existing Group resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGroup(ctx *pulumi.Context,
	name string, id pulumi.ID, state *GroupState, opts ...pulumi.ResourceOpt) (*Group, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["arn"] = state.Arn
		inputs["availabilityZones"] = state.AvailabilityZones
		inputs["defaultCooldown"] = state.DefaultCooldown
		inputs["desiredCapacity"] = state.DesiredCapacity
		inputs["enabledMetrics"] = state.EnabledMetrics
		inputs["forceDelete"] = state.ForceDelete
		inputs["healthCheckGracePeriod"] = state.HealthCheckGracePeriod
		inputs["healthCheckType"] = state.HealthCheckType
		inputs["initialLifecycleHooks"] = state.InitialLifecycleHooks
		inputs["launchConfiguration"] = state.LaunchConfiguration
		inputs["launchTemplate"] = state.LaunchTemplate
		inputs["loadBalancers"] = state.LoadBalancers
		inputs["maxSize"] = state.MaxSize
		inputs["metricsGranularity"] = state.MetricsGranularity
		inputs["minElbCapacity"] = state.MinElbCapacity
		inputs["minSize"] = state.MinSize
		inputs["mixedInstancesPolicy"] = state.MixedInstancesPolicy
		inputs["name"] = state.Name
		inputs["namePrefix"] = state.NamePrefix
		inputs["placementGroup"] = state.PlacementGroup
		inputs["protectFromScaleIn"] = state.ProtectFromScaleIn
		inputs["serviceLinkedRoleArn"] = state.ServiceLinkedRoleArn
		inputs["suspendedProcesses"] = state.SuspendedProcesses
		inputs["tags"] = state.Tags
		inputs["tagsCollection"] = state.TagsCollection
		inputs["targetGroupArns"] = state.TargetGroupArns
		inputs["terminationPolicies"] = state.TerminationPolicies
		inputs["vpcZoneIdentifiers"] = state.VpcZoneIdentifiers
		inputs["waitForCapacityTimeout"] = state.WaitForCapacityTimeout
		inputs["waitForElbCapacity"] = state.WaitForElbCapacity
	}
	s, err := ctx.ReadResource("aws:autoscaling/group:Group", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Group{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Group) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Group) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The ARN for this AutoScaling Group
func (r *Group) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// A list of one or more availability zones for the group. This parameter should not be specified when using `vpc_zone_identifier`.
func (r *Group) AvailabilityZones() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["availabilityZones"])
}

// The amount of time, in seconds, after a scaling activity completes before another scaling activity can start.
func (r *Group) DefaultCooldown() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["defaultCooldown"])
}

// The number of Amazon EC2 instances that
// should be running in the group. (See also Waiting for
// Capacity below.)
func (r *Group) DesiredCapacity() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["desiredCapacity"])
}

// A list of metrics to collect. The allowed values are `GroupMinSize`, `GroupMaxSize`, `GroupDesiredCapacity`, `GroupInServiceInstances`, `GroupPendingInstances`, `GroupStandbyInstances`, `GroupTerminatingInstances`, `GroupTotalInstances`.
// * `wait_for_capacity_timeout` (Default: "10m") A maximum
// [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
// wait for ASG instances to be healthy before timing out.  (See also Waiting
// for Capacity below.) Setting this to "0" causes
// Terraform to skip all Capacity Waiting behavior.
func (r *Group) EnabledMetrics() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["enabledMetrics"])
}

// Allows deleting the autoscaling group without waiting
// for all instances in the pool to terminate.  You can force an autoscaling group to delete
// even if it's in the process of scaling a resource. Normally, Terraform
// drains all the instances before deleting the group.  This bypasses that
// behavior and potentially leaves resources dangling.
func (r *Group) ForceDelete() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["forceDelete"])
}

// Time (in seconds) after instance comes into service before checking health.
func (r *Group) HealthCheckGracePeriod() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["healthCheckGracePeriod"])
}

// "EC2" or "ELB". Controls how health checking is done.
func (r *Group) HealthCheckType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["healthCheckType"])
}

// One or more
// [Lifecycle Hooks](http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html)
// to attach to the autoscaling group **before** instances are launched. The
// syntax is exactly the same as the separate
// [`aws_autoscaling_lifecycle_hook`](https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hooks.html)
// resource, without the `autoscaling_group_name` attribute. Please note that this will only work when creating
// a new autoscaling group. For all other use-cases, please use `aws_autoscaling_lifecycle_hook` resource.
func (r *Group) InitialLifecycleHooks() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["initialLifecycleHooks"])
}

// The name of the launch configuration to use.
func (r *Group) LaunchConfiguration() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["launchConfiguration"])
}

// Nested argument containing launch template settings along with the overrides to specify multiple instance types. Defined below.
func (r *Group) LaunchTemplate() *pulumi.Output {
	return r.s.State["launchTemplate"]
}

// A list of elastic load balancer names to add to the autoscaling
// group names. Only valid for classic load balancers. For ALBs, use `target_group_arns` instead.
func (r *Group) LoadBalancers() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["loadBalancers"])
}

// The maximum size of the auto scale group.
func (r *Group) MaxSize() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["maxSize"])
}

// The granularity to associate with the metrics to collect. The only valid value is `1Minute`. Default is `1Minute`.
func (r *Group) MetricsGranularity() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["metricsGranularity"])
}

// Setting this causes Terraform to wait for
// this number of instances from this autoscaling group to show up healthy in the
// ELB only on creation. Updates will not wait on ELB instance number changes.
// (See also Waiting for Capacity below.)
func (r *Group) MinElbCapacity() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["minElbCapacity"])
}

// The minimum size of the auto scale group.
// (See also Waiting for Capacity below.)
func (r *Group) MinSize() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["minSize"])
}

// Configuration block containing settings to define launch targets for Auto Scaling groups. Defined below.
func (r *Group) MixedInstancesPolicy() *pulumi.Output {
	return r.s.State["mixedInstancesPolicy"]
}

// The name of the auto scaling group. By default generated by Terraform.
func (r *Group) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Creates a unique name beginning with the specified
// prefix. Conflicts with `name`.
func (r *Group) NamePrefix() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["namePrefix"])
}

// The name of the placement group into which you'll launch your instances, if any.
func (r *Group) PlacementGroup() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["placementGroup"])
}

// Allows setting instance protection. The
// autoscaling group will not select instances with this setting for terminination
// during scale in events.
func (r *Group) ProtectFromScaleIn() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["protectFromScaleIn"])
}

// The ARN of the service-linked role that the ASG will use to call other AWS services
func (r *Group) ServiceLinkedRoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["serviceLinkedRoleArn"])
}

// A list of processes to suspend for the AutoScaling Group. The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`.
// Note that if you suspend either the `Launch` or `Terminate` process types, it can prevent your autoscaling group from functioning properly.
func (r *Group) SuspendedProcesses() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["suspendedProcesses"])
}

// A list of tag blocks. Tags documented below.
func (r *Group) Tags() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["tags"])
}

// A list of tag blocks (maps). Tags documented below.
func (r *Group) TagsCollection() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["tagsCollection"])
}

// A list of `aws_alb_target_group` ARNs, for use with Application or Network Load Balancing.
func (r *Group) TargetGroupArns() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["targetGroupArns"])
}

// A list of policies to decide how the instances in the auto scale group should be terminated. The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `OldestLaunchTemplate`, `AllocationStrategy`, `Default`.
func (r *Group) TerminationPolicies() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["terminationPolicies"])
}

// A list of subnet IDs to launch resources in.
func (r *Group) VpcZoneIdentifiers() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["vpcZoneIdentifiers"])
}

func (r *Group) WaitForCapacityTimeout() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["waitForCapacityTimeout"])
}

// Setting this will cause Terraform to wait
// for exactly this number of healthy instances from this autoscaling group in
// all attached load balancers on both create and update operations. (Takes
// precedence over `min_elb_capacity` behavior.)
// (See also Waiting for Capacity below.)
func (r *Group) WaitForElbCapacity() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["waitForElbCapacity"])
}

// Input properties used for looking up and filtering Group resources.
type GroupState struct {
	// The ARN for this AutoScaling Group
	Arn interface{}
	// A list of one or more availability zones for the group. This parameter should not be specified when using `vpc_zone_identifier`.
	AvailabilityZones interface{}
	// The amount of time, in seconds, after a scaling activity completes before another scaling activity can start.
	DefaultCooldown interface{}
	// The number of Amazon EC2 instances that
	// should be running in the group. (See also Waiting for
	// Capacity below.)
	DesiredCapacity interface{}
	// A list of metrics to collect. The allowed values are `GroupMinSize`, `GroupMaxSize`, `GroupDesiredCapacity`, `GroupInServiceInstances`, `GroupPendingInstances`, `GroupStandbyInstances`, `GroupTerminatingInstances`, `GroupTotalInstances`.
	// * `wait_for_capacity_timeout` (Default: "10m") A maximum
	// [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
	// wait for ASG instances to be healthy before timing out.  (See also Waiting
	// for Capacity below.) Setting this to "0" causes
	// Terraform to skip all Capacity Waiting behavior.
	EnabledMetrics interface{}
	// Allows deleting the autoscaling group without waiting
	// for all instances in the pool to terminate.  You can force an autoscaling group to delete
	// even if it's in the process of scaling a resource. Normally, Terraform
	// drains all the instances before deleting the group.  This bypasses that
	// behavior and potentially leaves resources dangling.
	ForceDelete interface{}
	// Time (in seconds) after instance comes into service before checking health.
	HealthCheckGracePeriod interface{}
	// "EC2" or "ELB". Controls how health checking is done.
	HealthCheckType interface{}
	// One or more
	// [Lifecycle Hooks](http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html)
	// to attach to the autoscaling group **before** instances are launched. The
	// syntax is exactly the same as the separate
	// [`aws_autoscaling_lifecycle_hook`](https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hooks.html)
	// resource, without the `autoscaling_group_name` attribute. Please note that this will only work when creating
	// a new autoscaling group. For all other use-cases, please use `aws_autoscaling_lifecycle_hook` resource.
	InitialLifecycleHooks interface{}
	// The name of the launch configuration to use.
	LaunchConfiguration interface{}
	// Nested argument containing launch template settings along with the overrides to specify multiple instance types. Defined below.
	LaunchTemplate interface{}
	// A list of elastic load balancer names to add to the autoscaling
	// group names. Only valid for classic load balancers. For ALBs, use `target_group_arns` instead.
	LoadBalancers interface{}
	// The maximum size of the auto scale group.
	MaxSize interface{}
	// The granularity to associate with the metrics to collect. The only valid value is `1Minute`. Default is `1Minute`.
	MetricsGranularity interface{}
	// Setting this causes Terraform to wait for
	// this number of instances from this autoscaling group to show up healthy in the
	// ELB only on creation. Updates will not wait on ELB instance number changes.
	// (See also Waiting for Capacity below.)
	MinElbCapacity interface{}
	// The minimum size of the auto scale group.
	// (See also Waiting for Capacity below.)
	MinSize interface{}
	// Configuration block containing settings to define launch targets for Auto Scaling groups. Defined below.
	MixedInstancesPolicy interface{}
	// The name of the auto scaling group. By default generated by Terraform.
	Name interface{}
	// Creates a unique name beginning with the specified
	// prefix. Conflicts with `name`.
	NamePrefix interface{}
	// The name of the placement group into which you'll launch your instances, if any.
	PlacementGroup interface{}
	// Allows setting instance protection. The
	// autoscaling group will not select instances with this setting for terminination
	// during scale in events.
	ProtectFromScaleIn interface{}
	// The ARN of the service-linked role that the ASG will use to call other AWS services
	ServiceLinkedRoleArn interface{}
	// A list of processes to suspend for the AutoScaling Group. The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`.
	// Note that if you suspend either the `Launch` or `Terminate` process types, it can prevent your autoscaling group from functioning properly.
	SuspendedProcesses interface{}
	// A list of tag blocks. Tags documented below.
	Tags interface{}
	// A list of tag blocks (maps). Tags documented below.
	TagsCollection interface{}
	// A list of `aws_alb_target_group` ARNs, for use with Application or Network Load Balancing.
	TargetGroupArns interface{}
	// A list of policies to decide how the instances in the auto scale group should be terminated. The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `OldestLaunchTemplate`, `AllocationStrategy`, `Default`.
	TerminationPolicies interface{}
	// A list of subnet IDs to launch resources in.
	VpcZoneIdentifiers interface{}
	WaitForCapacityTimeout interface{}
	// Setting this will cause Terraform to wait
	// for exactly this number of healthy instances from this autoscaling group in
	// all attached load balancers on both create and update operations. (Takes
	// precedence over `min_elb_capacity` behavior.)
	// (See also Waiting for Capacity below.)
	WaitForElbCapacity interface{}
}

// The set of arguments for constructing a Group resource.
type GroupArgs struct {
	// A list of one or more availability zones for the group. This parameter should not be specified when using `vpc_zone_identifier`.
	AvailabilityZones interface{}
	// The amount of time, in seconds, after a scaling activity completes before another scaling activity can start.
	DefaultCooldown interface{}
	// The number of Amazon EC2 instances that
	// should be running in the group. (See also Waiting for
	// Capacity below.)
	DesiredCapacity interface{}
	// A list of metrics to collect. The allowed values are `GroupMinSize`, `GroupMaxSize`, `GroupDesiredCapacity`, `GroupInServiceInstances`, `GroupPendingInstances`, `GroupStandbyInstances`, `GroupTerminatingInstances`, `GroupTotalInstances`.
	// * `wait_for_capacity_timeout` (Default: "10m") A maximum
	// [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
	// wait for ASG instances to be healthy before timing out.  (See also Waiting
	// for Capacity below.) Setting this to "0" causes
	// Terraform to skip all Capacity Waiting behavior.
	EnabledMetrics interface{}
	// Allows deleting the autoscaling group without waiting
	// for all instances in the pool to terminate.  You can force an autoscaling group to delete
	// even if it's in the process of scaling a resource. Normally, Terraform
	// drains all the instances before deleting the group.  This bypasses that
	// behavior and potentially leaves resources dangling.
	ForceDelete interface{}
	// Time (in seconds) after instance comes into service before checking health.
	HealthCheckGracePeriod interface{}
	// "EC2" or "ELB". Controls how health checking is done.
	HealthCheckType interface{}
	// One or more
	// [Lifecycle Hooks](http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html)
	// to attach to the autoscaling group **before** instances are launched. The
	// syntax is exactly the same as the separate
	// [`aws_autoscaling_lifecycle_hook`](https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hooks.html)
	// resource, without the `autoscaling_group_name` attribute. Please note that this will only work when creating
	// a new autoscaling group. For all other use-cases, please use `aws_autoscaling_lifecycle_hook` resource.
	InitialLifecycleHooks interface{}
	// The name of the launch configuration to use.
	LaunchConfiguration interface{}
	// Nested argument containing launch template settings along with the overrides to specify multiple instance types. Defined below.
	LaunchTemplate interface{}
	// A list of elastic load balancer names to add to the autoscaling
	// group names. Only valid for classic load balancers. For ALBs, use `target_group_arns` instead.
	LoadBalancers interface{}
	// The maximum size of the auto scale group.
	MaxSize interface{}
	// The granularity to associate with the metrics to collect. The only valid value is `1Minute`. Default is `1Minute`.
	MetricsGranularity interface{}
	// Setting this causes Terraform to wait for
	// this number of instances from this autoscaling group to show up healthy in the
	// ELB only on creation. Updates will not wait on ELB instance number changes.
	// (See also Waiting for Capacity below.)
	MinElbCapacity interface{}
	// The minimum size of the auto scale group.
	// (See also Waiting for Capacity below.)
	MinSize interface{}
	// Configuration block containing settings to define launch targets for Auto Scaling groups. Defined below.
	MixedInstancesPolicy interface{}
	// The name of the auto scaling group. By default generated by Terraform.
	Name interface{}
	// Creates a unique name beginning with the specified
	// prefix. Conflicts with `name`.
	NamePrefix interface{}
	// The name of the placement group into which you'll launch your instances, if any.
	PlacementGroup interface{}
	// Allows setting instance protection. The
	// autoscaling group will not select instances with this setting for terminination
	// during scale in events.
	ProtectFromScaleIn interface{}
	// The ARN of the service-linked role that the ASG will use to call other AWS services
	ServiceLinkedRoleArn interface{}
	// A list of processes to suspend for the AutoScaling Group. The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`.
	// Note that if you suspend either the `Launch` or `Terminate` process types, it can prevent your autoscaling group from functioning properly.
	SuspendedProcesses interface{}
	// A list of tag blocks. Tags documented below.
	Tags interface{}
	// A list of tag blocks (maps). Tags documented below.
	TagsCollection interface{}
	// A list of `aws_alb_target_group` ARNs, for use with Application or Network Load Balancing.
	TargetGroupArns interface{}
	// A list of policies to decide how the instances in the auto scale group should be terminated. The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `OldestLaunchTemplate`, `AllocationStrategy`, `Default`.
	TerminationPolicies interface{}
	// A list of subnet IDs to launch resources in.
	VpcZoneIdentifiers interface{}
	WaitForCapacityTimeout interface{}
	// Setting this will cause Terraform to wait
	// for exactly this number of healthy instances from this autoscaling group in
	// all attached load balancers on both create and update operations. (Takes
	// precedence over `min_elb_capacity` behavior.)
	// (See also Waiting for Capacity below.)
	WaitForElbCapacity interface{}
}
