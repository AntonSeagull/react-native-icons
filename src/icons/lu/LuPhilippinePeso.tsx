

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPhilippinePeso = (props: IconProps) => {

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
          <Path  d="M20 11H4" />
          <Path  d="M20 7H4" />
          <Path  d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" />
        </G>
      </Svg>
    );
  }

