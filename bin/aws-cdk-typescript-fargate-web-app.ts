#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkTypescriptFargateWebAppStack } from '../lib/aws-cdk-typescript-fargate-web-app-stack';

const app = new cdk.App();
new AwsCdkTypescriptFargateWebAppStack(app, 'AwsCdkTypescriptFargateWebAppStack');
