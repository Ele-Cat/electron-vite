import { useSystemStore } from "./modules/system";

const useStore = () => ({
  useSystemStore: useSystemStore(),
});

export default useStore;