# Datastores

Types:

- <code><a href="./src/resources/datastores/datastores.ts">CreateDatastoreResponse</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">Datastore</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">ListDatastoresResponse</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">DatastoreDeleteResponse</a></code>

Methods:

- <code title="post /datastores">client.datastores.<a href="./src/resources/datastores/datastores.ts">create</a>({ ...params }) -> CreateDatastoreResponse</code>
- <code title="get /datastores">client.datastores.<a href="./src/resources/datastores/datastores.ts">list</a>({ ...params }) -> DatastoresDatastoresPage</code>
- <code title="delete /datastores/{datastore_id}">client.datastores.<a href="./src/resources/datastores/datastores.ts">delete</a>(datastoreId) -> unknown</code>

## Metadata

Types:

- <code><a href="./src/resources/datastores/metadata.ts">DatastoreMetadataResponse</a></code>

Methods:

- <code title="get /datastores/{datastore_id}/metadata">client.datastores.metadata.<a href="./src/resources/datastores/metadata.ts">retrieve</a>(datastoreId) -> DatastoreMetadataResponse</code>

## Documents

Types:

- <code><a href="./src/resources/datastores/documents.ts">DocumentDescription</a></code>
- <code><a href="./src/resources/datastores/documents.ts">IngestionResponse</a></code>
- <code><a href="./src/resources/datastores/documents.ts">ListDocumentsResponse</a></code>
- <code><a href="./src/resources/datastores/documents.ts">DocumentDeleteResponse</a></code>

Methods:

- <code title="post /datastores/{datastore_id}/documents">client.datastores.documents.<a href="./src/resources/datastores/documents.ts">create</a>(datastoreId, { ...params }) -> IngestionResponse</code>
- <code title="get /datastores/{datastore_id}/documents/{document_id}/metadata">client.datastores.documents.<a href="./src/resources/datastores/documents.ts">retrieve</a>(datastoreId, documentId) -> DocumentDescription</code>
- <code title="get /datastores/{datastore_id}/documents">client.datastores.documents.<a href="./src/resources/datastores/documents.ts">list</a>(datastoreId, { ...params }) -> DocumentDescriptionsDocumentsPage</code>
- <code title="delete /datastores/{datastore_id}/documents/{document_id}">client.datastores.documents.<a href="./src/resources/datastores/documents.ts">delete</a>(datastoreId, documentId) -> unknown</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">Agent</a></code>
- <code><a href="./src/resources/agents/agents.ts">CreateAgentOutput</a></code>
- <code><a href="./src/resources/agents/agents.ts">ListAgentsResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentUpdateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentDeleteResponse</a></code>

Methods:

- <code title="post /agents">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> CreateAgentOutput</code>
- <code title="put /agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentId, { ...params }) -> unknown</code>
- <code title="get /agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentsPage</code>
- <code title="delete /agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentId) -> unknown</code>

## Metadata

Types:

- <code><a href="./src/resources/agents/metadata.ts">AgentMetadataResponse</a></code>

Methods:

- <code title="get /agents/{agent_id}/metadata">client.agents.metadata.<a href="./src/resources/agents/metadata.ts">retrieve</a>(agentId) -> AgentMetadataResponse</code>

## Query

Types:

- <code><a href="./src/resources/agents/query.ts">QueryResponse</a></code>
- <code><a href="./src/resources/agents/query.ts">RetrievalInfoResponse</a></code>
- <code><a href="./src/resources/agents/query.ts">QueryFeedbackResponse</a></code>
- <code><a href="./src/resources/agents/query.ts">QueryMetricsResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/query">client.agents.query.<a href="./src/resources/agents/query.ts">create</a>(agentId, { ...params }) -> QueryResponse</code>
- <code title="post /agents/{agent_id}/feedback">client.agents.query.<a href="./src/resources/agents/query.ts">feedback</a>(agentId, { ...params }) -> unknown</code>
- <code title="get /agents/{agent_id}/metrics">client.agents.query.<a href="./src/resources/agents/query.ts">metrics</a>(agentId, { ...params }) -> QueryMetricsResponse</code>
- <code title="get /agents/{agent_id}/query/{message_id}/retrieval/info">client.agents.query.<a href="./src/resources/agents/query.ts">retrievalInfo</a>(agentId, messageId, { ...params }) -> RetrievalInfoResponse</code>

## Evaluate

Types:

- <code><a href="./src/resources/agents/evaluate/evaluate.ts">LaunchEvaluationResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/evaluate">client.agents.evaluate.<a href="./src/resources/agents/evaluate/evaluate.ts">launch</a>(agentId, { ...params }) -> LaunchEvaluationResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/agents/evaluate/jobs/jobs.ts">EvaluationRoundResponse</a></code>
- <code><a href="./src/resources/agents/evaluate/jobs/jobs.ts">ListEvaluationResponse</a></code>
- <code><a href="./src/resources/agents/evaluate/jobs/jobs.ts">JobCancelResponse</a></code>

Methods:

- <code title="get /agents/{agent_id}/evaluate/jobs">client.agents.evaluate.jobs.<a href="./src/resources/agents/evaluate/jobs/jobs.ts">list</a>(agentId) -> ListEvaluationResponse</code>
- <code title="post /agents/{agent_id}/evaluate/jobs/{job_id}/cancel">client.agents.evaluate.jobs.<a href="./src/resources/agents/evaluate/jobs/jobs.ts">cancel</a>(agentId, jobId) -> unknown</code>

#### Metadata

Methods:

