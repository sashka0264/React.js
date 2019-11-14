import React from 'react';
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";
import {PostFormControl} from "../../../common/FormsControl/FormsControl";
import {addPostCreator} from "../../../../redux/actions";
import {required, maxLengthCreator, minLengthCreator} from "../../../../helpers/validators";
import Post from './Post/Post';
import sendIcon from "./img/sendIcon.svg";
import style from "./MyPosts.module.css";

const maxLength = maxLengthCreator(75), 
    minLength = minLengthCreator(2);

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.appContentSend}>
      <Field 
        validate={[required, maxLength, minLength]}
        name="newPostBody" 
        className={style.appContentLetterInput}  
        placeholder="Написать сообщение..."
        component={PostFormControl} 
      />
      <button className={style.appContentLetterSend}><img src={sendIcon}/></button>
    </form>
  )
}

const MyPostsReduxForm = reduxForm({form: 'posts'})(MyPostsForm);

const MyPosts = ({profilePage, addPostCreator}) => {
  
  const onSubmit = ({newPostBody}) => {
    addPostCreator(newPostBody);
  }

  return (
    <div className={style.appContentBlock}>
      <MyPostsReduxForm onSubmit={onSubmit}/>
      <div className={style.appContentPosts}>
        <div className={style.appContentPostsTitle}>Мои посты:</div>
        {
          profilePage.posts.map(item => {
            return <Post message={item.message} likes={item.likes} id={item.id} key={item.id}/>
          })   
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({global}) => {
  return {
    profilePage: global.profilePage
  }
}

export default connect(mapStateToProps, {addPostCreator})(MyPosts);
