const { docker } = require("../config");

const allImages = () => {
  console.log("Querying all images...");
  return docker.listImages({ all: false }).then(images => {
    return images;
  });
};

const allContainers = () => {
  console.log("Querying all containers...");
  return docker.listContainers({ all: true }).then(containers => {
    return containers;
  });
};

const stopContainer = id => {
  console.log(`Stopping container with id: ${id}...`);
  const container = docker.getContainer(id);
  return container
    .stop()
    .then(() => {
      return "Container Stop process initiated";
    })
    .catch(error => {
      console.log("Error=>", error);
      return `Error: ${error.reason}`;
    });
};

const createContainer = container => {
  console.log(`Creating container`);
  let containerId = "";
  return docker
    .createContainer(container)
    .then(container => {
      console.log("container created with id: ", container.id);
      containerId = container.id;
      return container.start();
    })
    .then(process => {
      return `Container created with id: ${process.id}`;
    })
    .catch(error => {
      console.log("===>Container id", containerId);
      console.error("Error:", error.json.message);
      return `Container created with id: ${containerId}
             
          Error: ${error.json.message}`;
    });
};

module.exports = { allImages, allContainers, stopContainer, createContainer };
