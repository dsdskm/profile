export const PROFILE_DATA = [
  "Ki Hoon, Kim",
  "1988.7.9",
  "Korea / Seoul",
  "tothetg@naver.com, dsdskm779@daum.net, dsdskm@gmail.com",
];
const getTimeLineData = (index, type, project, summary, skills, role, resource, features = []) => {
  return {
    index: index,
    type: type,
    project: project,
    summary: summary,
    skills: skills,
    role: role,
    resource: resource,
    features: features,
  };
};

export const CAREER_LIST = [
  getTimeLineData(
    1,
    "LG electronics korea",
    "LG Weather Android Application",
    "Weather application",
    "Android/Kotlin",
    "junior engineer",
    {
      VIDEO: [
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fweather%2Fweather.mp4?alt=media&token=d92a7b2f-0734-4904-b315-03fca5f82cf4",
      ],
      IMAGE: [
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fweather%2Fweather_main.png?alt=media&token=c8753644-b97e-41e0-af79-357dcbc8a1bc",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fweather%2Fweather_main2.png?alt=media&token=f290da76-3852-4298-9a89-aab5f8db63c2",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fweather%2Fweather_main3.png?alt=media&token=092757f3-a844-4bfe-a80f-b98805e1d81d",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fweather%2Fweather_main4.png?alt=media&token=e3ba0056-c5ca-402a-a00f-2b687911fa9d",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fweather%2Fweather_widget.png?alt=media&token=9cbea2bd-f2f0-48c0-876c-f406bc62929f",
      ],
      cols: 3,
    },
    [
      "provide android application on mobile",
      "get data from AWS",
      "custom recyclerview with scroll effect",
      "views for weather information",
      "home widget",
      "weather library for other apps",
      "use Espresso testing tool",
    ]
  ),
  getTimeLineData(
    2,
    "LG electronics korea",
    "LG QVoice Android Application",
    "Voice recognition service application",
    "Android/Kotlin",
    "senior engineer",
    {
      VIDEO: ["https://www.youtube.com/watch?v=M7G3X24GLBY"],
      IMAGE: [
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fqvoice%2Fqvoice_main.png?alt=media&token=633f7817-9e05-4efd-998f-dc3b15828adb",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fqvoice%2Fqvoice_date.png?alt=media&token=e8cf83b7-90ce-424c-bc84-d3cf16811e71",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fqvoice%2Fqvoice_timer.png?alt=media&token=5768f94b-64ff-49c8-b5ec-e387d536dd6d",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fqvoice%2Fqvoice_stt.png?alt=media&token=b7881bcb-adc4-47c2-9bae-b0ddb943c26e",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fqvoice%2Fqvoice_weather_card.png?alt=media&token=b44aa356-300c-41f6-a74b-f659cd98a339",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fqvoice%2Fqvoice_weather_dust.png?alt=media&token=69038305-7caa-4883-a09a-e0c5305fc959",
      ],
      cols: 3,
    },
    [
      "provide android application on mobile",
      "STT/TTS with internel server",
      "custom view for voice recognition",
      "chat view",
      "library for interface",
    ]
  ),
  getTimeLineData(
    3,
    "LG electronics korea",
    "LG Delivery Robot Android Application",
    "LG delivery robot control app",
    "Android",
    "senior engineer",
    {
      VIDEO: [
        "https://youtu.be/2hbFNGiehyU",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fdelivery%2Fcj_poc.mp4?alt=media&token=845cb8f4-66c1-4cba-be79-9d7f3d2d506b",
      ],
      IMAGE: [
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fdelivery%2Fcj_menu.png?alt=media&token=36bb05f1-bdde-4958-b45b-453767b0242d",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fdelivery%2Fcj_arrive.png?alt=media&token=493fb720-3173-468f-b831-3f8e7a5e8564",
      ],
      cols: 1,
    },
    [
      "provide android application on robot HW",
      "connection to robot hw",
      "menu for robot control",
      "robot event listening and processing/displaing",
      "networking to internel control managing server",
      "moduling and featuring for various requirement",
    ]
  ),
  getTimeLineData(
    4,
    "LG electronics korea",
    "LG Barista Robot",
    "LG barista robot controll app",
    "Android/Kotlin",
    "senior engineer",
    {
      VIDEO: [
        "https://www.youtube.com/watch?v=KqZQJaZvQkU",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fbarista%2FLG_BaristaApp.mp4?alt=media&token=1e37c19f-669d-4224-a041-c6428e88b146",
      ],
      IMAGE: [],
      cols: 1,
    },
    [
      "provide tablet application(android)",

      "socket networking with UR robot",
      "robot event listening and processing/displaing",
    ]
  ),
  getTimeLineData(
    5,
    "LG electronics korea",
    "LG Cloi Order",
    "order managing site for LG Cloi Order Service",
    "React, Firebase",
    "senior engineer",
    {
      VIDEO: [],
      IMAGE: [
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Flgcloiorder%2F%5Blgcloiorder_user%5Dproduct_list.png?alt=media&token=afee6a31-f04a-4f17-a1df-37b3a33607d5",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Flgcloiorder%2F%5Blgcloiorder_user%5Dproduct_detail.png?alt=media&token=380ac3c1-b810-422f-80ec-7640615ceab2",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Flgcloiorder%2F%5Blgcloiorder_user%5Dproduct_detail2.png?alt=media&token=a83e3d23-8124-4ceb-adc2-b6c032aa3ce0",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Flgcloiorder%2F%5Blgcloiorder_user%5Dcart.png?alt=media&token=9ef74191-a5eb-40b1-b2da-1e1ede647160",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Flgcloiorder%2F%5Blgcloiorder_user%5Dorder.png?alt=media&token=8028a89a-a37e-49dc-83e6-5ca2316fc9b4",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Flgcloiorder%2F%5Blgcloiorder_user%5Dorder_complete.png?alt=media&token=38b15240-0e72-415e-98d4-2e37bc0ab7b2",
      ],
      IMAGE2: [
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Flgcloiorder%2F%5Blgcloiorder_shop%5Dlogin.png?alt=media&token=d95dacdc-1b87-4ac1-8e55-9ece6b4cd330",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Flgcloiorder%2F%5Blgcloiorder_shop%5Dorder_list.png?alt=media&token=fca1366b-6982-4e5e-9aa5-cd3a4870ed3e",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Flgcloiorder%2F%5Blgcloiorder_shop%5Dorder_detail.png?alt=media&token=bdff50fb-b641-450c-a915-3113cb46a76d",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Flgcloiorder%2F%5Blgcloiorder_shop%5Dcategory_list.png?alt=media&token=0909ffc4-b6bf-4a5b-a1fa-307cd9578e07",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Flgcloiorder%2F%5Blgcloiorder_shop%5Dproduct_list.png?alt=media&token=861622a9-8945-4b7a-8b20-7e48d478e7af",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Flgcloiorder%2F%5Blgcloiorder_shop%5Ddestination_list.png?alt=media&token=89c65e04-173b-4048-b77f-033d25c3f2c7",
      ],
      cols: 3,
      cols2: 1,
    },
    [
      "provide order manager site(react) and customer site(react) and testing site(react)",
      "[customer] buying product and paying",
      "[manager] product, category, destination, order data managing",
      "[manager] check customer's order",
      "[test] sample data generation and managing",
    ]
  ),
  getTimeLineData(
    6,
    "Personal Project",
    "FindGo",
    "Application for membership training",
    "React, Android/Kotlin, Firebase",
    "owner",
    {
      VIDEO: [
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Ffindgo%2Ffindgo.mp4?alt=media&token=2f313056-54dc-4655-bca0-9726edbf4d64",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Ffindgo%2Fleadout.mp4?alt=media&token=d2cedd72-ad9a-471b-a04c-94ab6d2ebcad",
      ],
      IMAGE: [],
      cols: 1,
    },
    [
      "provide mission manager site(react) and user app(android)",
      "[manager site] title,channel,team,game,score,notice managing",
      "[app] get data from manager site(server) by login",
      "[app] use device location to mission",
      "[app] provide mission place on map view(kakao map)",
      "[app] use surface view for mission view effect",
      "[app] mission result sync with server and display to score view",
      "[app] get notification by FCM",
      "[app] provide manager mode",
    ]
  ),
  getTimeLineData(
    7,
    "Personal Project",
    "무장애IN성동구(Barrier free zone in SeongDong-Gu)",
    "Application for barrier free zone information ",
    "Flutter, Firebase",
    "owner",
    {
      VIDEO: [],
      IMAGE: [
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fnodisable%2Fshop01.webp?alt=media&token=3e416be5-3b4f-433f-a565-331fa6d23a2f",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fnodisable%2Fshop02.webp?alt=media&token=8a100e1f-8105-4297-abb9-19f85a5de8e9",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fnodisable%2Fshop03.webp?alt=media&token=8dd6e5ea-8ad8-429e-81f8-4f1ff4559026",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fnodisable%2Fshop04.webp?alt=media&token=49aa8797-de6b-4183-be8c-73d353edf88b",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Fnodisable%2Fshop05.webp?alt=media&token=75a6e4c5-e3e6-4b37-805e-7038585d7b50",
      ],
      cols: 3,
    },
    [
      "provide place manager site(react) and android/ios application(flutter)",
      "[manager site] place,category,notice managing",
      "[app] provide place on map view(kakao map)",
      "[app] provide walking path(skt api) and tts(google)",
    ]
  ),
  getTimeLineData(
    8,
    "Personal Project",
    "KNews",
    "Doing",
    "React, Firebase",
    "owner",
    {
      VIDEO: [],
      IMAGE: [],
      cols: 1,
    },
    [
      "provide fake news site(react)",
      "support desktop and mobile",
      "login/join by email account",
      "[user] provide channel, category, news, comment",
      "[manager] channel, category, news, comment managing",
    ]
  ),
  getTimeLineData(
    9,
    "Practice Project",
    "FoodFood",
    "Application for season food information ",
    "Android/Kotlin, Firebase",
    "owner",
    {
      VIDEO: [],
      IMAGE: [
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Ffoodfood%2Fshot01.webp?alt=media&token=66af78b6-0c06-426f-b2c6-268a19a03457",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Ffoodfood%2Fshot02.webp?alt=media&token=b0206c36-bf7f-4be6-b02b-c9ffa56cf6ba",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Ffoodfood%2Fshot03.webp?alt=media&token=af249635-607e-4969-a976-a446d8964cd2",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Ffoodfood%2Fshot04.webp?alt=media&token=e8717658-8acc-4668-87cc-801a29448704",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Ffoodfood%2Fshot05.webp?alt=media&token=f65934e1-eb9b-4dd9-b587-262afa749a81",
        "https://firebasestorage.googleapis.com/v0/b/profile-bbda5.appspot.com/o/project%2Ffoodfood%2Fshot06.webp?alt=media&token=c0298062-8a55-43b2-981d-a6ee81f0d6c3",
      ],
      cols: 3,
    },
    [
      "provide season food application(android)",
      "use open api(data.go.kr) without manager site",
      "provide location on map view(naver map)",
      "provide detail information(naver search api)",
    ]
  ),
];
