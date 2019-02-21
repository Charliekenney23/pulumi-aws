// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators";

/**
 * Use this data source to lookup information about IAM Server Certificates.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const my_domain = pulumi.output(aws.iam.getServerCertificate({
 *     latest: true,
 *     namePrefix: "my-domain.org",
 * }));
 * const elb = new aws.elasticloadbalancing.LoadBalancer("elb", {
 *     listeners: [{
 *         instancePort: 8000,
 *         instanceProtocol: "https",
 *         lbPort: 443,
 *         lbProtocol: "https",
 *         sslCertificateId: my_domain.apply(my_domain => my_domain.arn),
 *     }],
 *     name: "my-domain-elb",
 * });
 * ```
 * 
 * ## Import 
 * 
 * The terraform import function will read in certificate body, certificate chain (if it exists), id, name, path, and arn. 
 * It will not retrieve the private key which is not available through the AWS API.   
 */
export function getServerCertificate(args?: GetServerCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetServerCertificateResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:iam/getServerCertificate:getServerCertificate", {
        "latest": args.latest,
        "name": args.name,
        "namePrefix": args.namePrefix,
        "pathPrefix": args.pathPrefix,
    }, opts);
}

/**
 * A collection of arguments for invoking getServerCertificate.
 */
export interface GetServerCertificateArgs {
    /**
     * sort results by expiration date. returns the certificate with expiration date in furthest in the future.
     */
    readonly latest?: boolean;
    /**
     * exact name of the cert to lookup
     */
    readonly name?: string;
    /**
     * prefix of cert to filter by
     */
    readonly namePrefix?: string;
    /**
     * prefix of path to filter by
     */
    readonly pathPrefix?: string;
}

/**
 * A collection of values returned by getServerCertificate.
 */
export interface GetServerCertificateResult {
    readonly arn: string;
    readonly certificateBody: string;
    readonly certificateChain: string;
    readonly expirationDate: string;
    readonly name: string;
    readonly path: string;
    readonly uploadDate: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
