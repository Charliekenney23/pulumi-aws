// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ecs

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a revision of an ECS task definition to be used in `aws_ecs_service`.
type TaskDefinition struct {
	s *pulumi.ResourceState
}

// NewTaskDefinition registers a new resource with the given unique name, arguments, and options.
func NewTaskDefinition(ctx *pulumi.Context,
	name string, args *TaskDefinitionArgs, opts ...pulumi.ResourceOpt) (*TaskDefinition, error) {
	if args == nil || args.ContainerDefinitions == nil {
		return nil, errors.New("missing required argument 'ContainerDefinitions'")
	}
	if args == nil || args.Family == nil {
		return nil, errors.New("missing required argument 'Family'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["containerDefinitions"] = nil
		inputs["cpu"] = nil
		inputs["executionRoleArn"] = nil
		inputs["family"] = nil
		inputs["ipcMode"] = nil
		inputs["memory"] = nil
		inputs["networkMode"] = nil
		inputs["pidMode"] = nil
		inputs["placementConstraints"] = nil
		inputs["proxyConfiguration"] = nil
		inputs["requiresCompatibilities"] = nil
		inputs["tags"] = nil
		inputs["taskRoleArn"] = nil
		inputs["volumes"] = nil
	} else {
		inputs["containerDefinitions"] = args.ContainerDefinitions
		inputs["cpu"] = args.Cpu
		inputs["executionRoleArn"] = args.ExecutionRoleArn
		inputs["family"] = args.Family
		inputs["ipcMode"] = args.IpcMode
		inputs["memory"] = args.Memory
		inputs["networkMode"] = args.NetworkMode
		inputs["pidMode"] = args.PidMode
		inputs["placementConstraints"] = args.PlacementConstraints
		inputs["proxyConfiguration"] = args.ProxyConfiguration
		inputs["requiresCompatibilities"] = args.RequiresCompatibilities
		inputs["tags"] = args.Tags
		inputs["taskRoleArn"] = args.TaskRoleArn
		inputs["volumes"] = args.Volumes
	}
	inputs["arn"] = nil
	inputs["revision"] = nil
	s, err := ctx.RegisterResource("aws:ecs/taskDefinition:TaskDefinition", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &TaskDefinition{s: s}, nil
}

// GetTaskDefinition gets an existing TaskDefinition resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTaskDefinition(ctx *pulumi.Context,
	name string, id pulumi.ID, state *TaskDefinitionState, opts ...pulumi.ResourceOpt) (*TaskDefinition, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["arn"] = state.Arn
		inputs["containerDefinitions"] = state.ContainerDefinitions
		inputs["cpu"] = state.Cpu
		inputs["executionRoleArn"] = state.ExecutionRoleArn
		inputs["family"] = state.Family
		inputs["ipcMode"] = state.IpcMode
		inputs["memory"] = state.Memory
		inputs["networkMode"] = state.NetworkMode
		inputs["pidMode"] = state.PidMode
		inputs["placementConstraints"] = state.PlacementConstraints
		inputs["proxyConfiguration"] = state.ProxyConfiguration
		inputs["requiresCompatibilities"] = state.RequiresCompatibilities
		inputs["revision"] = state.Revision
		inputs["tags"] = state.Tags
		inputs["taskRoleArn"] = state.TaskRoleArn
		inputs["volumes"] = state.Volumes
	}
	s, err := ctx.ReadResource("aws:ecs/taskDefinition:TaskDefinition", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &TaskDefinition{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *TaskDefinition) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *TaskDefinition) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Full ARN of the Task Definition (including both `family` and `revision`).
func (r *TaskDefinition) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// A list of valid [container definitions]
// (http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html) provided as a
// single valid JSON document. Please note that you should only provide values that are part of the container
// definition document. For a detailed description of what parameters are available, see the [Task Definition Parameters]
// (https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) section from the
// official [Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide).
func (r *TaskDefinition) ContainerDefinitions() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["containerDefinitions"])
}

// The number of cpu units used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
func (r *TaskDefinition) Cpu() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["cpu"])
}

// The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.
func (r *TaskDefinition) ExecutionRoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["executionRoleArn"])
}

// A unique name for your task definition.
func (r *TaskDefinition) Family() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["family"])
}

// The IPC resource namespace to be used for the containers in the task The valid values are `host`, `task`, and `none`.
func (r *TaskDefinition) IpcMode() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["ipcMode"])
}

// The amount (in MiB) of memory used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
func (r *TaskDefinition) Memory() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["memory"])
}

// The Docker networking mode to use for the containers in the task. The valid values are `none`, `bridge`, `awsvpc`, and `host`.
func (r *TaskDefinition) NetworkMode() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["networkMode"])
}

