import Plx from "react-plx";
import { Card, Image, Typography, Tag, Space, Divider, Button, Collapse } from "antd";
import { FieldFlex, Gigadat, JobZ, SAIT, Udemy, Pikachure, RES } from "res";
import _ from "lodash";

export default function App() {
	return (
		<div>

			<Plx
				parallaxData={[{
					start: "self",
					end: 1000,
					properties: [
						{
							startValue: 30,
							endValue: 500,
							property: "translateY"
						}
					]
				}]}
			>
				<Card id="cover" style={{ margin: "20px", marginBottom: 0, maxHeight: "600px" }}>
					{/* Carousel (?) */}
					<Image
						src="https://media.discordapp.net/attachments/940588069617283122/981114633450557440/B2CD0984-2000-42B3-990F-348A872F5482.jpeg?width=584&height=876"
						preview={false}
					/>

					<div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 20px", background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)" }} s>
						<Typography.Title style={{ color: "white" }}>
							Jediah Dizon
							<Typography.Title level={5} style={{ color: "white" }}>JediahJosuah@gmail.com</Typography.Title>
						</Typography.Title>
						<Typography.Paragraph style={{ color: "white" }}>
							Software Developer who mainly focus on Javascript front-end frameworks and libraries such as {getSkill("ReactJS")} & {getSkill("Angular")} whilst being capable at full-stack development with {getSkill("NodeJS")} & {getSkill("SQL")}/{getSkill("NoSQL")} databases.
						</Typography.Paragraph>
					</div>
				</Card>
			</Plx>

			<Card className="content-wrapper" style={{ overflow: "visible", margin: "20px", marginTop: 0, padding: "20px" }}>
				{renderSkills()}
				<Divider />
				{renderWork()}
			</Card>

			<Card className="content-wrapper" style={{ overflow: "visible", margin: "20px", marginTop: 0, padding: "20px" }}>
				{renderCodeAdventure()}
			</Card>

			<Card className="content-wrapper" style={{ overflow: "visible", margin: "20px", marginTop: 0, padding: "20px" }}>
				{renderEducation()}
			</Card>

			<Card className="content-wrapper" style={{ overflow: "visible", margin: "20px", marginTop: 0, padding: "20px" }}>
				{renderAbout()}
			</Card>

			<div style={{ paddingBottom: "25vh" }}></div>

		</div>
	);
}

function renderSkills() {
	return (
		<>
			<Typography.Title level={3}>Skills</Typography.Title>
			<Space wrap>
				{getSkillTag("ReactJS")}
				{getSkillTag("React Native")}
				{getSkillTag("NodeJS")}
				{getSkillTag("GraphQL")}
				{getSkillTag("MySQL")}
				{getSkillTag("Sequelize")}
				{getSkillTag("Firebase")}
				{getSkillTag("Javascript")}
				{getSkillTag("HTML")}
				{getSkillTag("CSS")}
				{getSkillTag("Java")}
				{getSkillTag("C#")}
				{getSkillTag("SQL")}
				{getSkillTag("Android")}
				{getSkillTag("iOS")}
				{getSkillTag("JWKS")}
				{getSkillTag("Socket IO")}
			</Space>
		</>
	);
}

function renderWork() {
	return (
		<>
			<Typography.Title level={3}>
				Work Experience <small style={{ opacity: 0.3 }}>4 Years</small>
			</Typography.Title>
			<Typography.Paragraph>Employed by <b>Gigadat</b>, <b>FieldFlex</b>, and <b>Resource Energy Solutions</b></Typography.Paragraph>

			<Space wrap size="large">
				{
					renderExperience(
						<Typography.Title level={3}>Gigadat <small style={{ opacity: 0.3 }}>2021 – 2022</small></Typography.Title>,
						<Typography.Paragraph>
							Worked on a full-stack role to handle data movement from multiple source streams using {getSkill("MySQL")} and {getSkill("Sequelize")}.<br /><br />
							Developed an OpenID compliant {getSkill("JWKS")} auth system in {getSkill("NodeJS")} to integrate with multiple sources of ID verification services for KYC (Know-Your-Customer).<br /><br />
							Maintained a {getSkill("ReactJS")} CMS web application used by clients to manage financial and KYC transactions alongside other business models.<br /><br />
						</Typography.Paragraph>,
						Gigadat,
						{
							"Company Website": "https://gigadatsolutions.com/"
						}
					)
				}
				{
					renderExperience(
						<Typography.Title level={3}>FieldFLEX <small style={{ opacity: 0.3 }}>2020 – 2021</small></Typography.Title>,
						<Typography.Paragraph>
							Developed and maintained a {getSkill("Cordova")} web and mobile app for building inspectors that talks to IBM TRIRIGA backend to move away from paper-based forms.<br /><br />
							Learned {getSkill("SenchaJS")} and {getSkill("Java Spring")} with synchronization between mobile app and web server.<br /><br />
						</Typography.Paragraph>,
						FieldFlex,
						{
							"Company Website": "https://fieldflex.com/"
						}
					)
				}
				{
					renderExperience(
						<Typography.Title level={3}>Resource Energy Solutions <small style={{ opacity: 0.3 }}>2017 – 2020</small></Typography.Title>,
						<Typography.Paragraph>
							Developed an offline-capable desktop application made with {getSkill("ReactJS")} with Ant Design UI library, as well as {getSkill("DexieJS")} for saving data to local browser. Used the {getSkill("Electron")} library to install and run the application.<br /><br />
							Developed an {getSkill("Android")} & {getSkill("iOS")} app using {getSkill("React Native")}. Made overhauling architectural design to the old codebase which includes utilization of {getSkill("Realm DB")} local database for offline capability<br /><br />
							Made new backend API endpoints via {getSkill("ASP.NET")} and {getSkill("C#")} for the mobile app to interface with TORC.<br /><br />
							Made a {getSkill("NodeJS")} and {getSkill("ReactJS")} application combined with {getSkill("GraphQL")} and {getSkill("Sequelize")} library to retrieve data from a {getSkill("MySQL")} database that showcases statistics involving the support team’s job performance.<br /><br />
							Set up weekly meetings with a team overseas to track job performance for a collaborative work. Team uses {getSkill("Jira")}, {getSkill("Confluence")}, and {getSkill("BitBucket")} for management.<br /><br />
						</Typography.Paragraph>,
						RES,
						{
							"Company Website": "https://www.resourceenergysolutions.com/",
							"TORC Mobile": "https://play.google.com/store/apps/details?id=com.torcmobile"
						}
					)
				}
			</Space>
		</>
	);
}

