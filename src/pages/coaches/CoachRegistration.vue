<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <CoachesForm @save-data="saveData"></CoachesForm>
    </base-card>
  </section>
</template>

<script>
import CoachesForm from '../../components/layout/coaches/CoachesForm.vue';
export default {
  components: {
    CoachesForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data)
      this.$router.replace('/coaches')
    }
  },
}
</script>