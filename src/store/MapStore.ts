import {create} from 'zustand';

interface MapState {
  fromLat: string | null,
  fromLng: string | null,
  isFromMyLocation: boolean,
  fromLevel: number | null,
  exhibitId: number | null,


  setFromLat: (lat: string) => void,
  setIsFromMyLocation: (isFromMyLocation: boolean) => void,
  setFromLng: (lng: string) => void,
  setFromLevel: (level: number) => void,
  setExhibitId: (id: number) => void,
  resetMapStore: () => void
}

export const useMapStore = create<MapState>((set) => ({
  fromLat: null,
  isFromMyLocation: false,
  fromLng: null,
  fromLevel: null,
  exhibitId: null,


  setExhibitId: (id: number) => set({ exhibitId: id }),
  setIsFromMyLocation: (boolean: boolean) => set({isFromMyLocation: boolean}),
  resetMapStore: () => set({ fromLat: null, fromLng: null, fromLevel: null, exhibitId: null }),
  setFromLat: (lat: string) => set({ fromLat: lat }),
  setFromLng: (lng: string) => set({ fromLng: lng }),
  setFromLevel: (level: number) => set({ fromLevel: level }),
}));