var supertest = require('supertest');

describe('UserController.index', function () {

    describe('#index()', function () {
        it('should return users', function (done) {
            supertest(sails.hooks.http.app)
                .get('/api/users')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, result) {
                    if(err) {
                        done(err);
                    } else {
                        result.body.should.be.an('array');
                        result.body.should.have.length(4);
                        done();
                    }
                });
        });
    });

});