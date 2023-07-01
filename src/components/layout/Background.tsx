import { Global } from '@mantine/core';
import { useConfigContext } from '../../config/provider';

export function Background() {
  const { config } = useConfigContext();
  var background;
  if (typeof config?.settings.customization.backgroundImageUrl == "undefined") 
  {
    background = "none"
  } else {
    background = config?.settings.customization.backgroundImageUrl;
  }
  return (
    <Global
      styles={{
        body: {
          minHeight: '100vh',
          backgroundImage: `url('${background}')` || '',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        },
      }}
    />
  );
}
