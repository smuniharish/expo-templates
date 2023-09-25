import { infoLog } from '@/config/logsConfig';
import { useEffect } from '@/imports';

const useLogSN = (name: string) => {
  useEffect(() => {
    infoLog(`SCREEN -> ${name}`);
  }, [name]);
};

export default useLogSN;
