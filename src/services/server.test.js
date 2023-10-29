// import { createServer } from "miragejs";
import { makeServer } from "./server";

let server;

beforeEach(() => {
  server = makeServer({ environment: "test" });
});

afterEach(() => {
  server.shutdown();
});

describe("Mirage Server", () => {
  test("It returns all educations", async () => {
    const educations = await fetch("/api/educations").then((res) => res.json());

    expect(educations).toHaveLength(3);
    expect(educations[0].title).toBe("Title 0");
  });

  test("It returns all skills", async () => {
    const skills = await fetch("/api/skills").then((res) => res.json());
    expect(skills).toHaveLength(0);
  });

  test("It can create a new skill", async () => {
    const newSkill = {
      name: "JavaScript",
      range: 90,
    };

    const response = await fetch("/api/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSkill),
    });

    const createdSkill = await response.json();

    expect(createdSkill.name).toBe(newSkill.name);
    expect(createdSkill.range).toBe(newSkill.range);
  });
});