function renderCodeAdventure() {
	return (
		<>
			<Typography.Title level={3}>
				Code Adventure <small style={{ opacity: 0.3 }}>Personal Projects</small>
			</Typography.Title>
			<Typography.Paragraph>Applications I have worked on to expand my knowledge in software development.</Typography.Paragraph>

			<Space wrap size="large">
				{
					renderExperience(
						<Typography.Title level={3}>Pikachure <small style={{ opacity: 0.3 }}>Photoshoot for everyone, anywhere. Simply mark the map</small></Typography.Title>,
						<Typography.Paragraph>
							Pikachure lets you and everyone on the platform to go on photo-trips through a public space where anyone and everyone can collaborate. Create and join open invites made by the community, collaborate with every joinees and share photos, all in one space
							<br /><br />
							Web application made with {getSkill("ReactJS")}<br /><br />
							User login through OAuth {getSkill("JWT")} from Google with support for anonymous guest login<br /><br />
							Backend uses {getSkill("NodeJS")} equipped with Apollo {getSkill("GraphQL")} Server<br /><br />
							DB uses a No-SQL {getSkill("Firebase")} database by Google<br /><br />
						</Typography.Paragraph>,
						Pikachure,
						{
							"Website": "https://pikachure.com/",
							"Frontend": "https://github.com/JediahDizon/portfolio-website",
							"Backend": "https://github.com/JediahDizon/pikature-web"
						}
					)
				}
				{
					renderExperience(
						<Typography.Title level={3}>Job Z <small style={{ opacity: 0.3 }}>Next Generation Job Hunting</small></Typography.Title>,
						<Typography.Paragraph>
							Reimagined how job opportunities are made by steering away from word-document resumes, deprecating the 6-second-scan-rule, and letting everyone search for resumes for free. Fully Integrated with a messaging system and push notifications<br /><br />
							Full-stack {getSkill("React Native")} and {getSkill("GraphQL")} resume-search platform released for {getSkill("Android")} and {getSkill("iOS")} app store with a working web demo.<br /><br />
							Mobile app uses Expo {getSkill("React Native")}<br /><br />
							User login through OAuth {getSkill("JWT")} from Google and Apple<br /><br />
							Backend uses {getSkill("NodeJS")} equipped with Apollo {getSkill("GraphQL")} Server for HTTPS and Socket support<br /><br />
							DB uses a No-SQL {getSkill("Firebase")} database by Google<br /><br />
						</Typography.Paragraph>,
						JobZ,
						{
							"Website": "https://jobzapp.ca/",
							"Frontend": "https://github.com/JediahDizon/JobZ-web",
							"Backend": "https://github.com/JediahDizon/JobZ-server",
							"Android": "https://play.google.com/store/apps/details?id=com.jobz.android",
							"iOS (Under Maintenance)": ""
						}
					)
				}
			</Space>
		</>
	);
}

