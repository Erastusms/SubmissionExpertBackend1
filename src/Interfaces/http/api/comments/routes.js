const routes = (handler) => [
  {
    method: 'POST',
    path: '/threads/{threadId}/comments',
    options: { auth: 'forumapi_jwt' },
    handler: handler.addCommentHandler,
  },
  {
    method: 'DELETE',
    path: '/threads/{threadId}/comments/{commentId}',
    options: { auth: 'forumapi_jwt' },
    handler: handler.deleteCommentHandler,
  },
];

module.exports = routes;
