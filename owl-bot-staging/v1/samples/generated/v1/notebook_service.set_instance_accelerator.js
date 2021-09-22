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

function main(name, type, coreCount) {
  // [START notebooks_set_instance_accelerator_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Format:
   *  `projects/{project_id}/locations/{location}/instances/{instance_id}`
   */
  // const name = 'abc123'
  /**
   *  Required. Type of this accelerator.
   */
  // const type = ''
  /**
   *  Required. Count of cores of this accelerator. Note that not all combinations
   *  of `type` and `core_count` are valid. Check [GPUs on
   *  Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to
   *  find a valid combination. TPUs are not supported.
   */
  // const coreCount = 1234

  // Imports the Notebooks library
  const {NotebookServiceClient} = require('@google-cloud/notebooks').v1;

  // Instantiates a client
  const notebooksClient = new NotebookServiceClient();

  async function setInstanceAccelerator() {
    // Construct request
    const request = {
      name,
      type,
      coreCount,
    };

    // Run request
    const [operation] = await notebooksClient.setInstanceAccelerator(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  setInstanceAccelerator();
  // [END notebooks_set_instance_accelerator_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
