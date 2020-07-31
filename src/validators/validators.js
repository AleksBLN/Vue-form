import {helpers} from "vuelidate/lib/validators"

export const isLengthEqual = (valueToMatch) => {
    return helpers.withParams(
        {type: "isLengthEqual", value: valueToMatch},
        (value, component) => value.length === valueToMatch
    )
}
export const isFirstNumberEqual = (valueToMatch) => {
    return helpers.withParams(
        {type: "isFirstNumberEqual", value: valueToMatch},
        (value, component) => value[0] === valueToMatch
    )
}