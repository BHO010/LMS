<template>
  <div id="main">
    <div id="body">
      <h1>Browse Available Courses</h1>
      <v-row id="selectorRow">
        <v-col class="d-flex" cols="12" sm="6">
          <v-label>Categories:</v-label>
          <v-select
            v-model="category"
            :items="tags"
            @input="updateSearch"
            dense
            outlined
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-label>Date:</v-label><br />
          <v-select
            v-model="date"
            :items="time"
            @input="updateSearch"
            dense
            outlined
          ></v-select>
        </v-col>
      </v-row>

      <div id="content">
        <div class="flex-row wrap center">
          <course-card
            v-for="course in courses"
            :key="course._id"
            :course="course"
          >
          </course-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { http } from "@/axios"

export default {
  data() {
    return {
      category: "Any",
      date: "Latest",
      courses: [],
      tags: [
        "Any",
        "Business",
        "Leadership and Management",
        "Marketing",
        "Accounting",
        "Business Strategy",
        "Arts",
        "Shopping",
        "Art",
        "Finance",
        "Information Technology",
        "Economics",
        "Mechanical Engineering",
        "Chemistry",
        "Physics",
        "Electrical Engineering",
        "Biology",
        "Programming",
        "Computer Science",
        "Math",
      ],
      time: ["Oldest", "Latest"],
    }
  },
  computed: {
    ...mapState(["error", "loading"]),
  },
  async mounted() {
    this.$store.commit("setLoading", true)
    let rv = await http.get("/api/me/browse", {
      params: {
        category: this.category,
        date: this.date,
      },
    })
    this.courses = rv.data.courses
    this.$store.commit("setLoading", false)
  },
  methods: {
    async updateSearch() {
      let rv = await http.get("/api/me/browse", {
        params: {
          category: this.category,
          date: this.date,
        },
      })
      this.courses = rv.data.courses
      console.log(this.courses)
    },
  },
}
</script>

<style scoped>
#main {
  width: 80%;
  margin: auto;
}

#body {
  margin-top: 2%;
}

#body h1 {
  font-family: "DarkerGrotesque-Medium";
  font-size: calc(32px + (42 - 32) * ((100vw - 300px) / (1920 - 300)));
  color: #0d47a1;
}

#body .flex-row {
  display: flex;
}

#body .wrap {
  flex-wrap: wrap;
}

.v-label {
  font-family: "DarkerGrotesque-Medium";
  font-size: calc(24px + (32 - 24) * ((100vw - 300px) / (1920 - 300)));
  font-weight: bold;
  color: black;
  margin-right: 1%;
}

#content {
    width: 90%;
    margin: auto;
}

.center {
    margin: auto;
}

.v-sheet.v-card {
  margin-right: 4% !important;
  margin-bottom: 4% !important;
}

@media screen and (max-width: 1400px) {
  #main {
    margin-top: 10%;
  }
}


@media screen and (max-width: 600px) {
  #main {
    margin-top: 14%;
  }
}
</style>