

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuLocateOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M12 19v3" />
          <Path  d="M12 2v3" />
          <Path  d="M18.89 13.24a7 7 0 0 0-8.13-8.13" />
          <Path  d="M19 12h3" />
          <Path  d="M2 12h3" />
          <Path  d="m2 2 20 20" />
          <Path  d="M7.05 7.05a7 7 0 0 0 9.9 9.9" />
        </G>
      </Svg>
    );
  }

