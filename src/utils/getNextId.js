export const getNextId = (tasks) => {
    const maxId = tasks.reduce((prev, current) =>
        (prev.id && prev) > current.id ? prev.id : current.id
    );

    return maxId;
}