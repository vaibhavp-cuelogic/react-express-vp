import React from "react";
import { mount, shallow } from "enzyme";
import { expect } from "chai";

import { SignInPage } from "../../src/app/containers/SignInPage";
import { SignInForm } from "../../src/app/components/user/SignInForm";

describe("<SignInPage /> ", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<SignInPage />);
    });
    it("should have SignInForm component", (done) => {
        expect(wrapper.find(SignInForm)).to.have.length(1);
        done();
    });

    it("SignInForm component should have props changeHandler and clickedLogin", (done) => {
        expect(wrapper.find(SignInForm).props().changeHandler).to.be.exist;
        expect(wrapper.find(SignInForm).props().clickedLogin).to.be.exist;
        done();
    });

})