

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRadar = (props: IconProps) => {

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
          <Path  d="M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9" />
          <Path  d="M16 9a5 5 0 1 0 -7 7" />
          <Path  d="M20.486 9a9 9 0 1 0 -11.482 11.495" />
        </G>
      </Svg>
    );
  }

