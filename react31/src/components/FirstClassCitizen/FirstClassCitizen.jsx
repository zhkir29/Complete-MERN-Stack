import {PhotoStory,VideoStory} from './Stores';

const components = {
    photo: PhotoStory,
    video: VideoStory
}

function Stroy(props){
    const SpecificStory = components[props.storyType];
    return <SpecificStory story = {props.story}/>
}

export default Stroy;