- <code title="get /agents/{agent_id}/evaluate/jobs/{job_id}/metadata">client.agents.evaluate.jobs.metadata.<a href="./src/resources/agents/evaluate/jobs/metadata.ts">retrieve</a>(agentId, jobId) -> EvaluationRoundResponse</code>

## Datasets

Types:

- <code><a href="./src/resources/agents/datasets/datasets.ts">CreateDatasetResponse</a></code>
- <code><a href="./src/resources/agents/datasets/datasets.ts">DatasetResponse</a></code>
- <code><a href="./src/resources/agents/datasets/datasets.ts">ListDatasetsResponse</a></code>

### Tune

Types:

- <code><a href="./src/resources/agents/datasets/tune.ts">TuneDeleteResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/datasets/tune">client.agents.datasets.tune.<a href="./src/resources/agents/datasets/tune.ts">create</a>(agentId, { ...params }) -> CreateDatasetResponse</code>
- <code title="get /agents/{agent_id}/datasets/tune/{dataset_name}">client.agents.datasets.tune.<a href="./src/resources/agents/datasets/tune.ts">retrieve</a>(agentId, datasetName, { ...params }) -> Response</code>
- <code title="put /agents/{agent_id}/datasets/tune/{dataset_name}">client.agents.datasets.tune.<a href="./src/resources/agents/datasets/tune.ts">update</a>(agentId, datasetName, { ...params }) -> CreateDatasetResponse</code>
- <code title="get /agents/{agent_id}/datasets/tune">client.agents.datasets.tune.<a href="./src/resources/agents/datasets/tune.ts">list</a>(agentId, { ...params }) -> ListDatasetsResponse</code>
- <code title="delete /agents/{agent_id}/datasets/tune/{dataset_name}">client.agents.datasets.tune.<a href="./src/resources/agents/datasets/tune.ts">delete</a>(agentId, datasetName) -> unknown</code>
- <code title="get /agents/{agent_id}/datasets/tune/{dataset_name}/metadata">client.agents.datasets.tune.<a href="./src/resources/agents/datasets/tune.ts">metadata</a>(agentId, datasetName, { ...params }) -> DatasetResponse</code>

### Evaluation

Types:

- <code><a href="./src/resources/agents/datasets/evaluation.ts">EvaluationDeleteResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/datasets/evaluation">client.agents.datasets.evaluation.<a href="./src/resources/agents/datasets/evaluation.ts">create</a>(agentId, { ...params }) -> CreateDatasetResponse</code>
- <code title="get /agents/{agent_id}/datasets/evaluation/{dataset_name}">client.agents.datasets.evaluation.<a href="./src/resources/agents/datasets/evaluation.ts">retrieve</a>(agentId, datasetName, { ...params }) -> Response</code>
- <code title="put /agents/{agent_id}/datasets/evaluation/{dataset_name}">client.agents.datasets.evaluation.<a href="./src/resources/agents/datasets/evaluation.ts">update</a>(agentId, datasetName, { ...params }) -> CreateDatasetResponse</code>
- <code title="get /agents/{agent_id}/datasets/evaluation">client.agents.datasets.evaluation.<a href="./src/resources/agents/datasets/evaluation.ts">list</a>(agentId, { ...params }) -> ListDatasetsResponse</code>
- <code title="delete /agents/{agent_id}/datasets/evaluation/{dataset_name}">client.agents.datasets.evaluation.<a href="./src/resources/agents/datasets/evaluation.ts">delete</a>(agentId, datasetName) -> unknown</code>
- <code title="get /agents/{agent_id}/datasets/evaluation/{dataset_name}/metadata">client.agents.datasets.evaluation.<a href="./src/resources/agents/datasets/evaluation.ts">metadata</a>(agentId, datasetName, { ...params }) -> DatasetResponse</code>

## Tune

Types:

- <code><a href="./src/resources/agents/tune/tune.ts">TuneResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/tune">client.agents.tune.<a href="./src/resources/agents/tune/tune.ts">create</a>(agentId, { ...params }) -> TuneResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/agents/tune/jobs/jobs.ts">ListTuneJobsResponse</a></code>
- <code><a href="./src/resources/agents/tune/jobs/jobs.ts">TuneJobResponse</a></code>
- <code><a href="./src/resources/agents/tune/jobs/jobs.ts">JobDeleteResponse</a></code>

Methods:

- <code title="get /agents/{agent_id}/tune/jobs">client.agents.tune.jobs.<a href="./src/resources/agents/tune/jobs/jobs.ts">list</a>(agentId) -> ListTuneJobsResponse</code>
- <code title="delete /agents/{agent_id}/tune/jobs/{job_id}">client.agents.tune.jobs.<a href="./src/resources/agents/tune/jobs/jobs.ts">delete</a>(agentId, jobId) -> unknown</code>

#### Metadata

Methods:

- <code title="get /agents/{agent_id}/tune/jobs/{job_id}/metadata">client.agents.tune.jobs.metadata.<a href="./src/resources/agents/tune/jobs/metadata.ts">retrieve</a>(agentId, jobId) -> TuneJobResponse</code>

### Models

Types:

- <code><a href="./src/resources/agents/tune/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /agents/{agent_id}/tune/models">client.agents.tune.models.<a href="./src/resources/agents/tune/models.ts">list</a>(agentId) -> ModelListResponse</code>

# LMUnit

Types:

- <code><a href="./src/resources/lmunit.ts">LMUnitCreateResponse</a></code>

Methods:

- <code title="post /lmunit">client.lmUnit.<a href="./src/resources/lmunit.ts">create</a>({ ...params }) -> LMUnitCreateResponse</code>
