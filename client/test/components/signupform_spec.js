import React from "react";
import { mount, shallow } from "enzyme";
import { expect } from "chai";

import { SignUpForm } from "../../src/app/components/user/SignUpForm";

describe("<SignUpForm /> ", () => {
    it("should have 5 input's and 1 button", (done) => {
        const wrapper = shallow(<SignUpForm />);
        expect(wrapper.find('input')).to.have.length(5);
        expect(wrapper.find('button')).to.have.length(1);
        done();
    });
})