export const PostCard = ({ post }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mt-3 mb-3 border-1">
      <div className="ms-2 me-auto">
        <div className="">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </li>
  );
};
