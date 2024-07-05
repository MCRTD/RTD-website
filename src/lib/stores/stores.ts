import { writable } from 'svelte/store';
import type CameraControls from 'camera-controls'
import type { Mesh } from 'three';

export const cameraControls = writable<CameraControls | undefined>(undefined);
export const mesh = writable<Mesh | undefined>(undefined);