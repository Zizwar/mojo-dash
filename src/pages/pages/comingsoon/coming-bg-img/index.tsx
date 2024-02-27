import CountdownData from "@/components/Others/comingSoon/common/CountdownData";
import Image from "next/image";
import { Container } from "reactstrap";
import { ImgPath, WeAreComingSoon } from "utils/Constant";

const ComingSoonWithBackGroundImage = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Container fluid={true} className="p-0 m-0">
        <div className="comingsoon comingsoon-bgimg">
          <div className="comingsoon-inner text-center">
            <Image width={63} height={63} src={`${ImgPath}/other-images/logo-login.png`} alt="comingSoon"/>
            <h5>{WeAreComingSoon}</h5>
            <div className="countdown" id="clockdiv">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComingSoonWithBackGroundImage;
