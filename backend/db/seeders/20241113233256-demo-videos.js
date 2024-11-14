'use strict';
const videos = [
  {
    userId: 1,
    videoUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/blade-shredded-noodles.MOV",
    thumbnailUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/thumbnails/tb_daoxiaomian.jpg",
    title: "Blade Shredded Noodles with Beef in A Spicy Sauce",
    description: "The blade-shredded noodles are one of the most popular noodle types in China, particularly in the northern region for its bouncy and chewy texture. Often comes with a bold spice-infused beef(pork)-bone broth, garnish with green veggies and fragrant herbs(cilantro) in the end for a balance of freshness. This recipe is easy to follow and when you make it, you’ll discover that the noodles, or should I say, Carbs are just as delicious if not more addictive than meat.",
  },
  {
    userId: 1,
    videoUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/braised-pork.MOV",
    thumbnailUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/thumbnails/tb_jiecairou.jpg",
    title: "Steamed Pork Belly with Preserved Vegetables",
    description: "The steamed pork belly with preserved vegetables is THE-GO-TO-DISH for many families and restaurants as it is match-made in food heaven with freshly steamed white rice, the pork belly was first boiled, then fried to with skin-down to get that wrinkly texture, then finally steamed for 2 hours plus with preserved veggies. Familiar savory flavors from the soy-based sauces, infused with spices, and tenderized with the steaming technique, this dish is one to be mouth-watering for.",
  },
  {
    userId: 1,
    videoUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/hui-noodles.MOV",
    thumbnailUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/thumbnails/tb_huimian.jpg",
    title: "Hand-pulled Noodles with Lamb-Bone Broth",
    description: "The hand-pulled noodle is also one of the more popular noodle varieties in rich history of Chinese cuisine art. Noodles made from a well-rested and oiled-up dough is moist and tender with a bouncy chewy texture in the center. The broth is the star of this dish as it’s made with lamb bone and meat and seasoned only with salt to showcase the delicacy of the lamb flavor.",
  },
  {
    userId: 1,
    videoUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/jennies-cookie.MOV",
    thumbnailUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/thumbnails/tb_jenniecookie.jpg",
    title: "Jennie’s Cookie, so far the best butter cookie recipe I have encountered",
    description: "The Jennie’s cookie was originally created from the well-known Jennie’s bakery in Hong Kong. It is considered as one of the best butter cookies recipes, known for its rich sweet cream dairy flavor and airy& crumbly texture, it then became famous in social media, many food content creators made their own version of Jennie’s cookie. If you are looking for the ultimate butter cookie recipe, this will be the one, and when you bake them, the entire house will be smell like butter marries milk.",
  },
  {
    userId: 1,
    videoUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/lurRou-rice.MOV",
    thumbnailUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/thumbnails/tb_luroufan.jpg",
    title: "Braised Pork Sauce over Rice, a traditional chinese weeknight quick fix",
    description: "The braised pork sauce over rice is the go-to comfort food and so-called Mom’s food in Taiwan. The pork was first blanched in boiling water then cut in small cubes and braised with soy sauce, oyster sauce, a variety of spices and shallots. The thick broth created while braising the pork is perfect to soak other ingredients like bean-curd knots and boiled eggs. This hearty and easy-to-make dish will be the best option for weeknight dinner with little to prepare for.",
  },
  {
    userId: 1,
    videoUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/snowy-fudge.MOV",
    thumbnailUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/thumbnails/tb_snowyfudge.jpg",
    title: "Snowy Fudge, a twist of nougat with freeze-dried strawberries and roasted pistachios",
    description: "The snowy fudge was inspired by the making of nougat (Nougat is a family of confections made with sugar or honey, roasted nuts, whipped egg whites, and sometimes chopped candied fruit.) It became popular on social media and all food content creators have made their version of this candy. Generally made with roasted mixed nuts of preference, butter biscuits or gram crackers, and freeze-dried strawberries. All ingredients tossed in the marshmallow, milk powder & butter mixture. After its cooled, cut into bit-size pieces and dusted with milk powder for that snowy effect. This candy is rich in texture and flavor, beautiful presentation, an absolute showstopper as a home-made gift on special occasions.",
  },
  {
    userId: 2,
    videoUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/32cdacf63b9e4fae9554ebff86fbf1ec.mp4",
    thumbnailUrl: "https://aaprojects.s3.us-west-1.amazonaws.com/thumbnails/tb_testing.jpg",
    title: "Testing vid, shredded coconut sweet cream bread",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  // Add other entries as needed
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Videos', videos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Videos', null, {});
  }
};
