
// let Tasks = '../api/model/todoListModel';
const Task = mongoose.model('Tasks');
describe('Test the model', () => {
    test('should be invalid if name is empty', () => {
        let m = new Tasks();
        expect(m.name).to.exist;
    });
});
