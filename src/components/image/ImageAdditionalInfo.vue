<template>
  <v-list>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>ID</v-list-tile-title>
        <v-list-tile-sub-title>{{ this.image.Id }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Created</v-list-tile-title>
        <v-list-tile-sub-title>{{
          formatDate(this.image.Created)
        }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Labels</v-list-tile-title>
        <v-list-tile-sub-title>{{ this.image.Label }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>RepoTags</v-list-tile-title>
        <v-list-tile-sub-title>{{ this.image.RepoTags }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>ParentId</v-list-tile-title>
        <v-list-tile-sub-title>{{ this.image.ParentId }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>RepoDigests</v-list-tile-title>
        <v-list-tile-sub-title>
          {{ this.image.RepoDigests }}
        </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>SharedSize</v-list-tile-title>
        <v-list-tile-sub-title>
          {{ this.image.SharedSize }}
        </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Size</v-list-tile-title>
        <v-list-tile-sub-title>
          {{ this.bytesToSize(this.image.Size) }}
        </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>VirtualSize</v-list-tile-title>
        <v-list-tile-sub-title>
          {{ this.bytesToSize(this.image.VirtualSize) }}
        </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
import moment from "moment";

export default {
  // props: ["image"],
  data: () => ({
    created: "",
    image: { Created: 0, Size: 0, VirtualSize: 0 }
  }),
  methods: {
    bytesToSize: function(bytes) {
      const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      if (bytes === 0) return "n/a";
      const i = parseInt(
        Math.floor(Math.log(Math.abs(bytes)) / Math.log(1024)),
        10
      );
      if (i === 0) return `${bytes} ${sizes[i]})`;
      return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
    },
    formatDate(date) {
      if (date === 0) {
        return "";
      }

      const millis = Number(date) * 1000;
      return moment(millis).fromNow();
    },
    onSelectedImage(image = { Created: 0, Size: 0, VirtualSize: 0 }) {
      this.image = image;
    }
  }
};
</script>

<style></style>
