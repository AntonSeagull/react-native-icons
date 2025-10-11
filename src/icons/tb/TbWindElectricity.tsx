

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWindElectricity = (props: IconProps) => {

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
          <Path d="M20 7l-3 5h4l-3 5" />
          <Path d="M3 16h4a2 2 0 1 1 0 4" />
          <Path d="M3 12h8a2 2 0 1 0 0 -4" />
          <Path d="M3 8h3a2 2 0 1 0 0 -4" />
        </G>
      </Svg>
    );
  }

