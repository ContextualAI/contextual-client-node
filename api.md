# Datastores

Types:

- <code><a href="./src/resources/datastores/datastores.ts">CreateDatastoreOutput</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">Datastore</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">DatastoreListResponse</a></code>
- <code><a href="./src/resources/datastores/datastores.ts">DatastoreDeleteResponse</a></code>

Methods:

- <code title="post /datastores">client.datastores.<a href="./src/resources/datastores/datastores.ts">create</a>({ ...params }) -> CreateDatastoreOutput</code>
- <code title="get /datastores">client.datastores.<a href="./src/resources/datastores/datastores.ts">list</a>({ ...params }) -> DatastoreListResponsesDatastoresListPagination</code>
- <code title="delete /datastores/{datastore_id}">client.datastores.<a href="./src/resources/datastores/datastores.ts">delete</a>(datastoreId) -> unknown</code>

## Metadata

Types:

- <code><a href="./src/resources/datastores/metadata.ts">GetDatastoreResponse</a></code>

Methods:

- <code title="get /datastores/{datastore_id}/metadata">client.datastores.metadata.<a href="./src/resources/datastores/metadata.ts">retrieve</a>(datastoreId) -> GetDatastoreResponse</code>

## Documents

Types:

- <code><a href="./src/resources/datastores/documents/documents.ts">GetDocumentsResponse</a></code>
- <code><a href="./src/resources/datastores/documents/documents.ts">IngestionResponse</a></code>
- <code><a href="./src/resources/datastores/documents/documents.ts">DocumentDeleteResponse</a></code>

Methods:

- <code title="post /datastores/{datastore_id}/documents">client.datastores.documents.<a href="./src/resources/datastores/documents/documents.ts">create</a>(datastoreId, { ...params }) -> IngestionResponse</code>
- <code title="get /datastores/{datastore_id}/documents">client.datastores.documents.<a href="./src/resources/datastores/documents/documents.ts">list</a>(datastoreId, { ...params }) -> GetDocumentsResponse</code>
- <code title="delete /datastores/{datastore_id}/documents/{document_id}">client.datastores.documents.<a href="./src/resources/datastores/documents/documents.ts">delete</a>(datastoreId, documentId) -> unknown</code>

### Metadata

Types:

- <code><a href="./src/resources/datastores/documents/metadata.ts">DocumentDescription</a></code>

Methods:

- <code title="get /datastores/{datastore_id}/documents/{document_id}/metadata">client.datastores.documents.metadata.<a href="./src/resources/datastores/documents/metadata.ts">retrieve</a>(datastoreId, documentId) -> DocumentDescription</code>

# Applications

Types:

- <code><a href="./src/resources/applications/applications.ts">ApplicationList</a></code>
- <code><a href="./src/resources/applications/applications.ts">CreateApplicationOutput</a></code>
- <code><a href="./src/resources/applications/applications.ts">ApplicationUpdateResponse</a></code>
- <code><a href="./src/resources/applications/applications.ts">ApplicationDeleteResponse</a></code>

Methods:

- <code title="post /applications">client.applications.<a href="./src/resources/applications/applications.ts">create</a>({ ...params }) -> CreateApplicationOutput</code>
- <code title="put /applications/{application_id}">client.applications.<a href="./src/resources/applications/applications.ts">update</a>(applicationId, { ...params }) -> unknown</code>
- <code title="get /applications">client.applications.<a href="./src/resources/applications/applications.ts">list</a>({ ...params }) -> ApplicationList</code>
- <code title="delete /applications/{application_id}">client.applications.<a href="./src/resources/applications/applications.ts">delete</a>(applicationId) -> unknown</code>

## Metadata

Types:

- <code><a href="./src/resources/applications/metadata.ts">GetApplicationResponse</a></code>

Methods:

- <code title="get /applications/{application_id}/metadata">client.applications.metadata.<a href="./src/resources/applications/metadata.ts">retrieve</a>(applicationId) -> GetApplicationResponse</code>

## Query

Types:

- <code><a href="./src/resources/applications/query/query.ts">QueryResponse</a></code>
- <code><a href="./src/resources/applications/query/query.ts">QueryFeedbackResponse</a></code>
- <code><a href="./src/resources/applications/query/query.ts">QueryFormFillingResponse</a></code>

Methods:

- <code title="post /applications/{application_id}/feedback">client.applications.query.<a href="./src/resources/applications/query/query.ts">feedback</a>(applicationId, { ...params }) -> unknown</code>
- <code title="post /applications/{application_id}/form_filling">client.applications.query.<a href="./src/resources/applications/query/query.ts">formFilling</a>(applicationId, { ...params }) -> QueryFormFillingResponse</code>
- <code title="post /applications/{application_id}/query">client.applications.query.<a href="./src/resources/applications/query/query.ts">start</a>(applicationId, { ...params }) -> QueryResponse</code>

### Metrics

Types:

- <code><a href="./src/resources/applications/query/metrics.ts">MetricRetrieveResponse</a></code>

Methods:

- <code title="get /applications/{application_id}/metrics">client.applications.query.metrics.<a href="./src/resources/applications/query/metrics.ts">retrieve</a>(applicationId, { ...params }) -> MetricRetrieveResponse</code>

## Evaluate

Types:

- <code><a href="./src/resources/applications/evaluate/evaluate.ts">LaunchEvaluationResponse</a></code>

