import React from 'react'
import './StoryReel.css'
import Story from './Story'


function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
            title="Yaroslav Kharckenko"
            image="https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg"
            profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Story
            title="Domrin Danylo"
            image="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1000&q=80"
            profileSrc="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            />
            <Story
            title="Egor Baranov"
            image="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&w=1000&q=80"
            profileSrc="https://www.bigredcloud.com/wp-content/uploads/4-tips-for-taking-professional-profile-pictures.jpg"
            />
            <Story
            title="Sasha Grachanik"
            image="https://i.pinimg.com/originals/79/27/f9/7927f976b17065d627f94c0e125ac79c.jpg"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLHvzyqlpe7Aw_qH5ZR5fvjErwjzNuqIlc6A&usqp=CAU"
            />
            <Story
            title="Dima Stepsinko"
            image="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            profileSrc="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
            />

        </div>
    )
}

export default StoryReel
