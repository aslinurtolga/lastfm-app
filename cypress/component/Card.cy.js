/* eslint-disable no-undef */
import { mount } from "cypress/react18";
import Card from "../../src/components/Card";

describe("Card Test", () => {
  beforeEach(() => {
    mount(
      <Card
        item={{
          image: [
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/d8888f990ce044e4c856550a7041c83e.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/d8888f990ce044e4c856550a7041c83e.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/d8888f990ce044e4c856550a7041c83e.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/d8888f990ce044e4c856550a7041c83e.png",
              size: "large",
            },
          ],
          name: "Fearless",
          playcount: 25268278,
          url: "https://www.last.fm/music/Taylor+Swift/Fearless",
        }}
        name="Taylor Swift"
      />
    );
  });

  it("image test", () => {
    cy.get(".image").should("be.visible");
    cy.get(".image").should("have.css", "border-radius", "0px");
    cy.get(".image").should("have.css", "width", "174px");
  });

  it("name testing", () => {
    cy.get(".name").should("be.visible");
    cy.get(".name").should("have.css", "font-size", "13.28px");
    cy.get(".name").should("have.css", "font-weight", "700");
  });

  it("playcount testing", () => {
    cy.get(".playcount").should("be.visible");
    cy.get(".playcount").should("have.css", "font-size", "16px");
  });
});
