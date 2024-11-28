import { ImageURISource } from "react-native";

export type Look =
{
    id : string,
    title : string,
    description : string,
    author : string,
    likes : number,
    image : ImageURISource,
    category : string[]
}

export type Category = 
{
    id : string,
    title : string,
    image : ImageURISource
}

export const d_looks : Look[] = 
[
    {
        id: '18365071-eeff-4b39-8732-1fe52a73c632',
        title: 'Business woman',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author: 'Sinthia Oliver',
        likes: 120000,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: ["category_business", "category_formal", "category_workMeeting"]
    },
    {
        id: 'b9e67391-6ff5-4f77-8d6e-60d2a12f9c56',
        title: 'Casual Elegance',
        description: 'A perfect blend of comfort and style...',
        author: 'Emma Jones',
        likes: 10230,
        image: require('../assets/img/ref/ref2_businesswoman.jpg'),
        category: ["category_casual", "category_coffeeShop", "category_shopping"]
    },
    {
        id: 'c5f1b5a9-37a8-4d94-9b69-9e2e645e79d3',
        title: 'Modern Professional',
        description: 'Stay stylish in the workplace...',
        author: 'Liam Taylor',
        likes: 27850,
        image: require('../assets/img/ref/ref3_businesswoman.jpg'),
        category: ["category_business", "category_formal", "category_corporateEvent"]
    },
    {
        id: 'e0a432df-5bb2-4a17-88b2-cf827d7d08df',
        title: 'Weekend Getaway',
        description: 'Effortless and trendy...',
        author: 'Sophia Williams',
        likes: 15320,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: ["category_travel", "category_relax", "category_outdoor"]
    },
    {
        id: 'f8b9b5a1-9f8f-4b26-95ec-7293478e0f1a',
        title: 'Evening Glam',
        description: 'Turn heads with this stunning evening look...',
        author: 'Michael Smith',
        likes: 32450,
        image: require('../assets/img/ref/ref3_businesswoman.jpg'),
        category: ["category_partyNight", "category_formalDinner", "category_dinnerDate"]
    },
    {
        id: '7a1d5f67-0e45-4a3a-9d6d-451b089dfc98',
        title: 'City Explorer',
        description: 'Stay comfortable yet stylish...',
        author: 'Ava Johnson',
        likes: 17400,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: ["category_streetStyle", "category_casual", "category_travel"]
    },
    {
        id: 'd4b1e9fa-123a-46d1-90e9-3a8f75e34c26',
        title: 'Classic Monochrome',
        description: 'Sophisticated and timeless...',
        author: 'Olivia Brown',
        likes: 21500,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: ["category_formal", "category_workMeeting", "category_corporateEvent"]
    },
    {
        id: '29a1f8d3-4b5f-4e6a-9f21-7d9bce58c7e9',
        title: 'Boho Vibes',
        description: 'For a laid-back, free-spirited look...',
        author: 'Ethan Davis',
        likes: 13680,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: ["category_festival", "category_outdoor", "category_picnic"]
    },
    {
        id: '17e839b6-c42a-4f3e-9e7e-82c034f94753',
        title: 'Athleisure Chic',
        description: 'Blend style with functionality...',
        author: 'Mia Clark',
        likes: 28300,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: ["category_gym", "category_running", "category_relax"]
    },
    {
        id: '6d53f922-fd48-4b2d-9a56-23f6e74394b7',
        title: 'Vintage Charm',
        description: 'Channel vintage vibes...',
        author: 'Lucas Martinez',
        likes: 39400,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: ["category_museum", "category_casual", "category_romanticDate"]
    },
    {
        id: 'c8f3203b-5e78-4991-915b-d49f7e9468e4',
        title: 'Sunny Brunch',
        description: 'Brighten up your day...',
        author: 'Sophia Nguyen',
        likes: 16230,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: ["category_sundayLunch", "category_summer", "category_relax"]
    },
    {
        id: '3f47d901-f726-4a08-94be-34b84ab4b9b8',
        title: 'Street Style Edge',
        description: 'Show off your edgy side...',
        author: 'Benjamin Lee',
        likes: 32000,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: ["category_streetStyle", "category_casual", "category_nightOut"]
    },
    {
        id: 'f091c3a3-78c5-49fa-9f3b-e91c0a2e54ed',
        title: 'Cozy Layers',
        description: 'Stay warm and stylish...',
        author: 'Emma White',
        likes: 23750,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: ["category_winter", "category_relax", "category_lounging"]
    },
    {
        id: 'a4e8d6d9-bd48-4e6d-a5e3-bf02b3dbdf22',
        title: 'Minimalist Traveler',
        description: 'Travel light and in style...',
        author: 'Daniel Roberts',
        likes: 18490,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: ["category_travel", "category_vacation", "category_relax"]
    },
    {
        id: '8e3f8f4b-9c1f-4b21-bdb4-92b38b5df9b1',
        title: 'Date Night Glam',
        description: 'Turn up the charm...',
        author: 'Charlotte King',
        likes: 38900,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: ["category_romanticDate", "category_dinnerDate", "category_nightOut"]
    },
    {
        id: '2f7a9b1c-dcb2-4e9b-9878-4bc9a4e1e6ab',
        title: 'Urban Explorer',
        description: 'Ready for an adventure?...',
        author: 'William Scott',
        likes: 20100,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: ["category_hiking", "category_travel", "category_outdoor"]
    },
    {
        id: "8fd8278d-62dc-4b8f-8c8e-6972e610dfd9",
        title: "Generated Look 1",
        description: "Description for Generated Look 1...",
        author: "Author 1",
        likes: 16281,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_gym",
            "category_corporateEvent",
            "category_summer",
            "category_museum"
        ]
    },
    {
        id: "4af0f1b6-0cfd-47c8-8cea-f7a5a7bf38c5",
        title: "Generated Look 2",
        description: "Description for Generated Look 2...",
        author: "Author 2",
        likes: 19056,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_wedding",
            "category_outdoor",
            "category_birthday"
        ]
    },
    {
        id: "de1a5b69-f43c-455b-aab1-c693a55604e9",
        title: "Generated Look 3",
        description: "Description for Generated Look 3...",
        author: "Author 3",
        likes: 35007,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_relax",
            "category_dance",
            "category_gym"
        ]
    },
    {
        id: "98c87d97-9356-4ee9-aa6e-d08ec40affd7",
        title: "Generated Look 4",
        description: "Description for Generated Look 4...",
        author: "Author 4",
        likes: 43149,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_travel",
            "category_cocktail",
            "category_coffeeShop"
        ]
    },
    {
        id: "c28c2ee1-a127-4677-b5ac-bec5c3da8eb6",
        title: "Generated Look 5",
        description: "Description for Generated Look 5...",
        author: "Author 5",
        likes: 6335,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_housewarming",
            "category_shopping",
            "category_formalDinner",
            "category_party",
            "category_cocktail"
        ]
    },
    {
        id: "8f044721-f185-42cc-92ae-4dbb0ed35f2a",
        title: "Generated Look 6",
        description: "Description for Generated Look 6...",
        author: "Author 6",
        likes: 10575,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_sport",
            "category_resort",
            "category_roadTrip"
        ]
    },
    {
        id: "14bb950e-1fce-4cb1-87a0-11b671dd8bbd",
        title: "Generated Look 7",
        description: "Description for Generated Look 7...",
        author: "Author 7",
        likes: 29162,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_dance",
            "category_lounging",
            "category_nightOut"
        ]
    },
    {
        id: "1c5315bc-fbf8-4157-9936-135c9244b747",
        title: "Generated Look 8",
        description: "Description for Generated Look 8...",
        author: "Author 8",
        likes: 31277,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_beach",
            "category_spring"
        ]
    },
    {
        id: "d6ff8196-5625-42a3-a464-fb7d85d79e71",
        title: "Generated Look 9",
        description: "Description for Generated Look 9...",
        author: "Author 9",
        likes: 20487,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_beach",
            "category_sundayLunch",
            "category_summer",
            "category_autumn",
            "category_theater"
        ]
    },
    {
        id: "6f3b848a-8b26-4f03-a41a-b2a9b4d202ff",
        title: "Generated Look 10",
        description: "Description for Generated Look 10...",
        author: "Author 10",
        likes: 40675,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_cocktail",
            "category_movieNight",
            "category_travel",
            "category_nightOut"
        ]
    },
    {
        id: "e9677290-fa02-4e0c-92c5-6a1644d90079",
        title: "Generated Look 11",
        description: "Description for Generated Look 11...",
        author: "Author 11",
        likes: 1176,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_roadTrip",
            "category_engagementParty",
            "category_poolParty",
            "category_familyGathering",
            "category_movieNight"
        ]
    },
    {
        id: "d51f55f0-bf05-4758-b05c-f2ad40c2bc03",
        title: "Generated Look 12",
        description: "Description for Generated Look 12...",
        author: "Author 12",
        likes: 16933,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_casual",
            "category_charityGala",
            "category_roadTrip"
        ]
    },
    {
        id: "f864982e-9710-42d5-8bf8-7eac88c369fd",
        title: "Generated Look 13",
        description: "Description for Generated Look 13...",
        author: "Author 13",
        likes: 2892,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_honeymoon",
            "category_roadTrip",
            "category_museum",
            "category_lounging"
        ]
    },
    {
        id: "ad555171-bf8c-4a05-a509-70dc3d6c69d1",
        title: "Generated Look 14",
        description: "Description for Generated Look 14...",
        author: "Author 14",
        likes: 3114,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_engagementParty",
            "category_formalDinner",
            "category_corporateEvent"
        ]
    },
    {
        id: "256e4024-1f28-441c-9560-be350e1f5dde",
        title: "Generated Look 15",
        description: "Description for Generated Look 15...",
        author: "Author 15",
        likes: 14744,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_movieNight",
            "category_poolParty"
        ]
    },
    {
        id: "2e605fb8-e057-4bf2-a967-9e503d64cc51",
        title: "Generated Look 16",
        description: "Description for Generated Look 16...",
        author: "Author 16",
        likes: 15101,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_cocktail",
            "category_winter",
            "category_party",
            "category_hiking"
        ]
    },
    {
        id: "00a99ab1-f619-4792-951e-a4c655ebef88",
        title: "Generated Look 17",
        description: "Description for Generated Look 17...",
        author: "Author 17",
        likes: 34432,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_party",
            "category_formal"
        ]
    },
    {
        id: "4d54bd18-b7df-4f58-b35f-e5847cabd1f2",
        title: "Generated Look 18",
        description: "Description for Generated Look 18...",
        author: "Author 18",
        likes: 39907,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_travel",
            "category_dinnerDate"
        ]
    },
    {
        id: "e181a7de-2bc9-4368-8cf9-388711ea9e58",
        title: "Generated Look 19",
        description: "Description for Generated Look 19...",
        author: "Author 19",
        likes: 26447,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_streetStyle",
            "category_cocktail",
            "category_wedding",
            "category_corporateEvent"
        ]
    },
    {
        id: "e7eea5fd-d867-435b-b442-a314b465dea7",
        title: "Generated Look 20",
        description: "Description for Generated Look 20...",
        author: "Author 20",
        likes: 20525,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_vacation",
            "category_roadTrip",
            "category_formal",
            "category_sport",
            "category_shopping"
        ]
    },
    {
        id: "2238ae55-ef59-42a1-b359-6274e5143dd0",
        title: "Generated Look 21",
        description: "Description for Generated Look 21...",
        author: "Author 21",
        likes: 5134,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_travel",
            "category_shopping",
            "category_dinnerDate",
            "category_workMeeting"
        ]
    },
    {
        id: "a9a50d8d-5849-438b-964b-1d2d71f6405b",
        title: "Generated Look 22",
        description: "Description for Generated Look 22...",
        author: "Author 22",
        likes: 46285,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_engagementParty",
            "category_dinnerDate",
            "category_party",
            "category_business"
        ]
    },
    {
        id: "a81f5092-5ccc-48fb-b6b2-464c445018ea",
        title: "Generated Look 23",
        description: "Description for Generated Look 23...",
        author: "Author 23",
        likes: 17200,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_picnic",
            "category_graduation",
            "category_movieNight",
            "category_resort",
            "category_partyNight"
        ]
    },
    {
        id: "faac540a-fddc-4c83-87fb-ad9ed9331b5f",
        title: "Generated Look 24",
        description: "Description for Generated Look 24...",
        author: "Author 24",
        likes: 44557,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_roadTrip",
            "category_workMeeting"
        ]
    },
    {
        id: "7c2005af-4dd6-45ad-8d6c-aee4d0931cca",
        title: "Generated Look 25",
        description: "Description for Generated Look 25...",
        author: "Author 25",
        likes: 7264,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_outdoor",
            "category_familyReunion"
        ]
    },
    {
        id: "0f62204b-3e97-48c6-935d-bef40c5f5629",
        title: "Generated Look 26",
        description: "Description for Generated Look 26...",
        author: "Author 26",
        likes: 17605,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_sport",
            "category_gym",
            "category_romanticDate",
            "category_engagementParty",
            "category_spring"
        ]
    },
    {
        id: "7bde9225-9abb-45e0-91bd-bc99b28f72be",
        title: "Generated Look 27",
        description: "Description for Generated Look 27...",
        author: "Author 27",
        likes: 6000,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_corporateEvent",
            "category_honeymoon"
        ]
    },
    {
        id: "79e31af4-2f4e-4450-9301-380ff3050b55",
        title: "Generated Look 28",
        description: "Description for Generated Look 28...",
        author: "Author 28",
        likes: 45892,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_workMeeting",
            "category_festival",
            "category_party",
            "category_winter"
        ]
    },
    {
        id: "d504e6e1-5fbd-4c24-b895-27440a62cb1a",
        title: "Generated Look 29",
        description: "Description for Generated Look 29...",
        author: "Author 29",
        likes: 19944,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_vacation",
            "category_hiking",
            "category_lounging",
            "category_festival",
            "category_cocktail"
        ]
    },
    {
        id: "658c162c-96f1-45ff-9d7a-fa270c0d6271",
        title: "Generated Look 30",
        description: "Description for Generated Look 30...",
        author: "Author 30",
        likes: 23363,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_relax",
            "category_familyReunion"
        ]
    },
    {
        id: "0bf81714-6965-4699-bcd2-442607f268a3",
        title: "Generated Look 31",
        description: "Description for Generated Look 31...",
        author: "Author 31",
        likes: 16515,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_charityGala",
            "category_corporateEvent",
            "category_relax",
            "category_business",
            "category_housewarming"
        ]
    },
    {
        id: "83175fdd-49b2-4690-9c2b-2616ff2203d3",
        title: "Generated Look 32",
        description: "Description for Generated Look 32...",
        author: "Author 32",
        likes: 34065,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_formal",
            "category_summer",
            "category_autumn",
            "category_beach",
            "category_winter"
        ]
    },
    {
        id: "ee570304-c7df-48a7-ba67-aa6cece10366",
        title: "Generated Look 33",
        description: "Description for Generated Look 33...",
        author: "Author 33",
        likes: 16577,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_summer",
            "category_sundayLunch",
            "category_familyGathering",
            "category_roadTrip"
        ]
    },
    {
        id: "2be6faaf-fab2-4709-bb6c-b70cf4a262fe",
        title: "Generated Look 34",
        description: "Description for Generated Look 34...",
        author: "Author 34",
        likes: 5492,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_outdoor",
            "category_museum"
        ]
    },
    {
        id: "3be05129-bc69-4c39-964c-cf7f5f7a39cc",
        title: "Generated Look 35",
        description: "Description for Generated Look 35...",
        author: "Author 35",
        likes: 49705,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_corporateEvent",
            "category_cocktail",
            "category_museum",
            "category_wedding"
        ]
    },
    {
        id: "48099f98-e1f1-4bf0-8da4-a9834ffc466b",
        title: "Generated Look 36",
        description: "Description for Generated Look 36...",
        author: "Author 36",
        likes: 25134,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_lounging",
            "category_concert",
            "category_hiking",
            "category_beach",
            "category_housewarming"
        ]
    },
    {
        id: "8116d42b-8344-4b69-8cb4-f7b3f86b9326",
        title: "Generated Look 37",
        description: "Description for Generated Look 37...",
        author: "Author 37",
        likes: 12367,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_birthday",
            "category_wedding",
            "category_sport",
            "category_travel",
            "category_shopping"
        ]
    },
    {
        id: "acf5a4b8-2dce-4e97-bb7e-1a96f4b183bf",
        title: "Generated Look 38",
        description: "Description for Generated Look 38...",
        author: "Author 38",
        likes: 27442,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_gym",
            "category_corporateEvent",
            "category_shopping",
            "category_honeymoon"
        ]
    },
    {
        id: "4528fd39-d25e-47dd-9465-34671a8eccb7",
        title: "Generated Look 39",
        description: "Description for Generated Look 39...",
        author: "Author 39",
        likes: 46999,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_museum",
            "category_streetStyle",
            "category_movieNight",
            "category_coffeeShop",
            "category_relax"
        ]
    },
    {
        id: "5be739a9-1519-4bc1-965f-3cf602dbfb94",
        title: "Generated Look 40",
        description: "Description for Generated Look 40...",
        author: "Author 40",
        likes: 27977,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_winter",
            "category_relax"
        ]
    },
    {
        id: "4aefa575-b53a-459a-9a4c-c54e041ccf67",
        title: "Generated Look 41",
        description: "Description for Generated Look 41...",
        author: "Author 41",
        likes: 49545,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_dinnerDate",
            "category_shopping",
            "category_familyReunion",
            "category_sport",
            "category_movieNight"
        ]
    },
    {
        id: "0010c90c-42f3-40a9-acc4-db6de4babce4",
        title: "Generated Look 42",
        description: "Description for Generated Look 42...",
        author: "Author 42",
        likes: 23134,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_housewarming",
            "category_concert"
        ]
    },
    {
        id: "5f898dba-cf17-4479-bf8e-ee93f704e2d3",
        title: "Generated Look 43",
        description: "Description for Generated Look 43...",
        author: "Author 43",
        likes: 22798,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_shopping",
            "category_casual"
        ]
    },
    {
        id: "821f3bd2-3f6d-43b7-9e26-961d97acf56e",
        title: "Generated Look 44",
        description: "Description for Generated Look 44...",
        author: "Author 44",
        likes: 22702,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_hiking",
            "category_business",
            "category_birthday",
            "category_roadTrip",
            "category_workMeeting"
        ]
    },
    {
        id: "9fb90c92-befe-4b9c-89a0-8125a3f73885",
        title: "Generated Look 45",
        description: "Description for Generated Look 45...",
        author: "Author 45",
        likes: 32578,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_corporateEvent",
            "category_graduation",
            "category_hiking",
            "category_gym"
        ]
    },
    {
        id: "8596b3d5-716e-4e81-ab3a-08e40266f39a",
        title: "Generated Look 46",
        description: "Description for Generated Look 46...",
        author: "Author 46",
        likes: 7806,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_streetStyle",
            "category_festival",
            "category_hiking",
            "category_outdoor",
            "category_graduation"
        ]
    },
    {
        id: "8d8af3a8-76b9-47c7-ab31-67894c525d3f",
        title: "Generated Look 47",
        description: "Description for Generated Look 47...",
        author: "Author 47",
        likes: 47367,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_sundayLunch",
            "category_graduation",
            "category_corporateEvent"
        ]
    },
    {
        id: "ae2cef6f-7e21-420f-94ba-5e348a809f75",
        title: "Generated Look 48",
        description: "Description for Generated Look 48...",
        author: "Author 48",
        likes: 4161,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_birthday",
            "category_dinnerDate",
            "category_autumn"
        ]
    },
    {
        id: "0218bcbc-3d0e-4ddc-96e9-df6d14571761",
        title: "Generated Look 49",
        description: "Description for Generated Look 49...",
        author: "Author 49",
        likes: 49428,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_housewarming",
            "category_winter"
        ]
    },
    {
        id: "fc43b2b5-6af2-425b-95fe-cabfd1ff804b",
        title: "Generated Look 50",
        description: "Description for Generated Look 50...",
        author: "Author 50",
        likes: 30213,
        image: require('../assets/img/ref/ref1_businesswoman.jpg'),
        category: [
            "category_sundayLunch",
            "category_lounging",
            "category_picnic",
            "category_casual",
            "category_beach"
        ]
    }
];

