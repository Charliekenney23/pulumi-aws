// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an IAM Server Certificate resource to upload Server Certificates.
 * Certs uploaded to IAM can easily work with other AWS services such as:
 * 
 * - AWS Elastic Beanstalk
 * - Elastic Load Balancing
 * - CloudFront
 * - AWS OpsWorks
 * 
 * For information about server certificates in IAM, see [Managing Server
 * Certificates][2] in AWS Documentation.
 * 
 * > **Note:** All arguments including the private key will be stored in the raw state as plain-text.
 * [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
 * 
 * ## Example Usage
 * 
 * **Using certs on file:**
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * import * as fs from "fs";
 * 
 * const testCert = new aws.iam.ServerCertificate("test_cert", {
 *     certificateBody: fs.readFileSync("self-ca-cert.pem", "utf-8"),
 *     privateKey: fs.readFileSync("test-key.pem", "utf-8"),
 * });
 * ```
 * 
 * **Example with cert in-line:**
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const testCertAlt = new aws.iam.ServerCertificate("test_cert_alt", {
 *     certificateBody: `-----BEGIN CERTIFICATE-----
 * [......] # cert contents
 * -----END CERTIFICATE-----
 * `,
 *     privateKey: `-----BEGIN RSA PRIVATE KEY-----
 * [......] # cert contents
 * -----END RSA PRIVATE KEY-----
 * `,
 * });
 * ```
 * 
 * **Use in combination with an AWS ELB resource:**
 * 
 * Some properties of an IAM Server Certificates cannot be updated while they are
 * in use. In order for Terraform to effectively manage a Certificate in this situation, it is
 * recommended you utilize the `name_prefix` attribute and enable the
 * `create_before_destroy` [lifecycle block][lifecycle]. This will allow Terraform
 * to create a new, updated `aws_iam_server_certificate` resource and replace it in
 * dependant resources before attempting to destroy the old version.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * import * as fs from "fs";
 * 
 * const testCert = new aws.iam.ServerCertificate("test_cert", {
 *     certificateBody: fs.readFileSync("self-ca-cert.pem", "utf-8"),
 *     namePrefix: "example-cert",
 *     privateKey: fs.readFileSync("test-key.pem", "utf-8"),
 * });
 * const ourapp = new aws.elasticloadbalancing.LoadBalancer("ourapp", {
 *     availabilityZones: ["us-west-2a"],
 *     crossZoneLoadBalancing: true,
 *     listeners: [{
 *         instancePort: 8000,
 *         instanceProtocol: "http",
 *         lbPort: 443,
 *         lbProtocol: "https",
 *         sslCertificateId: testCert.arn,
 *     }],
 * });
 * ```
 */
export class ServerCertificate extends pulumi.CustomResource {
    /**
     * Get an existing ServerCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServerCertificateState, opts?: pulumi.CustomResourceOptions): ServerCertificate {
        return new ServerCertificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:iam/serverCertificate:ServerCertificate';

    /**
     * Returns true if the given object is an instance of ServerCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerCertificate.__pulumiType;
    }

    /**
     * The Amazon Resource Name (ARN) specifying the server certificate.
     */
    public readonly arn!: pulumi.Output<string>;
    /**
     * The contents of the public key certificate in
     * PEM-encoded format.
     */
    public readonly certificateBody!: pulumi.Output<string>;
    /**
     * The contents of the certificate chain.
     * This is typically a concatenation of the PEM-encoded public key certificates
     * of the chain.
     */
    public readonly certificateChain!: pulumi.Output<string | undefined>;
    /**
     * The name of the Server Certificate. Do not include the
     * path in this value. If omitted, Terraform will assign a random, unique name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    public readonly namePrefix!: pulumi.Output<string | undefined>;
    /**
     * The IAM path for the server certificate.  If it is not
     * included, it defaults to a slash (/). If this certificate is for use with
     * AWS CloudFront, the path must be in format `/cloudfront/your_path_here`.
     * See [IAM Identifiers][1] for more details on IAM Paths.
     */
    public readonly path!: pulumi.Output<string | undefined>;
    /**
     * The contents of the private key in PEM-encoded format.
     */
    public readonly privateKey!: pulumi.Output<string>;

    /**
     * Create a ServerCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerCertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServerCertificateArgs | ServerCertificateState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ServerCertificateState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["certificateBody"] = state ? state.certificateBody : undefined;
            inputs["certificateChain"] = state ? state.certificateChain : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namePrefix"] = state ? state.namePrefix : undefined;
            inputs["path"] = state ? state.path : undefined;
            inputs["privateKey"] = state ? state.privateKey : undefined;
        } else {
            const args = argsOrState as ServerCertificateArgs | undefined;
            if (!args || args.certificateBody === undefined) {
                throw new Error("Missing required property 'certificateBody'");
            }
            if (!args || args.privateKey === undefined) {
                throw new Error("Missing required property 'privateKey'");
            }
            inputs["arn"] = args ? args.arn : undefined;
            inputs["certificateBody"] = args ? args.certificateBody : undefined;
            inputs["certificateChain"] = args ? args.certificateChain : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namePrefix"] = args ? args.namePrefix : undefined;
            inputs["path"] = args ? args.path : undefined;
            inputs["privateKey"] = args ? args.privateKey : undefined;
        }
        super(ServerCertificate.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ServerCertificate resources.
 */
export interface ServerCertificateState {
    /**
     * The Amazon Resource Name (ARN) specifying the server certificate.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The contents of the public key certificate in
     * PEM-encoded format.
     */
    readonly certificateBody?: pulumi.Input<string>;
    /**
     * The contents of the certificate chain.
     * This is typically a concatenation of the PEM-encoded public key certificates
     * of the chain.
     */
    readonly certificateChain?: pulumi.Input<string>;
    /**
     * The name of the Server Certificate. Do not include the
     * path in this value. If omitted, Terraform will assign a random, unique name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * The IAM path for the server certificate.  If it is not
     * included, it defaults to a slash (/). If this certificate is for use with
     * AWS CloudFront, the path must be in format `/cloudfront/your_path_here`.
     * See [IAM Identifiers][1] for more details on IAM Paths.
     */
    readonly path?: pulumi.Input<string>;
    /**
     * The contents of the private key in PEM-encoded format.
     */
    readonly privateKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ServerCertificate resource.
 */
export interface ServerCertificateArgs {
    /**
     * The Amazon Resource Name (ARN) specifying the server certificate.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The contents of the public key certificate in
     * PEM-encoded format.
     */
    readonly certificateBody: pulumi.Input<string>;
    /**
     * The contents of the certificate chain.
     * This is typically a concatenation of the PEM-encoded public key certificates
     * of the chain.
     */
    readonly certificateChain?: pulumi.Input<string>;
    /**
     * The name of the Server Certificate. Do not include the
     * path in this value. If omitted, Terraform will assign a random, unique name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * The IAM path for the server certificate.  If it is not
     * included, it defaults to a slash (/). If this certificate is for use with
     * AWS CloudFront, the path must be in format `/cloudfront/your_path_here`.
     * See [IAM Identifiers][1] for more details on IAM Paths.
     */
    readonly path?: pulumi.Input<string>;
    /**
     * The contents of the private key in PEM-encoded format.
     */
    readonly privateKey: pulumi.Input<string>;
}
