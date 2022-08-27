import Rainbow from "components/01-atoms/rainbow/rainbow";
import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Button from "components/01-atoms/button/button";

const Hero = () => {

    return (
        <div className="hero section">
            <div className="hero__inner section__inner">
                <div className="hero__info">
                    <Heading className="info__heading" level="h1">Create your own <Rainbow>meme coins</Rainbow> for free.</Heading>
                    <Text className="info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex.</Text>
                    <Button className="info__button button--with-rainbow-border button--with-rainbow-hover">Hello world</Button>
                </div>
                <img className="hero__wallpaper" src="/images/placeholders/grey-space.svg" alt="Wallpaper" />
            </div>
        </div>
    );

};

export default Hero;