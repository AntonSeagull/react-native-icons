

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbScanPosition = (props: IconProps) => {

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
          <Path  d="M4 7v-1a2 2 0 0 1 2 -2h2" />
          <Path  d="M4 17v1a2 2 0 0 0 2 2h2" />
          <Path  d="M16 4h2a2 2 0 0 1 2 2v1" />
          <Path  d="M16 20h2a2 2 0 0 0 2 -2v-1" />
          <Path  d="M12 17l3 -8l-8 3l3.5 1.5z" />
        </G>
      </Svg>
    );
  }

