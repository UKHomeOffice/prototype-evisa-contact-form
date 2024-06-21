module.exports = superclass => class extends superclass {
    getValues(req, res, next) {
        const images = req.sessionModel.get('images');
        console.log('=====================');
        console.log(images, req.sessionModel.get('full-name'));
        console.log('=====================');

        return super.getValues(req, res, next);
    }
}