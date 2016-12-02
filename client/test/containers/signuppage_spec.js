import React from "react";
import { mount, shallow } from "enzyme";
import { expect } from "chai";

import { SignUpPage } from "../../src/app/containers/SignUpPage";
import { SignUpForm } from "../../src/app/components/user/SignUpForm";

describe("<SignUpPage /> ", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SignUpPage />);
    });
    it("should have SignUpForm component", (done) => {
        expect(wrapper.find(SignUpForm)).to.have.length(1);
        done();
    });

    it("SignUpForm component should have props changeHandler and clickedSignup", (done) => {
        expect(wrapper.find(SignUpForm).props().changeHandler).to.be.exist;
        expect(wrapper.find(SignUpForm).props().clickedSignup).to.be.exist;
        done();
    });
})