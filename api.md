# Datastores

Types:

- <code><a href="./src/resources/datastores/datastores.ts">CreateDatastoreResponse</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">Datastore</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">DatastoreMetadata</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">ListDatastoresResponse</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">DatastoreDeleteResponse</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">DatastoreResetResponse</a></code>

Methods:

- <code title="post /datastores">client.datastores.<a href="./src/resources/datastores/datastores.ts">create</a>({ ...params }) -> CreateDatastoreResponse</code>
- <code title="get /datastores">client.datastores.<a href="./src/resources/datastores/datastores.ts">list</a>({ ...params }) -> DatastoresDatastoresPage</code>
- <code title="delete /datastores/{datastore_id}">client.datastores.<a href="./src/resources/datastores/datastores.ts">delete</a>(datastoreId) -> unknown</code>
- <code title="get /datastores/{datastore_id}/metadata">client.datastores.<a href="./src/resources/datastores/datastores.ts">metadata</a>(datastoreId) -> DatastoreMetadata</code>
- <code title="put /datastores/{datastore_id}/reset">client.datastores.<a href="./src/resources/datastores/datastores.ts">reset</a>(datastoreId) -> unknown</code>

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
- <code title="post /datastores/{datastore_id}/documents/{document_id}/metadata">client.datastores.documents.<a href="./src/resources/datastores/documents.ts">setMetadata</a>(datastoreId, documentId, { ...params }) -> DocumentMetadata</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">Agent</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentMetadata</a></code>
- <code><a href="./src/resources/agents/agents.ts">CreateAgentOutput</a></code>
- <code><a href="./src/resources/agents/agents.ts">GenerateResponseConfig</a></code>
- <code><a href="./src/resources/agents/agents.ts">GlobalConfig</a></code>
- <code><a href="./src/resources/agents/agents.ts">ListAgentsResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">RetrievalConfig</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentUpdateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentDeleteResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentMetadataResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentResetResponse</a></code>

Methods:

- <code title="post /agents">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> CreateAgentOutput</code>
- <code title="put /agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentId, { ...params }) -> unknown</code>
- <code title="get /agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentsPage</code>
- <code title="delete /agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentId) -> unknown</code>
- <code title="get /agents/{agent_id}/metadata">client.agents.<a href="./src/resources/agents/agents.ts">metadata</a>(agentId) -> AgentMetadataResponse</code>
- <code title="put /agents/{agent_id}/reset">client.agents.<a href="./src/resources/agents/agents.ts">reset</a>(agentId) -> unknown</code>

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

### Jobs

## Datasets

### Tune

### Evaluate

## Tune

### Jobs

### Models

# Users

Types:

- <code><a href="./src/resources/users.ts">InviteUsersResponse</a></code>
- <code><a href="./src/resources/users.ts">ListUsersResponse</a></code>
- <code><a href="./src/resources/users.ts">NewUser</a></code>
- <code><a href="./src/resources/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserDeactivateResponse</a></code>

Methods:

- <code title="put /users">client.users.<a href="./src/resources/users.ts">update</a>({ ...params }) -> unknown</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> ListUsersResponseUsersUsersPage</code>
- <code title="delete /users">client.users.<a href="./src/resources/users.ts">deactivate</a>({ ...params }) -> unknown</code>
- <code title="post /users">client.users.<a href="./src/resources/users.ts">invite</a>({ ...params }) -> InviteUsersResponse</code>

# LMUnit

Types:

- <code><a href="./src/resources/lmunit.ts">LMUnitCreateResponse</a></code>

Methods:

- <code title="post /lmunit">client.lmUnit.<a href="./src/resources/lmunit.ts">create</a>({ ...params }) -> LMUnitCreateResponse</code>

# Rerank

Types:

- <code><a href="./src/resources/rerank.ts">RerankCreateResponse</a></code>

Methods:

- <code title="post /rerank">client.rerank.<a href="./src/resources/rerank.ts">create</a>({ ...params }) -> RerankCreateResponse</code>

# Generate

Types:

- <code><a href="./src/resources/generate.ts">GenerateCreateResponse</a></code>

Methods:

- <code title="post /generate">client.generate.<a href="./src/resources/generate.ts">create</a>({ ...params }) -> GenerateCreateResponse</code>

# Parse

Types:

- <code><a href="./src/resources/parse.ts">ParseCreateResponse</a></code>
- <code><a href="./src/resources/parse.ts">ParseJobResultsResponse</a></code>
- <code><a href="./src/resources/parse.ts">ParseJobStatusResponse</a></code>
- <code><a href="./src/resources/parse.ts">ParseJobsResponse</a></code>

Methods:

- <code title="post /parse">client.parse.<a href="./src/resources/parse.ts">create</a>({ ...params }) -> ParseCreateResponse</code>
- <code title="get /parse/jobs/{job_id}/results">client.parse.<a href="./src/resources/parse.ts">jobResults</a>(jobId, { ...params }) -> ParseJobResultsResponse</code>
- <code title="get /parse/jobs/{job_id}/status">client.parse.<a href="./src/resources/parse.ts">jobStatus</a>(jobId) -> ParseJobStatusResponse</code>
- <code title="get /parse/jobs">client.parse.<a href="./src/resources/parse.ts">jobs</a>({ ...params }) -> ParseJobsResponse</code>
