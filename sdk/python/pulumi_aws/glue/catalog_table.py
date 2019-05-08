# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class CatalogTable(pulumi.CustomResource):
    catalog_id: pulumi.Output[str]
    """
    ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
    """
    database_name: pulumi.Output[str]
    """
    Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
    """
    description: pulumi.Output[str]
    """
    Description of the table.
    """
    name: pulumi.Output[str]
    """
    Name of the SerDe.
    """
    owner: pulumi.Output[str]
    """
    Owner of the table.
    """
    parameters: pulumi.Output[dict]
    """
    A map of initialization parameters for the SerDe, in key-value form.
    """
    partition_keys: pulumi.Output[list]
    """
    A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
    """
    retention: pulumi.Output[float]
    """
    Retention time for this table.
    """
    storage_descriptor: pulumi.Output[dict]
    """
    A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
    """
    table_type: pulumi.Output[str]
    """
    The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
    """
    view_expanded_text: pulumi.Output[str]
    """
    If the table is a view, the expanded text of the view; otherwise null.
    """
    view_original_text: pulumi.Output[str]
    """
    If the table is a view, the original text of the view; otherwise null.
    """
    def __init__(__self__, resource_name, opts=None, catalog_id=None, database_name=None, description=None, name=None, owner=None, parameters=None, partition_keys=None, retention=None, storage_descriptor=None, table_type=None, view_expanded_text=None, view_original_text=None, __name__=None, __opts__=None):
        """
        Provides a Glue Catalog Table Resource. You can refer to the [Glue Developer Guide](http://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html) for a full explanation of the Glue Data Catalog functionality.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] catalog_id: ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
        :param pulumi.Input[str] database_name: Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
        :param pulumi.Input[str] description: Description of the table.
        :param pulumi.Input[str] name: Name of the SerDe.
        :param pulumi.Input[str] owner: Owner of the table.
        :param pulumi.Input[dict] parameters: A map of initialization parameters for the SerDe, in key-value form.
        :param pulumi.Input[list] partition_keys: A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
        :param pulumi.Input[float] retention: Retention time for this table.
        :param pulumi.Input[dict] storage_descriptor: A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
        :param pulumi.Input[str] table_type: The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
        :param pulumi.Input[str] view_expanded_text: If the table is a view, the expanded text of the view; otherwise null.
        :param pulumi.Input[str] view_original_text: If the table is a view, the original text of the view; otherwise null.
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

        __props__['catalog_id'] = catalog_id

        if database_name is None:
            raise TypeError("Missing required property 'database_name'")
        __props__['database_name'] = database_name

        __props__['description'] = description

        __props__['name'] = name

        __props__['owner'] = owner

        __props__['parameters'] = parameters

        __props__['partition_keys'] = partition_keys

        __props__['retention'] = retention

        __props__['storage_descriptor'] = storage_descriptor

        __props__['table_type'] = table_type

        __props__['view_expanded_text'] = view_expanded_text

        __props__['view_original_text'] = view_original_text

        if opts is None:
            opts = pulumi.ResourceOptions()
        if opts.version is None:
            opts.version = utilities.get_version()
        super(CatalogTable, __self__).__init__(
            'aws:glue/catalogTable:CatalogTable',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