// The process namespace to use for the containers in the task. The valid values are `host` and `task`.
func (r *TaskDefinition) PidMode() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["pidMode"])
}

// A set of placement constraints rules that are taken into consideration during task placement. Maximum number of `placement_constraints` is `10`.
func (r *TaskDefinition) PlacementConstraints() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["placementConstraints"])
}

// The proxy configuration details for the App Mesh proxy.
func (r *TaskDefinition) ProxyConfiguration() *pulumi.Output {
	return r.s.State["proxyConfiguration"]
}

// A set of launch types required by the task. The valid values are `EC2` and `FARGATE`.
func (r *TaskDefinition) RequiresCompatibilities() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["requiresCompatibilities"])
}

// The revision of the task in a particular family.
func (r *TaskDefinition) Revision() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["revision"])
}

// Key-value mapping of resource tags
func (r *TaskDefinition) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// The ARN of IAM role that allows your Amazon ECS container task to make calls to other AWS services.
func (r *TaskDefinition) TaskRoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["taskRoleArn"])
}

// A set of volume blocks that containers in your task may use.
func (r *TaskDefinition) Volumes() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["volumes"])
}

// Input properties used for looking up and filtering TaskDefinition resources.
type TaskDefinitionState struct {
	// Full ARN of the Task Definition (including both `family` and `revision`).
	Arn interface{}
	// A list of valid [container definitions]
	// (http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html) provided as a
	// single valid JSON document. Please note that you should only provide values that are part of the container
	// definition document. For a detailed description of what parameters are available, see the [Task Definition Parameters]
	// (https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) section from the
	// official [Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide).
	ContainerDefinitions interface{}
	// The number of cpu units used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
	Cpu interface{}
	// The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.
	ExecutionRoleArn interface{}
	// A unique name for your task definition.
	Family interface{}
	// The IPC resource namespace to be used for the containers in the task The valid values are `host`, `task`, and `none`.
	IpcMode interface{}
	// The amount (in MiB) of memory used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
	Memory interface{}
	// The Docker networking mode to use for the containers in the task. The valid values are `none`, `bridge`, `awsvpc`, and `host`.
	NetworkMode interface{}
	// The process namespace to use for the containers in the task. The valid values are `host` and `task`.
	PidMode interface{}
	// A set of placement constraints rules that are taken into consideration during task placement. Maximum number of `placement_constraints` is `10`.
	PlacementConstraints interface{}
	// The proxy configuration details for the App Mesh proxy.
	ProxyConfiguration interface{}
	// A set of launch types required by the task. The valid values are `EC2` and `FARGATE`.
	RequiresCompatibilities interface{}
	// The revision of the task in a particular family.
	Revision interface{}
	// Key-value mapping of resource tags
	Tags interface{}
	// The ARN of IAM role that allows your Amazon ECS container task to make calls to other AWS services.
	TaskRoleArn interface{}
	// A set of volume blocks that containers in your task may use.
	Volumes interface{}
}

// The set of arguments for constructing a TaskDefinition resource.
type TaskDefinitionArgs struct {
	// A list of valid [container definitions]
	// (http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html) provided as a
	// single valid JSON document. Please note that you should only provide values that are part of the container
	// definition document. For a detailed description of what parameters are available, see the [Task Definition Parameters]
	// (https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) section from the
	// official [Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide).
	ContainerDefinitions interface{}
	// The number of cpu units used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
	Cpu interface{}
	// The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.
	ExecutionRoleArn interface{}
	// A unique name for your task definition.
	Family interface{}
	// The IPC resource namespace to be used for the containers in the task The valid values are `host`, `task`, and `none`.
	IpcMode interface{}
	// The amount (in MiB) of memory used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
	Memory interface{}
	// The Docker networking mode to use for the containers in the task. The valid values are `none`, `bridge`, `awsvpc`, and `host`.
	NetworkMode interface{}
	// The process namespace to use for the containers in the task. The valid values are `host` and `task`.
	PidMode interface{}
	// A set of placement constraints rules that are taken into consideration during task placement. Maximum number of `placement_constraints` is `10`.
	PlacementConstraints interface{}
	// The proxy configuration details for the App Mesh proxy.
	ProxyConfiguration interface{}
	// A set of launch types required by the task. The valid values are `EC2` and `FARGATE`.
	RequiresCompatibilities interface{}
	// Key-value mapping of resource tags
	Tags interface{}
	// The ARN of IAM role that allows your Amazon ECS container task to make calls to other AWS services.
	TaskRoleArn interface{}
	// A set of volume blocks that containers in your task may use.
	Volumes interface{}
}
