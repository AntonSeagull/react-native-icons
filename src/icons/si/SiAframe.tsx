

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiAframe = (props: IconProps) => {

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
          <Path  d="M17.37 17.07H6.57L4.24 24H3.01l8.23-24h1.52l8.23 24h-1.3zm-.39-1.13l-5-14.96-5.03 14.98h10.03Z" />
        </G>
      </Svg>
    );
  }

