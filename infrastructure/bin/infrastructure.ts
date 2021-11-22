#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { IcebreakerRobotStack } from '../lib/icebreaker-stack';

const app = new cdk.App();
new IcebreakerRobotStack(app, 'icebreaker-robot', {
});
