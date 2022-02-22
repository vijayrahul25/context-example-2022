import { Link } from "react-router-dom";
export const CategoryCard = ({ category }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card">
        <img
          className="card-img-top"
          src={
            category.backgroundImage
              ? category.backgroundImage
              : "https://dummyimage.com/455x120/55595c/fff"
          }
          alt="{category.translations.en.name}"
        />
        <div className="card-body">
          <h4 className="card-title">
            <Link to={`/category/${category.cid}/topics`} key={category.cid}>
              {category.translations.en.name}
            </Link>
          </h4>
          <p className="card-text">{category.translations.en.description}</p>
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-light">
                Total Post{" "}
                <span className="badge bg-secondary">
                  {category.totalPostCount}
                </span>
              </button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-ligth">
                Total Topic{" "}
                <span className="badge bg-secondary">
                  {category.totalTopicCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
