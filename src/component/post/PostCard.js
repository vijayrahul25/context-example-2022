export const PostCard = ({ post }) => {
  return (
    <div className="card row-hover pos-relative py-3 px-3 mb-3 border-warning border-top-0 border-right-0 border-bottom-0 rounded-0">
      <div className="row align-items-center">
        <div className="col-md-8 mb-3 mb-sm-0">
          <p className="text-sm">
            <span className="op-6">Posted</span>{" "}
            <a className="text-black" href="#">
              20 minutes
            </a>{" "}
            <span className="op-6">ago by</span>{" "}
            <a className="text-black" href="#">
              KenyeW
            </a>
          </p>
          <div className="text-sm op-5">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
        <div className="col-md-4 op-7">
          <div className="row text-center op-7">
            <div className="col px-1">
              {" "}
              <i className="ion-connection-bars icon-1x"></i>{" "}
              <span className="d-block text-sm">141 Votes</span>{" "}
            </div>
            <div className="col px-1">
              {" "}
              <i className="ion-ios-chatboxes-outline icon-1x"></i>{" "}
              <span className="d-block text-sm">122 Replys</span>{" "}
            </div>
            <div className="col px-1">
              {" "}
              <i className="ion-ios-eye-outline icon-1x"></i>{" "}
              <span className="d-block text-sm">290 Views</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
