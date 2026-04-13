import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2022',
    title: 'PCCOE, Pune',
    subtitle: 'B.Tech, Electronics & Telecom',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2023',
    title: 'Electronics and Telecommunication Student Chapter',
    subtitle: 'Public Relation Officer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'Electronics and Telecommunication Student Chapter',
    subtitle: 'Secretary',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2025',
    title: 'Electronics and Telecommunication Student Chapter',
    subtitle: 'Overall Advisor',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2025',
    title: 'Asymmetrical.AI',
    subtitle: 'AI Intern',
    position: 'right',
  }
]