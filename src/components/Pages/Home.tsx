import { useEffect } from "react";
import Image from "next/image";

// AntDesign
import { Space, Typography, Timeline } from "antd";
const { Text, Title } = Typography;
import { Tabs } from "antd";
import { blue, red } from "@ant-design/colors";

// Hooks
import useLanguage from "../../hooks/useLanguage";

// Icons / images
import ProfilePic from "../../../public/images/profile.png";

import { IoMdFootball } from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";
import { GiThreeFriends } from "react-icons/gi";

import {
  FaGuitar,
  FaGamepad,
  FaBook,
  FaCheckCircle,
  FaReact,
  FaDrupal,
} from "react-icons/fa";

import {
  WhatsAppOutlined,
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

// Styled Components
import {
  StyledContainer,
  StyledHobbieCards,
  StyledHobbieCard,
  StyledIcon,
  StyledBox,
  StyledCareerWrapper,
  StyledWrapper,
  StyledText,
  StyledImageWrapper,
  StyledOverlay,
} from "../../styles/_home.style";

const { TabPane } = Tabs;

const Hobbies = () => {
  const { translate } = useLanguage();

  return (
    <StyledHobbieCards>
      <StyledHobbieCard>
        <StyledIcon>
          <FaGuitar />
        </StyledIcon>
        <StyledBox>
          <Text>
            {translate("My favourite hobbie is")}{" "}
            <strong>{translate("play guitar")}</strong>.
          </Text>
          <br />
          <Text>
            {translate("I'm not very good, but I play almost every day.")}
          </Text>
        </StyledBox>
      </StyledHobbieCard>

      <StyledHobbieCard>
        <StyledIcon>
          <IoMdFootball />
        </StyledIcon>
        <StyledBox>
          <Space direction="vertical" size={1}>
            <Text>
              {translate(
                "Here is one I used to play but now I just watch, but still love it."
              )}
            </Text>
            <Text>
              {translate("I love to watch soccer. I support ")}
              <strong>
                <span style={{ color: red[5] }}>Flamengo</span>
              </strong>{" "}
              {translate("in Brazil, I'm a truly fan.")}
            </Text>
          </Space>
        </StyledBox>
      </StyledHobbieCard>

      <StyledHobbieCard>
        <StyledIcon>
          <FaGamepad />
        </StyledIcon>
        <StyledBox>
          <Space direction="vertical" size={1}>
            <Text>
              {translate("I also like to")}{" "}
              <strong>{translate("play video games")}</strong>{" "}
              {translate("and")} <strong>{translate("RPG games")}</strong>.
            </Text>
            <Text>
              {translate(
                "Currently I'm not playing too much, but every time I have a free time, I play a little"
              )}
              .
            </Text>
          </Space>
        </StyledBox>
      </StyledHobbieCard>

      <StyledHobbieCard>
        <StyledIcon>
          <GiThreeFriends />
        </StyledIcon>
        <StyledBox>
          <Text>
            {translate("I LOVE")}{" "}
            <strong>{translate("hangout with my friends")}</strong>.
          </Text>
          <br />
          <Text>
            {translate("Don't mater the place, I just love to be with them")}.
          </Text>
        </StyledBox>
      </StyledHobbieCard>

      <StyledHobbieCard>
        <StyledIcon>
          <BiCameraMovie />
        </StyledIcon>
        <StyledBox>
          <Space direction="vertical" size={1}>
            <Text>
              {translate("I love go to the")}{" "}
              <strong>{translate("movies")}</strong>.
            </Text>
            <Text>{translate("I go pretty often, every time I can")}.</Text>
            <Text>
              {translate("I'm not a film critic, I just love to go")}.
            </Text>
          </Space>
        </StyledBox>
      </StyledHobbieCard>
    </StyledHobbieCards>
  );
};

const Career = () => {
  const { translate } = useLanguage();

  return (
    <StyledCareerWrapper>
      <Timeline>
        <Timeline.Item dot={<FaDrupal style={{ fontSize: "20px" }} />}>
          {translate(
            "Get my first internationational job in Envivent, as web developer using Drupal and React. (Apr 2022)"
          )}
        </Timeline.Item>
        <Timeline.Item dot={<FaReact style={{ fontSize: "20px" }} />}>
          {translate(
            "Starting to work as software developer in Intelie, using React. (Jun 2021)"
          )}
        </Timeline.Item>
        <Timeline.Item dot={<FaCheckCircle style={{ fontSize: "16px" }} />}>
          {translate(
            "Get a promotion on Inforce, to Junior Front-end developer. (Jan 2021)"
          )}
        </Timeline.Item>
        <Timeline.Item>
          {translate(
            "Get my first job on Inforce, starting as trainee. (Oct 2020)"
          )}
        </Timeline.Item>
        <Timeline.Item dot={<FaBook style={{ fontSize: "16px" }} />}>
          {translate("Started to study HTML, CSS and Javascript (Mar 2020)")}
        </Timeline.Item>
      </Timeline>
    </StyledCareerWrapper>
  );
};

const Goals = () => {
  const { translate } = useLanguage();

  return (
    <Space direction="vertical" size={12} style={{ paddingBottom: "20px" }}>
      <div>
        <Title level={2} style={{ marginBottom: 0, color: blue.primary }}>
          2025
        </Title>
        <Space direction="vertical" size={2}>
          <Text>{translate("Finish the master's degree")}</Text>
          <Text>{translate("Learn french - A1 to B2")}</Text>
          <Text>{translate("Dive into AI and Machine Learning")}</Text>
        </Space>
      </div>

      <div>
        <Title level={2} style={{ marginBottom: 0, color: blue.primary }}>
          2024
        </Title>
        <Space direction="vertical" size={2}>
          <Text delete>{translate("Finish all master's degree subjects")}</Text>
        </Space>
      </div>

      <div>
        <Title level={2} style={{ marginBottom: 0, color: blue.primary }}>
          2023
        </Title>
        <Space direction="vertical" size={2}>
          <Text delete>
            {translate("Start a master's degree in Software Engineer")}
          </Text>
          <Text delete>
            {translate("Learn PHP + Laravel and create at least one project")}
          </Text>
          <Text delete>{translate("Learn MySQL")}</Text>
          <Text delete style={{ color: red.primary }}>
            {translate("Finish the Josh W. Comeau's CSS course")}
          </Text>
        </Space>
      </div>

      <div>
        <Title level={2} style={{ marginBottom: 0, color: blue.primary }}>
          2022
        </Title>
        <Space direction="vertical" size={2}>
          <Text delete>
            {translate("Learn more about software architecture")}
          </Text>
          <Text style={{ color: red.primary }} delete>
            {translate("Start to study spanish")}
          </Text>
          <Text delete>
            {translate("Improve my English with an study exchange")}
          </Text>
          <Text delete>{translate("Start in a international company")}</Text>
        </Space>
      </div>
      <div>
        <Title level={2} style={{ marginBottom: 0, color: blue.primary }}>
          2021
        </Title>
        <Space direction="vertical" size={2}>
          <Text delete>{translate("Improve my CSS skills")}</Text>
          <Text delete>{translate("Improve my English")}</Text>
          <Text delete>{translate("Start working with React")}</Text>
        </Space>
      </div>
    </Space>
  );
};

const SocialMedia = () => {
  return (
    <Space className="social-media" size={40} style={{ marginTop: "1rem" }}>
      <a
        className="icon"
        target="blank"
        href="https://github.com/MatheusFelizardo"
      >
        <GithubOutlined style={{ fontSize: "30px", color: "#08c" }} />
      </a>
      <a
        className="icon"
        target="blank"
        href="https://www.linkedin.com/in/matheus-felizardo"
      >
        <LinkedinOutlined style={{ fontSize: "30px", color: "#08c" }} />
      </a>
      <a
        className="icon"
        target="blank"
        href="https://www.instagram.com/matheus.felizardo_"
      >
        <InstagramOutlined style={{ fontSize: "30px", color: "#08c" }} />
      </a>

      <a
        className="icon"
        target="blank"
        href="https://www.facebook.com/matheus.felizardo.3"
      >
        <FacebookOutlined style={{ fontSize: "30px", color: "#08c" }} />
      </a>

      {/* <a
        className="icon"
        target="blank"
        href="https://www.twitter.com/theusfelizardo1"
      >
        <TwitterOutlined style={{ fontSize: "30px", color: "#08c" }} />
      </a> */}

      <a
        className="icon"
        target="blank"
        href="https://api.whatsapp.com/send?phone=+351961757575&text=Hello, Matheus"
      >
        <WhatsAppOutlined style={{ fontSize: "30px", color: "#08c" }} />
      </a>
    </Space>
  );
};

const Home = () => {
  const { translate, language } = useLanguage();

  useEffect(() => {}, [language]);

  const birthdate =
    Number(new Date(Date.now()).getFullYear()) -
    Number(new Date("1995/02/11").getFullYear());
  return (
    <>
      <StyledContainer>
        <StyledWrapper className="max-width">
          <StyledBox>
            <Space direction="vertical" size={4}>
              <StyledText>{translate("Hi, I'm")} </StyledText>
              <Title className="title" title="Matheus Felizardo">
                Matheus Felizardo.
              </Title>
              <StyledText>
                {translate(
                  "I'm a front-end developer based in Porto, Portugal."
                )}
              </StyledText>
              <StyledText>
                {translate("5 years experience em development")}
              </StyledText>
              <StyledText>
                {translate("Currently working at Envivent.")}
              </StyledText>
            </Space>
          </StyledBox>

          <StyledImageWrapper>
            <Image src={ProfilePic} alt="Matheus picture" />
          </StyledImageWrapper>
        </StyledWrapper>

        <StyledBox className="max-width">
          <Tabs defaultActiveKey="1">
            <TabPane tab={translate("Hobbies")} key="1">
              <Hobbies />
            </TabPane>
            <TabPane tab={translate("Career")} key="2">
              <Career />
            </TabPane>
            <TabPane tab={translate("Goals")} key="3">
              <Goals />
            </TabPane>
            <TabPane tab={translate("Social Media")} key="4">
              <SocialMedia />
            </TabPane>
          </Tabs>
          {/* <Tabs items={items} /> */}
        </StyledBox>

        <StyledOverlay />
      </StyledContainer>
    </>
  );
};

export default Home;
