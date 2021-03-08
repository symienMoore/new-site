const postController = require('../post.controller');

let mockPost = {
    title: "test",
    description: "test",
    body: 'test',
    category: "networking"
}

test('should create post', () => {
    expect(postController.addPost(mockPost)).toBeTruthy();
})
