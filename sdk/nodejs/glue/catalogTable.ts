// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a Glue Catalog Table Resource. You can refer to the [Glue Developer Guide](http://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html) for a full explanation of the Glue Data Catalog functionality.
 * 
 * ## Example Usage
 * 
 * ### Basic Table
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const awsGlueCatalogTable = new aws.glue.CatalogTable("aws_glue_catalog_table", {
 *     databaseName: "MyCatalogDatabase",
 * });
 * ```
 * 
 * ### Parquet Table for Athena
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const awsGlueCatalogTable = new aws.glue.CatalogTable("aws_glue_catalog_table", {
 *     databaseName: "MyCatalogDatabase",
 *     parameters: {
 *         EXTERNAL: "TRUE",
 *         "parquet.compression": "SNAPPY",
 *     },
 *     storageDescriptor: {
 *         columns: [
 *             {
 *                 name: "my_string",
 *                 type: "string",
 *             },
 *             {
 *                 name: "my_double",
 *                 type: "double",
 *             },
 *             {
 *                 comment: "",
 *                 name: "my_date",
 *                 type: "date",
 *             },
 *             {
 *                 comment: "",
 *                 name: "my_bigint",
 *                 type: "bigint",
 *             },
 *             {
 *                 comment: "",
 *                 name: "my_struct",
 *                 type: "struct<my_nested_string:string>",
 *             },
 *         ],
 *         inputFormat: "org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat",
 *         location: "s3://my-bucket/event-streams/my-stream",
 *         outputFormat: "org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat",
 *         serDeInfo: {
 *             name: "my-stream",
 *             parameters: {
 *                 "serialization.format": 1,
 *             },
 *             serializationLibrary: "org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe",
 *         },
 *     },
 *     tableType: "EXTERNAL_TABLE",
 * });
 * ```
 */
export class CatalogTable extends pulumi.CustomResource {
    /**
     * Get an existing CatalogTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CatalogTableState, opts?: pulumi.CustomResourceOptions): CatalogTable {
        return new CatalogTable(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:glue/catalogTable:CatalogTable';

    /**
     * Returns true if the given object is an instance of CatalogTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CatalogTable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CatalogTable.__pulumiType;
    }

    /**
     * ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
     */
    public readonly catalogId!: pulumi.Output<string>;
    /**
     * Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
     */
    public readonly databaseName!: pulumi.Output<string>;
    /**
     * Description of the table.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of the SerDe.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Owner of the table.
     */
    public readonly owner!: pulumi.Output<string | undefined>;
    /**
     * A map of initialization parameters for the SerDe, in key-value form.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
     */
    public readonly partitionKeys!: pulumi.Output<{ comment?: string, name: string, type?: string }[] | undefined>;
    /**
     * Retention time for this table.
     */
    public readonly retention!: pulumi.Output<number | undefined>;
    /**
     * A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
     */
    public readonly storageDescriptor!: pulumi.Output<{ bucketColumns?: string[], columns?: { comment?: string, name: string, type?: string }[], compressed?: boolean, inputFormat?: string, location?: string, numberOfBuckets?: number, outputFormat?: string, parameters?: {[key: string]: string}, serDeInfo?: { name?: string, parameters?: {[key: string]: string}, serializationLibrary?: string }, skewedInfo?: { skewedColumnNames?: string[], skewedColumnValueLocationMaps?: {[key: string]: string}, skewedColumnValues?: string[] }, sortColumns?: { column: string, sortOrder: number }[], storedAsSubDirectories?: boolean } | undefined>;
    /**
     * The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
     */
    public readonly tableType!: pulumi.Output<string | undefined>;
    /**
     * If the table is a view, the expanded text of the view; otherwise null.
     */
    public readonly viewExpandedText!: pulumi.Output<string | undefined>;
    /**
     * If the table is a view, the original text of the view; otherwise null.
     */
    public readonly viewOriginalText!: pulumi.Output<string | undefined>;

