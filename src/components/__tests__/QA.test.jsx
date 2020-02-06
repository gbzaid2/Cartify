import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme"
import { render } from "enzyme"
import renderer from "react-test-renderer"
import QA from "../questions-&-answers/QA.jsx";
import QuestionUnit from "../questions-&-answers/QuestionUnit.jsx"


describe("QA Display everything that would make it look functionally complete", () => {
    const wrapper = mount(<QA questions={[]} />);

    it ("should render the heading 'QUESTIONS & ANSWERS'")
    const allQuestions = wrapper.find(".all-questions");
    expect(allQuestions.exists()).toBe(true);
})

test("QA renders", () => {


    const wrapper = shallow(<QA questions = {[]}/>);
    const allQuestions = wrapper.find(".all-questions");
    expect(allQuestions.exists()).toBe(true);
});


test("QA renders questions, which renders answers", () =>{
    const question = [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": 0,
        "answers": {
            68: {
                "id": 68,
                "body": "We are selling it here without any markup from the middleman!",
                "date": "2018-08-18T00:00:00.000Z",
                "answerer_name": "Seller",
                "helpfulness": 4,
                "photos": []

            }
        }
    }]

    const wrapper = mount(<QA questions = {question}/>)
    const QUnit = wrapper.find(QuestionUnit);
    expect(QUnit).toBe(true);
})

