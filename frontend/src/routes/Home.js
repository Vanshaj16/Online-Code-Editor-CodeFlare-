import code_flare_logo from '../assets/images/3dlogo.png';
import CodeFlareIcon from '../assets/images/CodeFlareIcon.png';
import Home_Page from '../assets/images/HomePage.png';
import IconText from '../components/shared/IconText';
import SidebarText from '../components/shared/SidebarText';
import TextWithHover from '../components/shared/TextWithHover';
import {Icon} from '@iconify/react';
import {Link} from 'react-router-dom';

const Home = () => {
    return( 
        <div className="h-full w-full flex">
            {/* This first div will be the left panel */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                    {/* This div is for logo */}
                    <div className="logoDiv p-4 flex-row flex items-center justify-center">
                        <div><img src={code_flare_logo} alt="code flare logo" width={100}/></div>
                        <img src={CodeFlareIcon} alt="codeflare" width={180}/>
                    </div>
                    <div className="py-5 text-sm">
                        <IconText 
                            iconName={"material-symbols:home"} 
                            displayText={"Home"}
                            active
                        />
                        
                    </div>
                    <div className="pt-5 text-sm">
                        
                    </div>
                </div>
                <div className="pt-40 flex flex-col items-center">
                    <div className="pt-5 text-xs flex flex-row justify-center space-x-3">
                        <SidebarText displayText={"Legal"}/>
                        <SidebarText displayText={"Privacy Center"}/>
                        <SidebarText displayText={"Privacy Policy"}/>
                    </div>
                    <div className="pt-5 text-xs flex flex-row justify-center space-x-3">
                        <SidebarText displayText={"Cookies"}/>
                        <SidebarText displayText={"About Ads"}/>
                        <SidebarText displayText={"Accessibility"}/>
                    </div>
                </div>
                <div className="px-5 ">
                    <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                        <Icon icon="mingcute:earth-2-line"/>
                        <div className="ml-2 text-sm font-semibold">English</div>
                    </div>
                </div>
            </div>
            {/* This second div will be the right part(main content) */}
            <div className="h-full w-4/5 bg-app-black overflow-auto"> 
                <div className="navbar w-full h-1/10 bg-black bg-opacity-50 flex items-center justify-end">
                    <div className="w-1/2 flex h-full">
                        <div className="w-3/5 flex justify-around items-center">
                            <TextWithHover displayText={"Premium"}/>
                            <TextWithHover displayText={"Support"}/>
                            <TextWithHover displayText={"Challenges"}/>
                            <div className="h-1/2 border-r border-white"></div>
                        </div>
                        <div className="w-2/5 flex justify-around h-full items-center">
                            <TextWithHover displayText={<Link to="/signup">Sign up</Link>}/>
                            <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                <Link to="/login">Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border border-solid border-gray-600"></div>
                {/* This is the main content of the home page */}
                <div className="content p-8 pt-4 overflow-auto flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold text-white">Welcome to CodeFlare</div>
                    <div className="text-2xl pt-5 text-white">A platform for developers to learn, practice and compete in coding challenges</div>
                    <div classname="flex flex-col items-center justify-center pt-10">
                        <img src={Home_Page} alt="Home Page" width={600}/>
                    </div>
                </div>
            </div>
        </div>

    ) 
};

export default Home;