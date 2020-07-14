// ===============================================================================
// DATA
// Below data will hold all of the potential matches.
// ===============================================================================

var friends = [
    {
        matchName: "Jaq",
        matchPhoto: "https://i.pinimg.com/originals/a8/86/27/a8862704596d572f3be54bfa1ef55456.jpg",
        matchScores: 
            [
                1,
                2,
                2,
                1,
                2,
                1,
                1,
                4,
                1,
                1
            ]
    },
    {
        matchName: "Gus",
        matchPhoto: "https://i.pinimg.com/originals/8c/1e/bd/8c1ebd31c2204256f1a318942d7f1c07.jpg",
        matchScores: 
            [
                1,
                5,
                3,
                1,
                4,
                1,
                1,
                2,
                1,
                1
            ]
    },
    {
        matchName: "Mary",
        matchPhoto: "https://vignette.wikia.nocookie.net/parody/images/4/46/Mary_in_Cinderella_II-_Dreams_Come_True.jpg/revision/latest?cb=20170601223110",
        matchScores: 
            [
                  1,
                  4,
                  1,
                  2,
                  5,
                  1,
                  3,
                  5,
                  3,
                  1
            ]
    },
    {
        matchName: "Mickey Mouse",
        matchPhoto: "https://vignette.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_3.jpeg/revision/latest/top-crop/width/360/height/360?cb=20190305233033",
        matchScores: 
            [
                5,
                4,
                4,
                4,
                5,
                5,
                5,
                5,
                5,
                5
            ]
    },
    {
        matchName: "Minnie Mouse",
        matchPhoto: "https://vignette.wikia.nocookie.net/disney/images/3/36/Minnie_Mouse_pose_.jpg/revision/latest/top-crop/width/360/height/450?cb=20170709133603",
        matchScores: 
            [
                5,
                2,
                1,
                4,
                5,
                5,
                5,
                5,
                5,
                5
            ]
    },
    {
        matchName: "Remi",
        matchPhoto: "https://www.khwiki.com/images/thumb/7/77/Little_Chef_KHIII.png/250px-Little_Chef_KHIII.png",
        matchScores: 
            [
                2,
                1,
                5,
                5,
                4,
                5,
                5,
                4,
                5,
                5
            ]
    },
    {
        matchName: "Jerry",
        matchPhoto: "https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png",
        matchScores: 
            [
                5,
                5,
                5,
                1,
                1,
                1,
                1,
                1,
                5,
                5
            ]
    },
    {
        matchName: "Miss Bianca",
        matchPhoto: "https://i.pinimg.com/originals/3f/bb/b8/3fbbb8bafe3485d18520fe077eba674f.jpg",
        matchScores: 
            [
                4,
                1,
                1,
                4,
                4,
                5,
                4,
                5,
                4,
                3
            ]
    },
    {
        matchName: "Bernard",
        matchPhoto: "https://vignette.wikia.nocookie.net/poohadventures/images/2/2f/Rescuers-down-under-disneyscreencaps.com-4389.jpg/revision/latest/scale-to-width-down/340?cb=20170313010051",
        matchScores: 
            [
                5,
                4,
                4,
                2,
                2,
                4,
                3,
                5,
                2,
                1
            ]
    },
    {
        matchName: "Stuart Little",
        matchPhoto: "https://img.buzzfeed.com/buzzfeed-static/static/2017-09/13/12/asset/buzzfeed-prod-fastlane-03/sub-buzz-5026-1505321845-1.jpg?crop=290%3A453%3B0%2C0&downsize=300:*&output-format=auto&output-quality=auto",
        matchScores: 
            [
                1,
                2,
                3,
                3,
                4,
                3,
                4,
                3,
                3,
                2
            ]
    },
    {
        matchName: "Fievel",
        matchPhoto: "https://vignette.wikia.nocookie.net/anamericantail/images/6/60/74942399790998.jpg/revision/latest/scale-to-width-down/340?cb=20170807010406",
        matchScores: 
            [
                1,
                4,
                4,
                1,
                3,
                3,
                1,
                2,
                4,
                1,
            ]
    },
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  