Methods:

- <code title="post /applications/{application_id}/evaluate">client.applications.evaluate.<a href="./src/resources/applications/evaluate/evaluate.ts">launch</a>(applicationId, { ...params }) -> LaunchEvaluationResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/applications/evaluate/jobs/jobs.ts">EvaluationRoundResponse</a></code>
- <code><a href="./src/resources/applications/evaluate/jobs/jobs.ts">ListEvaluationResponse</a></code>
- <code><a href="./src/resources/applications/evaluate/jobs/jobs.ts">JobCancelResponse</a></code>

Methods:

- <code title="get /applications/{application_id}/evaluate/jobs">client.applications.evaluate.jobs.<a href="./src/resources/applications/evaluate/jobs/jobs.ts">list</a>(applicationId) -> ListEvaluationResponse</code>
- <code title="post /applications/{application_id}/evaluate/jobs/{job_id}/cancel">client.applications.evaluate.jobs.<a href="./src/resources/applications/evaluate/jobs/jobs.ts">cancel</a>(applicationId, jobId) -> unknown</code>

#### Metadata

Methods:

- <code title="get /applications/{application_id}/evaluate/jobs/{job_id}/metadata">client.applications.evaluate.jobs.metadata.<a href="./src/resources/applications/evaluate/jobs/metadata.ts">retrieve</a>(applicationId, jobId) -> EvaluationRoundResponse</code>

## Datasets

Types:

- <code><a href="./src/resources/applications/datasets/datasets.ts">CreateDatasetResponse</a></code>
- <code><a href="./src/resources/applications/datasets/datasets.ts">GetDatasetResponse</a></code>
- <code><a href="./src/resources/applications/datasets/datasets.ts">ListDatasetResponse</a></code>
- <code><a href="./src/resources/applications/datasets/datasets.ts">DatasetRetrieveResponse</a></code>
- <code><a href="./src/resources/applications/datasets/datasets.ts">DatasetDeleteResponse</a></code>

Methods:

- <code title="post /applications/{application_id}/datasets">client.applications.datasets.<a href="./src/resources/applications/datasets/datasets.ts">create</a>(applicationId, { ...params }) -> CreateDatasetResponse</code>
- <code title="get /applications/{application_id}/datasets/{dataset_name}">client.applications.datasets.<a href="./src/resources/applications/datasets/datasets.ts">retrieve</a>(applicationId, datasetName, { ...params }) -> unknown</code>
- <code title="put /applications/{application_id}/datasets/{dataset_name}">client.applications.datasets.<a href="./src/resources/applications/datasets/datasets.ts">update</a>(applicationId, datasetName, { ...params }) -> CreateDatasetResponse</code>
- <code title="get /applications/{application_id}/datasets">client.applications.datasets.<a href="./src/resources/applications/datasets/datasets.ts">list</a>(applicationId, { ...params }) -> ListDatasetResponse</code>
- <code title="delete /applications/{application_id}/datasets/{dataset_name}">client.applications.datasets.<a href="./src/resources/applications/datasets/datasets.ts">delete</a>(applicationId, datasetName) -> unknown</code>

### Metadata

Methods:

- <code title="get /applications/{application_id}/datasets/{dataset_name}/metadata">client.applications.datasets.metadata.<a href="./src/resources/applications/datasets/metadata.ts">retrieve</a>(applicationId, datasetName, { ...params }) -> GetDatasetResponse</code>

## Tune

Types:

- <code><a href="./src/resources/applications/tune/tune.ts">TuneResponse</a></code>

Methods:

- <code title="post /applications/{application_id}/tune">client.applications.tune.<a href="./src/resources/applications/tune/tune.ts">create</a>(applicationId, { ...params }) -> TuneResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/applications/tune/jobs/jobs.ts">GetTuneJobResponse</a></code>
- <code><a href="./src/resources/applications/tune/jobs/jobs.ts">ListGetTuneJobResponse</a></code>
- <code><a href="./src/resources/applications/tune/jobs/jobs.ts">JobDeleteResponse</a></code>

Methods:

- <code title="get /applications/{application_id}/tune/jobs">client.applications.tune.jobs.<a href="./src/resources/applications/tune/jobs/jobs.ts">list</a>(applicationId) -> ListGetTuneJobResponse</code>
- <code title="delete /applications/{application_id}/tune/jobs/{job_id}">client.applications.tune.jobs.<a href="./src/resources/applications/tune/jobs/jobs.ts">delete</a>(applicationId, jobId) -> unknown</code>

#### Metadata

Methods:

- <code title="get /applications/{application_id}/tune/jobs/{job_id}/metadata">client.applications.tune.jobs.metadata.<a href="./src/resources/applications/tune/jobs/metadata.ts">retrieve</a>(applicationId, jobId) -> GetTuneJobResponse</code>

### Models

Types:

- <code><a href="./src/resources/applications/tune/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /applications/{application_id}/tune/models">client.applications.tune.models.<a href="./src/resources/applications/tune/models.ts">list</a>(applicationId) -> ModelListResponse</code>

# Standalone

Types:

- <code><a href="./src/resources/standalone.ts">StandaloneLmunitResponse</a></code>

Methods:

- <code title="post /lmunit">client.standalone.<a href="./src/resources/standalone.ts">lmunit</a>({ ...params }) -> StandaloneLmunitResponse</code>
