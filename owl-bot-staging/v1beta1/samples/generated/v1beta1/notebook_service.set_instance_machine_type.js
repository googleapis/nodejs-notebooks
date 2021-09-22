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

function main(name, machineType) {
  // [START notebooks_set_instance_machine_type_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Format:
   *  `projects/{project_id}/locations/{location}/instances/{instance_id}`
   */
  // const name = 'abc123'
  /**
   *  Required. The [Compute Engine machine
   *  type](https://cloud.google.com/compute/docs/machine-types).
   */
  // const machineType = 'abc123'

  // Imports the Notebooks library
  const {NotebookServiceClient} = require('@google-cloud/notebooks').v1beta1;

  // Instantiates a client
  const notebooksClient = new NotebookServiceClient();

  async function setInstanceMachineType() {
    // Construct request
    const request = {
      name,
      machineType,
    };

    // Run request
    const [operation] = await notebooksClient.setInstanceMachineType(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  setInstanceMachineType();
  // [END notebooks_set_instance_machine_type_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
