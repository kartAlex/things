const Cat = require('../db/models/cat');

exports.catList = function(req, res) {
    Cat.find({ gender: 'male', age: 3 }, function (err, cats) {
        if (err) {
            return console.log(err);
        }

        const output = [];

        for (let i = 0; i < cats.length; i++) {
            output.push({
                name: cats[i].name,
                gender: cats[i].gender,
                color: cats[i].color,
                age: cats[i].age,
            });
        }

        res.send(output);
    });
};

exports.catsCreate = [

    (req, res, next) => {

        function catsCreate(name, color, age, gender, cb) {
            const DATA = {
                name,
                color,
                age,
                gender,
            };
            const CAT = new Cat(DATA);

            CAT.save(function (err) {
                if (err) {
                    cb(err, null);
                    return;
                }

                console.log('New Cat: ' + CAT);
                cats.push(CAT);
                cb(null, CAT);
            });
        }

        console.log(req);

        res.send(req.body);
    },
];

// exports.cat_list = (req, res, next) => {
//     var gender = req.param.gender;
//
//     console.log(gender);
//
//     Cat.find({ gender: 'male' }, (err, cats) => {
//         // if (err) return console.error(err);
//         //
//         // for (let i = 0; i < cats.length; i++){
//         //     console.log(cats[i].name);
//         // }
//         //
//         // return next();
//     })
//         .exec(function (err, cats) {
//             if (err) {
//                 return next(err);
//             }
//
//             console.log(cats);
//
//             res.send({ data: cats });
//     });

    // console.log(x);

    // async.series([
    //     x,
    // ],
    // function(err, results) {
    //     if (err) {
    //         console.log('FINAL ERR: '+err);
    //     }
    //     else {
    //         console.log('xxx: ' + cats);
    //     }
    //
    //     res.send({ test: '123' });
    // });
    //
    // res.send(results);

    // async.parallel({
    //     cats_count: function(cb) {
    //         Cat.count(cb);
    //     },
    //
    //     cats_find: function(cb) {
    //         Cat.find(function (err, cats) {
    //             if (err) return console.error(err);
    //
    //             console.info('cats find', cats);
    //
    //             return cats;
    //         }); // Pass an empty object as match condition to find all documents of this collection
    //     },
    // }, function(err, results) {
    //     res.send({ title: 'Local Library Home', error: err, data: results });
    // });

    // console.log('cats_list controller');
    //
    // res.send({title: 'Local Library Home'})

    // Cat.find({}, 'title author')
    //     .populate('author')
    //     .exec(function (err, cats) {
    //         if (err) { return next(err); }
    //         //Successful, so render
    //
    //         console.log('lala');
    //
    //         res.render('cats_list', { cats_list: cats });
    //     });

    // Kitten.find({ name: /^test/ }, function (err, obj) {
//     if (err) return console.error(err);
//
//     console.log(obj);
// });
// };