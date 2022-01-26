// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(name, vmId) {
  // [START notebooks_v1beta1_generated_NotebookService_ReportInstanceInfo_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Format:
   *  `projects/{project_id}/locations/{location}/instances/{instance_id}`
   */
  // const name = 'abc123'
  /**
   *  Required. The VM hardware token for authenticating the VM.
   *  https://cloud.google.com/compute/docs/instances/verifying-instance-identity
   */
  // const vmId = 'abc123'
  /**
   *  The metadata reported to Notebooks API. This will be merged to the instance
   *  metadata store
   */
  // const metadata = 1234

  // Imports the Notebooks library
  const {NotebookServiceClient} = require('@google-cloud/notebooks').v1beta1;

  // Instantiates a client
  const notebooksClient = new NotebookServiceClient();

  async function callReportInstanceInfo() {
    // Construct request
    const request = {
      name,
      vmId,
    };

    // Run request
    const [operation] = await notebooksClient.reportInstanceInfo(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callReportInstanceInfo();
  // [END notebooks_v1beta1_generated_NotebookService_ReportInstanceInfo_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
