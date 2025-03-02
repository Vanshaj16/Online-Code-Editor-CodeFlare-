import code_flare_logo from '../assets/images/3dlogo.png';
import CodeFlareIcon from '../assets/images/CodeFlareIcon.png';
import IconText from '../components/shared/IconText';
import SidebarText from '../components/shared/SidebarText';
import TextWithHover from '../components/shared/TextWithHover';
import {Icon} from '@iconify/react';
import { Link } from 'react-router-dom';

const Home = ({curActiveScreen}) => {
    
    return( 
        <div className="h-full w-full bg-app-black flex">
                {/* This first div will be the left panel */}
                <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                    <div>
                        {/* This div is for logo */}
                        <div className="logoDiv p-6 flex-row flex items-center justify-center">
                            <div><img src={code_flare_logo} alt="code flare logo" width={100}/></div>
                            <img src={CodeFlareIcon} alt="codeflare" width={180}/>
                        </div>
                        <div className="py-5 text-sm">
                            <IconText 
                                iconName={"material-symbols:home"} 
                                displayText={"Home"}
                                targetLink={"/home"}
                                active={curActiveScreen === "home"}
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
                    <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                        <div className="w-1/2 flex h-full">
                            <div className="w-2/3 flex justify-around items-center">
                                <TextWithHover displayText={"Premium"}/>
                                <TextWithHover displayText={"Support"}/>
                                <TextWithHover displayText={"Challenges"}/>
                                <div className="h-1/2 border-r border-white"></div>
                            </div>
                            <div className="w-1/3 flex justify-around h-full items-center">
                                <Link to="/startcoding">
                                    <TextWithHover displayText="Start Coding"/>
                                </Link>
                                <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                    CF
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border border-solid border-gray-600"></div>
                    <div className="content p-8 pt-0 overflow-auto">
                        <div>
                            <div className="content p-14 pt-20 item-center">
                                <img src="https://cpwebassets.codepen.io/assets/packs/illu-editor-24091b7edc92fba11a2595fe767e6c2b.png" 
                                    class="HeaderHero-module_editorStatic-IxK-e"/>
                            </div>
                        </div>
                        <div>
                            <img src="https://cpwebassets.codepen.io/assets/packs/lines-2-4e66616a5ef291c3566a7ddfe1ffaaa8.svg"/>
                        </div>
                    </div>
                </div>
        </div>
);
};

export default Home;
