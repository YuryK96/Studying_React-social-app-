import {renderEntireTree} from './../render'

let appState = {
    dialogsPage: {
        dialogsData: [
            { name: 'Vasya', id: '1', },
            { name: 'Petya', id: '2', },
            { name: 'Alberto', id: '3', },
            { name: 'Nikitos', id: '4', },
            { name: 'Lebowski', id: '5', },
            { name: 'iValera', id: '6', },
        ],
        messagesData: [
            { message: 'Hi, How are you?', },
            { message: 'What are you going to do at night?', },
            { message: 'We make a patie!', },
            { message: '4o slichno?', },
            { message: 'Lebowski, Where is my money?!', },
            { message: 'Darou', },
        ],
    },

    profilePage: {
        myPostData: [
            { value: 'Hi my name is Petya', countLikes: '10', },
            { value: 'Hi my name is Wasya', countLikes: '11', },
            { value: 'Hi my name is Roma', countLikes: '1', },
            { value: 'Hi my name is Yury', countLikes: '8', },
            { value: 'Hi my name is Nastya', countLikes: '15', },
        ],
        newPostText: '',
    },
};
export default appState;


window.appState = appState;
console.log(window.appState = appState)


export let changeNewPostText = (newPostTextUp) => {
  appState.profilePage.newPostText =  newPostTextUp ;
  renderEntireTree(appState);
    
}


export let addPost = () =>{
    let newPost = {
        value: appState.profilePage.newPostText ,
        countLikes:10,
    };
    appState.profilePage.myPostData.push(newPost)
    appState.profilePage.newPostText ='';
    renderEntireTree(appState)
};

export let addMessage = (messageText) =>{
    let newMessage = {
        message: messageText.current.value ,
        
    };
    console.log(newMessage)
    appState.dialogsPage.messagesData.push(newMessage)
    renderEntireTree(appState)
};



