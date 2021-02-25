export const setTitle = title => ({
    type: 'POST:CHANGE_TITLE',
    payload: title
})

export const setDescription = description => ({
    type: 'POST:CHANGE_DESCRIPTION',
    payload: description
})

export const setImageUrl = imageUrl => ({
    type: 'POST:CHANGE_IMAGE_URL',
    payload: imageUrl
})

export const setText = text => ({
    type: 'POST:CHANGE_TEXT',
    payload: text
})

export const setCreatedAt = createdAt => ({
    type: 'POST:CHANGE_CREATED_AT',
    payload: createdAt
})

