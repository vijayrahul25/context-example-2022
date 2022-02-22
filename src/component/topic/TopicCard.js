import { Link } from "react-router-dom";

export const TopicCard = ({ topic }) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-start mt-3 mb-3 border-1"
      key={topic.tid}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          <Link to={`/topic/${topic.tid}/posts`}>{topic.title}</Link>
        </div>
        <div dangerouslySetInnerHTML={{ __html: topic.teaser.content }} />
        {}
      </div>
      <span className="badge bg-primary rounded-pill">{topic.postcount}</span>
    </li>
  );
};
