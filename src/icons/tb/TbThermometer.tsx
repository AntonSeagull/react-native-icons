

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbThermometer = (props: IconProps) => {

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
          <Path d="M19 5a2.828 2.828 0 0 1 0 4l-8 8h-4v-4l8 -8a2.828 2.828 0 0 1 4 0z" />
          <Path d="M16 7l-1.5 -1.5" />
          <Path d="M13 10l-1.5 -1.5" />
          <Path d="M10 13l-1.5 -1.5" />
          <Path d="M7 17l-3 3" />
        </G>
      </Svg>
    );
  }