    /**
     * Create a CatalogTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CatalogTableArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CatalogTableArgs | CatalogTableState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as CatalogTableState | undefined;
            inputs["catalogId"] = state ? state.catalogId : undefined;
            inputs["databaseName"] = state ? state.databaseName : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["owner"] = state ? state.owner : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
            inputs["partitionKeys"] = state ? state.partitionKeys : undefined;
            inputs["retention"] = state ? state.retention : undefined;
            inputs["storageDescriptor"] = state ? state.storageDescriptor : undefined;
            inputs["tableType"] = state ? state.tableType : undefined;
            inputs["viewExpandedText"] = state ? state.viewExpandedText : undefined;
            inputs["viewOriginalText"] = state ? state.viewOriginalText : undefined;
        } else {
            const args = argsOrState as CatalogTableArgs | undefined;
            if (!args || args.databaseName === undefined) {
                throw new Error("Missing required property 'databaseName'");
            }
            inputs["catalogId"] = args ? args.catalogId : undefined;
            inputs["databaseName"] = args ? args.databaseName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["owner"] = args ? args.owner : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
            inputs["partitionKeys"] = args ? args.partitionKeys : undefined;
            inputs["retention"] = args ? args.retention : undefined;
            inputs["storageDescriptor"] = args ? args.storageDescriptor : undefined;
            inputs["tableType"] = args ? args.tableType : undefined;
            inputs["viewExpandedText"] = args ? args.viewExpandedText : undefined;
            inputs["viewOriginalText"] = args ? args.viewOriginalText : undefined;
        }
        super(CatalogTable.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering CatalogTable resources.
 */
export interface CatalogTableState {
    /**
     * ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
     */
    readonly catalogId?: pulumi.Input<string>;
    /**
     * Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
     */
    readonly databaseName?: pulumi.Input<string>;
    /**
     * Description of the table.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Name of the SerDe.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Owner of the table.
     */
    readonly owner?: pulumi.Input<string>;
    /**
     * A map of initialization parameters for the SerDe, in key-value form.
     */
    readonly parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
     */
    readonly partitionKeys?: pulumi.Input<pulumi.Input<{ comment?: pulumi.Input<string>, name: pulumi.Input<string>, type?: pulumi.Input<string> }>[]>;
    /**
     * Retention time for this table.
     */
    readonly retention?: pulumi.Input<number>;
    /**
     * A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
     */
    readonly storageDescriptor?: pulumi.Input<{ bucketColumns?: pulumi.Input<pulumi.Input<string>[]>, columns?: pulumi.Input<pulumi.Input<{ comment?: pulumi.Input<string>, name: pulumi.Input<string>, type?: pulumi.Input<string> }>[]>, compressed?: pulumi.Input<boolean>, inputFormat?: pulumi.Input<string>, location?: pulumi.Input<string>, numberOfBuckets?: pulumi.Input<number>, outputFormat?: pulumi.Input<string>, parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>, serDeInfo?: pulumi.Input<{ name?: pulumi.Input<string>, parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>, serializationLibrary?: pulumi.Input<string> }>, skewedInfo?: pulumi.Input<{ skewedColumnNames?: pulumi.Input<pulumi.Input<string>[]>, skewedColumnValueLocationMaps?: pulumi.Input<{[key: string]: pulumi.Input<string>}>, skewedColumnValues?: pulumi.Input<pulumi.Input<string>[]> }>, sortColumns?: pulumi.Input<pulumi.Input<{ column: pulumi.Input<string>, sortOrder: pulumi.Input<number> }>[]>, storedAsSubDirectories?: pulumi.Input<boolean> }>;
    /**
     * The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
     */
    readonly tableType?: pulumi.Input<string>;
    /**
     * If the table is a view, the expanded text of the view; otherwise null.
     */
    readonly viewExpandedText?: pulumi.Input<string>;
    /**
     * If the table is a view, the original text of the view; otherwise null.
     */
    readonly viewOriginalText?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CatalogTable resource.
 */
export interface CatalogTableArgs {
    /**
     * ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
     */
    readonly catalogId?: pulumi.Input<string>;
    /**
     * Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
     */
    readonly databaseName: pulumi.Input<string>;
    /**
     * Description of the table.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Name of the SerDe.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Owner of the table.
     */
    readonly owner?: pulumi.Input<string>;
    /**
     * A map of initialization parameters for the SerDe, in key-value form.
     */
    readonly parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
     */
    readonly partitionKeys?: pulumi.Input<pulumi.Input<{ comment?: pulumi.Input<string>, name: pulumi.Input<string>, type?: pulumi.Input<string> }>[]>;
    /**
     * Retention time for this table.
     */
    readonly retention?: pulumi.Input<number>;
    /**
     * A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
     */
    readonly storageDescriptor?: pulumi.Input<{ bucketColumns?: pulumi.Input<pulumi.Input<string>[]>, columns?: pulumi.Input<pulumi.Input<{ comment?: pulumi.Input<string>, name: pulumi.Input<string>, type?: pulumi.Input<string> }>[]>, compressed?: pulumi.Input<boolean>, inputFormat?: pulumi.Input<string>, location?: pulumi.Input<string>, numberOfBuckets?: pulumi.Input<number>, outputFormat?: pulumi.Input<string>, parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>, serDeInfo?: pulumi.Input<{ name?: pulumi.Input<string>, parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>, serializationLibrary?: pulumi.Input<string> }>, skewedInfo?: pulumi.Input<{ skewedColumnNames?: pulumi.Input<pulumi.Input<string>[]>, skewedColumnValueLocationMaps?: pulumi.Input<{[key: string]: pulumi.Input<string>}>, skewedColumnValues?: pulumi.Input<pulumi.Input<string>[]> }>, sortColumns?: pulumi.Input<pulumi.Input<{ column: pulumi.Input<string>, sortOrder: pulumi.Input<number> }>[]>, storedAsSubDirectories?: pulumi.Input<boolean> }>;
    /**
     * The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
     */
    readonly tableType?: pulumi.Input<string>;
    /**
     * If the table is a view, the expanded text of the view; otherwise null.
     */
    readonly viewExpandedText?: pulumi.Input<string>;
    /**
     * If the table is a view, the original text of the view; otherwise null.
     */
    readonly viewOriginalText?: pulumi.Input<string>;
}
