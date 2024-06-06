<template>
  <div>
    <div class="row q-col-gutter-lg">
      <div class="col-6">
        <q-img
          class="layer_info_card_image"
          src="https://tiles-cdn.koordinates.com/services/tiles/v4/thumbnail/layer=50804.399484,style=auto/1200x630.png"
        ></q-img>
      </div>
      <div class="col-6">
        <div class="q-pa-sm flex items-center">
          <div>
            <svg-raster height="80px" width="80px"></svg-raster>
          </div>

          <div class="q-ml-sm">
            <div class="text-capitalize text-weight-bold text-body1">
              Data Type
            </div>
            <div class="q-mt-xs text-capitalize text-body1">
              Polygon Layer, 2.3M Polygons
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-separator class="q-my-lg"></q-separator>
    <div class="flex q-gutter-xl">
      <div>
        <div class="text-weight-bold">Provider</div>
        <div class="q-mt-xs">Np</div>
      </div>
      <div>
        <div class="text-weight-bold">Data Added</div>
        <div class="q-mt-xs">31 May 2011</div>
      </div>
      <div>
        <div class="text-weight-bold">Last Updated</div>
        <div class="q-mt-xs">17 Mar 2024</div>
      </div>
      <div>
        <div class="text-weight-bold">Layer ID</div>
        <div class="q-mt-xs t">50804</div>
      </div>
    </div>
    <q-separator class="q-my-lg"></q-separator>
    <div class="row">
      <div class="col-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
          tortor vel sapien dignissim pellentesque. Mauris pulvinar nisl a enim
          vulputate tempor. Phasellus imperdiet, diam sit amet lacinia
          ultricies, lacus sapien sollicitudin libero, nec sodales tellus justo
          eget massa. Mauris placerat ipsum nec augue iaculis euismod. Etiam
          fringilla nulla vel mi bibendum elementum. Maecenas vitae nisl ac
          augue pharetra condimentum. Donec ac eros vestibulum, mattis nulla
          quis, imperdiet massa. Sed est mi, tristique at gravida malesuada,
          imperdiet eget risus.
        </p>
      </div>
      <div class="col-12">
        <q-list padding dense separator>
          <q-item-label header class="text-weight-bold text-black"
            >Details</q-item-label
          >
          <q-separator></q-separator>
          <q-item>
            <q-item-section>
              <q-item-label>Layer ID</q-item-label>
            </q-item-section>
            <q-item-section side>
              <span class="text-black">50804</span>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Data type </q-item-label>
            </q-item-section>
            <q-item-section side>
              <span class="text-black"
                >Vector polygon layer - Multipolygon</span
              >
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>CRS as stored </q-item-label>
            </q-item-section>
            <q-item-section side>
              <span class="text-black">NZGD2000 - EPSG:4167</span>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Feature count</q-item-label>
            </q-item-section>
            <q-item-section side>
              <span class="text-black"
                >2,379,701 - 428 with null or empty geometries</span
              >
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Attributes</q-item-label>
            </q-item-section>
            <q-item-section side>
              <p class="text-black">id, title_no, status ...</p>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>
