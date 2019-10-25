import {Viewer} from "./lib/xeokit/viewer/Viewer.js";
import {ViewerUI} from "./src/ViewerUI.js";
import {DirLight} from "./lib/xeokit/viewer/scene/lights/DirLight.js";
import {AmbientLight} from "./lib/xeokit/viewer/scene/lights/AmbientLight.js";
import {Server} from "./src/server/Server.js";

// Create and configure a xeokit Viewer

const viewer = new Viewer({
    canvasId: "myCanvas",
    transparent: true
});

const scene = viewer.scene;
const camera = scene.camera;

camera.eye = [10.45, 17.38, -98.31];
camera.look = [43.09, 0.5, -26.76];
camera.up = [0.06, 0.96, 0.16];

scene.xrayMaterial.fill = true;
scene.xrayMaterial.fillColor = [0, 0, 0];
scene.xrayMaterial.fillAlpha = 0.4;
scene.xrayMaterial.edges = true;
scene.xrayMaterial.edgeColor = [0, 0, 0];
scene.xrayMaterial.edgeAlpha = 0.4;

scene.highlightMaterial.edges = true;
scene.highlightMaterial.edgeColor = [1, 1, 0];
scene.highlightMaterial.edgeAlpha = 1.0;
scene.highlightMaterial.fill = true;
scene.highlightMaterial.fillAlpha = 0.1;
scene.highlightMaterial.fillColor = [1, 1, 0];

// Custom lights

scene.clearLights();

new AmbientLight(scene, {
    color: [0.3, 0.3, 0.3],
    intensity: 1.0
});

new DirLight(scene, {
    dir: [0.8, -0.6, -0.8],
    color: [1.0, 1.0, 1.0],
    intensity: 1.0,
    space: "world"
});

new DirLight(scene, {
    dir: [-0.8, -0.4, 0.4],
    color: [1.0, 1.0, 1.0],
    intensity: 1.0,
    space: "world"
});

new DirLight(scene, {
    dir: [0.2, -0.8, 0.8],
    color: [0.6, 0.6, 0.6],
    intensity: 1.0,
    space: "world"
});

const server = new Server({

});

// Create UI

const viewerUI = new ViewerUI(server, viewer, {
    modelsPanelId: "models-list",
    objectsTreePanelId: "objects-tree",
    classesTreePanelId: "classes-tree",
    sectionPlanesOverviewCanvasId: "mySectionPlanesOverviewCanvas",
    navCubeCanvasId: "myNavCubeCanvas",
    containerId: "canvasContainer",
    bcfPanelId: "bcf-index-panel",
    annotationsPanelId: "annotations-index-panel"
});

bindButton("#reset", viewerUI.toolbar.reset, "reset");
bindButton("#fit", viewerUI.toolbar.fit, "fit");

bindCheckButton("#firstPerson", viewerUI.toolbar.firstPerson);

bindCheckButton("#ortho", viewerUI.toolbar.ortho);

bindCheckButton("#query", viewerUI.toolbar.query);
bindCheckButton("#xray", viewerUI.toolbar.xray);
bindCheckButton("#hide", viewerUI.toolbar.hide);
bindCheckButton("#select", viewerUI.toolbar.select);
bindCheckButton("#distance", viewerUI.toolbar.distance);
bindCheckButton("#angle", viewerUI.toolbar.angle);
bindCheckButton("#section", viewerUI.toolbar.section);
bindCheckButton("#annotate", viewerUI.toolbar.annotate);

bindButton("#createBCF", viewerUI.toolbar.bcf, "createViewpoint");
bindButton("#clearBCF", viewerUI.toolbar.bcf, "clearViewpoints");
bindButton("#clearAnnotations", viewerUI.toolbar.annotate, "clearAnnotations");
bindButton("#clearSections", viewerUI.toolbar.section, "clearSections");

function bindButton(selector, component, action) {
    $(selector).on('click', function (event) {
        component[action]();
        event.preventDefault();
    });
}

function bindCheckButton(selector, component) {
    $(selector).on('click', function (event) {
        component.setActive(!component.getActive());
        event.preventDefault();
    });
    component.on("active", (active) => {
        if (active) {
            $(selector).addClass("active");
        } else {
            $(selector).removeClass("active");
        }
    });
    if (component.getActive()) {
        $(selector).addClass("active");
    } else {
        $(selector).removeClass("active");
    }
}