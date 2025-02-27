// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package codepipeline

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a CodePipeline.
// 
// > **NOTE on `aws_codepipeline`:** - the `GITHUB_TOKEN` environment variable must be set if the GitHub provider is specified.
type Pipeline struct {
	s *pulumi.ResourceState
}

// NewPipeline registers a new resource with the given unique name, arguments, and options.
func NewPipeline(ctx *pulumi.Context,
	name string, args *PipelineArgs, opts ...pulumi.ResourceOpt) (*Pipeline, error) {
	if args == nil || args.ArtifactStore == nil {
		return nil, errors.New("missing required argument 'ArtifactStore'")
	}
	if args == nil || args.RoleArn == nil {
		return nil, errors.New("missing required argument 'RoleArn'")
	}
	if args == nil || args.Stages == nil {
		return nil, errors.New("missing required argument 'Stages'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["artifactStore"] = nil
		inputs["name"] = nil
		inputs["roleArn"] = nil
		inputs["stages"] = nil
		inputs["tags"] = nil
	} else {
		inputs["artifactStore"] = args.ArtifactStore
		inputs["name"] = args.Name
		inputs["roleArn"] = args.RoleArn
		inputs["stages"] = args.Stages
		inputs["tags"] = args.Tags
	}
	inputs["arn"] = nil
	s, err := ctx.RegisterResource("aws:codepipeline/pipeline:Pipeline", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Pipeline{s: s}, nil
}

// GetPipeline gets an existing Pipeline resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPipeline(ctx *pulumi.Context,
	name string, id pulumi.ID, state *PipelineState, opts ...pulumi.ResourceOpt) (*Pipeline, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["arn"] = state.Arn
		inputs["artifactStore"] = state.ArtifactStore
		inputs["name"] = state.Name
		inputs["roleArn"] = state.RoleArn
		inputs["stages"] = state.Stages
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("aws:codepipeline/pipeline:Pipeline", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Pipeline{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Pipeline) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Pipeline) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The codepipeline ARN.
func (r *Pipeline) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// An artifact_store block. Artifact stores are documented below.
// * `stage` (Minimum of at least two `stage` blocks is required) A stage block. Stages are documented below.
func (r *Pipeline) ArtifactStore() *pulumi.Output {
	return r.s.State["artifactStore"]
}

// The name of the pipeline.
func (r *Pipeline) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// A service role Amazon Resource Name (ARN) that grants AWS CodePipeline permission to make calls to AWS services on your behalf.
func (r *Pipeline) RoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["roleArn"])
}

func (r *Pipeline) Stages() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["stages"])
}

// A mapping of tags to assign to the resource.
func (r *Pipeline) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Pipeline resources.
type PipelineState struct {
	// The codepipeline ARN.
	Arn interface{}
	// An artifact_store block. Artifact stores are documented below.
	// * `stage` (Minimum of at least two `stage` blocks is required) A stage block. Stages are documented below.
	ArtifactStore interface{}
	// The name of the pipeline.
	Name interface{}
	// A service role Amazon Resource Name (ARN) that grants AWS CodePipeline permission to make calls to AWS services on your behalf.
	RoleArn interface{}
	Stages interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Pipeline resource.
type PipelineArgs struct {
	// An artifact_store block. Artifact stores are documented below.
	// * `stage` (Minimum of at least two `stage` blocks is required) A stage block. Stages are documented below.
	ArtifactStore interface{}
	// The name of the pipeline.
	Name interface{}
	// A service role Amazon Resource Name (ARN) that grants AWS CodePipeline permission to make calls to AWS services on your behalf.
	RoleArn interface{}
	Stages interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
