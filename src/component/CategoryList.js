import React from "react";
import { CategoryListContext } from "../contextProvider/CategoryListContextProvider";
import { CategoryListActions } from "../actions/CategoryListActions";

export const CategoryList = () => {
  const { state, loadCategories } = React.useContext(CategoryListContext);
  const { categoryList, loading, error } = state;

  React.useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div className="row">
      <div className="col">
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {categoryList.map((category) => (
              <li key={category.id}>{category.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
