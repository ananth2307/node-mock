const getEfficiencyDrill = (props) => {
    console.log(props)
    const metricTypesMapping = {
        features: ["Task", "Subtask", "Epic", "Story"],
        enablers: ["Change Request", "Enablers"],
        risk: ["Risk"],
        defects: ["Bug"],
        debt: ["Debt"],
        prodFix: ["prodFix"],
      };
const data = {
    "ACPK Sprint 10.2_2022": {
        "prodFix": {
            "activeTime": 14.444444444444445,
            "waitTime": 41.55555555555556,
            "efficiency": 25.793650793650798,
            "issueIds": [
                413
            ],
            "summary":{
                "413":{
                "activeTime": 14.444444444444445,
                "waitTime": 41.55555555555556,
                "efficiency": 25.793650793650798,
                "summary": "Error while submitting quantity details of the products.",
                "jiraKey": "ACPK-413"
            }
        }
           
        },
        "Debt": {
            "activeTime": 3.611111111111111,
            "waitTime": 52.388888888888886,
            "efficiency": 6.4484126984126995,
            "issueIds": [
                410
            ],
            "summary":{
                "410": {
                    "activeTime": 3.611111111111111,
                    "waitTime": 52.388888888888886,
                    "efficiency": 6.4484126984126995,
                    "summary": "URL and Navigation names should be uniform.",
                    "jiraKey": "ACPK-410"
                }
            }
        },
        "Enablers": {
            "activeTime": 20,
            "waitTime": 36,
            "efficiency": 35.714285714285715,
            "issueIds": [
                408
            ],
            "summary":{
                "408": {
                    "activeTime": 20,
                    "waitTime": 36,
                    "efficiency": 35.714285714285715,
                    "summary": "Give an option to login the Application through fingerprint",
                    "jiraKey": "ACPK-408"
                }
            }
        },
        "Risk": {
            "activeTime": 38.05555555555556,
            "waitTime": 65.94444444444444,
            "efficiency": 36.59188034188035,
            "issueIds": [
                411,
                412
            ],
            "summary":{
                "411": {
                    "activeTime": 3.3333333333333335,
                    "waitTime": 52.666666666666664,
                    "efficiency": 5.9523809523809526,
                    "summary": "Unable to track the Product location.",
                    "jiraKey": "ACPK-411"
                },
                "412": {
                    "activeTime": 34.72222222222222,
                    "waitTime": 13.277777777777779,
                    "efficiency": 72.33796296296296,
                    "summary": "Status of the order is shown wrong in the My order page.",
                    "jiraKey": "ACPK-412"
                }
            }
        }
    },
"ACPK Sprint 11.1_2022":{
    "Task": {
        "activeTime": 41.611111111111114,
        "waitTime": 94.38888888888889,
        "efficiency": 30.596405228758172,
        "issueIds": [
            436,
            437,
            430,
            431
        ],
        "summary":{
            "430": {
                "activeTime": 10.777777777777779,
                "waitTime": 29.22222222222222,
                "efficiency": 26.94444444444445,
                "summary": "Create the Signin option through OTP.",
                "jiraKey": "ACPK-430"
            },
            "431": {
                "activeTime": 15,
                "waitTime": 25,
                "efficiency": 37.5,
                "summary": "Create the Link for changing password.",
                "jiraKey": "ACPK-431"
            },
            "436": {
                "activeTime": 8.333333333333334,
                "waitTime": 15.666666666666666,
                "efficiency": 34.72222222222223,
                "summary": "Create the career page in the Application.",
                "jiraKey": "ACPK-436"
            },
            "437": {
                "activeTime": 7.5,
                "waitTime": 24.5,
                "efficiency": 23.4375,
                "summary": "Integrate Take photo option with Gallery option in the profile picture upoload option.",
                "jiraKey": "ACPK-437"
            }
        }
    },
    "prodFix": {
        "activeTime": 10.555555555555555,
        "waitTime": 29.444444444444443,
        "efficiency": 26.38888888888889,
        "issueIds": [
            450
        ],
        "summary":{
            "450":{
            "activeTime": 10.555555555555555,
            "waitTime": 29.444444444444443,
            "efficiency": 26.38888888888889,
            "summary": "Unable to select the quantity from the dropdown. Quantity dropdown is not working.",
            "jiraKey": "ACPK-450"
        }
    }
    },
    "Debt": {
        "activeTime": 85.83333333333333,
        "waitTime": 74.16666666666667,
        "efficiency": 53.64583333333333,
        "issueIds": [
            448,
            445,
            446,
            447
        ],
        "summary":{
            "445": {
                "activeTime": 36.666666666666664,
                "waitTime": 3.3333333333333357,
                "efficiency": 91.66666666666666,
                "summary": "Unable to upload image in review section.",
                "jiraKey": "ACPK-445"
            },
            "446": {
                "activeTime": 8.88888888888889,
                "waitTime": 31.11111111111111,
                "efficiency": 22.222222222222225,
                "summary": "Product size selection functionality is not working.",
                "jiraKey": "ACPK-446"
            },
            "447": {
                "activeTime": 36.666666666666664,
                "waitTime": 3.3333333333333357,
                "efficiency": 91.66666666666666,
                "summary": "Didnt add the special offer details in the home page.",
                "jiraKey": "ACPK-447"
            },
            "448": {
                "activeTime": 3.611111111111111,
                "waitTime": 36.388888888888886,
                "efficiency": 9.027777777777777,
                "summary": "Finger print Log in is not working.",
                "jiraKey": "ACPK-448"
            }
        }
    },
    "Bug": {
        "activeTime": 2.721111111111111,
        "waitTime": 29.27888888888889,
        "efficiency": 8.503472222222221,
        "issueIds": [
            427
        ],
        "summary":{
            "427": {
                "activeTime": 2.721111111111111,
                "waitTime": 29.27888888888889,
                "efficiency": 8.503472222222221,
                "summary": "OTP functionality is not working at the time of Sign in. ",
                "jiraKey": "ACPK-427"
            }
        }
    }
}
}
if(props.selectedSprintData && props.issueType){
    const response = []
    Object.entries(data[props.selectedSprintData]).map((key)=>{
       if(metricTypesMapping[props.issueType].includes(key[0])){
          response.push(key[1].summary)
       }
    })
    return response
}
return data[props.selectedSprintData]
}
 module.exports = getEfficiencyDrill;