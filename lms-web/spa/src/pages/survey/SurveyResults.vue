<template>
  <div v-if="auth" id="main">
    <div id="body">
      <h1>Survey Results</h1>
      <div v-if="data.length > 0">
        <survey-analysis
          v-for="item in data"
          :key="item.id"
          :item="item"
        ></survey-analysis>
      </div>
      <div v-else>
        <p>There is no result to display.</p>
      </div>
    </div>
  </div>

  <div v-else class="main">
    <h3>You are not authorized to access this page.</h3>
  </div>
</template>

<script>
import { http } from "@/axios"
import { mapState } from "vuex"
import SurveyAnalysis from "../../components/SurveyAnalysis.vue"

export default {
  components: { SurveyAnalysis },
  data() {
    return {
      results: null,
      reference: "",
      userDetails: null,
      auth: false,
      data: [],
    }
  },
  computed: {
    ...mapState(["error", "loading"]),
  },
  async mounted() {
    try {
      let user = await http.get("/api/me")
      this.userDetails = user.data
      if (this.userDetails.role == "instructor") {
        this.auth = true
      }

      this.reference = this.$route.query.reference
      let rv = await http.get(`/api/me/survey/results/${this.reference}`)
      this.data = rv.data
    } catch (e) {}
  },
}
</script>

<style scoped>
#main {
  width: 80%;
  margin: auto;
}

#body h1 {
  font-family: "DarkerGrotesque-Medium";
  font-size: 48px;
  color: #0d47a1;
  margin-bottom: 1%;
}

#body {
  margin-top: 2%;
}
</style>