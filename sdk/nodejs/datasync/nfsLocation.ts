// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

/**
 * Manages an NFS Location within AWS DataSync.
 * 
 * > **NOTE:** The DataSync Agents must be available before creating this resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.datasync.NfsLocation("example", {
 *     onPremConfig: {
 *         agentArns: [aws_datasync_agent_example.arn],
 *     },
 *     serverHostname: "nfs.example.com",
 *     subdirectory: "/exported/path",
 * });
 * ```
 */
export class NfsLocation extends pulumi.CustomResource {
    /**
     * Get an existing NfsLocation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NfsLocationState, opts?: pulumi.CustomResourceOptions): NfsLocation {
        return new NfsLocation(name, <any>state, { ...opts, id: id });
    }

    public static list(): rxjs.Observable<NfsLocationResult> {
        return rxjs.from(
            pulumi.runtime
                .invoke('pulumi:pulumi:readStackResourceOutputs', {
                    stackName: pulumi.runtime.getStack(),
                    type: 'aws:datasync/nfsLocation:NfsLocation',
                })
                .then(o => Object.keys(o.outputs).map(k => o.outputs[k]))
        ).pipe(
            operators.mergeAll(),
        );
    }

    /**
     * Amazon Resource Name (ARN) of the DataSync Location.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * Configuration block containing information for connecting to the NFS File System.
     */
    public readonly onPremConfig: pulumi.Output<{ agentArns: string[] }>;
    /**
     * Specifies the IP address or DNS name of the NFS server. The DataSync Agent(s) use this to mount the NFS server.
     */
    public readonly serverHostname: pulumi.Output<string>;
    /**
     * Subdirectory to perform actions as source or destination. Should be exported by the NFS server.
     */
    public readonly subdirectory: pulumi.Output<string>;
    /**
     * Key-value pairs of resource tags to assign to the DataSync Location.
     */
    public readonly tags: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly uri: pulumi.Output<string>;

    /**
     * Create a NfsLocation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NfsLocationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NfsLocationArgs | NfsLocationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: NfsLocationState = argsOrState as NfsLocationState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["onPremConfig"] = state ? state.onPremConfig : undefined;
            inputs["serverHostname"] = state ? state.serverHostname : undefined;
            inputs["subdirectory"] = state ? state.subdirectory : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["uri"] = state ? state.uri : undefined;
        } else {
            const args = argsOrState as NfsLocationArgs | undefined;
            if (!args || args.onPremConfig === undefined) {
                throw new Error("Missing required property 'onPremConfig'");
            }
            if (!args || args.serverHostname === undefined) {
                throw new Error("Missing required property 'serverHostname'");
            }
            if (!args || args.subdirectory === undefined) {
                throw new Error("Missing required property 'subdirectory'");
            }
            inputs["onPremConfig"] = args ? args.onPremConfig : undefined;
            inputs["serverHostname"] = args ? args.serverHostname : undefined;
            inputs["subdirectory"] = args ? args.subdirectory : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["uri"] = undefined /*out*/;
        }
        super("aws:datasync/nfsLocation:NfsLocation", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NfsLocation resources.
 */
export interface NfsLocationState {
    /**
     * Amazon Resource Name (ARN) of the DataSync Location.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Configuration block containing information for connecting to the NFS File System.
     */
    readonly onPremConfig?: pulumi.Input<{ agentArns: pulumi.Input<pulumi.Input<string>[]> }>;
    /**
     * Specifies the IP address or DNS name of the NFS server. The DataSync Agent(s) use this to mount the NFS server.
     */
    readonly serverHostname?: pulumi.Input<string>;
    /**
     * Subdirectory to perform actions as source or destination. Should be exported by the NFS server.
     */
    readonly subdirectory?: pulumi.Input<string>;
    /**
     * Key-value pairs of resource tags to assign to the DataSync Location.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    readonly uri?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NfsLocation resource.
 */
export interface NfsLocationArgs {
    /**
     * Configuration block containing information for connecting to the NFS File System.
     */
    readonly onPremConfig: pulumi.Input<{ agentArns: pulumi.Input<pulumi.Input<string>[]> }>;
    /**
     * Specifies the IP address or DNS name of the NFS server. The DataSync Agent(s) use this to mount the NFS server.
     */
    readonly serverHostname: pulumi.Input<string>;
    /**
     * Subdirectory to perform actions as source or destination. Should be exported by the NFS server.
     */
    readonly subdirectory: pulumi.Input<string>;
    /**
     * Key-value pairs of resource tags to assign to the DataSync Location.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The live NfsLocation resource.
 */
export interface NfsLocationResult {
    /**
     * Amazon Resource Name (ARN) of the DataSync Location.
     */
    readonly arn: string;
    /**
     * Configuration block containing information for connecting to the NFS File System.
     */
    readonly onPremConfig: { agentArns: string[] };
    /**
     * Specifies the IP address or DNS name of the NFS server. The DataSync Agent(s) use this to mount the NFS server.
     */
    readonly serverHostname: string;
    /**
     * Subdirectory to perform actions as source or destination. Should be exported by the NFS server.
     */
    readonly subdirectory: string;
    /**
     * Key-value pairs of resource tags to assign to the DataSync Location.
     */
    readonly tags?: {[key: string]: string};
    readonly uri: string;
}
