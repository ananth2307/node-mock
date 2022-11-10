const getFlowPredicabilityDrillSummary = (props) => {
const data = {
    "ACPK Sprint 10.1_2022":{
        "prodFix":{
    "planned summary": {
        "ACPK-394": "Error while trying to search for the product",
        "ACPK-393": "During the payment process, the page crashed."
    },
    "planned completed summary": {
        "CompletedFlag": "Y",
        "ACPK-392": "Opening an application takes too long.",
        "ACPK-391": "Opening an application takes too long."
    },
    "unplanned summary": {
        "ACPK-390": "Opening the option to open products using page numbers takes far too long"
    }
}
},
    "ACPK Sprint 9.1_2022":{
        "features":{
        "planned summary": {
            "ACPK-308": "Add separate Bank Promotion page ",
            "ACPK-307": "Add Delivery tracking option ",
            "ACPK-306": "Add a Collect Vouchers page"
        },
        "planned completed summary": {
            "CompletedFlag": "Y",
            "ACPK-332": "As a user I want to Forgotten password option , so that I can easily reset the password through Email.",
            "ACPK-331": "As a user I want to confirmation message after ordering the product , so that I can able to understand order is successful"
        },
        "unplanned completed summary": {
            "CompletedFlag": "Y",
            "ACPK-336": "Create the page for collect vouchers and giftcard",
            "ACPK-330": "As a User I want to search product through Voice instruction."
        },
        "unplanned summary": {
            "ACPK-335": "Integrate the Search function option with Voice search and Image search.",
            "ACPK-334": "Add a Collect Vouchers page"
        }
    },
    "risk":{
        "planned summary": {
            "ACPK-322": "The creditor's account does not reflect the made payment.",
            "ACPK-321": "GPS is not functioning Properly"
        }
    },
    "enablers":{
        "planned summary": {
            "ACPK-313": "The Forgot Password option should appear in the next line on left hand side",
            "ACPK-312": "Only if the user clicks the Information link and chooses to see the information details at the bottom of the page",
            "ACPK-311": "The space required for a single product's advertisement is too large; at least two products should be placed there."
        },
        "planned completed summary": {
            "CompletedFlag": "Y",
            "ACPK-342": "Change the Settings Menu option from left to right of the Home page."
        },
        "unplanned completed summary": {
            "CompletedFlag": "Y",
            "ACPK-343": "Change the Navigation name 'Order Details' to 'Order Summary'"
        }
    },
    "debt":{
        "planned summary": {
            "ACPK-320": "Download App is not working",
            "ACPK-319": "Request otp is not sent to customers"
        },
        "unplanned completed summary": {
            "CompletedFlag": "Y",
            "ACPK-351": "Chat support functionality is not working.",
            "ACPK-350": "Password not accept the special characters.",
            "ACPK-349": "Password accept only 4 Alphabet characters."
        }
    },
    "prodFix":{
        "planned summary": {
            "ACPK-325": "After loading, a website crashes",
            "ACPK-324": "Slow loading of the website: performance issue"
        },
        "planned completed summary": {
            "CompletedFlag": "Y",
            "ACPK-358": "Error while submitting the product details",
            "ACPK-357": "Getting error while Sign in with valid user credentials",
            "ACPK-356": "Getting error while search the product",
            "ACPK-355": "Page crashing during payment"
        },
        "unplanned completed summary": {
            "CompletedFlag": "Y",
            "ACPK-354": "Opening an application takes too long"
        }
    }
},
"ACPK Sprint 10.2_2022":{
    "defects":{
        "planned summary": {
            "ACPK-422": "Unable to select the Quantity of product in the product page",
            "ACPK-420": "User not able to update the phone number."
        },
        "planned completed summary": {
            "CompletedFlag": "Y",
            "ACPK-415": "SAVE button is not working in Login page."
        },
        "unplanned completed summary": {
            "CompletedFlag": "Y",
            "ACPK-402": "The Proceed to Pay option is not working."
        },
        "unplanned summary": {
            "ACPK-425": "User not able to add new address",
            "ACPK-424": "Unable to remove products once added to cart.",
            "ACPK-423": "Getting error while search the Products",
            "ACPK-421": "I am unable to repeat the same product, from the order history.",
            "ACPK-418": "The Filter page is  taking 10 seconds to load after filtering.",
            "ACPK-417": "Cash on delivery option is not working.",
            "ACPK-416": "Add to Cart button not working"
        }
    },
    "enablers":{
        "planned summary": {
            "ACPK-409": "Add Image analytics/google lens to search the uploaded image"
        },
        "planned completed summary": {
            "CompletedFlag": "Y",
            "ACPK-408": "Give an option to login the Application through fingerprint"
        }
    },
    "prodFix":{
        "planned summary": {
            "ACPK-414": "Add order cancel with in 60seconds option."
        },
        "unplanned completed summary": {
            "CompletedFlag": "Y",
            "ACPK-413": "Error while submitting quantity details of the products."
        }
    }
    
}
}
if(data[props.selectedSprintData][props.issueType] === undefined){
    return []
}
return data[props.selectedSprintData][props.issueType]
}
module.exports = getFlowPredicabilityDrillSummary;