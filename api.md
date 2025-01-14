# Datastores

Types:

- <code><a href="./src/resources/datastores/datastores.ts">CreateDatastoreResponse</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">Datastore</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">DatastoreMetadata</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">ListDatastoresResponse</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">DatastoreDeleteResponse</a></code>

Methods:

- <code title="post /datastores">client.datastores.<a href="./src/resources/datastores/datastores.ts">create</a>({ ...params }) -> CreateDatastoreResponse</code>
- <code title="get /datastores">client.datastores.<a href="./src/resources/datastores/datastores.ts">list</a>({ ...params }) -> DatastoresDatastoresPage</code>
- <code title="delete /datastores/{datastore_id}">client.datastores.<a href="./src/resources/datastores/datastores.ts">delete</a>(datastoreId) -> unknown</code>
- <code title="get /datastores/{datastore_id}/metadata">client.datastores.<a href="./src/resources/datastores/datastores.ts">metadata</a>(datastoreId) -> DatastoreMetadata</code>

## Documents

Types:

- <code><a href="./src/resources/datastores/documents.ts">DocumentMetadata</a></code>
- <code><a href="./src/resources/datastores/documents.ts">IngestionResponse</a></code>
- <code><a href="./src/resources/datastores/documents.ts">ListDocumentsResponse</a></code>
- <code><a href="./src/resources/datastores/documents.ts">DocumentDeleteResponse</a></code>

Methods:

- <code title="get /datastores/{datastore_id}/documents">client.datastores.documents.<a href="./src/resources/datastores/documents.ts">list</a>(datastoreId, { ...params }) -> DocumentMetadataDocumentsPage</code>
- <code title="delete /datastores/{datastore_id}/documents/{document_id}">client.datastores.documents.<a href="./src/resources/datastores/documents.ts">delete</a>(datastoreId, documentId) -> unknown</code>
- <code title="post /datastores/{datastore_id}/documents">client.datastores.documents.<a href="./src/resources/datastores/documents.ts">ingest</a>(datastoreId, { ...params }) -> IngestionResponse</code>
- <code title="get /datastores/{datastore_id}/documents/{document_id}/metadata">client.datastores.documents.<a href="./src/resources/datastores/documents.ts">metadata</a>(datastoreId, documentId) -> DocumentMetadata</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">Agent</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentMetadata</a></code>
- <code><a href="./src/resources/agents/agents.ts">CreateAgentOutput</a></code>
- <code><a href="./src/resources/agents/agents.ts">ListAgentsResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentUpdateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentDeleteResponse</a></code>

Methods:

- <code title="post /agents">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> CreateAgentOutput</code>
- <code title="put /agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentId, { ...params }) -> unknown</code>
- <code title="get /agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentsPage</code>
- <code title="delete /agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentId) -> unknown</code>
- <code title="get /agents/{agent_id}/metadata">client.agents.<a href="./src/resources/agents/agents.ts">metadata</a>(agentId) -> AgentMetadata</code>

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

- <code><a href="./src/resources/agents/evaluate/evaluate.ts">CreateEvaluationResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/evaluate">client.agents.evaluate.<a href="./src/resources/agents/evaluate/evaluate.ts">create</a>(agentId, { ...params }) -> CreateEvaluationResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/agents/evaluate/jobs.ts">EvaluationJobMetadata</a></code>
- <code><a href="./src/resources/agents/evaluate/jobs.ts">ListEvaluationJobsResponse</a></code>
- <code><a href="./src/resources/agents/evaluate/jobs.ts">JobCancelResponse</a></code>

Methods:

- <code title="get /agents/{agent_id}/evaluate/jobs">client.agents.evaluate.jobs.<a href="./src/resources/agents/evaluate/jobs.ts">list</a>(agentId) -> ListEvaluationJobsResponse</code>
- <code title="post /agents/{agent_id}/evaluate/jobs/{job_id}/cancel">client.agents.evaluate.jobs.<a href="./src/resources/agents/evaluate/jobs.ts">cancel</a>(agentId, jobId) -> unknown</code>
- <code title="get /agents/{agent_id}/evaluate/jobs/{job_id}/metadata">client.agents.evaluate.jobs.<a href="./src/resources/agents/evaluate/jobs.ts">metadata</a>(agentId, jobId) -> EvaluationJobMetadata</code>

