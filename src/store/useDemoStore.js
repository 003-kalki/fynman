import { create } from 'zustand'

export const useDemoStore = create((set) => ({
  profile: {
    motivation: null,
    grade: null,
    subject: null,
    level: null,
    teaserSolved: false,
    teaserSkipped: false,
  },
  updateProfile: (patch) => set((state) => ({ profile: { ...state.profile, ...patch } })),

  assessmentAnswers: {},
  updateAssessmentAnswer: (domainId, answer) =>
    set((state) => ({ assessmentAnswers: { ...state.assessmentAnswers, [domainId]: answer } })),
}))
