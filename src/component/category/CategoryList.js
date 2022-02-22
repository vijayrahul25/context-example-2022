import React from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { CategoryCard } from "./CategoryCard";
import { Loader } from "../common/Loader";
import { Error } from "../common/Error";
import { NoData } from "../common/NoData";

export const CategoryList = () => {
  const { state, loadCategories } = React.useContext(GlobalContext);
  const { categoryList, loading, error } = state;

  React.useEffect(() => {
    loadCategories();
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error />;
  if (categoryList.length <= 0) return <NoData />;
  return (
    <div className="row">
      {categoryList.map((category) => (
        <CategoryCard key={category.cid} category={category} />
      ))}
    </div>
  );
};
