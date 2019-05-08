# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class DataSource(pulumi.CustomResource):
    api_id: pulumi.Output[str]
    """
    The API ID for the GraphQL API for the DataSource.
    """
    arn: pulumi.Output[str]
    """
    The ARN
    """
    description: pulumi.Output[str]
    """
    A description of the DataSource.
    """
    dynamodb_config: pulumi.Output[dict]
    """
    DynamoDB settings. See below
    """
    elasticsearch_config: pulumi.Output[dict]
    """
    Amazon Elasticsearch settings. See below
    """
    http_config: pulumi.Output[dict]
    """
    HTTP settings. See below
    """
    lambda_config: pulumi.Output[dict]
    """
    AWS Lambda settings. See below
    """
    name: pulumi.Output[str]
    """
    A user-supplied name for the DataSource.
    """
    service_role_arn: pulumi.Output[str]
    """
    The IAM service role ARN for the data source.
    """
    type: pulumi.Output[str]
    """
    The type of the DataSource. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`.
    """
    def __init__(__self__, resource_name, opts=None, api_id=None, description=None, dynamodb_config=None, elasticsearch_config=None, http_config=None, lambda_config=None, name=None, service_role_arn=None, type=None, __name__=None, __opts__=None):
        """
        Provides an AppSync DataSource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] api_id: The API ID for the GraphQL API for the DataSource.
        :param pulumi.Input[str] description: A description of the DataSource.
        :param pulumi.Input[dict] dynamodb_config: DynamoDB settings. See below
        :param pulumi.Input[dict] elasticsearch_config: Amazon Elasticsearch settings. See below
        :param pulumi.Input[dict] http_config: HTTP settings. See below
        :param pulumi.Input[dict] lambda_config: AWS Lambda settings. See below
        :param pulumi.Input[str] name: A user-supplied name for the DataSource.
        :param pulumi.Input[str] service_role_arn: The IAM service role ARN for the data source.
        :param pulumi.Input[str] type: The type of the DataSource. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`.
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

        if api_id is None:
            raise TypeError("Missing required property 'api_id'")
        __props__['api_id'] = api_id

        __props__['description'] = description

        __props__['dynamodb_config'] = dynamodb_config

        __props__['elasticsearch_config'] = elasticsearch_config

        __props__['http_config'] = http_config

        __props__['lambda_config'] = lambda_config

        __props__['name'] = name

        __props__['service_role_arn'] = service_role_arn

        if type is None:
            raise TypeError("Missing required property 'type'")
        __props__['type'] = type

        __props__['arn'] = None

        if opts is None:
            opts = pulumi.ResourceOptions()
        if opts.version is None:
            opts.version = utilities.get_version()
        super(DataSource, __self__).__init__(
            'aws:appsync/dataSource:DataSource',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

