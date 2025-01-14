# ContextualAI

Types:

- <code><a href="./src/resources/top-level.ts">LMUnitResponse</a></code>

Methods:

- <code title="post /lmunit">client.<a href="./src/index.ts">lmUnit</a>({ ...params }) -> LMUnitResponse</code>

# Datastores

Types:

- <code><a href="./src/resources/datastores/datastores.ts">CreateDatastoreResponse</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">Datastore</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">DatastoresResponse</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">DatastoreDeleteResponse</a></code>

Methods:

- <code title="post /datastores">client.datastores.<a href="./src/resources/datastores/datastores.ts">create</a>({ ...params }) -> CreateDatastoreResponse</code>
- <code title="get /datastores">client.datastores.<a href="./src/resources/datastores/datastores.ts">list</a>({ ...params }) -> DatastoresDatastoresPage</code>
- <code title="delete /datastores/{datastore_id}">client.datastores.<a href="./src/resources/datastores/datastores.ts">delete</a>(datastoreId) -> unknown</code>

## Metadata

Types:

- <code><a href="./src/resources/datastores/metadata.ts">GetDatastoreResponse</a></code>

Methods:

- <code title="get /datastores/{datastore_id}/metadata">client.datastores.metadata.<a href="./src/resources/datastores/metadata.ts">retrieve</a>(datastoreId) -> GetDatastoreResponse</code>

## Documents

Types:

- <code><a href="./src/resources/datastores/documents.ts">DocumentDescription</a></code>
- <code><a href="./src/resources/datastores/documents.ts">GetDocumentsResponse</a></code>
- <code><a href="./src/resources/datastores/documents.ts">IngestionResponse</a></code>
- <code><a href="./src/resources/datastores/documents.ts">DocumentDeleteResponse</a></code>

Methods:

- <code title="post /datastores/{datastore_id}/documents">client.datastores.documents.<a href="./src/resources/datastores/documents.ts">create</a>(datastoreId, { ...params }) -> IngestionResponse</code>
- <code title="get /datastores/{datastore_id}/documents/{document_id}/metadata">client.datastores.documents.<a href="./src/resources/datastores/documents.ts">retrieve</a>(datastoreId, documentId) -> DocumentDescription</code>
- <code title="get /datastores/{datastore_id}/documents">client.datastores.documents.<a href="./src/resources/datastores/documents.ts">list</a>(datastoreId, { ...params }) -> DocumentDescriptionsDocumentsPage</code>
- <code title="delete /datastores/{datastore_id}/documents/{document_id}">client.datastores.documents.<a href="./src/resources/datastores/documents.ts">delete</a>(datastoreId, documentId) -> unknown</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">Agent</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentsResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">CreateAgentOutput</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentUpdateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentDeleteResponse</a></code>

Methods:

- <code title="post /agents">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> CreateAgentOutput</code>
- <code title="put /agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentId, { ...params }) -> unknown</code>
- <code title="get /agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentsPage</code>
- <code title="delete /agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentId) -> unknown</code>

## Metadata

Types:

- <code><a href="./src/resources/agents/metadata.ts">GetAgentResponse</a></code>

Methods:

- <code title="get /agents/{agent_id}/metadata">client.agents.metadata.<a href="./src/resources/agents/metadata.ts">retrieve</a>(agentId) -> GetAgentResponse</code>

## Query

Types:

- <code><a href="./src/resources/agents/query.ts">QueryResponse</a></code>
- <code><a href="./src/resources/agents/query.ts">QueryFeedbackResponse</a></code>
- <code><a href="./src/resources/agents/query.ts">QueryMetricsResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/feedback">client.agents.query.<a href="./src/resources/agents/query.ts">feedback</a>(agentId, { ...params }) -> unknown</code>
- <code title="get /agents/{agent_id}/metrics">client.agents.query.<a href="./src/resources/agents/query.ts">metrics</a>(agentId, { ...params }) -> QueryMetricsResponse</code>
- <code title="post /agents/{agent_id}/query">client.agents.query.<a href="./src/resources/agents/query.ts">start</a>(agentId, { ...params }) -> QueryResponse</code>

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
- <code><a href="./src/resources/agents/datasets/datasets.ts">DatasetsResponse</a></code>
- <code><a href="./src/resources/agents/datasets/datasets.ts">GetDatasetResponse</a></code>
- <code><a href="./src/resources/agents/datasets/datasets.ts">DatasetRetrieveResponse</a></code>
- <code><a href="./src/resources/agents/datasets/datasets.ts">DatasetDeleteResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/datasets">client.agents.datasets.<a href="./src/resources/agents/datasets/datasets.ts">create</a>(agentId, { ...params }) -> CreateDatasetResponse</code>
- <code title="get /agents/{agent_id}/datasets/{dataset_name}">client.agents.datasets.<a href="./src/resources/agents/datasets/datasets.ts">retrieve</a>(agentId, datasetName, { ...params }) -> unknown</code>
- <code title="put /agents/{agent_id}/datasets/{dataset_name}">client.agents.datasets.<a href="./src/resources/agents/datasets/datasets.ts">update</a>(agentId, datasetName, { ...params }) -> CreateDatasetResponse</code>
- <code title="get /agents/{agent_id}/datasets">client.agents.datasets.<a href="./src/resources/agents/datasets/datasets.ts">list</a>(agentId, { ...params }) -> DatasetsResponse</code>
- <code title="delete /agents/{agent_id}/datasets/{dataset_name}">client.agents.datasets.<a href="./src/resources/agents/datasets/datasets.ts">delete</a>(agentId, datasetName) -> unknown</code>

### Metadata

Methods:

- <code title="get /agents/{agent_id}/datasets/{dataset_name}/metadata">client.agents.datasets.metadata.<a href="./src/resources/agents/datasets/metadata.ts">retrieve</a>(agentId, datasetName, { ...params }) -> GetDatasetResponse</code>

## Tune

Types:

- <code><a href="./src/resources/agents/tune/tune.ts">TuneResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/tune">client.agents.tune.<a href="./src/resources/agents/tune/tune.ts">create</a>(agentId, { ...params }) -> TuneResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/agents/tune/jobs/jobs.ts">GetTuneJobResponse</a></code>
- <code><a href="./src/resources/agents/tune/jobs/jobs.ts">ListGetTuneJobResponse</a></code>
- <code><a href="./src/resources/agents/tune/jobs/jobs.ts">JobDeleteResponse</a></code>

Methods:

- <code title="get /agents/{agent_id}/tune/jobs">client.agents.tune.jobs.<a href="./src/resources/agents/tune/jobs/jobs.ts">list</a>(agentId) -> ListGetTuneJobResponse</code>
- <code title="delete /agents/{agent_id}/tune/jobs/{job_id}">client.agents.tune.jobs.<a href="./src/resources/agents/tune/jobs/jobs.ts">delete</a>(agentId, jobId) -> unknown</code>

#### Metadata

Methods:

- <code title="get /agents/{agent_id}/tune/jobs/{job_id}/metadata">client.agents.tune.jobs.metadata.<a href="./src/resources/agents/tune/jobs/metadata.ts">retrieve</a>(agentId, jobId) -> GetTuneJobResponse</code>

### Models

Types:

- <code><a href="./src/resources/agents/tune/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /agents/{agent_id}/tune/models">client.agents.tune.models.<a href="./src/resources/agents/tune/models.ts">list</a>(agentId) -> ModelListResponse</code>
