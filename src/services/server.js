import { createServer, Model } from "miragejs";

export function makeServer() {
  createServer({
    models: {
      education: Model,
      skill: Model,
    },

    seeds(server) {
      server.create("education", {
        date: 2015,
        title: "Dentist",
        description:
          "I have graduated from Tbilisi State Medical University with a Master's degree and my educational background in medicine allows me to understand and anticipate the needs of healthcare professionals and patients, ensuring the development of insightful and compliant medical web applications.\r\n",
      });
      server.create("education", {
        date: 2016,
        title: "Residency in dentistry",
        description:
          "Successfully completed the national dental licensing examination, becoming a licensed Doctor of Dentistry.\r\n",
      });
      server.create("education", {
        date: 2022,
        title: "Courses of Entrepreneurship amd WordPress development",
        description:
          "Completed the WE-Tech program by Georgian American University, enhancing my skills in new technologies and innovations through practical involvement with GeoLab.Advanced my expertise in digital entrepreneurship and WordPress development through courses offered by Kants Academy.\r\n",
      });
      server.create("education", {
        date: 2023,
        title: "FrontEnd",
        description:
          "Enhanced Front-End development expertise through EPAM's upskill program, staying abreast of the latest trends and methodologies in the field.\r\n",
      });
    },

    routes() {
      this.namespace = "api";

      this.get(
        "/educations",
        (schema) => {
          return schema.educations.all();
        },
        { timing: 3000 }
      );

      this.get(
        "/skills",
        (schema) => {
          return schema.skills.all();
        },
        { timing: 3000 }
      );

      this.post("/skills", (schema, request) => {
        const { name, range } = JSON.parse(request.requestBody);
        const skill = schema.skills.create({ name, range });
        return skill;
      });
    },
  });
}
