import { ReactComponent as StarFull } from './star-full.svg';
import { ReactComponent as StarHalf } from './star-half.svg';
import { ReactComponent as StarEmpty } from './star-empty.svg';
import './style.css';


function  MovieStars() {
    
    return (
  <div className="dsmovie-stars-container">
  <StarFull />
  <StarFull />
  <StarFull />
  <StarHalf />
  <StarEmpty />
  </div>
    );
}

export default MovieStars;