function renderEducation() {
	return (
		<>
			<Typography.Title level={3}>
				Education <small style={{ opacity: 0.3 }}>Software Development Major</small>
			</Typography.Title>
			<Typography.Paragraph>Educational programs that bootstraps my career as a software developer.</Typography.Paragraph>

			<Space wrap size="large">
				{
					renderExperience(
						<Typography.Title level={3}>SAIT Polytechnic <small style={{ opacity: 0.3 }}>2 Years</small></Typography.Title>,
						<Typography.Paragraph>
							Took a 2-year diploma program that helps prepare full-stack developers prepare for the workforce. <br /><br />
							Subjects include {getSkill("SocketIO")} programming, web development ({getSkill("HTML")}, {getSkill("CSS")}, {getSkill("Javascript")}, {getSkill("PHP")}), {getSkill("Java")} programming ({getSkill("JSP")}, {getSkill("JSTL")}), and team management (Requirements documentation, Team collaboration). <br /><br />
							Graduated with 3.72 GPA.<br /><br />
						</Typography.Paragraph>,
						SAIT,
						{
							"Website": "https://www.sait.ca/"
						}
					)
				}

				{
					renderExperience(
						<Typography.Title level={3}>Udemy <small style={{ opacity: 0.3 }}>Online Courses</small></Typography.Title>,
						<Typography.Paragraph>
							Took a variety of programs including {getSkill("React Native")}, {getSkill("ReactJS")}, {getSkill("Flutter")}, and {getSkill("Angular")} to know more about the emerging trends in the field of software development.<br /><br />
							Currently studying {getSkill("Flutter")}, and {getSkill("TensorJS")} for a future mobile app project and machile learning knowledge respectively.
						</Typography.Paragraph>,
						Udemy,
						{
							"Website": "https://www.sait.ca/"
						}
					)
				}
			</Space>
		</>
	);
}

function renderExperience(title, description, image, links) {
	// return (
	// 	<Collapse ghost>
	// 		<Collapse.Panel
	// 			showArrow={false}
	// 			header={
	// 				<Image
	// 					src={image}
	// 					preview={false}
	// 				/>
	// 			}
	// 		>
	// 			<Typography.Title level={3}>{title}</Typography.Title>
	// 			<Typography.Paragraph>{description}</Typography.Paragraph>
	// 		</Collapse.Panel>
	// 	</Collapse>
	// );

	return (
		<Card className="work-experience-card ant-card-hoverable" bordered={false}>
			<div className="work-experience-image" style={{ width: "100%" }}>
				<Image
					src={image}
					preview={false}
				/>
			</div>

			<div style={{ margin: "20px" }} className="work-experience-description">
				<Typography.Title level={3}>{title}</Typography.Title>
				<Typography.Paragraph>{description}</Typography.Paragraph>
				{
					!_.isEmpty(links) && (
						<Space wrap className="work-experience-links">
							{
								_.map(links, (link, key) =>
									<Button type="primary" disabled={!link} style={{ color: link && "white" }} onClick={() => window.open(link, "_blank", "noopener,noreferrer")}>{key}</Button>
								)
							}
						</Space>
					)
				}
			</div>
		</Card>
	);
}

function renderAbout() {
	return (
		<>
			<Typography.Title level={3}>
				About Me <small style={{ opacity: 0.3 }}>JediahJosuah@gmail.com</small>
			</Typography.Title>
			<Typography.Paragraph>Want to know more about me? Email me for an interview! I would love to talk about how I can add value to your company.</Typography.Paragraph>

			<Space wrap className="work-experience-links">
				<Button type="primary" style={{ color: "white" }} onClick={() => window.open("https://github.com/JediahDizon", "_blank", "noopener,noreferrer")}>Github</Button>
				<Button type="primary" style={{ color: "white" }} onClick={() => window.open("https://www.linkedin.com/in/jediahdizon/", "_blank", "noopener,noreferrer")}>LinkedIn</Button>
			</Space>
		</>
	);
}

function getSkill(skill) {
	return <b style={{ color: skillColorMapping[skill] }}>{skill}</b>;
}

function getSkillTag(skill) {
	return <Tag color={skillColorMapping[skill]}>{skill}</Tag>;
}

const skillColorMapping = {
	"ReactJS": "#AC7f55",
	"React Native": "#AC7f55",
	"NodeJS": "#AC7f55",
	"GraphQL": "#AC7f55",
	"MySQL": "#AC7f55",
	"Firebase": "#AC7f55",
	"Sequelize": "#AC7f55",
	"Cordova": "#AC7f55",
	"Java Spring": "#AC7f55",
	"SenchaJS": "#AC7f55",
	"Electron": "#AC7f55",
	"Realm DB": "#AC7f55",
	"ASP.NET": "#AC7f55",
	"DexieJS": "#AC7f55",
	"TensorJS": "#AC7f55",

	"Javascript": "#CEAB93",
	"HTML": "#CEAB93",
	"CSS": "#CEAB93",
	"C#": "#CEAB93",
	"Java": "#CEAB93",
	"SQL": "#CEAB93",

	"Android": "#E3CAA5",
	"iOS": "#E3CAA5",
	"Socket IO": "#E3CAA5",
	"JWT": "#E3CAA5",
	"JWKS": "#E3CAA5",
	"JWT & JWKS": "#E3CAA5",
	"Jira": "#E3CAA5",
	"Confluence": "#E3CAA5",
	"BitBucket": "#E3CAA5"
};