// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package appsync

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides an AppSync Resolver.
type Resolver struct {
	s *pulumi.ResourceState
}

// NewResolver registers a new resource with the given unique name, arguments, and options.
func NewResolver(ctx *pulumi.Context,
	name string, args *ResolverArgs, opts ...pulumi.ResourceOpt) (*Resolver, error) {
	if args == nil || args.ApiId == nil {
		return nil, errors.New("missing required argument 'ApiId'")
	}
	if args == nil || args.Field == nil {
		return nil, errors.New("missing required argument 'Field'")
	}
	if args == nil || args.RequestTemplate == nil {
		return nil, errors.New("missing required argument 'RequestTemplate'")
	}
	if args == nil || args.ResponseTemplate == nil {
		return nil, errors.New("missing required argument 'ResponseTemplate'")
	}
	if args == nil || args.Type == nil {
		return nil, errors.New("missing required argument 'Type'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["apiId"] = nil
		inputs["dataSource"] = nil
		inputs["field"] = nil
		inputs["kind"] = nil
		inputs["pipelineConfig"] = nil
		inputs["requestTemplate"] = nil
		inputs["responseTemplate"] = nil
		inputs["type"] = nil
	} else {
		inputs["apiId"] = args.ApiId
		inputs["dataSource"] = args.DataSource
		inputs["field"] = args.Field
		inputs["kind"] = args.Kind
		inputs["pipelineConfig"] = args.PipelineConfig
		inputs["requestTemplate"] = args.RequestTemplate
		inputs["responseTemplate"] = args.ResponseTemplate
		inputs["type"] = args.Type
	}
	inputs["arn"] = nil
	s, err := ctx.RegisterResource("aws:appsync/resolver:Resolver", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Resolver{s: s}, nil
}

// GetResolver gets an existing Resolver resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetResolver(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ResolverState, opts ...pulumi.ResourceOpt) (*Resolver, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["apiId"] = state.ApiId
		inputs["arn"] = state.Arn
		inputs["dataSource"] = state.DataSource
		inputs["field"] = state.Field
		inputs["kind"] = state.Kind
		inputs["pipelineConfig"] = state.PipelineConfig
		inputs["requestTemplate"] = state.RequestTemplate
		inputs["responseTemplate"] = state.ResponseTemplate
		inputs["type"] = state.Type
	}
	s, err := ctx.ReadResource("aws:appsync/resolver:Resolver", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Resolver{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Resolver) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Resolver) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The API ID for the GraphQL API.
func (r *Resolver) ApiId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["apiId"])
}

// The ARN
func (r *Resolver) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// The DataSource name.
func (r *Resolver) DataSource() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["dataSource"])
}

// The field name from the schema defined in the GraphQL API.
func (r *Resolver) Field() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["field"])
}

// The resolver type. Valid values are `UNIT` and `PIPELINE`.
func (r *Resolver) Kind() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["kind"])
}

// The PipelineConfig. A `pipeline_config` block is documented below.
func (r *Resolver) PipelineConfig() *pulumi.Output {
	return r.s.State["pipelineConfig"]
}

// The request mapping template for this resolver.
func (r *Resolver) RequestTemplate() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["requestTemplate"])
}

// The response mapping template for this resolver.
func (r *Resolver) ResponseTemplate() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["responseTemplate"])
}

// The type name from the schema defined in the GraphQL API.
func (r *Resolver) Type() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["type"])
}

// Input properties used for looking up and filtering Resolver resources.
type ResolverState struct {
	// The API ID for the GraphQL API.
	ApiId interface{}
	// The ARN
	Arn interface{}
	// The DataSource name.
	DataSource interface{}
	// The field name from the schema defined in the GraphQL API.
	Field interface{}
	// The resolver type. Valid values are `UNIT` and `PIPELINE`.
	Kind interface{}
	// The PipelineConfig. A `pipeline_config` block is documented below.
	PipelineConfig interface{}
	// The request mapping template for this resolver.
	RequestTemplate interface{}
	// The response mapping template for this resolver.
	ResponseTemplate interface{}
	// The type name from the schema defined in the GraphQL API.
	Type interface{}
}

// The set of arguments for constructing a Resolver resource.
type ResolverArgs struct {
	// The API ID for the GraphQL API.
	ApiId interface{}
	// The DataSource name.
	DataSource interface{}
	// The field name from the schema defined in the GraphQL API.
	Field interface{}
	// The resolver type. Valid values are `UNIT` and `PIPELINE`.
	Kind interface{}
	// The PipelineConfig. A `pipeline_config` block is documented below.
	PipelineConfig interface{}
	// The request mapping template for this resolver.
	RequestTemplate interface{}
	// The response mapping template for this resolver.
	ResponseTemplate interface{}
	// The type name from the schema defined in the GraphQL API.
	Type interface{}
}
