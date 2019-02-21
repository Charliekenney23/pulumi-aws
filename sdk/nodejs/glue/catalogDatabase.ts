// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

/**
 * Provides a Glue Catalog Database Resource. You can refer to the [Glue Developer Guide](http://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html) for a full explanation of the Glue Data Catalog functionality
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const awsGlueCatalogDatabase = new aws.glue.CatalogDatabase("aws_glue_catalog_database", {
 *     name: "MyCatalogDatabase",
 * });
 * ```
 */
export class CatalogDatabase extends pulumi.CustomResource {
    /**
     * Get an existing CatalogDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CatalogDatabaseState, opts?: pulumi.CustomResourceOptions): CatalogDatabase {
        return new CatalogDatabase(name, <any>state, { ...opts, id: id });
    }

    public static list(): rxjs.Observable<CatalogDatabaseResult> {
        return rxjs.from(
            pulumi.runtime
                .invoke('pulumi:pulumi:readStackResourceOutputs', {
                    stackName: pulumi.runtime.getStack(),
                    type: 'aws:glue/catalogDatabase:CatalogDatabase',
                })
                .then(o => Object.keys(o.outputs).map(k => o.outputs[k]))
        ).pipe(
            operators.mergeAll(),
        );
    }

    /**
     * ID of the Glue Catalog to create the database in. If omitted, this defaults to the AWS Account ID.
     */
    public readonly catalogId: pulumi.Output<string>;
    /**
     * Description of the database.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * The location of the database (for example, an HDFS path).
     */
    public readonly locationUri: pulumi.Output<string | undefined>;
    /**
     * The name of the database.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * A list of key-value pairs that define parameters and properties of the database.
     */
    public readonly parameters: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a CatalogDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CatalogDatabaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CatalogDatabaseArgs | CatalogDatabaseState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: CatalogDatabaseState = argsOrState as CatalogDatabaseState | undefined;
            inputs["catalogId"] = state ? state.catalogId : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["locationUri"] = state ? state.locationUri : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
        } else {
            const args = argsOrState as CatalogDatabaseArgs | undefined;
            inputs["catalogId"] = args ? args.catalogId : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["locationUri"] = args ? args.locationUri : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
        }
        super("aws:glue/catalogDatabase:CatalogDatabase", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering CatalogDatabase resources.
 */
export interface CatalogDatabaseState {
    /**
     * ID of the Glue Catalog to create the database in. If omitted, this defaults to the AWS Account ID.
     */
    readonly catalogId?: pulumi.Input<string>;
    /**
     * Description of the database.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The location of the database (for example, an HDFS path).
     */
    readonly locationUri?: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of key-value pairs that define parameters and properties of the database.
     */
    readonly parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a CatalogDatabase resource.
 */
export interface CatalogDatabaseArgs {
    /**
     * ID of the Glue Catalog to create the database in. If omitted, this defaults to the AWS Account ID.
     */
    readonly catalogId?: pulumi.Input<string>;
    /**
     * Description of the database.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The location of the database (for example, an HDFS path).
     */
    readonly locationUri?: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of key-value pairs that define parameters and properties of the database.
     */
    readonly parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The live CatalogDatabase resource.
 */
export interface CatalogDatabaseResult {
    /**
     * ID of the Glue Catalog to create the database in. If omitted, this defaults to the AWS Account ID.
     */
    readonly catalogId: string;
    /**
     * Description of the database.
     */
    readonly description?: string;
    /**
     * The location of the database (for example, an HDFS path).
     */
    readonly locationUri?: string;
    /**
     * The name of the database.
     */
    readonly name: string;
    /**
     * A list of key-value pairs that define parameters and properties of the database.
     */
    readonly parameters?: {[key: string]: string};
}