export const d_categories : Category[] = [
    { id: 'category_formal', title: 'Formal', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_party', title: 'Party', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_sundayLunch', title: 'Sunday lunch', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_romanticDate', title: 'Romantic date', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_partyNight', title: 'Party night', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_relax', title: 'Relax', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_sport', title: 'Sport', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_beach', title: 'Beach', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_casual', title: 'Casual', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_travel', title: 'Travel', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_business', title: 'Business', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_wedding', title: 'Wedding', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_familyGathering', title: 'Family gathering', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_outdoor', title: 'Outdoor', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_nightOut', title: 'Night out', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_formalDinner', title: 'Formal dinner', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_workMeeting', title: 'Work meeting', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_gym', title: 'Gym', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_running', title: 'Running', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_picnic', title: 'Picnic', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_hiking', title: 'Hiking', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_shopping', title: 'Shopping', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_lounging', title: 'Lounging', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_dinnerDate', title: 'Dinner date', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_coffeeShop', title: 'Coffee shop', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_museum', title: 'Museum', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_streetStyle', title: 'Street style', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_vacation', title: 'Vacation', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_resort', title: 'Resort', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_concert', title: 'Concert', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_festival', title: 'Festival', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_birthday', title: 'Birthday', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_cocktail', title: 'Cocktail', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_winter', title: 'Winter', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_autumn', title: 'Autumn', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_spring', title: 'Spring', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_summer', title: 'Summer', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_corporateEvent', title: 'Corporate event', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_charityGala', title: 'Charity gala', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_theater', title: 'Theater', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_movieNight', title: 'Movie night', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_roadTrip', title: 'Road trip', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_honeymoon', title: 'Honeymoon', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_graduation', title: 'Graduation', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_familyReunion', title: 'Family reunion', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_dance', title: 'Dance', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_housewarming', title: 'Housewarming', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_engagementParty', title: 'Engagement party', image: require('../assets/img/ref/ref1_businesswoman.jpg') },
    { id: 'category_poolParty', title: 'Pool party', image: require('../assets/img/ref/ref1_businesswoman.jpg') }
]

export type MappedData = 
{
    looks : Map<string, Look>;
    categories : Map<string, Category>
    categoriesByNames : Map<string, Category>
}

function BuildMappedData() : MappedData
{
    const newMappedData : MappedData = { looks: new Map<string, Look>, categories: new Map<string, Category>, categoriesByNames: new Map<string, Category> }
    
    d_looks.forEach(look => newMappedData.looks.set(look.id, look));
    d_categories.forEach(category => 
    {
        newMappedData.categories.set(category.id, category)
        newMappedData.categoriesByNames.set(category.title, category)
    });

    return newMappedData;
}

export const DebugData : MappedData = BuildMappedData();