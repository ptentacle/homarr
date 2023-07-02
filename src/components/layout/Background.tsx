import { Global } from '@mantine/core';
import { useConfigContext } from '../../config/provider';

export function Background() {
  const { config } = useConfigContext();

  return (
    <Global
      styles={{
        body: {
          minHeight: '100vh',
          backgroundImage: typeof config?.settings.customization.backgroundImageUrl === 'undefined' ? 'none' : `url('${config?.settings.customization.backgroundImageUrl}')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        },
      }}
    />
  );
}
