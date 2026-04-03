import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2021',
    title: 'PCCOE, Pune',
    subtitle: 'B.Tech, Electronics & Telecom',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2024',
    title: 'Asymmetrical.AI',
    subtitle: 'AI Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'Edge AI Workshop',
    subtitle: 'Participant / Learner',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2025',
    title: 'IEEE PuneCon',
    subtitle: 'Research Publication',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2025',
    title: 'Next Step',
    subtitle: 'MS in AI/ML (Target)',
    position: 'right',
  }
]