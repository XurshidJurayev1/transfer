import './single.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ImageApi } from '../../../../Api/ImageApi';


const TransferSingle = (props) => {



  // function createMarkup(text) {
  //   return { __html: `${text}` };
  // }


  return (
    <div className="single">

      <div className="top">
        <div className="left">
          <Link to="/admin/courses/edit" className="editButton">Edit</Link>
          <h1 className="title">Course</h1>
          <div className="item">
            {/*<img*/}
            {/*  src={`${ImageApi}${props.item.image_path}`}*/}
            {/*  alt=""*/}
            {/*  className="CourseImg"*/}
            {/*/>*/}
            <div className="details">
              <h1 className="itemTitle">Title: qweqw </h1>
              <div className="detailItem">
                <span className="itemKey">link: </span>
                <span className="itemValue">qweqwe</span>
              </div>
              {/*<div className="detailItem">*/}
              {/*  <span className="itemKey">Content: </span>*/}
              {/*  <span className="itemValue">*/}
              {/*    <div dangerouslySetInnerHTML={createMarkup(props.item.text)} />*/}
              {/*  </span>*/}
              {/*</div>*/}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, {})(TransferSingle);
