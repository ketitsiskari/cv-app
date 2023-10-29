import React from "react";
import Address from "../../modules/Address";
import Box from "../../modules/BoxSection";

const MyAddress = () => {
    return(
        <section id="contacts-section" data-testid="contacts-section">
                <Box title="Contacts"/>
                <Address 
                  phoneNumber="+995 557 72 77 88"
                  email="ketitsiskaridze@gmail.com"
                  linkedInUrl="https://www.linkedin.com/in/keti-tsiskaridze-0938b4283/"
                  facebookUrl="https://www.facebook.com/keti.tsiskaridze"
                  skypeUsername="your.skype.username"
      />
            </section>

    );
};
export default MyAddress;