## Datasets

Types:

- <code><a href="./src/resources/agents/datasets/datasets.ts">CreateDatasetResponse</a></code>
- <code><a href="./src/resources/agents/datasets/datasets.ts">DatasetMetadata</a></code>
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
- <code title="get /agents/{agent_id}/datasets/tune/{dataset_name}/metadata">client.agents.datasets.tune.<a href="./src/resources/agents/datasets/tune.ts">metadata</a>(agentId, datasetName, { ...params }) -> DatasetMetadata</code>

### Evaluate

Types:

- <code><a href="./src/resources/agents/datasets/evaluate.ts">EvaluateDeleteResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/datasets/evaluate">client.agents.datasets.evaluate.<a href="./src/resources/agents/datasets/evaluate.ts">create</a>(agentId, { ...params }) -> CreateDatasetResponse</code>
- <code title="get /agents/{agent_id}/datasets/evaluate/{dataset_name}">client.agents.datasets.evaluate.<a href="./src/resources/agents/datasets/evaluate.ts">retrieve</a>(agentId, datasetName, { ...params }) -> Response</code>
- <code title="put /agents/{agent_id}/datasets/evaluate/{dataset_name}">client.agents.datasets.evaluate.<a href="./src/resources/agents/datasets/evaluate.ts">update</a>(agentId, datasetName, { ...params }) -> CreateDatasetResponse</code>
- <code title="get /agents/{agent_id}/datasets/evaluate">client.agents.datasets.evaluate.<a href="./src/resources/agents/datasets/evaluate.ts">list</a>(agentId, { ...params }) -> ListDatasetsResponse</code>
- <code title="delete /agents/{agent_id}/datasets/evaluate/{dataset_name}">client.agents.datasets.evaluate.<a href="./src/resources/agents/datasets/evaluate.ts">delete</a>(agentId, datasetName) -> unknown</code>
- <code title="get /agents/{agent_id}/datasets/evaluate/{dataset_name}/metadata">client.agents.datasets.evaluate.<a href="./src/resources/agents/datasets/evaluate.ts">metadata</a>(agentId, datasetName, { ...params }) -> DatasetMetadata</code>

## Tune

Types:

- <code><a href="./src/resources/agents/tune/tune.ts">CreateTuneResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/tune">client.agents.tune.<a href="./src/resources/agents/tune/tune.ts">create</a>(agentId, { ...params }) -> CreateTuneResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/agents/tune/jobs.ts">ListTuneJobsResponse</a></code>
- <code><a href="./src/resources/agents/tune/jobs.ts">TuneJobMetadata</a></code>
- <code><a href="./src/resources/agents/tune/jobs.ts">JobDeleteResponse</a></code>

Methods:

- <code title="get /agents/{agent_id}/tune/jobs">client.agents.tune.jobs.<a href="./src/resources/agents/tune/jobs.ts">list</a>(agentId) -> ListTuneJobsResponse</code>
- <code title="delete /agents/{agent_id}/tune/jobs/{job_id}">client.agents.tune.jobs.<a href="./src/resources/agents/tune/jobs.ts">delete</a>(agentId, jobId) -> unknown</code>
- <code title="get /agents/{agent_id}/tune/jobs/{job_id}/metadata">client.agents.tune.jobs.<a href="./src/resources/agents/tune/jobs.ts">metadata</a>(agentId, jobId) -> TuneJobMetadata</code>

### Models

Types:

- <code><a href="./src/resources/agents/tune/models.ts">ListTuneModelsResponse</a></code>

Methods:

- <code title="get /agents/{agent_id}/tune/models">client.agents.tune.models.<a href="./src/resources/agents/tune/models.ts">list</a>(agentId) -> ListTuneModelsResponse</code>

# LMUnit

Types:

- <code><a href="./src/resources/lmunit.ts">LMUnitCreateResponse</a></code>

Methods:

- <code title="post /lmunit">client.lmUnit.<a href="./src/resources/lmunit.ts">create</a>({ ...params }) -> LMUnitCreateResponse</code>
