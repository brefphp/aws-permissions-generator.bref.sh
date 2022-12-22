export function generatePolicy(policyConfig: PolicyConfig): Record<string, unknown> {
    const actions = [];

    if (policyConfig.cloudformation) {
        actions.push("cloudformation:*");
    }
    if (policyConfig.iam) {
        actions.push(
            "iam:AttachRolePolicy",
            "iam:CreateRole",
            "iam:DeleteRole",
            "iam:DeleteRolePolicy",
            "iam:DetachRolePolicy",
            "iam:GetRole",
            "iam:PassRole",
            "iam:PutRolePolicy"
        );
    }
    if (policyConfig.lambda) {
        actions.push("lambda:*");
    }
    if (policyConfig.cloudWatch) {
        actions.push("logs:*");
        actions.push("cloudwatch:*");
    }
    if (policyConfig.apiGateway) {
        actions.push("apigateway:*");
    }
    if (policyConfig.cloudFront) {
        actions.push("cloudfront:*");
    }
    if (policyConfig.cloudWatch) {
        actions.push("events:*");
    }
    if (policyConfig.sqs) {
        actions.push("sqs:*");
    }
    if (policyConfig.sns) {
        actions.push("sns:*");
    }
    if (policyConfig.rds) {
        actions.push("rds:*");
    }
    if (policyConfig.dynamoDb) {
        actions.push("dynamodb:*");
    }
    if (policyConfig.s3) {
        actions.push("s3:*");
    }
    if (policyConfig.acm) {
        actions.push("acm:*");
    }
    if (policyConfig.ssm) {
        actions.push("ssm:*");
    }
    if (policyConfig.vpc) {
        actions.push("ec2:DescribeSecurityGroups", "ec2:DescribeSubnets", "ec2:DescribeVpcs");
    }
    if (policyConfig.elasticache) {
        actions.push("elasticache:*");
    }
    if (policyConfig.route53) {
        actions.push("route53:*");
    }

    return {
        Version: "2012-10-17",
        Statement: [
            {
                Effect: "Allow",
                Action: actions,
                Resource: "*",
            },
        ],
    };
}

export type PolicyConfig = {
    cloudformation: boolean;
    iam: boolean;
    lambda: boolean;
    cloudWatch: boolean;
    apiGateway: boolean;
    cloudFront: boolean;
    eventBridge: boolean;
    sqs: boolean;
    sns: boolean;
    rds: boolean;
    dynamoDb: boolean;
    s3: boolean;
    acm: boolean;
    ssm: boolean;
    vpc: boolean;
    elasticache: boolean;
    route53: boolean;
};
