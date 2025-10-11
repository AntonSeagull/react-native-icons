

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuLanguages = (props: IconProps) => {

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
          <Path  d="m5 8 6 6" />
          <Path  d="m4 14 6-6 2-3" />
          <Path  d="M2 5h12" />
          <Path  d="M7 2h1" />
          <Path  d="m22 22-5-10-5 10" />
          <Path  d="M14 18h6" />
        </G>
      </Svg>
    );
  }

