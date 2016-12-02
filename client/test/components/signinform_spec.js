import React from "react";
import { mount, shallow } from "enzyme";
import { expect } from "chai";

import { SignInForm } from "../../src/app/components/user/SignInForm";

describe("<SignInForm /> ", () => {
    it("should have 2 input's and 1 button", (done) => {
        const wrapper = shallow(<SignInForm />);
        expect(wrapper.find('input')).to.have.length(2);
        expect(wrapper.find('button')).to.have.length(1);
        done();
    });
})