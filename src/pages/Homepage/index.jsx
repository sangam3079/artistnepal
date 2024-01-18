import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import renderHTML from 'react-render-html';

import ApplicationLayout from '../../components/Layouts/ApplicationLayout';

import './styles.scss';
import ArtistImage1 from "../../assets/images/yama_buddha.png";
import ArtistImage2 from "../../assets/images/Melina.png";
import ArtistImage3 from "../../assets/images/artist3.png";
import AnalyticsImage from '../../assets/images/Analytics3.png';
import GetStartedBox from './GetStartedBox';

const imageSliderSetting = {
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000
};

export default ({ }) => {
	const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch ('https://blog.songsnepal.com/wp-json/wp/v2/posts')
    .then(res =>  
      res.json())
    .then(data => 
    setBlogs(data.slice(0,3))
    //console.log(data)
    )
  }, []);

	console.log({blogs})

	return (
		<ApplicationLayout>
			<div className='homepage'>
				<div className='homepage_banner'>
					<div className='homepage_banner_text'>
						<div className='homepage_banner_text_heading'>
							SONGS NEPAL FOR ARTIST
						</div>
						<div className='homepage_banner_text_subheading'>
							Make your music.
						</div>
						<div className='homepage_banner_text_description'>
							Get your songs out of your head and into the world. Now anyone can record studio-quality sound, release new tracks, and connect with fans.
						</div>
						<button className='homepage_banner_text_button'>
							GET ACCESS
						</button>
					</div>
					<div className='homepage_banner_image'>
						<Slider {...imageSliderSetting}>
							<img src={ArtistImage1} alt="User" height="780" width="580" />
							<img src={ArtistImage2} alt="User" height="780" width="580" />
							<img src={ArtistImage3} alt="User" height="780" width="580" />
						</Slider>
					</div>
				</div>
				<div className='homepage_jointeam'>
					<div className='homepage_jointeam_text'>
						<div className='homepage_jointeam_text_heading'>
							Your music. Your fans. Your team. All together now.
						</div>
						<div className='homepage_jointeam_text_description'>
							All the tools you need to build your following and career on Songs Nepal, all in one place.
						</div>
					</div>
					<div className='homepage_jointeam_button'>
						<button>
							JOIN YOUR TEAM
						</button>
					</div>
				</div>
				<div className='homepage_fans'>
					<div className='homepage_fans_image'>
						<img src={AnalyticsImage} width={880} />
					</div>
					<div className='homepage_fans_text'>
						<div className='homepage_fans_text_heading'>
							STAY PLUGGED INTO YOUR FANS
						</div>
						<div className='homepage_fans_text_description'>
							With the Songs Nepal for Artists, instantly know how your fans are listening to your music. Available on web and mobile. 
							<br />
							Click here to get started.
						</div>
					</div>
				</div>
				<div className='homepage_news'>
					<div className='homepage_news_title'>
						Latest News
					</div>
					<div className='homepage_news_subtitle'>
						Our latest stories to get you inspired.
					</div>
					<div className='homepage_news_list'>
						{blogs.map((b, i) => 
							<div key={i} className='homepage_news_list_single'>
								<div className='homepage_news_list_single_image'>
									<img src={b.fimg_url} />
									<div className='homepage_news_list_single_image_overlay' />
								</div>
								<div className='homepage_news_list_single_title'>
									{b.title.rendered}
								</div>
								<div className='homepage_news_list_single_description'>
									{b.excerpt && b.excerpt.rendered && renderHTML(b.excerpt.rendered)}
								</div>
							</div>
						)}
					</div>
				</div>
				<div className='homepage_getstarted'>
					<div className='homepage_getstarted_title'>
						How to get started?
					</div>
					<div className='homepage_getstarted_list'>
						<div className='homepage_getstarted_list_container'>
							<GetStartedBox 
								title='Getting music on Songs Nepal' 
								description='Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.'
							/>
						</div>
						<div className='homepage_getstarted_list_container'>
							<GetStartedBox 
								title='Inviting team members' 
								description='Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.'
							/>
						</div>
						<div className='homepage_getstarted_list_container'>
							<GetStartedBox 
								title='Pitching music to our playlist editor' 
								description='Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.'
							/>
						</div>	
						<div className='homepage_getstarted_list_container'>
							<GetStartedBox 
								title='Managing your artist profile' 
								description='Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.'
							/>
						</div>
					</div>
				</div>
				<div className='homepage_getaccess'>
					<div className='homepage_getaccess_text'>
						<div className='homepage_getaccess_text_heading'>
							What are you waiting for?
						</div>
						<div className='homepage_getaccess_text_description'>
							Be one with your stats to be one with your fans.
						</div>
					</div>
					<div className='homepage_getaccess_button'>
						<button>
							JOIN YOUR TEAM
						</button>
					</div>
				</div>
			</div>
		</ApplicationLayout>
	);
}