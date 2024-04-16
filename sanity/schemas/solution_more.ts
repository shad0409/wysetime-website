const solution_more = {
    name: "solution_more",
    title: "Solutions_more",
    type: "document",
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}],
        }
    ]
}

export default solution_more;