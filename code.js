const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors());
const port = 7111;
const getAppList = require('./mockData/code/getAppList')
const getProjList = require('./mockData/code/getProjectList')
const getSprintList = require('./mockData/code/getSprintList')
const getFlowDistribution = require('./mockData/code/getFlowDistribution');
const getFlowVelocity = require('./mockData/code/getFlowVelocity');
const getFlowPredictability = require('./mockData/code/getFlowPredictability');
const getFlowEfficiency = require('./mockData/code/getFlowEfficiency');
const getActiveSprints = require('./mockData/code/getActiveSprints');
const getFlowLoad = require('./mockData/code/getFlowLoad');
const getFlowEfficencyDrill = require('./mockData/code/getFlowEfficencyDrill')
const getFlowPredicabilityDrill = require("./mockData/code/getFlowPredictablityDrill")
const getFlowPredicabilityDrillSummary = require('./mockData/code/getFlowPredicabilityDrillSummary')
const getIssueMetrics = require('./mockData/code/peopleMetrics/getIssueMetrics');
const getCollabaration = require('./mockData/code/peopleMetrics/getCollabaration');
const getCommentsDdOne = require('./mockData/code/peopleMetrics/getCommentsDdOne');
const getTopAssignee = require('./mockData/code/peopleMetrics/getTopAssignee');
const getIssueMetricsDdOne = require('./mockData/code/peopleMetrics/getIssueMetricsDdOne');

app.use(bodyParser.json());

const BASE_URL = "/api/v1"

app.get(`${BASE_URL}/cmdb/kevin/Operation`, (req, res) => {
  res.send(getAppList);
})

app.post(`${BASE_URL}/home/projectLists`, (req, res) => {
  if(req.body.appCodes.length) {
    res.send(getProjList);
  }
  res.send([]);
})

app.post(`${BASE_URL}/home/sprint/sprintNames`, (req, res) => {
  if(req.body.projects.length) {
    res.send(getSprintList);
  }
  res.send([]);
})

app.post(`${BASE_URL}/safeFlowMetrics/flow/flowDistribution/main`, (req, res) => {
  res.send(getFlowDistribution);
})

app.post(`${BASE_URL}/safeFlowMetrics/flow/flowVelocity/main`, (req, res) => {
  res.send(getFlowVelocity);
})

app.post(`${BASE_URL}/safeFlowMetrics/flow/flowMetrics/ddflowpredicatablitymain`, (req, res) => {
  res.send(getFlowPredictability);
})
app.post(`${BASE_URL}/safeFlowMetrics/flow/flowMetrics/ddflowsummary`, async (req, res) => {
  const response = await getFlowPredicabilityDrillSummary(req.body)
  res.send(response);
})
app.post(`${BASE_URL}/safeFlowMetrics/flow/flowMetrics/ddflowpredicatablitymonth`, async (req, res) => {
  const response = await getFlowPredicabilityDrill(req.body)
  res.send(response);
})

app.post(`${BASE_URL}/safeFlowMetrics/flow/flowEfficiency/main`, (req, res) => {
  res.send(getFlowEfficiency);
})
app.post(`${BASE_URL}/safeFlowMetrics/flow/flowEfficiency/main/drilldown`, async (req, res) => {
  const response = await getFlowEfficencyDrill(req.body)
  res.send(response);
})

app.post(`${BASE_URL}/safeFlowMetrics/flow/issueMetrics/activeSprints`, (req, res) => {
  res.send(getActiveSprints);
})

app.post(`${BASE_URL}/safeFlowMetrics/flow/flowMetrics/flowLoadMain`, (req, res) => {
  res.send(getFlowLoad);
})

//People Metrics

app.post(`${BASE_URL}/home/issueMetrics`, (req, res) => {
  res.send(getIssueMetrics);
})

app.post(`${BASE_URL}/home/level/collaboration`, (req, res) => {
  res.send(getCollabaration);
})

app.post(`${BASE_URL}/safeFlowMetrics/flow/peopleMetric/topAssignee`, (req, res) => {
  res.send(getTopAssignee);
})

app.post(`${BASE_URL}/safeFlowMetrics/flow/peopleMetric/comments/ddone`, (req, res) => {
  res.send(getCommentsDdOne);
})

app.post(`${BASE_URL}/safeFlowMetrics/flow/issueMetrics/drillDownOne`, (req, res) => {
  res.send(getIssueMetricsDdOne);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})