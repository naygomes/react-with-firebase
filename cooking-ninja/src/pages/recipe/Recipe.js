import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// styles
import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const url = 'http://localhost:3000/recipes/' + id;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <div className="recipe">
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {recipe && (
        <div >
          <h2>{recipe.title}</h2>
          <p>By {recipe.cookingTime}</p>
          <p>{recipe.ingredients}</p>
          <p>{recipe.method}</p>
        </div>
      )}
    </div>
  )
}
