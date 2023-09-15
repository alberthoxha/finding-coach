export default {
  contactCoach(context, payload) {
    const newRequests = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      messasge: payload.message,
    };
    context.commit('addRequest', newRequests);
  },
};
