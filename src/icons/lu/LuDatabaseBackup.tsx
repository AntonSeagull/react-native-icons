

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuDatabaseBackup = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M3 12a9 3 0 0 0 5 2.69" />
          <Path d="M21 9.3V5" />
          <Path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
          <Path d="M12 12v4h4" />
          <Path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
        </G>
      </Svg>
    );
  }

