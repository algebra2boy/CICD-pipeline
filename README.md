# CICD-pipeline

This repository contains some basic examples for a Continuous Integration and Continuous Deployment (CI/CD) pipeline.

## Introduction

The CICD-pipeline repository is designed to automate the process of building, testing, and deploying software applications. It provides a set of tools and configurations to streamline the development workflow and ensure consistent and reliable deployments.

## Usage

To write a Github Action workflow, a `.github` folder must be created. Inside that folder, a folder called `workflows` must also be created, then
you can write your workflow file in the yml file.

Once the pipeline is set up, you can use it to automate various tasks such as:
- Running eslint to check bugs
- Running unit tests
- Run prettier to check code format

To trigger the pipeline, simply push your code changes to the repository. The pipeline will automatically execute the defined stages and provide feedback on the status of each step.
