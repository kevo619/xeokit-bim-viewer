const template = `<div class="wrapper">

    <!-- Explorer trees -->

    <nav id="sidebar">
        <div class="sidebar-header">
            <ul class="nav nav-tabs" id="treeTabs" role="tablist">

                <!-- Models tab -->

                <li class="nav-item">
                    <a class="nav-link active" id="models-tab" data-toggle="tab" href="#models" role="tab"
                       aria-controls="models" aria-selected="true">Models</a>
                </li>

                <!-- Objects tab -->

                <li class="nav-item">
                    <a class="nav-link  " id="objects-tab" data-toggle="tab" href="#objects" role="tab"
                       aria-controls="objects" aria-selected="false">Objects</a>
                </li>

                <!-- Classes tab -->

                <li class="nav-item">
                    <a class="nav-link" id="classes-tab" data-toggle="tab" href="#classes" role="tab"
                       aria-controls="classes" aria-selected="false">Types</a>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">

                <!-- Models tree -->

                <div class="tab-pane fade show active" id="models" role="tabpanel" aria-labelledby="models-tab">
                    <div id="models-tree" class="tree-panel"></div>
                </div>

                <!-- Objects tree -->

                <div class="tab-pane fade" id="objects" role="tabpanel" aria-labelledby="objects-tab">

                    <!-- Show All and Hide All buttons -->

                    <div id="structure-toolbar" class="btn-toolbar" role="toolbar"
                         aria-label="Toolbar with button groups">
                        <button id="showAllObjects" type="button" class="btn btn-outline-primary">
                            Show all
                        </button>
                        <button id="hideAllObjects" type="button" class="btn btn-outline-primary">
                            Hide all
                        </button>
                    </div>

                    <div id="objects-tree" class="tree-panel"></div>
                </div>

                <!-- Classes tree -->

                <div class="tab-pane fade" id="classes" role="tabpanel" aria-labelledby="classes-tab">

                    <!-- Show All and Hide All buttons -->

                    <div id="classes-toolbar" class="btn-toolbar" role="toolbar"
                         aria-label="Toolbar with button groups">
                        <button id="showAllClasses" type="button" class="btn btn-outline-primary">
                            Show all
                        </button>
                        <button id="hideAllClasses" type="button" class="btn btn-outline-primary">
                            Hide all
                        </button>
                    </div>

                    <div id="classes-tree" class="tree-panel"></div>
                </div>
            </div>
        </div>
    </nav>


    <div id="content">

        <!-- Toolbar -->

        <div id="toolbar" class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

            <!-- Explorer open/close button -->

            <div class="btn-group mr-2" role="group" aria-label="First group">
                <button id="tree" type="button" class="btn btn-outline-primary fa fa-sitemap  fa-2x"
                        data-toggle="tooltip" data-placement="top" title="Object explorer"></button>
            </div>

            <!-- Reset button -->

            <div class="btn-group mr-2" role="group" aria-label="First group">
                <button id="reset" type="button" class="btn btn-outline-primary fa fa-undo fa-2x"
                        data-toggle="tooltip" data-placement="top" title="Reset view"></button>
            </div>

            <!-- First Person mode button -->

            <div class="btn-group mr-2" role="group" aria-label="Second group">

                <button id="firstPerson" type="button" class="btn btn-outline-primary fa fa-male  fa-2x"
                        data-toggle="tooltip" data-placement="top" title="First person mode"></button>
            </div>

            <!-- Ortho mode button -->

            <div class="btn-group mr-2" role="group" aria-label="Second group">
                <button id="ortho" type="button" class="btn btn-outline-primary fa fa-cube  fa-2x"
                        data-toggle="tooltip" data-placement="top" title="Orthographic mode"></button>
            </div>

            <!-- Tools button group -->

            <div class="btn-group mr-2" role="group" aria-label="Third group">

                <!-- Query tool button -->

                <button id="query" type="button" class="btn btn-outline-primary fa fa-info-circle fa-2x"
                        data-toggle="tooltip" data-placement="top" title="Query"></button>

                <!-- X-Ray tool button -->

                <button id="xray" type="button" class="btn btn-outline-primary fa fa-eye-slash fa-2x"
                        data-toggle="tooltip" data-placement="top" title="X-Ray"></button>

                <!-- Hide tool button -->

                <button id="hide" type="button" class="btn btn-outline-primary fa fa-eraser fa-2x"
                        data-toggle="tooltip" data-placement="top" title="Hide"></button>

                <!-- Select tool button -->

                <button id="select" type="button" class="btn btn-outline-primary fa fa-mouse-pointer fa-2x"
                        data-toggle="tooltip" data-placement="top" title="Select"></button>

                <!-- Measure distance tool button -->

                <button id="distance" type="button" class="btn btn-outline-primary fa fa-crosshairs fa-2x"
                        data-toggle="tooltip" data-placement="top" title="Measure distance"></button>

                <!-- Measure angle tool button -->

                <button id="angle" type="button" class="btn btn-outline-primary fa fa-crosshairs fa-2x"
                        data-toggle="tooltip" data-placement="top" title="Measure angle"></button>

                <!-- Sectioning tool button -->

                <button id="section" type="button" class="btn btn-outline-primary fa fa-crosshairs fa-2x"
                        data-toggle="tooltip" data-placement="top" title="Slice"></button>

                <!-- Annotation tool button -->

                <button id="annotate" type="button" class="btn btn-outline-primary fa fa-map-marker fa-2x"
                        data-toggle="tooltip" data-placement="top" title="Annotate"></button>

                <!-- BCF tool button -->

                <button id="bcf" type="button" class="btn btn-outline-primary fa fa-bookmark-o fa-2x"
                        data-toggle="tooltip" data-placement="top" title="BCF"></button>
            </div>

        </div>

        <!--        <div id="canvasContainer" style="overflow-y:hidden; height:100%">-->
            <canvas id="myCanvas"></canvas>
        <!--        </div>-->


    </div>

    <!-- Info panel -->

    <nav id="sidebar2">
        <div class="sidebar-header">
            <div id="annotations-index-panel"></div>
            <div id="bcf-index-panel"></div>
        </div>
    </nav>
</div>`;

export {template};
