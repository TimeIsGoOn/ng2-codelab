import {MilestoneConfig} from "./milestone-config";
export interface AppConfig {
  name: string,
  page: string,
  user: string,
  auth: string,
  feedbackEnabled: boolean,
  preserveState: boolean,
  debug: boolean
}

export interface CodelabConfig {
  debugTrackTime?: number;
  runId: number;
  app: AppConfig,
  name: string,
  page: 'milestone'|'feedback',
  selectedMilestoneIndex: number,
  autorun:boolean,
  milestones: Array<MilestoneConfig>,
  user: string,
  auth: {}
}
