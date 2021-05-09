export const controlLight = (status) => {
    return { type: "TURN_ON", payload: { on: status } }
}