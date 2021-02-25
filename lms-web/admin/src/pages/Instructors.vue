<template>
  <div id="userPage">
    <!-- Snackbar -->
    <v-snackbar
      v-model="snackbarShow"
      :color="snackbarColor"
      :timeout="snackbarTimeout"
      top
      >{{ snackbarText }}</v-snackbar
    >
    <!-- Top row -->
    <v-flex row xs12 class="tagRow">
      <h1 class="header">Instructors</h1>
    </v-flex>

    <v-flex row xs12 class="tagRow">
      <v-data-table
        :headers="headers"
        :items="users"
        :options.sync="options"
        :server-items-length="total"
        :loading="loading"
        class="table"
      >
        <template v-slot:top>
          <v-row class="searchRow">
            <h2>Search:</h2>
            <v-text-field
              v-model="search"
              label="Search By Email"
              class="mx-4"
              outlined
              dense
              single-line
              hide-details
            ></v-text-field>
          </v-row>
        </template>
        <template v-slot:item="row">
          <tr class="tableRow">
            <td>{{ row.item.email }}</td>
            <td>{{ row.item.name }}</td>
            <td>{{ row.item.contactNumber }}</td>
            <td>{{ available(row.item.active) }}</td>
            <td>
              <v-btn class="mx-2 btn" text outlined color="blue" @click="editUser(row.item)"> Edit </v-btn>
              <v-btn class="mx-2 btn" text outlined color="blue" @click="deleteUser(row.item)">
                Delete
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-flex>

    <!-- Dialog -->
     <v-dialog v-model="editDialog" scrollable width="70%">
      <v-card tile height="100%" class="reviewCard">
        <v-toolbar fixed dark color="primary">
          <!--  <v-btn icon dark @click="reportDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn> -->
          <v-toolbar-title>Review Report.</v-toolbar-title>
        </v-toolbar>
        <div id="dialogContent">

          <v-row justify="end">
            <v-btn class="btn" text outlined color="blue"
              >Approve</v-btn
            >
            <v-btn text outlined color="blue"
              >Ignore</v-btn
            >
          </v-row>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { http } from "@/axios"
import { mapState } from "vuex"

export default {
  data() {
    return {
      snackbarColor: "success",
      snackbarShow: false,
      snackbarText: "",
      snackbarTimeout: 5000,
      users: [],
      total: 0,
      search: "",
      loading: false,
      editDialog: false,
      options: {},
      headers: [
        {
          text: "Email",
          align: "start",
          sortable: false,
          value: "email",
          class: "header",
        },
        {
          text: "Name",
          sortable: false,
          class: "header",
        },
        {
          text: "Contact Number",
          sortable: false,
          class: "header",
        },
        {
          text: "Account status",
          sortable: false,
          class: "header",
        },
        {
          text: "Manage",
          sortable: false,
          class: "header",
        },
      ],
    }
  },
  async mounted() {
    this.getUser()
  },
  computed: {},
  watch: {
    options: {
      handler() {
        console.log("HERE")
        this.updatePage()
      },
      deep: true,
    },
    search() {
      this.updatePage()
    },
  },
  methods: {
    available(data) {
      if (data) {
        return "Active"
      } else {
        return "Inactive"
      }
    },
    updatePage() {
      this.getUser()
    },
    async getUser() {
      this.loading = true
      let rv = await http.get("/api/admin/user", {
        params: {
          role: "instructor",
          options: this.options,
          search: this.search,
        },
      })

      this.users = rv.data.results
      this.total = rv.data.total
      this.loading = false
    },
    async deleteUser(data) {
      try {
        let rv = await http.post("/api/admin/user/delete", {
          data: data,
        })

        if (rv) {
          this.snackbarText = rv.data.msg
          this.snackbarShow = true
          setTimeout(() => {
            this.$router.go()
          }, 500)
        }
      } catch (e) {}
    },
    editUser(data) {
    this.editDialog = true
    },
  },
}
</script>


<style scoped>
#userPage {
  width: 80%;
  margin: auto;
  margin-top: 5%;
}

.header {
  font-size: 58px;
  color: #005072;
}

.table {
  background-color: transparent;
  padding: 1%;
  width: 80%;
}

.table >>> .header {
  font-family: "DarkerGrotesque-Bold";
  font-size: calc(
    22px + (30 - 22) * ((100vw - 300px) / (1800 - 300))
  ) !important;
  color: #0d47a1 !important;
}

.table >>> td {
  font-family: "DarkerGrotesque-Medium";
  font-size: calc(
    16px + (22 - 16) * ((100vw - 300px) / (1800 - 300))
  ) !important;
  border-right: 1px solid lightgrey;
}

.table >>> td:last-child {
  border-right: 0;
}

.table >>> .tableRow:hover {
  background-color: none !important;
}

.table >>> .v-data-footer__pagination,
.table >>> .v-data-footer__select {
  font-size: calc(
    14px + (18 - 14) * ((100vw - 300px) / (1800 - 300))
  ) !important;
}

.searchRow {
  margin-top: 1%;
  margin-bottom: 3%;
}
</style>