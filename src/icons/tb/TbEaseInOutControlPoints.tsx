

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEaseInOutControlPoints = (props: IconProps) => {

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
          <Path d="M17 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z" />
          <Path d="M17 20h-2" />
          <Path d="M7 4a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
          <Path d="M7 4h2" />
          <Path d="M14 4h-2" />
          <Path d="M12 20h-2" />
          <Path d="M3 20c8 0 10 -16 18 -16" />
        </G>
      </Svg>
    );
  }

