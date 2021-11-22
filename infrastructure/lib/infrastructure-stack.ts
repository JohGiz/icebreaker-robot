import * as cdk from "@aws-cdk/core";
import * as codecommit from "@aws-cdk/aws-codecommit";

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyReactSampleRepo = new codecommit.Repository(this, "icebreakerRepo", {
        repositoryName: "icbreakaker-questions-repo",
        description:
          "CodeCommit repository that will be used as the source repository for the sample react app and the cdk app",
      }
    );

  }
}
