

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuHospital = (props: IconProps) => {

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
          <Path d="M12 7v4" />
          <Path d="M14 21v-3a2 2 0 0 0-4 0v3" />
          <Path d="M14 9h-4" />
          <Path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
          <Path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
        </G>
      </Svg>
    );
  }

