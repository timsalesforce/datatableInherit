function handleEvent(e) {
    debugger;
    console.log(`================ IN HANDLER: ${e}`);
}

function cloneObj(e) {
    return JSON.parse(JSON.stringify(e));
}
export {handleEvent, cloneObj};