const getFlowPredicablityDrill = (props) =>{
const data = {
    "ACPK Sprint 10.1_2022":{
        "prodFix": {
            "unplannedIssueId": [
                "ACPK-390"
            ],
            "plannedIssueId": [
                "ACPK-393",
                "ACPK-394"
            ],
            "sprintName": "ACPK Sprint 10.1_2022",
            "planned": 4,
            "plannedCompletedIssueId": [
                "ACPK-391",
                "ACPK-392"
            ],
            "unplanned": 1,
            "plannedCompleted": 2
        }
    },
    "ACPK Sprint 9.1_2022":{
        "Task": {
            "unplannedCompletedIssueId": [
                "ACPK-336"
            ],
            "unplannedIssueId": [
                "ACPK-334",
                "ACPK-335"
            ],
            "unplannedCompleted": 1,
            "plannedIssueId": [
                "ACPK-306",
                "ACPK-307",
                "ACPK-308"
            ],
            "sprintName": "ACPK Sprint 9.1_2022",
            "planned": 3,
            "unplanned": 3
        },
        "Debt": {
            "unplannedCompletedIssueId": [
                "ACPK-349",
                "ACPK-350",
                "ACPK-351"
            ],
            "unplannedIssueId": [],
            "unplannedCompleted": 3,
            "plannedIssueId": [
                "ACPK-319",
                "ACPK-320"
            ],
            "sprintName": "ACPK Sprint 9.1_2022",
            "planned": 2,
            "unplanned": 3
        },
        "prodFix": {
            "unplannedCompletedIssueId": [
                "ACPK-354"
            ],
            "unplannedIssueId": [],
            "unplannedCompleted": 1,
            "plannedIssueId": [
                "ACPK-324",
                "ACPK-325"
            ],
            "sprintName": "ACPK Sprint 9.1_2022",
            "planned": 6,
            "plannedCompletedIssueId": [
                "ACPK-355",
                "ACPK-356",
                "ACPK-357",
                "ACPK-358"
            ],
            "unplanned": 1,
            "plannedCompleted": 4
        },
        "Risk": {
            "unplannedCompletedIssueId": [
                "ACPK-353",
                "ACPK-352"
            ],
            "unplannedIssueId": [],
            "unplannedCompleted": 2,
            "plannedIssueId": [
                "ACPK-321",
                "ACPK-322"
            ],
            "sprintName": "ACPK Sprint 9.1_2022",
            "planned": 2,
            "unplanned": 2
        },
        "Change Request": {
            "unplannedCompletedIssueId": [
                "ACPK-343"
            ],
            "unplannedIssueId": [],
            "unplannedCompleted": 1,
            "plannedIssueId": [
                "ACPK-311",
                "ACPK-312",
                "ACPK-313"
            ],
            "sprintName": "ACPK Sprint 9.1_2022",
            "planned": 4,
            "plannedCompletedIssueId": [
                "ACPK-342"
            ],
            "unplanned": 1,
            "plannedCompleted": 1
        },
        "Story": {
            "unplannedCompletedIssueId": [
                "ACPK-330"
            ],
            "unplannedIssueId": [],
            "unplannedCompleted": 1,
            "plannedIssueId": [],
            "sprintName": "ACPK Sprint 9.1_2022",
            "planned": 2,
            "plannedCompletedIssueId": [
                "ACPK-332",
                "ACPK-331"
            ],
            "unplanned": 1,
            "plannedCompleted": 2
        }
    },
    "ACPK Sprint 10.2_2022":{
        "prodFix": {
            "unplannedCompletedIssueId": [
                "ACPK-413"
            ],
            "unplannedIssueId": [],
            "unplannedCompleted": 1,
            "plannedIssueId": [
                "ACPK-414"
            ],
            "sprintName": "ACPK Sprint 10.2_2022",
            "planned": 1,
            "unplanned": 1
        },
        "Bug": {
            "unplannedCompletedIssueId": [
                "ACPK-402"
            ],
            "unplannedIssueId": [
                "ACPK-416",
                "ACPK-417",
                "ACPK-418",
                "ACPK-421",
                "ACPK-423",
                "ACPK-424",
                "ACPK-425"
            ],
            "unplannedCompleted": 1,
            "plannedIssueId": [
                "ACPK-420",
                "ACPK-422"
            ],
            "sprintName": "ACPK Sprint 10.2_2022",
            "planned": 3,
            "plannedCompletedIssueId": [
                "ACPK-415"
            ],
            "unplanned": 8,
            "plannedCompleted": 1
        },
        "Enablers": {
            "plannedIssueId": [
                "ACPK-409"
            ],
            "sprintName": "ACPK Sprint 10.2_2022",
            "planned": 2,
            "plannedCompletedIssueId": [
                "ACPK-408"
            ],
            "plannedCompleted": 1
        },
        "Risk": {
            "unplannedCompletedIssueId": [
                "ACPK-412"
            ],
            "unplannedIssueId": [],
            "unplannedCompleted": 1,
            "plannedIssueId": [],
            "sprintName": "ACPK Sprint 10.2_2022",
            "planned": 1,
            "plannedCompletedIssueId": [
                "ACPK-411"
            ],
            "unplanned": 1,
            "plannedCompleted": 1
        },
        "Story": {
            "unplannedIssueId": [
                "ACPK-401"
            ],
            "plannedIssueId": [],
            "sprintName": "ACPK Sprint 10.2_2022",
            "planned": 1,
            "plannedCompletedIssueId": [
                "ACPK-400"
            ],
            "unplanned": 1,
            "plannedCompleted": 1
        }
    }
}
return data[props.selectedSprintData]
}
module.exports = getFlowPredicablityDrill