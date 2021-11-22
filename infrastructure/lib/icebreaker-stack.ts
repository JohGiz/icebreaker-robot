import * as cdk from "@aws-cdk/core";
import * as amplify from '@aws-cdk/aws-amplify';

export class IcebreakerRobotStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const amplifyApp = new amplify.App(this, "icebreaker-robot", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'JohGiz',
        repository: 'icebreaker-robot',
        oauthToken: cdk.SecretValue.secretsManager('github-token', {
          jsonField: 'github-token'
        })
      }),
    });
    const masterBranch = amplifyApp.addBranch("master");

  }
}
