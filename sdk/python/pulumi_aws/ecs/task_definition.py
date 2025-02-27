# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class TaskDefinition(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    Full ARN of the Task Definition (including both `family` and `revision`).
    """
    container_definitions: pulumi.Output[str]
    """
    A list of valid [container definitions]
    (http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html) provided as a
    single valid JSON document. Please note that you should only provide values that are part of the container
    definition document. For a detailed description of what parameters are available, see the [Task Definition Parameters]
    (https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) section from the
    official [Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide).
    """
    cpu: pulumi.Output[str]
    """
    The number of cpu units used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
    """
    execution_role_arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.
    """
    family: pulumi.Output[str]
    """
    A unique name for your task definition.
    """
    ipc_mode: pulumi.Output[str]
    """
    The IPC resource namespace to be used for the containers in the task The valid values are `host`, `task`, and `none`.
    """
    memory: pulumi.Output[str]
    """
    The amount (in MiB) of memory used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
    """
    network_mode: pulumi.Output[str]
    """
    The Docker networking mode to use for the containers in the task. The valid values are `none`, `bridge`, `awsvpc`, and `host`.
    """
    pid_mode: pulumi.Output[str]
    """
    The process namespace to use for the containers in the task. The valid values are `host` and `task`.
    """
    placement_constraints: pulumi.Output[list]
    """
    A set of placement constraints rules that are taken into consideration during task placement. Maximum number of `placement_constraints` is `10`.
    """
    proxy_configuration: pulumi.Output[dict]
    """
    The proxy configuration details for the App Mesh proxy.
    """
    requires_compatibilities: pulumi.Output[list]
    """
    A set of launch types required by the task. The valid values are `EC2` and `FARGATE`.
    """
    revision: pulumi.Output[float]
    """
    The revision of the task in a particular family.
    """
    tags: pulumi.Output[dict]
    """
    Key-value mapping of resource tags
    """
    task_role_arn: pulumi.Output[str]
    """
    The ARN of IAM role that allows your Amazon ECS container task to make calls to other AWS services.
    """
    volumes: pulumi.Output[list]
    """
    A set of volume blocks that containers in your task may use.
    """
    def __init__(__self__, resource_name, opts=None, container_definitions=None, cpu=None, execution_role_arn=None, family=None, ipc_mode=None, memory=None, network_mode=None, pid_mode=None, placement_constraints=None, proxy_configuration=None, requires_compatibilities=None, tags=None, task_role_arn=None, volumes=None, __name__=None, __opts__=None):
        """
        Manages a revision of an ECS task definition to be used in `aws_ecs_service`.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] container_definitions: A list of valid [container definitions]
               (http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html) provided as a
               single valid JSON document. Please note that you should only provide values that are part of the container
               definition document. For a detailed description of what parameters are available, see the [Task Definition Parameters]
               (https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) section from the
               official [Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide).
        :param pulumi.Input[str] cpu: The number of cpu units used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
        :param pulumi.Input[str] execution_role_arn: The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.
        :param pulumi.Input[str] family: A unique name for your task definition.
        :param pulumi.Input[str] ipc_mode: The IPC resource namespace to be used for the containers in the task The valid values are `host`, `task`, and `none`.
        :param pulumi.Input[str] memory: The amount (in MiB) of memory used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
        :param pulumi.Input[str] network_mode: The Docker networking mode to use for the containers in the task. The valid values are `none`, `bridge`, `awsvpc`, and `host`.
        :param pulumi.Input[str] pid_mode: The process namespace to use for the containers in the task. The valid values are `host` and `task`.
        :param pulumi.Input[list] placement_constraints: A set of placement constraints rules that are taken into consideration during task placement. Maximum number of `placement_constraints` is `10`.
        :param pulumi.Input[dict] proxy_configuration: The proxy configuration details for the App Mesh proxy.
        :param pulumi.Input[list] requires_compatibilities: A set of launch types required by the task. The valid values are `EC2` and `FARGATE`.
        :param pulumi.Input[dict] tags: Key-value mapping of resource tags
        :param pulumi.Input[str] task_role_arn: The ARN of IAM role that allows your Amazon ECS container task to make calls to other AWS services.
        :param pulumi.Input[list] volumes: A set of volume blocks that containers in your task may use.
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

        if container_definitions is None:
            raise TypeError("Missing required property 'container_definitions'")
        __props__['container_definitions'] = container_definitions

        __props__['cpu'] = cpu

        __props__['execution_role_arn'] = execution_role_arn

        if family is None:
            raise TypeError("Missing required property 'family'")
        __props__['family'] = family

        __props__['ipc_mode'] = ipc_mode

        __props__['memory'] = memory

        __props__['network_mode'] = network_mode

        __props__['pid_mode'] = pid_mode

        __props__['placement_constraints'] = placement_constraints

        __props__['proxy_configuration'] = proxy_configuration

        __props__['requires_compatibilities'] = requires_compatibilities

        __props__['tags'] = tags

        __props__['task_role_arn'] = task_role_arn

        __props__['volumes'] = volumes

        __props__['arn'] = None
        __props__['revision'] = None

        super(TaskDefinition, __self__).__init__(
            'aws:ecs/taskDefinition:TaskDefinition',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

