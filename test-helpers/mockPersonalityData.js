const mockPersonalities = [
    {
        "assessment_type": "TYPE_BASED",
        "scoring_scale": "NORMAL",
        "id": "career-deck",
        "name": "Careers",
        "description": "Personalize work-related sites and applications with Traitify’s Careers Assessment. The Careers deck offers developers rich data points including personality blend, types, traits and matching. Built for users including students, job-seekers, teams, human resources and leadership, Careers data can be used to enrich experiences, drive engagement and build more productive teams and work spaces.",
        "personality_group": "Careers II",
        "slide_count": 56,
        "badges": [
            {
                "image_small": "https://cdn.traitify.com/badges/7efdd76e-d5d2-4480-9677-5b442faab0ce_small",
                "image_medium": "https://cdn.traitify.com/badges/b2f03e28-0d9a-4309-a2f7-a68759ec8dff_medium",
                "image_large": "https://cdn.traitify.com/badges/5891e45e-25fb-40f0-a5f1-4ee5f6628e51_large",
                "font_color": "fff",
                "color_1": "ffa466",
                "color_2": "f79b5c",
                "color_3": "ea813b",
                "personality_type": "Action-Taker",
                "description": "'Action-Takers'...are hands-on doers.  They use manual and physical skills, working with technology or machinery to complete tasks.  Often there is an athletic aspect to their work.  They are handy, practical, systematic, applied, and 'down-to-earth.'  They are drawn to jobs that involve a specific skill-set and a concrete task.  They excel at solitary, goal-oriented work and 'getting the job done.'"
            },
            {
                "image_small": "https://cdn.traitify.com/badges/75e3eb04-0d9e-4c61-bb8c-8fa9a01ff6e8_small",
                "image_medium": "https://cdn.traitify.com/badges/a46b74e2-fa24-42e6-bc7c-3be49f2653c5_medium",
                "image_large": "https://cdn.traitify.com/badges/fb8c48a8-3c4e-4daf-a6d6-7400590e5d6a_large",
                "font_color": "fff",
                "color_1": "81abf7",
                "color_2": "6ea1ea",
                "color_3": "1761ba",
                "personality_type": "Analyzer",
                "description": "'Analyzers'...are inquisitive.  They delve, study and look deeply for information.  They have a keen eye and an experimental nature.  Analyzers use these capacities to figure out problems and search for the facts, often in a laboratory environment.  They excel at going beyond the surface toward uncovering information and discovery."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/22534d13-139d-4dc5-8c95-5b187d718ef6_small",
                "image_medium": "https://cdn.traitify.com/badges/057a57fb-5e2e-42a2-b4d9-659842c61d0a_medium",
                "image_large": "https://cdn.traitify.com/badges/523955a1-6a39-4629-a459-abf035d59cb2_large",
                "font_color": "fff",
                "color_1": "07c9a4",
                "color_2": "07c9a4",
                "color_3": "26c6a7",
                "personality_type": "Inventor",
                "description": "'Inventors'...are creative.  They take a contemporary, 'out of the box' approach to work and life. Inventors use themselves and other medium, often various forms of the arts, to communicate and interact with the world.  Inventors excel when they are 'lost' in their work, completely engrossed in a project."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/a8ce9aa6-77e2-47b4-b39d-d66c6f9dad0b_small",
                "image_medium": "https://cdn.traitify.com/badges/abbb01a8-e572-4fae-a0cd-4f3c263b079e_medium",
                "image_large": "https://cdn.traitify.com/badges/e3a02eae-1d5b-4d89-bde1-8e478d143b20_large",
                "font_color": "fff",
                "color_1": "f47171",
                "color_2": "ea6c6c",
                "color_3": "e24747",
                "personality_type": "Mentor",
                "description": "'Mentors'...are people-oriented.  They have great communication skills and are most fulfilled when assisting or working directly with others to improve a personal or societal situation. Mentors are patient and compassionate and work best in a group or on a team with a common goal. Mentors excel at working with others to help them learn and grow."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/c1ae9107-dd84-4aee-b384-670386e504fe_small",
                "image_medium": "https://cdn.traitify.com/badges/9eacce2e-4e55-4bb2-939d-6d37a56bf9a3_medium",
                "image_large": "https://cdn.traitify.com/badges/38bf1c4f-0a4f-4193-98af-022e4372b889_large",
                "font_color": "fff",
                "color_1": "6ad379",
                "color_2": "5bc467",
                "color_3": "317239",
                "personality_type": "Naturalist",
                "description": "'Naturalists'...are attached to the natural world, frequently working with plants and animals in their  environment.  Often nature lovers, they like to experience the world outdoors.  They are committed to preserving and protecting the planet and its natural resources. Serene, earthy, efficient and solid, they excel at working as one with the natural environment."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/7771bd03-4b02-472a-a0c0-c47b95202516_small",
                "image_medium": "https://cdn.traitify.com/badges/f12be687-22bb-40ab-8cf1-514be1ab784f_medium",
                "image_large": "https://cdn.traitify.com/badges/ef368b1e-0527-4a61-9ed2-452e0ff2f41a_large",
                "font_color": "fff",
                "color_1": "e9c704",
                "color_2": "e9c704",
                "color_3": "f7d719",
                "personality_type": "Planner",
                "description": "'Planners'...are the detail people.  They are methodical, precise, and detail-oriented.  Planners create systems to follow, and enjoy working with data, detail, words and numbers.  Great at manipulating data, they love procedure and routine.  Often found in office settings, they excel at completing detailed work in an organized manner."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/3984d9d4-3a94-41b6-a348-4e384d143a8f_small",
                "image_medium": "https://cdn.traitify.com/badges/738e82a3-baa4-4eca-a124-937b3b8f4474_medium",
                "image_large": "https://cdn.traitify.com/badges/10a80e0d-4f62-42f2-a1bb-4b9c5165a5fd_large",
                "font_color": "fff",
                "color_1": "a75bd8",
                "color_2": "a75bd8",
                "color_3": "",
                "personality_type": "Visionary",
                "description": "'Visionaries'...are pioneers.  They are great convincers and like to work with others in a 'take charge' capacity.  They love to take risks, make changes and set trends.  They tend to be   ambitious and energetic.  Visionaries are often in positions of prominence in business and the public eye and excel at taking charge and gaining the confidence of others."
            }
        ],
        "example_usage": null,
        "validated": true,
        "image_cover": "https://cdn.traitify.com/decks/no-image-available_large",
        "personality_traits": [],
        "personality_types": []
    },
    {
        "assessment_type": "TYPE_BASED",
        "scoring_scale": "NORMAL",
        "id": "core",
        "name": "Core",
        "description": "The Core Assessment measures overall elements of an individual’s personality, assessing a full range of characterological components in order to gain an overall picture of a person.  The personality information derived from this assessment can be used to gain a general understanding of the user’s personality, or to match individual’s with other people.",
        "personality_group": "Core",
        "slide_count": 49,
        "badges": [
            {
                "image_small": "https://cdn.traitify.com/badges/cfe8daa6-c8f3-4571-970a-b4299ca0c440_small",
                "image_medium": "https://cdn.traitify.com/badges/10f4e549-0c84-417b-be61-77a6d329153c_medium",
                "image_large": "https://cdn.traitify.com/badges/017b20d3-5427-40bc-9a4e-c021bc0798e8_large",
                "font_color": "fff",
                "color_1": "c3f476",
                "color_2": "bae868",
                "color_3": "91c61e",
                "personality_type": "Adventurous",
                "description": "Adventurous types are high-energy, independent and physical people. From traversing the natural and business worlds to physical challenges, “action-oriented” captures their boundless energy to tackle the next mountain. Determined and competitive, they are goal-oriented and don’t shy away from ambitious plans.  They feel rejuvenated and recharged after challenging themselves with a thrilling and often daring goal.  They value autonomy and are known for their passion for their pursuits."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/5b284f67-bdc4-497f-9bf1-b7041447e42a_small",
                "image_medium": "https://cdn.traitify.com/badges/5174f764-211d-4c87-947e-ae123f573626_medium",
                "image_large": "https://cdn.traitify.com/badges/267b870c-ec7c-4278-8819-e9188dbd4855_large",
                "font_color": "fff",
                "color_1": "fca56b",
                "color_2": "f99c69",
                "color_3": "d85e0b",
                "personality_type": "Charismatic",
                "description": "Charismatic types are born social leaders, full of energy and charisma.  Filled with natural exuberance and always ready with an animated story, their energy is contagious and they tend to draw an audience. They are often night owls and the life of the party.  In fact, they feel rejuvenated and recharged when socializing, so the bigger the crowd, the better.  Driven by sharing their energy and enthusiasm with others, Charismatics are prime candidates for leadership roles in their chosen professions.  "
            },
            {
                "image_small": "https://cdn.traitify.com/badges/bd8a6a21-9f4c-4943-9972-dc8b1bf01dd9_small",
                "image_medium": "https://cdn.traitify.com/badges/b3e2d622-1c67-40c6-869d-70a22c78b2d8_medium",
                "image_large": "https://cdn.traitify.com/badges/6d4e3eed-c7d8-43ba-921e-fab1aad2463a_large",
                "font_color": "fff",
                "color_1": "70fcaf",
                "color_2": "5af29b",
                "color_3": "02c45f",
                "personality_type": "Mellow",
                "description": "Mellow types are free spirits, who march to the beat of their own drummer. These casual types value taking a slower pace through life.  Not bound by custom or convention, they could care less about popular trends and fads and, instead, feel free to creatively approach all they do.  Others are drawn to their uniqueness, free spirit and artistic nature.  Those who are Mellow enjoy spending time with others, yet recharge when alone and engrossed in a creative project.  With their slower, laid back approach to life, they are driven by creativity and their desire not be constrained by any social standard."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/b54d2155-bb95-4077-a9af-db21d6fb1ed5_small",
                "image_medium": "https://cdn.traitify.com/badges/9ea6a67a-ff59-43c2-b269-27af07482df9_medium",
                "image_large": "https://cdn.traitify.com/badges/e199442b-c12d-48c8-a9e7-a7689a4f65dd_large",
                "font_color": "fff",
                "color_1": "25d3ef",
                "color_2": "1bc5ed",
                "color_3": "0598d8",
                "personality_type": "Rational",
                "description": "Rational types are thought-driven and interested in the world.  They are lifelong students intrigued by ideas, from work to books to world events. They look beyond the surface for deeper meaning and do not take anything at face value.  Always up for a hearty and heady debate, they enjoy time with others one on one or in small groups.  Rational types are natural problem solvers, especially when they can analyze all the information, and they are deliberate, thinking before they act.  Serious and reserved in nature, they feel rejuvenated after quiet time spent alone, perhaps reading or contemplating a problem and researching a solution.  They are driven by their intellect."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/8ef6edcf-4402-459b-8e37-fdbadb4a184b_small",
                "image_medium": "https://cdn.traitify.com/badges/ddd68adb-e729-4f17-8459-85a2502dc06f_medium",
                "image_large": "https://cdn.traitify.com/badges/cc4d49c3-3525-428d-aafb-d2b6592842bf_large",
                "font_color": "fff",
                "color_1": "f4e847",
                "color_2": "eddb3b",
                "color_3": "dbc628",
                "personality_type": "Reliable",
                "description": "Reliable types are fundamentally consistent and dependable in nature.  They are always on time, organized and efficient, and pay close attention to detail.  They enjoy spending time with others and are happy to help keep things organized, but they prefer someone else take the lead.  Reliable types are content to follow a plan and follow the rules.  Others notice how “together” they are and often seek their helping solving problems, especially drawing on their talent for working with words and numbers.  They feel recharged when life goes according to plan, and their routine is in tact.  They have high standards for themselves, and meet them."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/3dc33862-c637-4a53-aae8-6f4bde6b1f9f_small",
                "image_medium": "https://cdn.traitify.com/badges/e640b78b-4598-4e21-b272-9c83d3cd7047_medium",
                "image_large": "https://cdn.traitify.com/badges/d3f814f4-2c9f-4cc7-b49e-bb0a265cf373_large",
                "font_color": "fff",
                "color_1": "f98f8f",
                "color_2": "f78181",
                "color_3": "ed5858",
                "personality_type": "Social",
                "description": "Social types are well-rounded, practical people.  They approach everyday life without unnecessary drama, and seem unburdened by a full and busy schedule.  From tailgating to dinner parties, they are comfortable with others, and admired for their gregarious nature.  They are consistent, friendly and down to earth, no matter what the situation.  Social types work hard to avoid the disruption of conflict with others and recharge after a busy, uncomplicated day spent with friends.  They love to follow popular trends and fads and desire to enjoy life, without complicating it."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/50cf4e4b-b9f4-4222-9cd7-cca485bc2090_small",
                "image_medium": "https://cdn.traitify.com/badges/2c176748-1373-4be1-be4f-320704b74607_medium",
                "image_large": "https://cdn.traitify.com/badges/b5abd6f1-6b11-4270-8407-92b1969baca9_large",
                "font_color": "fff",
                "color_1": "ab97fc",
                "color_2": "9788f2",
                "color_3": "5e51e0",
                "personality_type": "Thoughtful",
                "description": "Thoughtful types are compassionate, self aware and reflective people.  Natural helpers, they enjoy being around others and get a sense of satisfaction from lending a hand, in their personal and professional lives.  They are sensitive to their own needs and the needs of others.  Team players by nature, they often prefer one-on-one encounters to socializing in a big crowd.  They recharge with meaningful conversation with close confidants and have a special talent for nurturing and sustaining relationships."
            }
        ],
        "example_usage": null,
        "validated": false,
        "image_cover": "https://cdn.traitify.com/decks/no-image-available_large",
        "personality_traits": [],
        "personality_types": []
    },
    {
        "assessment_type": "TYPE_BASED",
        "scoring_scale": "NORMAL",
        "id": "super-hero",
        "name": "Heroes",
        "description": "Working on recommendations engines or other projects that match individual tastes to products or services? Our Heroes deck allows developers to make recommendations based on science, not assumptions. Retrieve personality blends, types, traits and matching in just minutes. Segment users into distinct audiences to customize messaging, experience, offerings and more.",
        "personality_group": "Super Hero",
        "slide_count": 56,
        "badges": [
            {
                "image_small": "https://cdn.traitify.com/badges/0a2e8df3-bf4e-4eda-b747-0d27b28c1d29_small",
                "image_medium": "https://cdn.traitify.com/badges/482fcaab-7d14-46d9-abc9-5625cf9e74a8_medium",
                "image_large": "https://cdn.traitify.com/badges/9f05ac1f-275c-4fcd-a25f-cb56b9dac67b_large",
                "font_color": "fff",
                "color_1": "f9a458",
                "color_2": "ff9022",
                "color_3": "ea750a",
                "personality_type": "Berserker",
                "description": "The Berserker is a hero who uses a combination of high energy and an extreme attitude to be unbeatable in any fight. Berserkers are imposing to their foes, both in their physical might and their impulsive, unpredictable nature. When it comes to a cause about which they are passionate, know  that the Berserker will unleash their inner strength and fight to the very end. "
            },
            {
                "image_small": "https://cdn.traitify.com/badges/a9172014-f286-4161-be1b-b76666e5e4c9_small",
                "image_medium": "https://cdn.traitify.com/badges/5879391e-a885-478c-9870-b8ed93a11251_medium",
                "image_large": "https://cdn.traitify.com/badges/4d42cc7f-2ec6-441a-b165-d0a9f30b9e6c_large",
                "font_color": "fff",
                "color_1": "fcd163",
                "color_2": "ffc522",
                "color_3": "e5ab05",
                "personality_type": "Detective",
                "description": "The Detective is a hero focused on uncovering every detail in the pursuit of justice.  Possessing naturally inquisitive minds, Detectives are vigilant and meticulous as they uncover devious plots and schemes. They see themselves as making the sacrifices others won't, even if it means having little time for those who do not share their goal of a crime free world."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/bb30d79e-958b-48fe-82d6-57d2d3da0b6f_small",
                "image_medium": "https://cdn.traitify.com/badges/f86520ea-425d-4c78-a004-38e23fb4133c_medium",
                "image_large": "https://cdn.traitify.com/badges/b9995f84-9484-483f-bdd2-34dcd1c26ff7_large",
                "font_color": "fff",
                "color_1": "5deef9",
                "color_2": "1dd7ef",
                "color_3": "00accf",
                "personality_type": "Innovator",
                "description": "The Innovator is a hero who finds new and groundbreaking solutions with which to combat foes. They have a knack for using gadgets to fight their way out of impossible situations, and as criminals keep getting smarter, the Innovator strives to keep finding new ways to foil their devious plots.  No matter what challenges stand in their path, Innovators are sure to persevere with a sense of enthusiasm and creativity."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/429e99ee-3ca8-4e24-a307-67af4fd80c64_small",
                "image_medium": "https://cdn.traitify.com/badges/64090fe5-f674-4b85-810d-1bcda592c8d7_medium",
                "image_large": "https://cdn.traitify.com/badges/7008ceb7-b609-4a60-9854-65bcc2f0d417_large",
                "font_color": "fff",
                "color_1": "8954d3",
                "color_2": "7939c4",
                "color_3": "5b21ad",
                "personality_type": "Intellectual",
                "description": "The Intellectual is a hero who relies on brain over brawn. Rational and intellectually driven,  they are cognitive of all elements of battle and use their superior minds to overcome the forces that oppose them. Practical and reserved, they prefer to spend their time growing in knowledge and using it for the betterment of the world, and to defeat any adversary who claims intellectual superiority."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/455bdf12-bb0c-4248-b92e-b9184e0242cc_small",
                "image_medium": "https://cdn.traitify.com/badges/a53d4e12-7ee7-4383-90c0-b4b14e8b77da_medium",
                "image_large": "https://cdn.traitify.com/badges/e645f701-470d-47e7-93d8-086ccda565eb_large",
                "font_color": "fff",
                "color_1": "38ce74",
                "color_2": "20b75d",
                "color_3": "099341",
                "personality_type": "Lonewolf",
                "description": "Lonewolves are heroes who are independent from the crowd.  They prefer to go their own way unless a team is needed to accomplish a goal. Introspective and serious, they use their powers in daring acts of heroism but refuse to take the spotlight for themselves. Despite a hard exterior, those few who get to know the Lonewolf will find a sensitive and self-aware soul who is up to any challenge."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/6ba993fa-cabd-44f9-80eb-df54f68822cb_small",
                "image_medium": "https://cdn.traitify.com/badges/e2c33ee1-d6ac-474b-bb99-4d3961a140df_medium",
                "image_large": "https://cdn.traitify.com/badges/9cb7749b-b997-4264-979f-9a8319c69e66_large",
                "font_color": "fff",
                "color_1": "3090e5",
                "color_2": "1977dd",
                "color_3": "0861b2",
                "personality_type": "Noble",
                "description": "The Noble is a hero who is stable and reliable, ready to save the day no matter what the circumstances. Unbending in their belief that good should triumph over evil, this unbreakable conviction allows them to face down even the deadliest of enemies and emerge unscathed.  Nobles are caring and empathic, never willing to turn their back on those in need."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/83690126-85cb-4aa0-a400-0e326b6e2938_small",
                "image_medium": "https://cdn.traitify.com/badges/b1d19129-328e-480f-9f48-876392cd0c1c_medium",
                "image_large": "https://cdn.traitify.com/badges/65ff6d8c-43e8-443a-b0a3-0369e6e201ff_large",
                "font_color": "fff",
                "color_1": "e53838",
                "color_2": "d02424",
                "color_3": "bc1919",
                "personality_type": "Team Player",
                "description": "The Team Player is a hero who bonds the team together with a playful, outgoing nature.  Quick to aid in a fight, Team Players keep it casual and light-hearted, even when the fate of the world hangs in the balance. They not only prefer to work with a team but develop strong attachments to their teammates. Team Players will fight loyally, facing any obstacle that comes their way."
            }
        ],
        "example_usage": null,
        "validated": false,
        "image_cover": "https://cdn.traitify.com/decks/no-image-available_large",
        "personality_traits": [],
        "personality_types": []
    },
    {
        "assessment_type": "TYPE_BASED",
        "scoring_scale": "NORMAL",
        "id": "introvert-extrovert",
        "name": "Introvert / Extrovert",
        "description": "The Introversion/Extroversion Deck measures social style, and a user’s proclivity to be an introvert or an extrovert.  This is a key feature of understanding the needs and preferences of user’s and is an important element of personality.  This information can be combined with other personality data in order to drill down into an important element of understanding personality.",
        "personality_group": "Introversion/Extroversion",
        "slide_count": 16,
        "badges": [
            {
                "image_small": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/small",
                "image_medium": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/medium",
                "image_large": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/large",
                "font_color": "ffffff",
                "color_1": "d0d2d3",
                "color_2": "bbbdbf",
                "color_3": "6d6e70",
                "personality_type": "Extrovert",
                "description": "Extroverts rejuvenate, recharge and replenish themselves through social interactions. They enjoy other people and group activities which they find exciting, stimulating and energizing. As long as others are involved, extroverts are ready to participate, often on the spur of the moment, and they are loathe leave the momentum created by the group. To the extrovert, silence feels empty, and solitary activities may seem lonely and tedious. The extrovert’s strength is his ability to navigate the world of people, in work and play."
            },
            {
                "image_small": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/small",
                "image_medium": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/medium",
                "image_large": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/large",
                "font_color": "ffffff",
                "color_1": "d0d2d3",
                "color_2": "bbbdbf",
                "color_3": "6d6e70",
                "personality_type": "Introvert",
                "description": "Introverts enjoy their time alone to rejuvenate, recharge and refresh their inner equilibrium. Rather than looking outside of themselves to others, for stimulation and excitement, introverts look inside themselves, choosing solitary activities as a counterbalance to their social lives. To the introvert, the sound of quiet feels peaceful and soothing. Introverts enjoy the company of others, often preferring intimate gatherings to large groups. The strength of the introvert is knowing their limits, and finding a balance between solitary and social."
            }
        ],
        "example_usage": null,
        "validated": false,
        "image_cover": "https://cdn.traitify.com/decks/no-image-available_large",
        "personality_traits": [],
        "personality_types": []
    },
    {
        "assessment_type": "TYPE_BASED",
        "scoring_scale": "NORMAL",
        "id": "movies",
        "name": "Movies",
        "description": "The Movie Deck measures elements of an individual’s personality with a fun spin towards movie preference.  There are seven distinct types of movie personalities, each capturing elements of the user, including his/her preferences and interests.  The personality information derived from this assessment can be used for the purpose of entertainment recommendations as well as a general understanding of the user’s personality.",
        "personality_group": "Movies",
        "slide_count": 42,
        "badges": [
            {
                "image_small": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/small",
                "image_medium": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/medium",
                "image_large": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/large",
                "font_color": "ffffff",
                "color_1": "d0d2d3",
                "color_2": "bbbdbf",
                "color_3": "6d6e70",
                "personality_type": "Believer",
                "description": "Believers are ready for an escape into another world. Or time. Or dimension.  Luckily, Fantasy and Science Fiction movies are chock-full of all of these options!  With imaginative and light-hearted spirits, they are ready to devote themselves to a fantastical story and totally let go of the harsh realities of today's world.  Believers should grab a magic wand, hop onto a spacecraft or drop into a wormhole--their movies are waiting for them!\r\n"
            },
            {
                "image_small": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/small",
                "image_medium": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/medium",
                "image_large": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/large",
                "font_color": "ffffff",
                "color_1": "d0d2d3",
                "color_2": "bbbdbf",
                "color_3": "6d6e70",
                "personality_type": "Dramatic",
                "description": "Dramatics are natural people watchers and people who enjoys realistic situations for entertainment. They like to empathize and relate with the characters they're watching, which also makes them great friends in their day to day lives. Dramatics should call someone special in to them and make a plan to check out the latest plot-driven drama feature. They could make a night of it! Nothing is a better follow-up to a movie than some pie and great conversation!\r\n"
            },
            {
                "image_small": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/small",
                "image_medium": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/medium",
                "image_large": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/large",
                "font_color": "ffffff",
                "color_1": "d0d2d3",
                "color_2": "bbbdbf",
                "color_3": "6d6e70",
                "personality_type": "Indie",
                "description": "Independent filmmaking is alive and well thanks to outside the box thinkers like these movie-goers! Indies appreciate getting the chance to see the full artistic vision of the director without major studios being involved and leaving meaningful scenes on the cutting room floor. Being the artistic type, it intrigues Indies to see what people can do using a 'more with less' approach to their filming. There are countless movies of this caliber available. Indies can swing by their local theaters, support the independent film industry, and experience art in motion!"
            },
            {
                "image_small": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/small",
                "image_medium": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/medium",
                "image_large": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/large",
                "font_color": "ffffff",
                "color_1": "d0d2d3",
                "color_2": "bbbdbf",
                "color_3": "6d6e70",
                "personality_type": "Laughaholic",
                "description": "Laughaholics want their entertainment and want it now! \"Surely, you can't be serious?\" they might say. Well, they are serious, and don't call them Shirley. It appears that they're in the mood to laugh and see something relatively easy and fun. Now it's just a matter of deciding what kind of comedy they want to see. Laughaholics should try one of these suggestions, then call everyone for an awesome LOL experience!\r\n"
            },
            {
                "image_small": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/small",
                "image_medium": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/medium",
                "image_large": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/large",
                "font_color": "ffffff",
                "color_1": "d0d2d3",
                "color_2": "bbbdbf",
                "color_3": "6d6e70",
                "personality_type": "Nail Biter",
                "description": "Nail Biters are in need of a cinematic thriller tonight--something only demons, zombies, axe-murderers, psychos, beasts, blood, guts, and terror can offer! A horror movie will be perfect for tonight and is one of the most enjoyable theatre experiences. When it's a packed house, these movie-goers and everyone in the audience scream, gasp, and laugh as one. Time for Nail Biters to make plans to see the latest thriller and get scared out of their seats!\r\n"
            },
            {
                "image_small": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/small",
                "image_medium": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/medium",
                "image_large": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/large",
                "font_color": "ffffff",
                "color_1": "d0d2d3",
                "color_2": "bbbdbf",
                "color_3": "6d6e70",
                "personality_type": "Romantic",
                "description": "Romantics have whimsical minds and a full hearts. Cinema regularly touches on relationships, love, and loss because it's something all can relate to and pulls on the Romantics' heartstrings the hardest. Every now and then, these movie-goers need to be reminded of how it feels to act with their hearts. Even if for those who believe they aren't saps, there's a hopeless romantic in all of them that dreams of a dance in the moonlight with their soulmate. Whether it be a \"You had me at hello\" or a \"Here's lookin' at you, kid,\" Romantics are in the mood for love, and it's out there waiting for them.\r\n"
            },
            {
                "image_small": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/small",
                "image_medium": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/medium",
                "image_large": "https://s3.amazonaws.com/traitify-api/badges/no-image-available/large",
                "font_color": "ffffff",
                "color_1": "d0d2d3",
                "color_2": "bbbdbf",
                "color_3": "6d6e70",
                "personality_type": "Stunt Double",
                "description": "Oh, Stunt Doubles are ready for an adrenaline rush! It's time for them to catch an action-packed, explosive, big-budget film to satisfy their high energy! With the resurgence of superhero movies and fantasy epics, there's never a shortage of great battles, heroes, villains, amazing sets, and unbelievable, fast-paced storylines. Stunt Doubles should assemble their teams and get fired up to see the hottest action film going!\r\n"
            }
        ],
        "example_usage": null,
        "validated": false,
        "image_cover": "https://cdn.traitify.com/decks/no-image-available_large",
        "personality_traits": [],
        "personality_types": []
    },
    {
        "assessment_type": "TYPE_BASED",
        "scoring_scale": "NORMAL",
        "id": "persuasion",
        "name": "Persuasion",
        "description": "Uncover distinct leadership styles with the Persuasion Assessment. The Persuasion Deck tells you where users derive their powers of persuasion and what types of followers they naturally attract. Seek out best-fit leaders and be wary of aggressive, devouring influencers. With the Persuasion Deck, you can gauge individual styles of persuasion to ensure compatibility between leaders and supporters.",
        "personality_group": "Persuasion",
        "slide_count": 42,
        "badges": [
            {
                "image_small": "https://cdn.traitify.com/badges/0f0f84dd-8f56-45f6-b903-6ed6abb3b367_small",
                "image_medium": "https://cdn.traitify.com/badges/b49aba57-7580-42a3-aeba-6d6f15140b22_medium",
                "image_large": "https://cdn.traitify.com/badges/f6503104-ec7b-4ce0-b418-f32cc1bfb1d8_large",
                "font_color": "fff",
                "color_1": "cd92f7",
                "color_2": "f48c37",
                "color_3": "ffe137",
                "personality_type": "Celebrity",
                "description": "Popular and idealized, The Celebrity’s power is derived from the adoring masses.  The Celebrity  attracts those who are drawn to superstar status and who like to live vicariously through icons and heroes.  "
            },
            {
                "image_small": "https://cdn.traitify.com/badges/2ffb8c1c-c436-41a1-8102-d82a50762965_small",
                "image_medium": "https://cdn.traitify.com/badges/0719de9b-d43b-4400-898e-4faf1d334597_medium",
                "image_large": "https://cdn.traitify.com/badges/ea4fd0ea-a409-4284-8ccf-03098a2f5bd3_large",
                "font_color": "fff",
                "color_1": "ffe843",
                "color_2": "f48c37",
                "color_3": "ffe137",
                "personality_type": "Charmer",
                "description": "A people-person who connects deeply with others, the Charmer’s power is derived from   the capacity for and strength of relationships.  The Charmer is attuned to the emotional needs of others and can draw people in like flies to honey. "
            },
            {
                "image_small": "https://cdn.traitify.com/badges/8ed46dd5-54fc-4041-ada6-b9b683ab29a1_small",
                "image_medium": "https://cdn.traitify.com/badges/34b4928c-2f9e-44a7-a66a-0f43976c526f_medium",
                "image_large": "https://cdn.traitify.com/badges/ea91cac5-754c-46ef-9fad-e00207b49e20_large",
                "font_color": "fff",
                "color_1": "1e094d",
                "color_2": "f48c37",
                "color_3": "ffe137",
                "personality_type": "Closer",
                "description": "Savvy and confident, the Closer’s power is derived from profound manipulative skill in negotiating with others, especially those who seek power and success, and are fearful of being left behind.  The Closer  works with people who have vision and are upwardly mobile and on the same path to prosperity and fortune.  "
            },
            {
                "image_small": "https://cdn.traitify.com/badges/bfdd2dd3-313f-4969-bd35-6e16e101f807_small",
                "image_medium": "https://cdn.traitify.com/badges/11738760-3211-478e-8320-01879ad0d3e4_medium",
                "image_large": "https://cdn.traitify.com/badges/49afa5b5-32e0-4145-86d3-c1b9a1efc32a_large",
                "font_color": "fff",
                "color_1": "20e5e5",
                "color_2": "f48c37",
                "color_3": "ffe137",
                "personality_type": "Evangelist",
                "description": "Charismatic and spiritual, the Evangelist’s power is derived from engendering hope and fear in the flock of followers.  The Evangelist recruits and attracts those who are desperate and seeking direction, guidance or rescue. "
            },
            {
                "image_small": "https://cdn.traitify.com/badges/98113bab-dd10-411e-8f44-7ad78e512b05_small",
                "image_medium": "https://cdn.traitify.com/badges/1f7c5e77-de18-4086-9726-9c0ea1423527_medium",
                "image_large": "https://cdn.traitify.com/badges/9b109a5a-0c90-4ef9-8af3-e6e1dbee743f_large",
                "font_color": "fffff9",
                "color_1": "90a4ae",
                "color_2": "90a4ae",
                "color_3": "90a4ae",
                "personality_type": "Politician",
                "description": "Ambitious and diplomatic, the Politician’s power is derived from institutional authority.  Feeling free to follow the laws (or not)  for personal advantage, the Politician is highly effective with law-abiding citizens who look to authorities for guidance."
            },
            {
                "image_small": "https://cdn.traitify.com/badges/4fd11802-1979-455b-855d-4144c4c18483_small",
                "image_medium": "https://cdn.traitify.com/badges/36b46b15-7919-42a9-b6eb-926781471c1e_medium",
                "image_large": "https://cdn.traitify.com/badges/04561b5d-6536-45b7-8900-b57877f9eaa2_large",
                "font_color": "fff",
                "color_1": "0289a8",
                "color_2": "f48c37",
                "color_3": "ffe137",
                "personality_type": "Shark",
                "description": "Biting and aggressive, The Shark’s power is derived from  ruthlessness.  Consuming and devouring anything or anyone who gets in the way, the Shark remains focused on the prey.  Where there is a shark, there is danger. "
            }
        ],
        "example_usage": null,
        "validated": false,
        "image_cover": "https://cdn.traitify.com/decks/no-image-available_large",
        "personality_traits": [],
        "personality_types": []
    }
]
